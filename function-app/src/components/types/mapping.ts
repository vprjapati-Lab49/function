export enum Priority {
  LOW, MEDIUM, HIGH
}

export enum TaskStatus {
  DEFINED, IN_PROGRESS, COMPLETED, DELETED
}

export type Task = {
  title: string;
  description: string;
  date: Date;
  priority: Priority;
  currentStatus: TaskStatus;
  subtasks: Array<Task>
}