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
import QuickTransferComponent from '../components/quickTransfer.component';
import { fetchTransferToList } from '../services/moneyTransfer';
import BalanceHistoryComponent from '../components/balanceHistory.component';
import { fetchWeeklyActivity } from '../services/activity';
import { fetchExpensesData } from '../services/expense';

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cardList = useSelector((state: any) => state.card.cardList);
  const recentTransactions = useSelector((state: any) => state.transaction.recentTransactions);
  const tranferToList = useSelector((state: any) => state.moneyTransfer.tranferToList);
  const weeklyActivity = useSelector((state: any) => state.activity.weeklyActivity);
  const expensesData = useSelector((state: any) => state.expense.expensesData);

  useEffect(() => {
    dispatch(fetchUserData())
    dispatch(fetchUserCardList(2))
    dispatch(fetchRecentTransactions(3))
    dispatch(fetchExpensesData())
    dispatch(fetchWeeklyActivity())
    dispatch(fetchTransferToList(3))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className='flex p-2 gap-8'>
        <CardListComponent cardList={cardList} />
        <TransactionListComponent recentTransactions={recentTransactions} />
      </div>
      <div className='flex gap-8 p-4'>
        {weeklyActivity && <BarChart weeklyActivity={weeklyActivity} />}
        {expensesData && <ExpensePieChart expensesData={expensesData} />}
      </div>
      <div className='flex gap-8 p-4'>
        <QuickTransferComponent tranferToList={tranferToList} />
        <BalanceHistoryComponent />
      </div>
    </div>
  )
};

export default Dashboard;
