import { useEffect, useState } from "react";
import Cards from "./Cards/Cards";

const apiKey = import.meta.env.VITE_POKEMON_TCG_API_KEY;

const pokeCards = { card: "bp-6", price: 20.35 };
function ShopBody() {
  const [id, setID] = useState(["bp-1", "bp-2", "bp-3"]);
  const [cards, setCards] = useState(null);
  const url = `https://api.pokemontcg.io/v2/cards/${pokeCards.card}`;

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            "X-Api-Key": apiKey,
          },
        });
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setCards(json);
        console.log(json);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchCards();
  }, []);

  return (
    <div>
      <h1>Test Card</h1>
      {cards ? (
        <Cards
          img={cards.data.images.small}
          name={cards.data.name}
          // price={pokeCards.price}
          artist={cards.data.artist}
        />
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default ShopBody;
