import classes from "./cart.module.css";
import { shoppingCartItems } from "../Shop/Cards/Cards";
import { useEffect, useState } from "react";
import CartItems from "./CartItems/CartItems";

import CheckOut from "./CartItems/Checkout";
const apiKey = import.meta.env.VITE_POKEMON_TCG_API_KEY;

function CartBody() {
  const [cards, setCards] = useState([]);
  const [totalCards, setTotalCards] = useState(0);
  const url = `https://api.pokemontcg.io/v2/cards/`;

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const fetchedCards = await Promise.all(
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
            return json.data;
          })
        );

        setCards(fetchedCards);
        setTotalCards(shoppingCartItems.length);
        console.log(cards);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchCards();
  }, [shoppingCartItems]);
  return (
    <div className={classes.box}>
      <div className={classes.cardBox}>
        {cards.length >= 0 ? (
          <div>
            {cards.map((card) => (
              <CartItems
                key={card.id}
                img={card.images.small}
                name={card.name}
                price={card.cardmarket.prices.averageSellPrice}
                artist={card.artist}
              />
            ))}
          </div>
        ) : (
          <p>THERE'S NOTHING CURRENTLY ON YOUR CART</p>
        )}{" "}
      </div>
      <CheckOut cartItems={shoppingCartItems.length}/>
    </div>
  );
}

export default CartBody;
