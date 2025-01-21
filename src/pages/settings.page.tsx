import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import EditProfileComponent from '../components/editProfile.component';
import { fetchUserData } from '../services/user';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux';

const Settings = () => {
  const tabs = [{
    label: 'Edit Profile',
    value: 'editProfile'
  }, {
    label: 'Preferences',
    value: 'preferences'
  }, {
    label: 'Security',
    value: 'security'
  }]
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUserData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const [activeTab, setValue] = React.useState('editProfile');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const renderTabsView = (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={activeTab}>
        <Box sx={{ borderBottom: 1, borderColor: '#F4F5F7' }}>
          <TabList onChange={handleChange} aria-label="Settings tabs"
            TabIndicatorProps={
              {
                style: {
                  backgroundColor: '#232323',
                  height: '6px',
                  borderRadius: `10px 10px 0px 0px`,
                },
              }
            }
          >
            {tabs.map(item => (
              <Tab
                key={item.value}
                sx={{ textTransform: 'none' }}
                className={item.value === activeTab ? '!font-medium !text-primary' : '!text-[#718EBF]'}
                label={item.label}
                value={item.value}
              />
            ))}
          </TabList>
        </Box>
        <TabPanel value="editProfile"><EditProfileComponent /></TabPanel>
        <TabPanel value="preferences">Coming soon, Design not completed yet</TabPanel>
        <TabPanel value="security">Coming soon, Design not completed yet</TabPanel>
      </TabContext>
    </Box>
  )

  return (
    <div className='my-2 mx-4 p-[30px] bg-white rounded-[25px]'>
      {renderTabsView}
    </div>
  )
};

export default Settings;
