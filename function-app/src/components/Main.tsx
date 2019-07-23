import React, { useState } from 'react';

import Header from './layout/header/Header';
import TaskDashboard from './dashboard/TaskDashboard';
import Footer from './layout/footer/Footer';
import './Main.scss';
import Login from './auth/Login';

const Main = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    isAuthorized ?
      <React.Fragment>
        <Header/>
        <TaskDashboard/>
        <Footer/>
      </React.Fragment>
      :
      <Login setIsAuthorized={setIsAuthorized}/>
  );
}

export default Main;