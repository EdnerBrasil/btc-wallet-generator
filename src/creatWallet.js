//importando dependencias
const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');


//definir a rede
//const network = bitcoin.networks.bitcoin; // Para Bitcoin Mainnet
const network = bitcoin.networks.testnet; // Para Bitcoin Testnet

//derivação para a carteira deterministica
const path = "m/49'/1'/0'/0"; // Padrão BIP44 para Testnet

let mnemonic = bip39.generateMnemonic(); // Gerar uma nova frase mnemônica
const seed = bip39.mnemonicToSeedSync(mnemonic); // Gerar a seed a partir da frase mnemônica

let root = bip32.fromSeed(seed, network); // Gerar a raiz da carteira a partir da seed

let account = root.derivePath(path); // Derivar a conta usando o caminho definido (criando a conta com par pvt-pub key)

let btcAddress = bitcoin.payments.p2sh({
    pubkey: Node.pubkey,
    network: network,
}).address; // Gerar o endereço Bitcoin a partir da chave pública

console.log("carteira criada com sucesso!");
console.log("endereço BTC: ", btcAddress);
console.log("chave privada (WIF): ", Node.toWIF());
console.log("frase mnemônica: ", mnemonic);
