import { useEffect, useState } from "react";
import Cards from "./Cards/Cards";
import classes from "./shop.module.css";
import btn from "../Button/button.module.css";
const apiKey = import.meta.env.VITE_POKEMON_TCG_API_KEY;

function ShopBody() {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCards, setTotalCards] = useState(0);
  const cardsPerPage = 8;
  const url = `https://api.pokemontcg.io/v2/cards/`;

  const id = [
    "xyp-XY19",
    "sv6-6",
    "sv6pt5-1",
    "xy4-22",
    "xy6-1",
    "base1-4",
    "xy9-30",
    "xy9-32",
    "xy3-25",
    "xy5-147",
    "xy5-121",
    "xy8-62",
    "xy9-42",
    "xy9-47",
    "pl3-20",
    "bw11-19",
    "ex2-1",
    "ex7-24",
    "g1-24",
    "xy1-33",
    "gym2-12",
    "gym1-1",
    "xy9-56",
    "xyp-XY13",
    "xyp-XY13",
  ];

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const startIndex = (currentPage - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;
        const currentPageCards = id.slice(startIndex, endIndex);

        const fetchedCards = await Promise.all(
          currentPageCards.map(async (cardId) => {
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
        setTotalCards(id.length);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCards();
  }, [currentPage]);

  const nextPage = () => {
    if ((currentPage - 1) * cardsPerPage + cards.length < totalCards) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1>Test Card</h1>
      {cards.length > 0 ? (
        <div className={classes.shopBody}>
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

      <div className={classes.pageControl}>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={currentPage === 1 ? classes.disabledButton : btn.mainBtn}
        >
          &#8592;
        </button>
        {console.log(currentPage)}
        <p className={classes.page}>{currentPage}</p>
        <button
          onClick={nextPage}
          disabled={
            (currentPage - 1) * cardsPerPage + cards.length >= totalCards
          }
          className={
            (currentPage - 1) * cardsPerPage + cards.length >= totalCards
              ? classes.disabledButton
              : btn.mainBtn
          }
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default ShopBody;
