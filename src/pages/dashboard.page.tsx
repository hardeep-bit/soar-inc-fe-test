import { useEffect } from 'react';
import CardListComponent from '../components/cardList.component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserCardList } from '../services/card';
import { AppDispatch } from '../redux';
import TransactionListComponent from '../components/transactionList.component';
import { fetchRecentTransactions } from '../services/transaction';
import { fetchUserData } from '../services/user';
import BarChart from '../components/weeklyActivity.component';
import ExpensePieChart from '../components/expense.component';

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cardList = useSelector((state: any) => state.card.cardList);
  const recentTransactions = useSelector((state: any) => state.transaction.recentTransactions);

  useEffect(() => {
    // console.log('fetchhhh');

    dispatch(fetchUserData())
    dispatch(fetchUserCardList(2))
    dispatch(fetchRecentTransactions(3))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className='flex p-2 gap-8'>
        <CardListComponent cardList={cardList} />
        <TransactionListComponent recentTransactions={recentTransactions} />
      </div>
      <div className='flex gap-8 p-4'>
        <BarChart />
        <ExpensePieChart />
      </div>
    </div>
  )
};

export default Dashboard;
