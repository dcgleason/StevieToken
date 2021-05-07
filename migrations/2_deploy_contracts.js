var StevieToken = artifacts.require("./StevieToken.sol");
var StevieTokenSale = artifacts.require("./StevieTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(StevieToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(StevieTokenSale, StevieToken.address, tokenPrice);
  });
};
