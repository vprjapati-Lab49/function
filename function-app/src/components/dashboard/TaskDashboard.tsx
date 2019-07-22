import React, { useEffect, useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Box, Icon } from '@material-ui/core';

import './TaskDashboard.scss';
import TaskList from './taskList/TaskList';
import { restGet } from '../../commons/utils/RestRequest';
import { BACKEND_URLS } from '../../commons/constants';
import NewTaskRow from '../dashboard/newTaskRow/NewTaskRow';

function TaskDashboard() {
  const [value, setValue] = useState(0);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    restGet(BACKEND_URLS.tasks)
      .then((response) => {
        setTasks(response.data.data);
      })
  }, []);

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

      <Box component={"div"} className="taskDashboardBody">
        <NewTaskRow onAddNewTask={newTask => setTasks([...tasks, newTask])}/>
        <TaskList tasks={tasks}/>
      </Box>
    </Box>
  );
}

export default TaskDashboard;