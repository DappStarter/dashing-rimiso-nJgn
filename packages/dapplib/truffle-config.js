require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note situate color harvest opinion slot gas'; 
let testAccounts = [
"0x5746f7f5569465e462ed314544ba1f5476dd64fba2130628f5bc4f862b134ae3",
"0x1b47942f4db62c22216ccc4ab50aaeb07e0e026b2f051671f843e671a5ccc9ea",
"0x77982c1035d431e9a3b182ea7eea6563a1d5d61acbfdf54d48caa7c700e4da32",
"0xa29c7068f71d3efefff11dceddc798f822c6a98c2ba0fc6ce6b3075f50b8513b",
"0x39f397af02594f9f5f1bf44e40da6893b24181baf340da9ef157bec56ea6c0ab",
"0x9312fc36dc4cbb6b7636ba5f09633b4175ef65e829ff47894a4ab494077b0d34",
"0x2f36387a450e114127e48abd329e9ee4928cd634c1561d487ba7ce9354a65689",
"0xffbba5c0eff03e4669d50bb0f7155cafd5cc06d291544c34f0d8ae37f6c46857",
"0x64b0e108016e44dc1ed8adf4b6eba82082e7326367683b812eb28e9bfa7d67be",
"0x3cc66fa7ba6c72724c41c7309810761e8a708e53d98cce4bb4061cc957a42a0e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

