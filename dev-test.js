const Blockchain = require('./blockchain');

const bc = new Blockchain();

for (let i=0; i<10; i++) {
  console.log(bc.addBlock(`foo ${i}`).toSting());
}

/*

first step 1

const block = new Block('foo', 'bar', 'zoo', 'baz');
console.log(block.toSting());
console.log(Block.genesis().toSting());

first step 2
const Block = require('./block');

const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
console.log(fooBlock.toSting());

*/