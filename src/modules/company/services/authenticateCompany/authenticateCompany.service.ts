import { injectable, inject } from "tsyringe";
import { ICompanyRepository } from "../../repository/ICompany.interface";
import { COMPANY_REPOSITORY } from "../../repository/symbol";

interface IAuthenticateCompany {
    email: string;
    password: string;
}

@injectable()
export class AuthenticateCompanyService {
    constructor(
        @inject(COMPANY_REPOSITORY)
        private companyRepository: ICompanyRepository
    ) {}

    public async execute({ email, password }:IAuthenticateCompany) {
        
    }
}