import { Repository } from 'typeorm/repository/Repository';
import { OrderResponse } from '../entities/order.entity';
export declare class OrderresponseService {
    private orderResponseRespository;
    constructor(orderResponseRespository: Repository<OrderResponse>);
    orderResponse(questionId: number, studentId: number, answer: string): Promise<any>;
}
