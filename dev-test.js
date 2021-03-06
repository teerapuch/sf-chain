const Block = require('./block');

const fooBlock = Block.mineBlock(Block.genesis(), 'foo');

console.log(fooBlock.toSting());

/*

first step 1

const block = new Block('foo', 'bar', 'zoo', 'baz');
console.log(block.toSting());
console.log(Block.genesis().toSting());
*/