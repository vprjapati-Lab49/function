import React, { useEffect, useState } from 'react';
import {
  Box,
  Checkbox,
  ExpansionPanel,
  ExpansionPanelSummary,
  FormControlLabel,
  Icon,
  Typography
} from '@material-ui/core';

import './TaskList.scss';
import { Task } from '../../types/mapping';

const TaskList = (props) => {

  const {tasks} = props;

  return (
    <Box className="taskTable" component={"div"}>
      {createTaskRows(tasks)}
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
