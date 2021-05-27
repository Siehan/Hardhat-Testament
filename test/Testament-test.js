const { expect } = require('chai');

describe('Testament', function() {
  let Testament, testament, dev, owner, doctor, address1, address2;

  //const TRANSFER_SUPPLY = ethers.utils.parseEther('1000');

  beforeEach(async function() {
    [dev, owner, doctor, address1, address2] = await ethers.getSigners();
    Testament = await ethers.getContractFactory('Testament');
    testament = await Testament.connect(dev).deploy(owner.address, doctor.address);
    await testament.deployed();
  });

  describe('Deployment', function() {
    let sender;
    let _contractEnd;
    it('Should revert if the owner and the doctor are the same person', async function() {
      await expect(
        Testament.connect(dev)
          .deploy(owner.address, doctor.address)
          .to.be.revertedWith('Testament: You cannot define the owner and the doctor as the same person.')
      );
    });
    it('Should revert if the sender address and owner address are not egal', async function() {
      await expect(
        Testament.connect(dev)
          .deploy(sender.address == sender.address)
          .to.be.revertedWith('Testament: You are not allowed to use this function.')
      );
    });
    it('Should revert if the contrat is not finish', async function() {
      await expect(
        Testament.connect(dev)
          .deploy(_contractEnd == true)
          .to.be.revertedWith('Testament: The contract has not yet over.')
      );
    });
  });
});
