export interface ICrypt {
    hash(message: string): Promise<string>;
    compare(cryptData: string, message: string): Promise<boolean>;
}