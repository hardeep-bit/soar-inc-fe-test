//@ts-ignore
import styles from "../styles/components/Transaction.module.css";
import Avatar from '@mui/material/Avatar';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { blue, green, yellow } from '@mui/material/colors';
import MoneyIcon from '@mui/icons-material/Money';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useSelector } from "react-redux";
import { formatDate } from "../helpers/utility";

const TransactionListComponent = () => {
  const recentTransactions = useSelector((state: any) => state.transaction.recentTransactions);
  const loginUser = useSelector((state: any) => state.user.loginUser);

  const getLeftIcon = (via: string) => {
    let bgColor = green[500] as string;

    if (via === 'debitcard' || via === 'creditcard') bgColor = blue[500]
    else if (via === 'wallet') bgColor = yellow[800]

    return (
      <Avatar sx={{ bgcolor: bgColor }} variant="rounded">
        {(via === 'debitcard' || via === 'creditcard') && <CreditCardIcon />}
        {(via === 'cash') && <MoneyIcon />}
        {(via === 'wallet') && <AccountBalanceWalletIcon />}
      </Avatar>
    )
  }

  const getTransactionHeader = ({ actionVia, action, via }: any) => {
    if (actionVia.id === loginUser.id) {
      const viaLabel = via === 'creditcard' ? 'Credit Card' : 'Debit Card';
      if (action === 'debit') return `Debited from my ${viaLabel}`
    } else if (actionVia.name === 'Paypal') {
      if (action === 'debit') return `Paypal Debited`
      if (action === 'credit') return `Deposit Paypal`
    } else {
      return `${actionVia.name}`
    }
  }

  return (
    <div>
      <div className="text-gray-700 mb-4 text-[18px] font-semibold">
        <h4>Recent Transaction</h4>
      </div>
      <div id={styles.transactionListSection}>
        {recentTransactions?.map((transaction: any) => (
          <div key={transaction.id} className="flex items-center justify-between p-2">
            <div className="flex items-center">
              <div className="flex items-center justify-center h-10 w-10 rounded-full">
                {getLeftIcon(transaction.via)}
              </div>
              <div className="ml-3">
                <div className="text-gray-800 font-semibold">{getTransactionHeader(transaction)}</div>
                <div className="text-gray-400 text-[14px]">{formatDate(transaction.date)}</div>
              </div>
            </div>
            <div className={`${transaction.action === 'credit' ? 'text-green-500' : 'text-red-500'}`}>
              {transaction.action === 'credit' ? '+' : '-'}{transaction.currency}{transaction.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default TransactionListComponent;

