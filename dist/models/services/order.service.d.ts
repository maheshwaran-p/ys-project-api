import { Repository } from 'typeorm/repository/Repository';
import { Order } from '../entities/order.entity';
export declare class OrderService {
    private orderRespository;
    constructor(orderRespository: Repository<Order>);
    orderQuestion(courseId: number, question: string, answer: string): Promise<any>;
}
