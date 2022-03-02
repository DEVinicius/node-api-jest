import { PRIVATE_JWT_KEY } from './../../../../config/env';
import { ICompany } from './../../repository/models/Company.model';
import { CRYPT_SYMBOL } from './../../../../shared/cryptography/symbol/index';
import { injectable, inject } from "tsyringe";
import { ICompanyRepository } from "../../repository/ICompany.interface";
import { COMPANY_REPOSITORY } from "../../repository/symbol";
import { ICrypt } from '../../../../shared/cryptography/ICrypt';
import jwt from 'jsonwebtoken';

interface IAuthenticateCompany {
    email: string;
    password: string;
}

interface IAuthenticateResponse {
    token: string;
}

@injectable()
export class AuthenticateCompanyService {
    constructor(
        @inject(COMPANY_REPOSITORY)
        private companyRepository: ICompanyRepository,
        @inject(CRYPT_SYMBOL)
        private cryptProvider: ICrypt
    ) {}

    public async execute({ email, password }:IAuthenticateCompany):Promise<IAuthenticateResponse> {
        const company = await this.verifyEmailAlreadyExists(email)
        await this.verifyPasswordIsCorrect(password, company.password);

        const token = jwt.sign({
            id: company._id
        }, PRIVATE_JWT_KEY, { expiresIn: 60 * 60 * 24 })

        return {
            token
        }
    }   

    private async verifyEmailAlreadyExists(email: string):Promise<ICompany> {
        const verifyEmailAlreadyExits = await this.companyRepository.findByEmail(email);
        if(!verifyEmailAlreadyExits) {
            throw new Error("Email | Senha Incorretos");
        }

        return verifyEmailAlreadyExits as ICompany;
    } 

    private async verifyPasswordIsCorrect(password: string, cryptPassword: string):Promise<void> {
        const verifyPassword = this.cryptProvider.compare(cryptPassword, password)

        if(!verifyPassword) {
            throw new Error("Email | Senha Incorretos");
        }
    }
}

