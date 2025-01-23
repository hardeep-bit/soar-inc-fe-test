//@ts-ignore
// import styles from "../styles/components/Card.module.css";
import { useSelector } from "react-redux";
import CardComponent from "./card.component";
import { Button } from "@mui/material";
import { clsx } from 'clsx';
import { screenSizes } from "../constants";

const CardListComponent = () => {
  const cardList = useSelector((state: any) => state.card.cardList);
  const width = useSelector((state: any) => state.app.width);
  const cardcontainerClassName = clsx('scrollbarHide flex flex-nowrap overflow-x-auto gap-4 md:max-w-[720px] h-[190px] md:h-[235px]');

  if (cardList.length === 0) {
    return (
      <div>
        <h1>No cards found</h1>
      </div>
    );
  }
  return (
    <div className="flex flex-col w-full md:w-auto">
      <div className="flex flex-col">
        <div className="py-4 md:p-4 md:px-0 pr-[10px] text-gray-700 flex justify-between items-center"
          style={width < screenSizes.tabletMin ? { maxWidth: `calc(${width}px - 1%)` } : {}}
        >
          <div className="text-[18px] font-semibold">
            <h4>My Cards</h4>
          </div>
          <Button
            className="!capitalize !text-[#343C6A] !text-[14px] cursor-pointer !font-semibold "
          >
            See All
          </Button>
        </div>

        <div className="flex overflow-x-auto gap-4">
          <div className={cardcontainerClassName}
            style={width < screenSizes.tabletMin ? { maxWidth: `calc(${width}px - 1%)` } : {}}
          >
            {cardList.map((cardDetails: any) => <CardComponent key={cardDetails.id} cardDetails={cardDetails} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardListComponent;