import { TotalDTO } from 'src/models/dto/total.dto';
import { TotalService } from 'src/models/services/total.service';
export declare class TotalController {
    private totalService;
    constructor(totalService: TotalService);
    updateTotal(totalDto: TotalDTO): Promise<any>;
}
