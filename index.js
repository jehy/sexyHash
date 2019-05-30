'use strict';

const bases = require('bases');

function encode(str)
{
  const number = bases.fromBase(str, 16);
  return bases.toBase(number, 62);
}

function decode(compacted, length)
{
  const backNumber = bases.fromBase(compacted, 62);
  const decoded = bases.toBase(backNumber, 16);
  if (length)
  {
    return '0'.repeat(length - decoded.length) + decoded;
  }
  return decoded;
}

module.exports = {encode, decode};
