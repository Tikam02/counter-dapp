const fs = require('fs');
const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');
const bytecode = fs.readFileSync('build/counter_sol_FirstContract.bin');
const abi = JSON.parse(fs.readFileSync('build/counter_sol_FirstContract.abi'));(async function () {
  const ganacheAccounts = await web3.eth.getAccounts();
  const myWalletAddress = ganacheAccounts[0];
  const myContract = new web3.eth.Contract(abi);
  myContract.deploy({
    data: bytecode.toString()
  }).send({
    from: myWalletAddress,
    gas: 5000000
  }).then((deployment) => {
    console.log('voting was successfully deployed!');
    console.log('voting can be interfaced with at this address:');
    console.log(deployment.options.address);
  }).catch((err) => {
    console.error(err);
  });
})();


// The next 2 variables i.e bytecode and abi are the files that were built during the compilation of .sol script. The ABI is a .json file that describes the deployed contract and its functions. It allows us to contextualize the contract and call its functions.bin is simply a compact binary representation of the compiled bytecode. The opcodes aren’t referenced by PUSH, PULL or DELEGATECALL, but their binary representations, which look like random numbers when read by a text editor.