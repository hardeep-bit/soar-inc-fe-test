import React from "react";
import { useSelector } from "react-redux";
import CardComponent from "./card.component";
import { Button } from "@mui/material";
import { clsx } from 'clsx';
import { screenBreakPoints } from "../constants";
import { useNavigate } from "react-router-dom";

const CardListComponent = () => {
  const navigate = useNavigate();
  const cardList = useSelector((state: any) => state.card.cardList);
  const width = useSelector((state: any) => state.app.width);
  const cardcontainerClassName = clsx('scrollbarHide flex flex-nowrap overflow-x-auto gap-4 xl:max-w-[720px] h-[190px] xl:h-[235px]');


  const navigateToCardsPageHandler = () => {
    navigate('/cards');
  }

  if (cardList.length === 0) {
    return (
      <div>
        <h1>No cards found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full xl:w-auto">
      <div className="flex flex-col">
        <div className="py-4 xl:p-4 xl:px-0 pr-[10px] text-gray-700 flex justify-between items-center"
          style={width < screenBreakPoints.xl ? { maxWidth: `calc(${width}px - 1%)` } : {}}
        >
          <div className="text-[18px] font-semibold">
            <h4>My Cards</h4>
          </div>
          <Button
            onClick={navigateToCardsPageHandler}
            className="!capitalize !text-[#343C6A] !text-[14px] cursor-pointer !font-semibold "
          >
            See All
          </Button>
        </div>

        <div className="flex overflow-x-auto gap-4">
          <div className={cardcontainerClassName}
            style={width < screenBreakPoints.xl ? { maxWidth: `calc(${width}px - 1%)` } : {}}
          >
            {cardList.map((cardDetails: any) => <CardComponent key={cardDetails.id} cardDetails={cardDetails} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CardListComponent);