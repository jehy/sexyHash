'use strict';

const {assert} = require('chai');
const crypto = require('crypto');
const hasher = require('../index');

function md5(str) {
  return crypto.createHash('md5').update(str).digest('hex');
}

describe('Short Hash Encoder', ()=>{
  it('should encode and decode the largest possible md5 hash', ()=>{
    const maxMd5Hash = 'ffffffffffffffffffffffffffffffff';
    const encoded = hasher.encode(maxMd5Hash);
    const decoded = hasher.decode(encoded);
    assert.equal(decoded, maxMd5Hash);
  });

  it('should encode and decode even bigger one', ()=>{
    const biggerMd5Hash = 'ffffffffffffffffffffffffffffffffaaaaaaaaaaaeeeeeeeeeccccccccccc';
    const encoded = hasher.encode(biggerMd5Hash);
    const decoded = hasher.decode(encoded);
    assert.equal(decoded, biggerMd5Hash);
  });

  it('should encode and decode some random hashes', ()=>{
    for (let i = 0; i < 1000; i++)
    {
      const data = md5(`Some data ${i}`);
      const encoded = hasher.encode(data);
      const decoded = hasher.decode(encoded, 32);
      assert.equal(decoded, data, `${data} was not encoded correctly`);
    }
  });
});
