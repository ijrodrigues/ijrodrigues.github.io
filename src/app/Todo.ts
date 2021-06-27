export class Todo {
  id?: string;
  description: string;
  done?: boolean;
  createdAt?: string;
  doneAt?: string;

  constructor(description: string) {
    this.description = description;
  }
}
