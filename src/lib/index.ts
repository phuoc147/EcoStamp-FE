import { ApiError, ApiSuccess } from "../types";

export function isApiSuccess(response: ApiSuccess<any> | ApiError): response is ApiSuccess<any> {
    return (response as ApiSuccess<any>).success === true;
}