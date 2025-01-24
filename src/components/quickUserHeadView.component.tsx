import { screenBreakPoints } from "../constants";
import { truncateString } from "../helpers/utility";
// @ts-ignore
import styles from "../styles/components/QuickTransfer.module.css";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";

const QuickUserHeadView = (props: any) => {
  const { user, index, onChangeActiveMessageToUserIndex, activeMessageToUserIndex } = props;
  const width = useSelector((state: any) => state.app.width);

  return (
    <div className={`cursor-pointer text-center justify-center ${activeMessageToUserIndex === index ? 'font-bold' : ''}`} onClick={() => onChangeActiveMessageToUserIndex(index)}>
      <div className="text-center justify-center flex">
        <Avatar
          className={styles.avatarIcon}
          alt={user.name}
          src={user.displayPicture320pxURL}
          sx={{
            width: width > screenBreakPoints.xl ? '70px' : '50px',
            height: width > screenBreakPoints.xl ? '70px' : '50px',
          }}
        />
      </div>
      <h5 className="text-[12px] xl:text-[16px] text-[#232323] text-center line-clamp-1">
        {truncateString(user.name)}
      </h5>
      <h6 className="text-[12px] xl:text-[15px] text-[#718EBF] text-center line-clamp-1">
        {truncateString(user.position)}
      </h6>
    </div>
  )
}

export default QuickUserHeadView;