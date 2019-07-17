import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Box, Icon } from '@material-ui/core';

import './TaskDashboard.scss';
import TaskList from './taskList/TaskList';

function TaskDashboard() {
  const [value, setValue] = useState(0);

  return (
    <Box className="dashboardBody" component={"div"}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="Open Tasks" icon={<Icon>assignment</Icon>}/>
        <BottomNavigationAction label="Completed" icon={<Icon>assignment_turned_in</Icon>}/>
        <BottomNavigationAction label="Deleted" icon={<Icon>delete_outline</Icon>}/>
      </BottomNavigation>
      <Box component={"div"}>
        <TaskList/>
      </Box>
    </Box>
  );
}

export default TaskDashboard;
