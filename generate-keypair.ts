import { Keypair } from "@solana/web3.js";
import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

let keypair = Keypair.generate();


let publicKey = keypair.publicKey.toBase58(); 
let count = 0;
let maxAttemps = 1000000


while (publicKey.charAt(0) !== "V" && count < maxAttemps) {
    keypair = Keypair.generate();
    publicKey = keypair.publicKey.toBase58(); 
    count++;
}

if (publicKey.charAt(0) === "V") {
    console.log(`Ключ знайден за ${count} попыток`);
    console.log(`Ключ: ${publicKey}`);
} else {
    console.log(`${maxAttemps} спроб виконано XD`);
}

// const asArray = Uint8Array.from(JSON.parse(process.env["SECRET_KEY"]))
// const keypair = Keypair.fromSecretKey(asArray)


// console.log("Public Key:", publicKey.toBase58());
// console.log("PRIVAT Key:", secretKey);
