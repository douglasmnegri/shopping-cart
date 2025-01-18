import { useEffect, useState } from "react";
import Cards from "./Cards/Cards";

const apiKey = import.meta.env.VITE_POKEMON_TCG_API_KEY;

function ShopBody() {
  const [cards, setCards] = useState([]);
  const url = `https://api.pokemontcg.io/v2/cards/`;
  useEffect(() => {
    const id = ["xy0-1", "xy2-1", "xy4-1"];
    const fetchCards = async () => {
      try {
        const fetchedCards = await Promise.all(
          id.map(async (cardId) => {
            const response = await fetch(url + cardId, {
              headers: {
                "X-Api-Key": apiKey,
              },
            });
            if (!response.ok) {
              throw new Error(`Failed to fetch card with ID: ${cardId}`);
            }
            const json = await response.json();
            console.log(json);
            
            return json.data;
          })
        );
        setCards(fetchedCards);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCards();
  }, []);

  return (
    <div>
      <h1>Test Card</h1>
      {cards.length > 0 ? (
        <div>
          {cards.map((card) => (
            <Cards
              key={card.id}
              img={card.images.small}
              name={card.name}
              price={card.cardmarket.prices.averageSellPrice}
              artist={card.artist}
            />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ShopBody;
