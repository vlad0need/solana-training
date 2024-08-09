import { Keypair } from "@solana/web3.js";
import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

//const keypair = getKeypairFromEnvironment("SECRET_KEY");

const asArray = Uint8Array.from(JSON.parse(process.env["SECRET_KEY"]))
const keypair = Keypair.fromSecretKey(asArray)


const publicKey = keypair.publicKey;
const secretKey = keypair.secretKey;

console.log("Public Key:", publicKey.toBase58());
console.log("PRIVAT Key:", secretKey);
