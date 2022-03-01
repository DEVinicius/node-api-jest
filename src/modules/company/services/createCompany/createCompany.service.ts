import { ICompanyRepository } from '../../repository/ICompany.interface';
import { inject, injectable } from "tsyringe";
import { COMPANY_REPOSITORY } from '../../repository/symbol';
import { ICreateCompanyDTO } from '../../dto/createCompany.dto';

interface ICreateCompanyService {
    company: ICreateCompanyDTO;
}

@injectable()
export class CreateCompanyService {
    constructor(
        @inject(COMPANY_REPOSITORY)
        private companyRepository: ICompanyRepository
    ) {}

    public async execute({ company }:ICreateCompanyService) {

        const verifyDocumentAlreadyExists = await this.companyRepository.findByDocument(company.document);
        if(verifyDocumentAlreadyExists) {
            throw new Error("Documento já inserido no sistema");
        }
        
        const verifyEmailAlreadyExits = await this.companyRepository.findByEmail(company.email);
        if(verifyEmailAlreadyExits) {
            throw new Error("Email já inserido no sistema");
        }


        const createCompany = await this.companyRepository.create(company)

        return createCompany;
    }
}