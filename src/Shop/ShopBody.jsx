import { useEffect, useState } from "react";
import Cards from "./Cards/Cards";

function ShopBody() {
  const [cards, setCards] = useState(null);
  const url = "https://api.pokemontcg.io/v2/cards/base1-4";

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setCards(json);
        console.log(json, cards.data.name);
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
          price={cards.data.tcgplayer.prices.holofoil.mid}
        />
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default ShopBody;
