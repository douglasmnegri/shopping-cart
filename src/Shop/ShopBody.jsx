import { useEffect, useState } from "react";
import Cards from "./Cards/Cards";

function ShopBody() {
  const [cards, setCards] = useState(null);
  const url = "https://api.pokemontcg.io/v2/cards/xy1-1";

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(url);
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
          price={cards.data.tcgplayer.prices.holofoil.mid}
          artist={cards.data.artist}
        />
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default ShopBody;
