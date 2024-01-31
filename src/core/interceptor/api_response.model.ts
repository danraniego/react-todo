export class ApiResponse<T> {
    success?: boolean;
    message?: string;
    data?: {
        result?: T | T[] | null
    }
}