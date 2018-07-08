'use strict';

const ipv6 = require('..');
const assert = require('assert');
const validator = require('validator');

describe('test', () => {
  it('should be ok', () => {
    assert(validator.isIP(ipv6), true);
  });
});
