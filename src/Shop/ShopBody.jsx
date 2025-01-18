import { useEffect, useState } from "react";

function ShopBody() {
  const [cards, setCards] = useState(null); // Start with null to represent no data
  const url = "https://api.pokemontcg.io/v2/cards/base1-4";

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setCards(json); // Update state with fetched data
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
        <img src={cards.data.images.small} alt="Pokemon Card" />
      ) : (
        <p>Loading...</p> // Show a loading state while fetching
      )}
    </div>
  );
}

export default ShopBody;