//@ts-ignore
import styles from "../styles/components/Header.module.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import { Avatar } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from "react-redux";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { setIsNavBarOpen } from "../redux/reducers/app";
import { screenBreakPoints } from "../constants";

const HeaderComponent = (props: any) => {
  const { xl } = screenBreakPoints
  const loginUser = useSelector((state: any) => state.user.loginUser);
  const width = useSelector((state: any) => state.app.width);
  const isNavBarOpen = useSelector((state: any) => state.app.isNavBarOpen);

  const { activeAppNavigation } = props;
  const [searchedText, setSearchedText] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const onChangeHandler = (e: any) => {
    setSearchedText(e.target.value);
  }

  const handleSearchNavigation = () => {
    if (location.pathname !== '/setting') {
      return navigate('/setting');
    }
  };

  const navBarHandler = () => {
    dispatch(setIsNavBarOpen(!isNavBarOpen))
  }

  return (
    <header id={styles.header} className="p-6 border-b-[1px] border-gray-100">
      <h1 className='text-2xl font-semibold text-gray-700 flex justify-center items-center'>
        {width <= xl && <MenuRoundedIcon className="cursor-pointer mr-[10px]" onClick={navBarHandler} />}
        {activeAppNavigation.appHeadLabel}
      </h1>
      <div className="flex justify-center items-center">
        <div className="relative flex items-center">
          <SearchIcon className="absolute ml-[10px]" sx={{ fontSize: 20, color: "#718EBF" }} />
          <input
            value={searchedText}
            onChange={onChangeHandler}
            id={styles.searchInput}
            placeholder="Search for something" />
        </div>
        <div id={styles.settingsIcon} onClick={handleSearchNavigation}>
          <SettingsOutlinedIcon sx={{ fontSize: 25, color: "#718EBF" }} className={`mt-[-4px] text-gray-400 `} />
        </div>
        <div id={styles.notificationsIcon}>
          <NotificationAddOutlinedIcon sx={{ fontSize: 25, color: "#396AFF" }} className={`mt-[-4px] text-gray-400 `} />
        </div>
        <div id={styles.avatarIcon}>
          {loginUser && (<Avatar
            alt={loginUser.name}
            src={loginUser.displayPicture320pxURL}
            sx={{ width: 60, height: 60 }}
          />)}
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent;