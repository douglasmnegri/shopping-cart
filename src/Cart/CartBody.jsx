import classes from "./cart.module.css";
import { shoppingCartItems } from "../Shop/Cards/Cards";
import { useEffect, useState } from "react";
import CartItems from "./CartItems/CartItems";
import CheckOut from "./CartItems/Checkout";
import load from "../Shop/loading.module.css";
import gengarFace from "../assets/gengarFace.png";
import btn from "../Button/button.module.css";
import { Link } from "react-router-dom";

const apiKey = import.meta.env.VITE_POKEMON_TCG_API_KEY;

function CartBody() {
  const [cards, setCards] = useState([]);
  const [totalCards, setTotalCards] = useState(0);
  const url = `https://api.pokemontcg.io/v2/cards/`;

  useEffect(() => {
    const ids = Object.keys(shoppingCartItems);
    const fetchCards = async () => {
      try {
        const fetchedCards = await Promise.all(
          ids.map(async (cardId) => {
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
        setTotalCards(ids.length);
        console.log(cards);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchCards();
  }, [shoppingCartItems]);
  return (
    <>
      {shoppingCartItems.length === 0 ? (
        <EmptyCard />
      ) : cards.length > 0 ? (
        <div className={classes.box}>
          <div className={classes.checkoutContainer}>
            <div className={classes.cardsContainer}>
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
            <CheckOut cartItems={shoppingCartItems.length} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

function Loading() {
  return (
    <div className={load.loadContainer}>
      <div className={load.pokemon}></div>
    </div>
  );
}

function EmptyCard() {
  return (
    <div className={classes.noItems}>
      <img src={gengarFace} alt="gengar face" className={classes.gengarFace} />
      <div className={classes.noItemsText}>
        <h1>Your Cart is Empty!</h1>
        <p>
          Looks like you have not added anything to your cart. Go ahead and
          search for your favorite cards.{" "}
        </p>
        <Link to="/shop">
          <button className={`${btn.mainBtn} ${classes.btnSize}`}>
            Shop for Cards
          </button>
        </Link>
      </div>
    </div>
  );
}
export default CartBody;
