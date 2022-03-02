import { ICrypt } from './../../../../shared/cryptography/ICrypt';
import { CRYPT_SYMBOL } from './../../../../shared/cryptography/symbol/index';
import { ICompanyRepository } from '../../repository/ICompany.interface';
import { inject, injectable } from "tsyringe";
import { COMPANY_REPOSITORY } from '../../repository/symbol';
import { ICreateCompanyDTO } from '../../dto/createCompany.dto';
const crypt = require("crypto");

interface ICreateCompanyService {
    company: ICreateCompanyDTO;
}

@injectable()
export class CreateCompanyService {
    constructor(
        @inject(COMPANY_REPOSITORY)
        private companyRepository: ICompanyRepository,
        @inject(CRYPT_SYMBOL)
        private cryptProvider: ICrypt
    ) {}

    public async execute({ company }:ICreateCompanyService) {

        await this.verifyDocumentAlreadyExists(company.document)
        await this.verifyEmailAlreadyExists(company.email)
        
        company.password = await this.hashPassword(company.password);

        const createCompany = await this.companyRepository.create(company)

        return createCompany;
    }

    private async verifyDocumentAlreadyExists(document: string):Promise<void> {
        const verifyDocumentAlreadyExists = await this.companyRepository.findByDocument(document);

        if(verifyDocumentAlreadyExists) {
            throw new Error("Documento já inserido no sistema");
        }
    }

    private async verifyEmailAlreadyExists(email: string):Promise<void> {
        const verifyEmailAlreadyExits = await this.companyRepository.findByEmail(email);
        if(verifyEmailAlreadyExits) {
            throw new Error("Email já inserido no sistema");
        }
    }

    private async hashPassword(password: string):Promise<string> {
        return this.cryptProvider.hash(password);
    }
}