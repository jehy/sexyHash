'use strict';

const bases = require('bases');

function encode(str)
{
  const number = bases.fromBase(str, 16);
  let converted = bases.toBase(number, 62);
  let i = 0;
  while (str[i] === '0')
  {
    converted = `0${converted}`;
    i++;
  }
  return converted;
}

function decode(compacted)
{
  const backNumber = bases.fromBase(compacted, 62);
  let converted = bases.toBase(backNumber, 16);
  let i = 0;
  while (compacted[i] === '0')
  {
    converted = `0${converted}`;
    i++;
  }
  return converted;
}

module.exports = {encode, decode};
