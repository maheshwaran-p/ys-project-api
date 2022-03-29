import { OrderQuestionDTO } from 'src/models/dto/order.dto';
import { OrderService } from 'src/models/services/order.service';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    orderQuestion(orderQuestionDTO: OrderQuestionDTO): Promise<any>;
}
