import { Repository } from 'typeorm/repository/Repository';
import { Total } from '../entities/total.entity';
export declare class TotalService {
    private totalRespository;
    constructor(totalRespository: Repository<Total>);
    updateTotal(totalDto: any): Promise<any>;
}
