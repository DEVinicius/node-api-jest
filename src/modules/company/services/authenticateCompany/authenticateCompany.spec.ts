import { MockCompanyRepository } from "../../repository/mock/mockCompany.repository";
import { CreateCompanyService } from "../createCompany/createCompany.service";

describe("Authenticate Company", ()=> {
    let createCompanyService = {} as CreateCompanyService;

    beforeEach(() => {
        createCompanyService = new CreateCompanyService(new MockCompanyRepository())
    })
    
    it("should be Able to authenticate Company", () =>{})
    it("should not be Able to authenticate Company without signup", () =>{})
})