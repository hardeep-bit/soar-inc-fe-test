import HeaderComponent from '../components/header.component';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import PriceChangeRoundedIcon from '@mui/icons-material/PriceChangeRounded';
import MoneyRoundedIcon from '@mui/icons-material/MoneyRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import PriceCheckRoundedIcon from '@mui/icons-material/PriceCheckRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import CardTravelRoundedIcon from '@mui/icons-material/CardTravelRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

//@ts-ignore
import styles from "../styles/pages/AppLayout.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { setAppHeight, setAppWidth, setIsNavBarOpen } from '../redux/reducers/app';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { screenSizes } from '../constants';


const AppLayout = () => {
  const { largeDesktopMin } = screenSizes
  const appNavigations = [{
    id: 'dashboard',
    navLabel: 'Dashboard',
    appHeadLabel: 'Overview',
    getIcon: (isActive: boolean) => <HomeRoundedIcon sx={{ fontSize: 24 }} className={`mt-[-4px] ${isActive ? 'text-primary' : 'text-gray-400'} `} />
  }, {
    id: 'transactions',
    navLabel: 'Transaction',
    appHeadLabel: 'Overview',
    getIcon: (isActive: boolean) => <PriceChangeRoundedIcon sx={{ fontSize: 24 }} className={`mt-[-4px] ${isActive ? 'text-primary' : 'text-gray-400'} `} />
  }, {
    id: 'accounts',
    navLabel: 'Accounts',
    appHeadLabel: 'Overview',
    getIcon: (isActive: boolean) => <Person2RoundedIcon sx={{ fontSize: 24 }} className={`mt-[-4px] ${isActive ? 'text-primary' : 'text-gray-400'} `} />
  }, {
    id: 'investments',
    navLabel: 'Investments',
    appHeadLabel: 'Overview',
    getIcon: (isActive: boolean) => <MoneyRoundedIcon sx={{ fontSize: 24 }} className={`mt-[-4px] ${isActive ? 'text-primary' : 'text-gray-400'} `} />
  }, {
    id: 'creditCards',
    navLabel: 'Credit Cards',
    appHeadLabel: 'Overview',
    getIcon: (isActive: boolean) => <CreditCardRoundedIcon sx={{ fontSize: 24 }} className={`mt-[-4px] ${isActive ? 'text-primary' : 'text-gray-400'} `} />
  }, {
    id: 'loans',
    navLabel: 'Loans',
    appHeadLabel: 'Overview',
    getIcon: (isActive: boolean) => <PriceCheckRoundedIcon sx={{ fontSize: 24 }} className={`mt-[-4px] ${isActive ? 'text-primary' : 'text-gray-400'} `} />
  }, {
    id: 'services',
    navLabel: 'Services',
    appHeadLabel: 'Overview',
    getIcon: (isActive: boolean) => <ConstructionRoundedIcon sx={{ fontSize: 24 }} className={`mt-[-4px] ${isActive ? 'text-primary' : 'text-gray-400'} `} />
  }, {
    id: 'myPrivileges',
    navLabel: 'My Privileges',
    appHeadLabel: 'Overview',
    getIcon: (isActive: boolean) => <CardTravelRoundedIcon sx={{ fontSize: 24 }} className={`mt-[-4px] ${isActive ? 'text-primary' : 'text-gray-400'} `} />
  }, {
    id: 'setting',
    navLabel: 'Setting',
    appHeadLabel: 'Setting',
    getIcon: (isActive: boolean) => <SettingsRoundedIcon sx={{ fontSize: 24 }} className={`mt-[-4px] ${isActive ? 'text-primary' : 'text-gray-400'} `} />
  }]

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeAppNavigation, setActiveAppNavigation] = useState(appNavigations[0]);
  const width = useSelector((state: any) => state.app.width);
  const isNavBarOpen = useSelector((state: any) => state.app.isNavBarOpen);

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    if (location.pathname === '/dashboard') {
      setActiveAppNavigation(appNavigations[0])
    } else if (location.pathname === '/setting') {
      setActiveAppNavigation(appNavigations[appNavigations.length - 1])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  const handleResize = () => {
    dispatch(setAppHeight(window.screen.height))
    dispatch(setAppWidth(window.screen.width))
  };

  const handleNavigation = (event: React.MouseEvent<HTMLDivElement>) => {
    const { id } = event.currentTarget

    if (isNavBarOpen) {
      dispatch(setIsNavBarOpen(false))
    }

    if (id === 'dashboard' && location.pathname !== '/dashboard') {
      return navigate('/dashboard');
    } else if (id === 'setting' && location.pathname !== '/setting') {
      return navigate('/setting');
    }
  };

  const navBarHandler = () => {
    dispatch(setIsNavBarOpen(!isNavBarOpen))
  }

  const isWidthLessThanLargeDesktopMin = width <= largeDesktopMin

  return (
    <div className="flex h-full w-full">
      <div className='relative'>
        <nav className={`${styles.navBarCollapsedActive} ${isWidthLessThanLargeDesktopMin ? (isNavBarOpen ? 'w-[250px] absolute bg-white h-full' : 'hidden') : 'w-[250px]'}`}>
          <div className='flex py-4 justify-center items-center h-[100px]'>
            <h1 className='text-[25px] font-extrabold text-gray-700 '>
              <AssignmentTurnedInIcon sx={{ fontSize: 30 }} className='mt-[-4px] text-primary' />
              <span className='pl-[13px]'>Soar Test</span>
            </h1>
          </div>
          <div className=''>
            {appNavigations.map(appNavigation => (
              <div key={appNavigation.id} className={`cursor-pointer flex ${activeAppNavigation.id === appNavigation.id ? 'text-primary bg-gray-50  font-bold' : ''}`}>
                <div className={`h-[54px] w-[6px] rounded-r-[10px] rounded-br-[10px] ${activeAppNavigation.id === appNavigation.id ? 'bg-primary' : ''}`}>
                </div>
                <div className={`p-[15px] pl-[25px]  text-gray-400 border-l-4 border-white`} id={appNavigation.id} onClick={handleNavigation}>
                  {appNavigation.getIcon(activeAppNavigation.id === appNavigation.id)}
                  <span className={`pl-[10px] ${activeAppNavigation.id === appNavigation.id ? 'text-primary bg-gray-50  font-bold' : ''}`}>
                    {appNavigation.navLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </nav>
        {isWidthLessThanLargeDesktopMin && isNavBarOpen &&
          <CancelRoundedIcon className='z-[1] cursor-pointer text-primary absolute left-[238px] top-[3px] !bg-white' onClick={navBarHandler} />
        }
      </div>

      <div className="flex-1 flex flex-col">
        <HeaderComponent activeAppNavigation={activeAppNavigation} />
        <main id={styles.appLayout} className={`py-0 px-4 md:px-8 overflow-y-auto ${isWidthLessThanLargeDesktopMin ? 'flex justify-center items-center' : ''}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
