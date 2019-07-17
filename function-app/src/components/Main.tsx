import React from 'react';
import { Box } from '@material-ui/core';

import Header from './layout/header/Header';
import TaskDashboard from './dashboard/TaskDashboard';
import Footer from './layout/footer/Footer';
import './Main.scss';

const Main = () => {
  return (
    <Box component={"div"} className="main">
      <Header/>
      <TaskDashboard/>
      <Footer/>
    </Box>
  );
};

export default Main;
