import api from "../core/api_interceptor";
import { ApiResponse } from "../models/response/api_response.model";
import { Todo } from "../models/todo.model";

export class TodoService {

    static getTodos(): Promise<ApiResponse<Todo>> {
        return api.get<ApiResponse<Todo>>('/todos').then(); 
    }
}