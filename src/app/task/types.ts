import {Priority, Status} from "@/globals/types";

export interface Task {
    id: string | null;
    title: string | null;
    description: string | null;
    due_date: string | null;
    priority: Priority
    status: Status;
}

export const emptyTask: Task = {
    id: null,
    title: null,
    description: null,
    due_date: null,
    priority: Priority.MEDIUM,
    status: Status.PENDING,
}