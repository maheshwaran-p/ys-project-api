import { OrderResponseDTO } from 'src/models/dto/order.dto';
import { OrderresponseService } from 'src/models/services/orderresponse.service';
export declare class OrderresponseController {
    private orderResponseService;
    constructor(orderResponseService: OrderresponseService);
    orderResponse(orderResponseDTO: OrderResponseDTO): Promise<any>;
}
