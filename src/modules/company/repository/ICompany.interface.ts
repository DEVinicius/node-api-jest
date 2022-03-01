import { ICreateCompanyDTO } from "../dto/createCompany.dto";
import { ICompany } from "./models/Company.model";

export interface ICompanyRepository {
    create(createCompanyDTO: ICreateCompanyDTO):Promise<ICompany>;
    findByEmail(email: string):Promise<ICompany | undefined>;
    findByDocument(document: string): Promise<ICompany | undefined>;
}