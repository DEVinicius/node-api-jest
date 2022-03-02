import { ICreateCompanyDTO } from '../../dto/createCompany.dto';
import { ICompany } from '../models/Company.model';
import { ICompanyRepository } from './../ICompany.interface';

export class MongoCompanyRepository implements ICompanyRepository {
    async create(createCompanyDTO: ICreateCompanyDTO): Promise<ICompany> {
        throw new Error('Method not implemented.');
    }
    async findByEmail(email: string): Promise<ICompany | undefined> {
        throw new Error('Method not implemented.');
    }
    async findByDocument(document: string): Promise<ICompany | undefined> {
        throw new Error('Method not implemented.');
    }
    
}