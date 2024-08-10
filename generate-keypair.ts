import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();
const publicKey = keypair.publicKey.toBase58();
const secretKey = keypair.secretKey


console.log("Public Key:", publicKey);
console.log("PRIVAT Key:", secretKey);
