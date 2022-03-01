export interface ICreateCompanyDTO {
    name: string;
    fantasyName: string;
    document: string;
    address: CompanyAddress;
    phone: string;
    email: string;
}

interface CompanyAddress {
    address: string;
    identifier: string;
    zipCode: string;
    city: string;
    state: string;
    district: string;
}