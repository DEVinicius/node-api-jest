import { ICrypt } from "./../ICrypt";
import crypto from "crypto";

export class Crypto implements ICrypt {
  async hash(message: string): Promise<string> {
    const algorithm = "aes-256-cbc";

    // generate 16 bytes of random data
    const initVector = crypto.randomBytes(16);

    // protected data
    // secret key generate 32 bytes of random data
    const Securitykey = crypto.randomBytes(32);

    // the cipher function
    const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

    // encrypt the message
    // input encoding
    // output encoding
    let encryptedData = cipher.update(message, "utf-8", "hex");

    encryptedData += cipher.final("hex");

    return encryptedData;
  }

  async compare(cryptData: string, message: string): Promise<boolean> {
    const algorithm = "aes-256-cbc";

    // generate 16 bytes of random data
    const initVector = crypto.randomBytes(16);

    // secret key generate 32 bytes of random data
    const Securitykey = crypto.randomBytes(32);

    // the cipher function
    const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

    // encrypt the message
    // input encoding
    // output encoding
    let encryptedData = cipher.update(cryptData, "utf-8", "hex");

    encryptedData += cipher.final("hex");

    // the decipher function
    const decipher = crypto.createDecipheriv(
      algorithm,
      Securitykey,
      initVector
    );

    let decryptedData = decipher.update(encryptedData, "hex", "utf-8");

    decryptedData += decipher.final("utf8");

    console.log("DeCR", decryptedData);
    console.log("message", message);

    if(decryptedData == message) {
        return true;
    }
    return false;
  }
}
