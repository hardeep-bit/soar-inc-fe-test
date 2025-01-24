import { Button, Fab } from "@mui/material";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
// @ts-ignore
import styles from "../styles/components/QuickTransfer.module.css";
import { getCurrentFormattedDate } from "../helpers/utility";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { useDispatch, useSelector } from "react-redux";
import { addToRecentTransactions } from "../redux/reducers/transaction";
import { screenBreakPoints } from "../constants";

// Lazy load the QuickUserHeadView component
const QuickUserHeadView = React.lazy(() => import("./quickUserHeadView.component"));

const QuickTransferComponent = () => {
  const loginUser = useSelector((state: any) => state.user.loginUser);
  const width = useSelector((state: any) => state.app.width);
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
    if (!amount) return

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
      <div className="text-[18px] font-semibold mb-2">
        <h4 className="xl:pt-8 xl:pb-4 pb-6 xl:pl-2 mt-[16px] xl:mt-[4px]">Quick Transfer</h4>
      </div>
      <div id={styles.quickTransferSection}>
        <div className="p-0 m-0 flex gap-8 justify-around items-center">
          {tranferToList.map((user: any, index: number) => (
            <QuickUserHeadView
              activeMessageToUserIndex={activeMessageToUserIndex}
              onChangeActiveMessageToUserIndex={onChangeActiveMessageToUserIndex}
              user={user} index={index} key={index} />
          ))}

          <Fab className="cursor-pointer " aria-label="add" sx={{
            width: width > screenBreakPoints.xl ? 50 : 40,
            height: width > screenBreakPoints.xl ? 50 : 40,
            backgroundColor: 'white'
          }}>
            <ArrowForwardIosRoundedIcon sx={{ color: '#718EBF', height: 13, width: 13 }} />
          </Fab>
        </div>
        <div className="mt-[20px] xl:mt-[40px]">
          <div className="flex gap-4 xl:gap-8 justify-between items-center">
            <h5 className="text-[12px] xl:text-[16px] text-[#718EBF]">Write Amount</h5>
            <div className="flex justify-between items-center w-[187px] xl:w-[265px] h-[40px] xl:h-[50px]">
              <div className="flex justify-between items-center outline-none p-4 pr-[50px] w-[187px] xl:w-[265px] h-[40px] xl:h-[50px] bg-[#EDF1F7] rounded-[50px] text-[#718EBF]">
                <input onChange={onChangeAmount} value={amount} className="pr-[75px] text-[12px] xl:text-[16px] max-w-[140px] xl:pr-[48px] outline-none bg-[#EDF1F7] text-[#718EBF]" placeholder="Amount" />
              </div>
              <Button
                onClick={sendMoneyHandler}
                sx={width > screenBreakPoints.xl ? {
                  height: '50px',
                  width: '125px',
                  fontSize: '16px',
                  marginLeft: '-60px',
                  padding: '1rem'
                } : {
                  height: '40px',
                  width: '100px',
                  fontSize: '13px',
                  marginLeft: '-100px',
                  padding: '1rem'
                }}
                className=" !capitalize !font-semibold !text-[#ffffff] !text-center !rounded-[50px] !bg-[#232323]"
              >
                Send
                <SendRoundedIcon className="xl:ml-4 ml-2" sx={{ color: '#ffffff', width: 26 }} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(QuickTransferComponent);