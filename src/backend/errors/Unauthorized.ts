import { StatusCodes } from 'http-status-codes';
import { CustomAPIError } from './BaseError';

class Unauthorized extends CustomAPIError {
    statusCode: number;

    constructor(message: string) {
        super(message);
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}

export default Unauthorized;