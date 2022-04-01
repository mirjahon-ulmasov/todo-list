export interface Note {
  id: number;
  title: string;
  tasks: Task[];
}

export interface Task {
  id: number;
  name: string;
  state: boolean;
}
