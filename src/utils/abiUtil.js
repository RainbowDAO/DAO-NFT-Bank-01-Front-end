import RainbowBank from "../../abis/RainbowBank.json";
import RBT from "../../abis/RBT.json";
import RbtDeposit721 from "../../abis/RbtDeposit721.json";

const CONTRACTS = {
    RbtDeposit721: {address:"0x656547539dc37d8dF93d59a4D50f7340Edf85146",abi:RbtDeposit721},
    RBT:{address:"0x218a1BeF2470b15c199b0bDb532C5ea272272Ed3",abi:RBT},
    RainbowBank:{address:"0x93Aa565F3313C3948e12a113Fb97919700209b88",abi:RainbowBank},
};

function getContractByName(name, web3) {
    return new web3.eth.Contract(CONTRACTS[name].abi, CONTRACTS[name].address, {});
}

function getContractByToken(name, address, web3) {
    console.log(CONTRACTS[name].abi, address)
    return new web3.eth.Contract(CONTRACTS[name].abi, address, {});
}

function getContractAddress(name) {
    return CONTRACTS[name].address;
}

export default {
    CONTRACTS,
    getContractByName,
    getContractByToken,
    getContractAddress
};