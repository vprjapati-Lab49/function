import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, GridList, GridListTile, TextField } from '@material-ui/core';

import './TaskList.scss';
import { Task } from '../../types/mapping';
import { restGet } from '../../../commons/utils/RestRequests';
import { BACKEND_URLS } from '../../../commons/constants';

const TaskList = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    restGet(BACKEND_URLS.getTasks)
      .then((response) => {
        setTaskList(response.data.data);
      })
  }, []);

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
      {createTaskGrid(taskList)}
    </Box>
  );
}

const createTaskGrid = (tasks: Array<Task>) => {
  return (
    <div>
      {tasks && tasks.map((task, index) => {
        return (
          <GridList key={index} cellHeight={160} cols={1}>
            {createRow(task)}
          </GridList>
        )
      })}
    </div>
  )
}

const createRow = (task: Task) => {
  return (
    <Card>
      <CardContent>
        <GridListTile cols={3}>
          <div className="title">{task.title}</div>
          <div className={"taskDetails"}>
            <span>{task.priority.toString()}</span>
          </div>
          <div className={"taskDetails"}>
            <span>{task.date}</span>
          </div>
          {createTaskGrid(task.subtasks)}
        </GridListTile>
      </CardContent>
    </Card>
  )
}

export default TaskList;
