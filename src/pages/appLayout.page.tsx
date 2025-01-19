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


const AppLayout = () => {
  const appNavigations = [{
    id: 'dashboard',
    navLabel: 'Dashboard',
    appHeadLabel: 'Overview',
    getIcon: (isActive: boolean) => <HomeRoundedIcon sx={{ fontSize: 24 }} className={`mt-[-4px] ${isActive ? 'text-black' : 'text-gray-400'} `} />
  }, {
    id: 'transactions',
    navLabel: 'Transaction',
    appHeadLabel: 'Overview',
    getIcon: (isActive: boolean) => <PriceChangeRoundedIcon sx={{ fontSize: 24 }} className={`mt-[-4px] ${isActive ? 'text-black' : 'text-gray-400'} `} />
  }, {
    id: 'accounts',
    navLabel: 'Accounts',
    appHeadLabel: 'Overview',
    getIcon: (isActive: boolean) => <Person2RoundedIcon sx={{ fontSize: 24 }} className={`mt-[-4px] ${isActive ? 'text-black' : 'text-gray-400'} `} />
  }, {
    id: 'investments',
    navLabel: 'Investments',
    appHeadLabel: 'Overview',
    getIcon: (isActive: boolean) => <MoneyRoundedIcon sx={{ fontSize: 24 }} className={`mt-[-4px] ${isActive ? 'text-black' : 'text-gray-400'} `} />
  }, {
    id: 'creditCards',
    navLabel: 'Credit Cards',
    appHeadLabel: 'Overview',
    getIcon: (isActive: boolean) => <CreditCardRoundedIcon sx={{ fontSize: 24 }} className={`mt-[-4px] ${isActive ? 'text-black' : 'text-gray-400'} `} />
  }, {
    id: 'loans',
    navLabel: 'Loans',
    appHeadLabel: 'Overview',
    getIcon: (isActive: boolean) => <PriceCheckRoundedIcon sx={{ fontSize: 24 }} className={`mt-[-4px] ${isActive ? 'text-black' : 'text-gray-400'} `} />
  }, {
    id: 'services',
    navLabel: 'Services',
    appHeadLabel: 'Overview',
    getIcon: (isActive: boolean) => <ConstructionRoundedIcon sx={{ fontSize: 24 }} className={`mt-[-4px] ${isActive ? 'text-black' : 'text-gray-400'} `} />
  }, {
    id: 'myPrivileges',
    navLabel: 'My Privileges',
    appHeadLabel: 'Overview',
    getIcon: (isActive: boolean) => <CardTravelRoundedIcon sx={{ fontSize: 24 }} className={`mt-[-4px] ${isActive ? 'text-black' : 'text-gray-400'} `} />
  }, {
    id: 'setting',
    navLabel: 'Setting',
    appHeadLabel: 'Overview',
    getIcon: (isActive: boolean) => <SettingsRoundedIcon sx={{ fontSize: 24 }} className={`mt-[-4px] ${isActive ? 'text-black' : 'text-gray-400'} `} />
  }]

  const location = useLocation();
  const navigate = useNavigate();
  const [activeAppNavigation, setActiveAppNavigation] = useState(appNavigations[0]);

  useEffect(() => {
    if (location.pathname === '/dashboard') {
      setActiveAppNavigation(appNavigations[0])
    } else if (location.pathname === '/setting') {
      setActiveAppNavigation(appNavigations[appNavigations.length - 1])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  const handleNavigation = (event: React.MouseEvent<HTMLDivElement>) => {
    const { id } = event.currentTarget

    if (id === 'dashboard' && location.pathname !== '/dashboard') {
      return navigate('/dashboard');
    } else if (id === 'setting' && location.pathname !== '/setting') {
      return navigate('/setting');
    }
  };

  return (
    <div className="flex h-screen">
      <nav className="w-1/6 border-r-[1px] border-gray-100">
        <div className='flex p-4 justify-center items-center'>
          <h1 className='text-2xl font-extrabold text-gray-700'>
            <AssignmentTurnedInIcon sx={{ fontSize: 30 }} className='mt-[-4px] text-black' />
            <span className='pl-[13px]'>Soar Test</span>
          </h1>
        </div>
        <div className='mt-4'>
          {appNavigations.map(appNavigation => (
            <div key={appNavigation.id} className={`p-[15px] pl-[25px] cursor-pointer
              ${activeAppNavigation.id === appNavigation.id ? 'bg-gray-50 border-l-4 border-black font-bold' : 'text-gray-400 border-l-4 border-white'} 
              `} id={appNavigation.id} onClick={handleNavigation}>
              {appNavigation.getIcon(activeAppNavigation.id === appNavigation.id)}
              <span className='pl-[10px]'>
                {appNavigation.navLabel}
              </span>
            </div>
          ))}
        </div>
      </nav>

      <div className="flex-1 flex flex-col">
        <HeaderComponent activeAppNavigation={activeAppNavigation} />
        <main id={styles.appLayout} className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
