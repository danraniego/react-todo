import api from "../core/interceptor/api_interceptor";
import { ApiResponse } from "../core/interceptor/api_response.model";
import { Todo } from "../models/todo.model";

export class TodoService {

    static getTodos(): Promise<ApiResponse<Todo>> {
        return api.get<ApiResponse<Todo>>('/todos').then(); 
    }

    static getTodoById(id: number): Promise<ApiResponse<Todo>> {
        return api.get<ApiResponse<Todo>>(`/todos/${id}`).then(); 
    }
    
    static addTodo(payload: Object): Promise<ApiResponse<Todo>> {
        return api.post<ApiResponse<Todo>>('/todos').then(); 
    }
}