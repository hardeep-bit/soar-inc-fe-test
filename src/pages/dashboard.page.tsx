import { useEffect } from 'react';
import CardListComponent from '../components/cardList.component';
import { useDispatch } from 'react-redux';
import { fetchUserCardList } from '../services/card';
import { AppDispatch } from '../redux';
import TransactionListComponent from '../components/transactionList.component';
import { fetchRecentTransactions } from '../services/transaction';
import { fetchUserData } from '../services/user';
import ExpensePieChart from '../components/expense.component';
import QuickTransferComponent from '../components/quickTransfer.component';
import { fetchTransferToList } from '../services/moneyTransfer';
import BalanceHistoryComponent from '../components/balanceHistory.component';
import { fetchWeeklyActivity } from '../services/activity';
import { fetchExpensesData } from '../services/expense';
import WeeklyActivityComponent from '../components/weeklyActivity.component';

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUserData())
    dispatch(fetchUserCardList(2))
    dispatch(fetchRecentTransactions(4))
    dispatch(fetchExpensesData())
    dispatch(fetchWeeklyActivity())
    dispatch(fetchTransferToList(3))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className='flex p-2 gap-8'>
        <CardListComponent />
        <TransactionListComponent />
      </div>
      <div className='flex gap-8 p-4'>
        <WeeklyActivityComponent />
        <ExpensePieChart />
      </div>
      <div className='flex gap-8 p-4'>
        <QuickTransferComponent />
        <BalanceHistoryComponent />
      </div>
    </div>
  )
};

export default Dashboard;
