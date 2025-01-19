import classes from "./cart.module.css";
import { shoppingCartItems } from "../Shop/Cards/Cards";
import { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_POKEMON_TCG_API_KEY;

function CartBody() {
  const [cards, setCards] = useState([]);
  const [totalCards, setTotalCards] = useState(0);
  const url = `https://api.pokemontcg.io/v2/cards/`;

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const fetchedCards = Promise.all(
          shoppingCartItems.map(async (cardId) => {
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
        setTotalCards(shoppingCartItems.length);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchCards();
  }, [shoppingCartItems]);
  return (
    <div>
      <div className={classes.box}>
        <h3>Cart Summary</h3>
        <p>Items: {shoppingCartItems.length}</p>
        <p>Item Total: $24.83</p>
        <p>Estimated Shipping: $3.99</p>
      </div>
    </div>
  );
}

export default CartBody;
