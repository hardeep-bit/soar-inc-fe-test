import React, { useEffect } from 'react';
import CardComponent from "../components/card.component";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserCardList } from '../services/card';
import { AppDispatch } from '../redux';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const CardsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const cardList = useSelector((state: any) => state.card.cardList);

  useEffect(() => {
    dispatch(fetchUserCardList(4))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (cardList.length === 0) {
    return (
      <div>
        <h1>No cards found</h1>
      </div>
    );
  }

  const goBackHandler = () => {
    navigate(-1);
  }

  return (
    <div>
      <div className='flex justify-between py-8'>
        <div className="text-[18px] font-semibold">
          <h4>My All Cards</h4>
        </div>
        <div className=''>
          <Button className='!capitalize !text-[#343C6A] !font-bold' onClick={goBackHandler}>Go Back</Button>
        </div>
      </div>
      {cardList.map((cardDetails: any) => (
        <div className='flex gap-4 justify-center items-center my-4'>
          <CardComponent key={cardDetails.id} cardDetails={cardDetails} />
        </div>
      ))}
    </div>
  );
}

export default CardsPage;