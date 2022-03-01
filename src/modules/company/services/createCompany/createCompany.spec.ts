import 'reflect-metadata'
import { ICreateCompanyDTO } from './../../dto/createCompany.dto';
import { CreateCompanyService } from './createCompany.service';
import { MockCompanyRepository } from './../../repository/mock/mockCompany.repository';

describe("Create Company", () => {

    let createCompanyService = {} as CreateCompanyService;

    beforeEach(() => {
        createCompanyService = new CreateCompanyService(new MockCompanyRepository())
    })

    it("should be able to create a Company", async() => {

        const companyDTO = {
           document: "0000000",
           name: "TESTE COMPANY",
           address: {
               address: "RUA TESTE",
               city: "Sao Paulo",
               district: "Sao Paulo",
               identifier: "123",
               state: "SP",
               zipCode: "04836400"
           },
           email: "teste@mail.com",
           fantasyName: "TESTE COMPANY",
           phone: "12324242"
        } as ICreateCompanyDTO;

        const company = await createCompanyService.execute({company: companyDTO});

        expect(company.document).toBe(companyDTO.document);
    });

    it("should not be able to Create a Company with same document", async() => {

        const companyDTO = {
           document: "0000000",
           name: "TESTE COMPANY",
           address: {
               address: "RUA TESTE",
               city: "Sao Paulo",
               district: "Sao Paulo",
               identifier: "123",
               state: "SP",
               zipCode: "04836400"
           },
           email: "teste@mail.com",
           fantasyName: "TESTE COMPANY",
           phone: "12324242"
        } as ICreateCompanyDTO;

        await createCompanyService.execute({company: companyDTO});

        const companyDTO2 = {
            document: "0000000",
            name: "TESTE COMPANY",
            address: {
                address: "RUA TESTE",
                city: "Sao Paulo",
                district: "Sao Paulo",
                identifier: "123",
                state: "SP",
                zipCode: "04836400"
            },
            email: "teste@mail.com",
            fantasyName: "TESTE COMPANY",
            phone: "12324242"
         } as ICreateCompanyDTO;
 
        await createCompanyService.execute({company: companyDTO2}).catch(error => {
            expect(error).toBeInstanceOf(Error);
        });

    });
    it("should not be able to Create a Company with same email", async() => {

        const companyDTO = {
           document: "0000000",
           name: "TESTE COMPANY",
           address: {
               address: "RUA TESTE",
               city: "Sao Paulo",
               district: "Sao Paulo",
               identifier: "123",
               state: "SP",
               zipCode: "04836400"
           },
           email: "teste@mail.com",
           fantasyName: "TESTE COMPANY",
           phone: "12324242"
        } as ICreateCompanyDTO;

        await createCompanyService.execute({company: companyDTO});

        const companyDTO2 = {
            document: "00000020",
            name: "TESTE COMPANY",
            address: {
                address: "RUA TESTE",
                city: "Sao Paulo",
                district: "Sao Paulo",
                identifier: "123",
                state: "SP",
                zipCode: "04836400"
            },
            email: "teste@mail.com",
            fantasyName: "TESTE COMPANY",
            phone: "12324242"
         } as ICreateCompanyDTO;
 
        await createCompanyService.execute({company: companyDTO2}).catch(error => {
            expect(error).toBeInstanceOf(Error);
        });
    });
})