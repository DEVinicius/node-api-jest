import { ICreateCompanyDTO } from '../../dto/createCompany.dto';
import { ICompany } from '../models/Company.model';
import { ICompanyRepository } from './../ICompany.interface';
import { v4 as uuid } from 'uuid';

export class MockCompanyRepository implements ICompanyRepository {
    private companies: ICompany[] = [];

    async findByEmail(email: string): Promise<ICompany | undefined> {
        return this.companies.find(comapany => comapany.email === email);
    }
    async findByDocument(document: string): Promise<ICompany | undefined> {
        return this.companies.find(comapany => comapany.document === document);
    }
   
    async create(createCompanyDTO: ICreateCompanyDTO): Promise<ICompany> {
        const company = {
            _id: uuid(),
            ...createCompanyDTO
        } as ICompany

        this.companies.push(company);

        return company;
    }
    
}