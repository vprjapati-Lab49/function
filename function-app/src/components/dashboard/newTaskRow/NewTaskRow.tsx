import React, { useEffect } from 'react';
import { TextField } from '@material-ui/core';

import './NewTaskRow.scss';
import { Priority, Task, TaskStatus } from '../../types/mapping';
import { KEY_CODES } from '../../utils/keycodes';
import { restPost } from '../../utils/RestRequest';
import { BACKEND_URLS } from '../../commons/constants';

const NewTaskRow = (props) => {
  const taskInputElementRef = React.useRef(null);
  const { onAddNewTask } = props;

  useEffect(() => {
    taskInputElementRef.current.focus();
  }, []);

  const saveTask = (e) => {
    if (KEY_CODES.ENTER == e.keyCode || KEY_CODES.ENTER == e.which) {
      const value: string = e.target.value;

      const task: Task = {
        title: value,
        description: '',
        subtasks: [],
        priority: Priority.MEDIUM,
        currentStatus: TaskStatus.DEFINED,
        date: new Date()
      }

      restPost(BACKEND_URLS.tasks, task)
        .then((response) => {
          taskInputElementRef.current.value = '';
          onAddNewTask(response.data.data);
        })
        .catch(err => {
          console.error(`error while trying to save task ${task} : ${err}`)
        });
    }
  }

  return (
    <TextField
      className="inputBoxNewTask"
      label="Add new Task"
      placeholder="Please add task details and press enter key"
      variant="filled"
      InputLabelProps={{
        shrink: true,
      }}
      inputRef={taskInputElementRef}
      onKeyPress={saveTask}
    />
  );
}

export default NewTaskRow;
