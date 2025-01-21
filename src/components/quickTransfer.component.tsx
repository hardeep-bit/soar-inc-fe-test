import { Avatar, Fab } from "@mui/material";
import { useState } from "react";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
// @ts-ignore
import styles from "../styles/components/QuickTransfer.module.css";
import { truncateString } from "../helpers/utility";
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const QuickUserHeadView = (props: any) => {
  const { user, index, onChangeActiveMessageToUserIndex, activeMessageToUserIndex } = props;

  return (
    <div className={`cursor-pointer ${activeMessageToUserIndex === index ? 'font-semibold' : ''}`} onClick={() => onChangeActiveMessageToUserIndex(index)}>
      <Avatar
        className={styles.avatarIcon}
        alt="Hardeep Singh"
        src="https://media.istockphoto.com/id/483627817/photo/showing-off-his-pearly-whites.jpg?s=612x612&w=0&k=20&c=gk6aVVGp52YFx1ZzPVQplGc7JL5zkrfxQTuLjIn2RU8="
        sx={{ width: 70, height: 70 }}
      />
      <h5 className="test-[16px] text-[#232323] text-center">{truncateString(user.name)}</h5>
      <h6 className="test-[15px] text-[#718EBF] text-center">{truncateString(user.position)}</h6>
    </div>
  )
}


const QuickTransferComponent = (props: any) => {
  const { tranferToList } = props;
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
              <div className="flex justify-between items-center outline-none p-4 pr-[40px] h-[50px] bg-[#EDF1F7] rounded-[50px] text-[#718EBF]">
                <input onChange={onChangeAmount} value={amount} className="max-w-[140px] pr-[48px] outline-none bg-[#EDF1F7] text-[#718EBF]" placeholder="Amount" />
              </div>
              <div className={"select-none cursor-pointer h-[50px] flex justify-between items-center gap-4 p-4 text-center bg-[#232323] rounded-[50px] ml-[-60px]"}>
                <span className="text-[16px] font-semibold text-[#ffffff]">Send</span>
                <SendRoundedIcon sx={{ color: '#ffffff' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickTransferComponent;