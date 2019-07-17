import React, { useEffect, useState } from 'react';
import {
  Box,
  Checkbox,
  ExpansionPanel,
  ExpansionPanelSummary,
  FormControlLabel,
  Icon,
  TextField,
  Typography
} from '@material-ui/core';

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
      {createTaskRows(taskList)}
    </Box>
  );
}

const createTaskRows = (tasks: Array<Task>) => {
  return (
    <div>
      {tasks && tasks.map((task, index) => {
        return createTaskRow(task, index)
      })}
    </div>
  )
}

const createTaskRow = (task: Task, index) => {
  return (
    <div key={index}>
      {task.subtasks && task.subtasks.length > 0 ?
        <ExpansionPanel expanded={true}>
          <ExpansionPanelSummary
            expandIcon={<Icon>expand_less</Icon>}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            {getCard(task)}
          </ExpansionPanelSummary>
        </ExpansionPanel>
        : getCard(task)
      }
    </div>
  )
}

const getCard = (task) => {
  return (
    <div>
      <FormControlLabel
        value="top"
        control={<Checkbox color="secondary"/>}
        label={<Typography>{task.title}</Typography>}
        labelPlacement="end"
      />
      <Typography>{task.priority.toString()}</Typography>
      <Typography>{task.date}</Typography>
      {createTaskRows(task.subtasks)}
    </div>
  )
}

export default TaskList;
