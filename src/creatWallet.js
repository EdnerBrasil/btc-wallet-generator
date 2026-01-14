/*
Fui obrigado a fazer alguns ajustes no código em função de ter rodado 'npm audit fix --force' isso atualizou a bip32 para 
a versão 5.0.0

const bip32 = require('bip32'); foi substituida por: 
const ecc = require('tiny-secp256k1');
const { BIP32Factory } = require('bip32');
const bip32 = BIP32Factory(ecc);
*/

//importando dependencias
const ecc = require('tiny-secp256k1');
const { BIP32Factory } = require('bip32');
const bip32 = BIP32Factory(ecc);

const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

// IMPORTANTE no bitcoinjs-lib v7: (sugerido pelo chatGPT 5.3)
bitcoin.initEccLib(ecc);

//definir a rede
//const network = bitcoin.networks.bitcoin; // Para Bitcoin Mainnet
const network = bitcoin.networks.testnet; // Para Bitcoin Testnet

//derivação para a carteira deterministica
// m / 49' / coin_type' / account' / change / address_index
const path = "m/49'/1'/0"; // Padrão BIP49 para Testnet

let mnemonic = bip39.generateMnemonic(); // Gerar uma nova frase mnemônica
const seed = bip39.mnemonicToSeedSync(mnemonic); // Gerar a seed a partir da frase mnemônica

let root = bip32.fromSeed(seed, network); // Criar o nó raiz a partir da seed

let account = root.derivePath(path); // Derivar a conta usando o caminho definido (criando a conta com par pvt-pub key)
let node = account.derive(0).derive(0); // Derivar o primeiro endereço (address_index = 0)

let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address; // Gerar o endereço Bitcoin a partir da chave pública


console.log("carteira criada com sucesso!");
console.log("endereço BTC: ", btcAddress);
console.log("chave privada (WIF): ", node.toWIF());
console.log("frase mnemônica: ", mnemonic);
