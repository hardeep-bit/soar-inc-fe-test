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
import { screenSizes } from "../constants";

const QuickUserHeadView = (props: any) => {
  const { user, index, onChangeActiveMessageToUserIndex, activeMessageToUserIndex } = props;
  const width = useSelector((state: any) => state.app.width);

  return (
    <div className={`cursor-pointer text-center just ${activeMessageToUserIndex === index ? 'font-bold' : ''}`} onClick={() => onChangeActiveMessageToUserIndex(index)}>
      <Avatar
        className={styles.avatarIcon}
        alt={user.name}
        src={user.displayPicture320pxURL}
        sx={{
          width: width > screenSizes.tabletMin ? '70px' : '50px',
          height: width > screenSizes.tabletMin ? '70px' : '50px',
        }}
      />
      <h5 className="text-[12px] md:text-[16px] text-[#232323] text-center line-clamp-1">
        {truncateString(user.name)}
      </h5>
      <h6 className="text-[12px] md:text-[15px] text-[#718EBF] text-center line-clamp-1">
        {truncateString(user.position)}
      </h6>
    </div>
  )
}

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
        <h4 className="md:pt-8 md:pb-4 pb-6 md:pl-2 mt-[16px] md:mt-[4px]">Quick Transfer</h4>
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
            width: width > screenSizes.tabletMin ? 50 : 40,
            height: width > screenSizes.tabletMin ? 50 : 40,
            backgroundColor: 'white'
          }}>
            <ArrowForwardIosRoundedIcon sx={{ color: '#718EBF', height: 13, width: 13 }} />
          </Fab>
        </div>
        <div className="mt-[20px] md:mt-[40px]">
          <div className="flex gap-4 md:gap-8 justify-between items-center">
            <h5 className="text-[12px] md:text-[16px] text-[#718EBF]">Write Amount</h5>
            <div className="flex justify-between items-center w-[187px] md:w-[265px] h-[40px] md:h-[50px]">
              <div className="flex justify-between items-center outline-none p-4 pr-[50px] h-[40px] md:h-[50px] bg-[#EDF1F7] rounded-[50px] text-[#718EBF]">
                <input onChange={onChangeAmount} value={amount} className="text-[12px] md:text-[16px] max-w-[140px] md:pr-[48px] outline-none bg-[#EDF1F7] text-[#718EBF]" placeholder="Amount" />
              </div>
              <Button
                onClick={sendMoneyHandler}
                sx={width > screenSizes.tabletMin ? {
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
                <SendRoundedIcon className="md:ml-4 ml-2" sx={{ color: '#ffffff', width: 26 }} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickTransferComponent;