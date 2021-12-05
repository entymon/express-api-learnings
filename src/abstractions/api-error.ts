export interface IError {
    status: number;
    fields: {
        name: {
            message: string;
        };
    } | undefined;
    message: string;
    name: string;
  }
  
  class ApiError extends Error implements IError {
    public status = 500
  
    public success = false
  
    public fields: { name: { message: string; }; } | undefined
  
    constructor(msg: string, statusCode: number, name: string = 'ApiError') {
      super()
      this.message = msg
      this.status = statusCode
      this.name = name
    }
  }
  
  export default ApiError