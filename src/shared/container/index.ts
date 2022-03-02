import { container } from "tsyringe";
import { CRYPT_SYMBOL } from './../cryptography/symbol/index';
import { ICrypt } from './../cryptography/ICrypt';
import { MongoCompanyRepository } from './../../modules/company/repository/implementation/mongoCompany.repository';
import { COMPANY_REPOSITORY } from './../../modules/company/repository/symbol/index';
import { ICompanyRepository } from './../../modules/company/repository/ICompany.interface';
import { Crypto } from '../cryptography/implementation/crypto';

container.registerSingleton<ICompanyRepository>(COMPANY_REPOSITORY, MongoCompanyRepository);
container.registerSingleton<ICrypt>(CRYPT_SYMBOL, Crypto);
