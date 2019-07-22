import React from 'react';

import Header from './layout/header/Header';
import TaskDashboard from './dashboard/TaskDashboard';
import Footer from './layout/footer/Footer';
import './Main.scss';

const Main = () => (
  <React.Fragment>
    <Header/>
    <TaskDashboard/>
    <Footer/>
  </React.Fragment>
);

export default Main;