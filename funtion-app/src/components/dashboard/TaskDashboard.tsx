import React from 'react';
import { Box, BottomNavigation, BottomNavigationAction, Icon } from '@material-ui/core';

import './TaskDashboard.scss';

function TaskDashboard() {
  const [value, setValue] = React.useState(0);

  return (
    <Box className="dashboardBody" component={"div"}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="Open Tasks" icon={<Icon>assignment</Icon>} />
        <BottomNavigationAction label="Completed" icon={<Icon>assignment_turned_in</Icon>} />
        <BottomNavigationAction label="Deleted" icon={<Icon>delete_outline</Icon>}/>
      </BottomNavigation>
    </Box>
  );
}

export default TaskDashboard;
