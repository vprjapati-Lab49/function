import React, { useState } from 'react';
import { Box, BottomNavigation, BottomNavigationAction, Icon } from '@material-ui/core';

import './TaskDashboard.scss';
import TaskList from './taskList/TaskList';
import { Priority } from '../types/mapping';

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
        <TaskList taskList={[{
          title: "Review PRs",
          description: "There are 4 new PRs and 3 old PRs open.",
          date: new Date(2019, 7, 11),
          priority: Priority.HIGH,
          subtasks: [{
            title: "PR from Rajat got some critical architectural changes",
            date: new Date(2019, 7, 11),
            priority: Priority.HIGH,
          },
            {
              title: "PR from Pradeep is in good state and should be merged.",
              date: new Date(2019, 7, 11),
              priority: Priority.HIGH,
            }
          ]
        },
          {
            title: "Work on task to create Data model for Users",
            description: "There are 4 new PRs and 3 old PRs open.",
            date: new Date(2019, 7, 11),
            priority: Priority.HIGH,
          },
          {
            title: "Co-ordinate with Abhishek sikka",
            description: "There is one PR to be raised today & have some doubts.",
            date: new Date(2019, 7, 11),
            priority: Priority.HIGH,
          }
        ]}/>
      </Box>
    </Box>
  );
}

export default TaskDashboard;
