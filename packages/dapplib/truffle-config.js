require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success story crawl rifle come hover prize slot gesture'; 
let testAccounts = [
"0xe2cbabbc05fb27071e2c164eae7ee704123cf130889cd9099ebe961eb71b37fc",
"0x806b0d701c86278b8fa2ddc916f4745186cbbf73a51684c814d85b356a47fb5b",
"0x2b5676456cbbccb4c840b53fcad15a07dd033ff21732b15d010abceec63c33f9",
"0x33fdbed8b79965ff6042b5b65b4dd7b8d50798dcdaba5465eb8b247ec823a9c6",
"0xe32c35b5638519b0d781a2294900620e82daf3b330d356a0dda2c692a55b80c1",
"0xecac766285d938f8c7623024a2ccfa8179dfb01beebda8b1a5eae2e44ca36bd7",
"0xbb0c87241d62a2fbdf36e3b2ac9c26369f62454db007c2285a5bdb40ce20ccba",
"0xa5fa385bf9fe7926c3081ec29ab33023d9addafdaefcab3b9027f3a82d3df1d6",
"0xc7b95458269bdba8ddc8afa35ac84d9fa3191dd0012e51e2c2bf781677c5c419",
"0xc5429909c1a7104e545e1ce8243c3d0e79d706a1e097a895171dfafe90098acd"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

