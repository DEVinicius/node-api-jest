import { MongoCompanyRepository } from './../../modules/company/repository/implementation/mongoCompany.repository';
import { COMPANY_REPOSITORY } from './../../modules/company/repository/symbol/index';
import { ICompanyRepository } from './../../modules/company/repository/ICompany.interface';
import { container } from "tsyringe";

container.registerSingleton<ICompanyRepository>(COMPANY_REPOSITORY, MongoCompanyRepository);