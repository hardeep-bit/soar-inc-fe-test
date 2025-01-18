import { useEffect } from 'react';
import CardListComponent from '../components/cardList.component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserCardList } from '../services/card';
import { AppDispatch } from '@/redux';

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cardList = useSelector((state: any) => state.card.cardList);

  useEffect(() => {
    console.log('fetchhhh');
    
    dispatch(fetchUserCardList())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className='flex p-2'>
        <CardListComponent cardList={cardList} />
      </div>
    </div>
  )
};

export default Dashboard;
