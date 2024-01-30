import { ApiResult } from "./api_result.model";

export class ApiResponse<T> {
    success?: boolean;
    message?: string;
    data?: ApiResult<T>;
}