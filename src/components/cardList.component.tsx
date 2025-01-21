//@ts-ignore
import styles from "../styles/components/Card.module.css";
import { useSelector } from "react-redux";
import CardComponent from "./card.component";

const CardListComponent = () => {
  const cardList = useSelector((state: any) => state.card.cardList);

  if (cardList.length === 0) {
    return (
      <div>
        <h1>No cards found</h1>
      </div>
    );
  }

  return (
    <div>
      <div className=" text-gray-700 mb-4 flex justify-between items-center">
        <div className="text-[18px] font-semibold">
          <h4>My Cards</h4>
        </div>
        <div className="text-[14px] cursor-pointer font-semibold">
          <h4>See All</h4>
        </div>
      </div>
      <div id={styles.cardListSection}>
        {cardList.map((cardDetails: any) => <CardComponent key={cardDetails.id} cardDetails={cardDetails} />)}
      </div>
    </div>
  );
}

export default CardListComponent;