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
    dispatch(fetchUserCardList(4))
    dispatch(fetchRecentTransactions(4))
    dispatch(fetchExpensesData())
    dispatch(fetchWeeklyActivity())
    dispatch(fetchTransferToList(3))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <div>
      {/* <div className="flex overflow-hidden">
        <div className="flex flex-col bg-gray-100">
          <div className="flex flex-col bg-gray-100">
            <div className="flex justify-between p-4 bg-blue-500 text-white">
              <p>Static Content 1</p>
              <p>Static Content 2</p>
            </div>
            <div className="flex overflow-x-auto gap-4 p-4">
              <div className="flex flex-nowrap overflow-x-auto gap-4 p-4 max-w-[720px]">
                <div className="h-[250px] w-[250px] bg-slate-500 flex-shrink-0">
                  Item 1
                </div>
                <div className="h-[250px] w-[250px] bg-slate-500 flex-shrink-0">
                  Item 2
                </div>
                <div className="h-[250px] w-[250px] bg-slate-500 flex-shrink-0">
                  Item 3
                </div>
                <div className="h-[250px] w-[250px] bg-slate-500 flex-shrink-0">
                  Item 4
                </div>
                <div className="h-[250px] w-[250px] bg-slate-500 flex-shrink-0">
                  Item 5
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-500 p-4">
          <h2 className="text-white text-lg font-bold">
            Right Section
          </h2>
          <p className="text-white">This is some content on the right side.</p>
        </div>
      </div> */}
      {/* <div className="flex flex-col md:flex-row overflow-hidden gap-4">
        <div className="flex flex-col bg-gray-100 w-full md:w-auto">
          <div className="flex flex-col bg-gray-100">
            <div className="flex justify-between p-4 bg-blue-500 text-white">
              <p>Static Content 1</p>
              <p>Static Content 2</p>
            </div>
            <div className="flex overflow-x-auto gap-4 p-4">
              <div className="flex flex-nowrap overflow-x-auto gap-4 p-4 max-w-[720px] md:max-w-[720px]">
                <div className="h-[250px] w-[250px] bg-slate-500 flex-shrink-0">
                  Item 1
                </div>
                <div className="h-[250px] w-[250px] bg-slate-500 flex-shrink-0">
                  Item 2
                </div>
                <div className="h-[250px] w-[250px] bg-slate-500 flex-shrink-0">
                  Item 3
                </div>
                <div className="h-[250px] w-[250px] bg-slate-500 flex-shrink-0">
                  Item 4
                </div>
                <div className="h-[250px] w-[250px] bg-slate-500 flex-shrink-0">
                  Item 5
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-500 p-4 w-full md:w-auto mt-4 md:mt-0">
          <h2 className="text-white text-lg font-bold">
            Right Section
          </h2>
          <p className="text-white">This is some content on the right side.</p>
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row overflow-hidden md:gap-4">
        <CardListComponent />
        <TransactionListComponent />
      </div>
      <div className='flex gap-8 py-4'>
        <WeeklyActivityComponent />
        <ExpensePieChart />
      </div>
      <div className='flex gap-8 py-4'>
        <QuickTransferComponent />
        <BalanceHistoryComponent />
      </div>
    </div>
  )
};

export default Dashboard;
