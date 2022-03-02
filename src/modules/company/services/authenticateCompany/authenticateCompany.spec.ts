import "reflect-metadata";
import { Crypto } from "../../../../shared/cryptography/implementation/crypto";
import { ICreateCompanyDTO } from "../../dto/createCompany.dto";
import { MockCompanyRepository } from "../../repository/mock/mockCompany.repository";
import { CreateCompanyService } from "../createCompany/createCompany.service";
import { AuthenticateCompanyService } from "./authenticateCompany.service";

describe("Authenticate Company", ()=> {
    let createCompanyService = {} as CreateCompanyService;
    let authenticateCompanyService = {} as AuthenticateCompanyService;

    beforeEach(async() => {
        const mockRepository = new MockCompanyRepository();
        const cryptoProvider = new Crypto();
        createCompanyService = new CreateCompanyService(mockRepository, cryptoProvider);
        authenticateCompanyService = new AuthenticateCompanyService(mockRepository, cryptoProvider);

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
            password: "Teste@123",
            phone: "12324242"
         } as ICreateCompanyDTO;
 
        await createCompanyService.execute({company: companyDTO});
    })
    
    it("should be Able to authenticate Company", async() =>{
        const authenticate = await authenticateCompanyService.execute({
            email: "teste@mail.com",
            password: "teste@123"
        })

        expect(authenticate).toBeTruthy();
    })

    it("should not be Able to authenticate Company without signup", () =>{})
})