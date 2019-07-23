const { existsSync } = require('fs');
const { expect } = require('chai');
const { name } = require('../package');

describe(name, () => {
  it('exists', () => {
    expect(existsSync(require('..'))).to.equal(true);
  });
});
