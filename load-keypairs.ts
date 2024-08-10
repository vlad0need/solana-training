import "dotenv/config";
import bs58 from "bs58"
import { Keypair } from "@solana/web3.js";

let privateKey = process.env["SECRET_KEY"];
if (privateKey === undefined) {
  console.log("Add SECRET_KEY to .env!");
  process.exit(1);
}

const asArray = Uint8Array.from(JSON.parse(privateKey));
const keypair = Keypair.fromSecretKey(asArray);
const privat = bs58.encode(asArray)
console.log(`Public key: ${keypair.publicKey.toBase58()}`);
console.log(`Privat key: ${privat}`);


/////////////////////////////////////////////////////////////////////////
// while (publicKey.charAt(0) !== `V8` && count < maxAttemps) {
//     keypair = Keypair.generate();
//     publicKey = keypair.publicKey.toBase58(); 
//     count++;
// }

// if (publicKey.charAt(0) === "V8") {
//     console.log(`Ключ знайден за ${count} спроб`);
//     console.log(`Ключ: ${publicKey}`);
// } else {
//     console.log(`${maxAttemps} спроб виконано XD`);
// }
/////////////////////////////////////////////////////////////////////////
// Вирахування кількість спроб 
