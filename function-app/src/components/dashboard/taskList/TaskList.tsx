import React from 'react';
import { Box, Paper, TextField, GridList, GridListTile } from '@material-ui/core';

import './TaskList.scss';
import { Task } from '../../types/mapping';

const TaskList = (props) => {
  const { taskList } = props;

  return (
    <Box className="taskTable" component={"div"}>
      <TextField
        className="inputBoxNewTask"
        label="Add new Task"
        style={{ margin: 8 }}
        placeholder="Please add task details..."
        fullWidth
        margin="normal"
        variant="filled"
        InputLabelProps={{
          shrink: true,
        }}
      />
      {taskList && taskList.map((task, index) => {
        return (
          <GridList cellHeight={160} cols={1}>
            {createRow(task, index)}
          </GridList>
        )
      })}
    </Box>
  );
}

const createRow = (task: Task, index: number) => {
  return (
    <GridListTile key={index} cols={1} className="taskRow">
      <div>{task.title}</div>
      <div className={"taskDetails"}>
        {task.description}
        <span>{task.priority.toString()}</span>
        <span>{task.date.toDateString()}</span>
      </div>
    </GridListTile>
  )
}

export default TaskList;
