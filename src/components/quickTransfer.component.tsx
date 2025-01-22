import { Avatar, Button, Fab } from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
// @ts-ignore
import styles from "../styles/components/QuickTransfer.module.css";
import { getCurrentFormattedDate, truncateString } from "../helpers/utility";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { useDispatch, useSelector } from "react-redux";
import { addToRecentTransactions } from "../redux/reducers/transaction";

const QuickUserHeadView = (props: any) => {
  const { user, index, onChangeActiveMessageToUserIndex, activeMessageToUserIndex } = props;

  return (
    <div className={`cursor-pointer text-center just ${activeMessageToUserIndex === index ? 'font-bold' : ''}`} onClick={() => onChangeActiveMessageToUserIndex(index)}>
      <Avatar
        className={styles.avatarIcon}
        alt={user.name}
        src={user.displayPicture320pxURL}
        sx={{ width: 70, height: 70 }}
      />
      <h5 className="test-[16px] text-[#232323] text-center">{truncateString(user.name)}</h5>
      <h6 className="test-[15px] text-[#718EBF] text-center">{truncateString(user.position)}</h6>
    </div>
  )
}

const QuickTransferComponent = () => {
  const loginUser = useSelector((state: any) => state.user.loginUser);
  const dispatch = useDispatch();
  const tranferToList = useSelector((state: any) => state.moneyTransfer.tranferToList);
  const [activeMessageToUserIndex, setActiveMessageToUserIndex] = useState(0)
  const [amount, setAmount] = useState('')

  const onChangeActiveMessageToUserIndex = (index: number) => {
    setActiveMessageToUserIndex(index);
  }

  const onChangeAmount = (e: any) => {
    const inputValue = e.target.value;

    if (/^\d{0,10}$/.test(inputValue)) {
      setAmount(inputValue);
    }
  }

  const sendMoneyHandler = () => {
    const newUuid = uuidv4();

    dispatch(addToRecentTransactions({
      id: newUuid,
      action: 'debit',
      via: 'soar',
      amount: amount,
      currency: '$',
      actionVia: {
        id: loginUser.id,
        name: loginUser.name
      },
      date: getCurrentFormattedDate()
    }
    ))
    setAmount('');
  }


  return (
    <div className="text-gray-700">
      <div className="text-[18px] font-semibold mb-4">
        <h4>Quick Transfer</h4>
      </div>
      <div id={styles.quickTransferSection}>
        <div className="p-0 m-0 flex gap-8 justify-around items-center">
          {tranferToList.map((user: any, index: number) => (
            <QuickUserHeadView
              activeMessageToUserIndex={activeMessageToUserIndex}
              onChangeActiveMessageToUserIndex={onChangeActiveMessageToUserIndex}
              user={user} index={index} key={index} />
          ))}

          <Fab className="cursor-pointer " aria-label="add" sx={{ width: 50, height: 50, backgroundColor: 'white' }}>
            <ArrowForwardIosRoundedIcon sx={{ color: '#718EBF' }} />
          </Fab>
        </div>
        <div className="mt-[40px]">
          <div className="flex gap-8 justify-between items-center">
            <h5 className="text-[16px] text-[#718EBF]">Write Amount</h5>
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center outline-none p-4 pr-[50px] h-[50px] bg-[#EDF1F7] rounded-[50px] text-[#718EBF]">
                <input onChange={onChangeAmount} value={amount} className="max-w-[140px] pr-[48px] outline-none bg-[#EDF1F7] text-[#718EBF]" placeholder="Amount" />
              </div>
              <Button
                onClick={sendMoneyHandler}
                className="!capitalize !text-[16px] !h-[50px] !font-semibold !text-[#ffffff] !p-4 !text-center !rounded-[50px] !ml-[-60px] !bg-[#232323]"
              >
                Send
                <SendRoundedIcon className="ml-4" sx={{ color: '#ffffff' }} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickTransferComponent;