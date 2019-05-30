SexyHash
========

Sometimes size matters.

This module can shorten your hex hashes (and other hex data) by compacting it to
a larger but still human readable alphabet:

```js
const Hasher = require('sexyhash');

const hash = 'ee45187ab28b4814cf03b2b4224eb974';

const encoded = Hasher.encode(hash); // 7fBKxltZiQd7TFsUkOp26w
const decoded = Hasher.decode(encoded); // ee45187ab28b4814cf03b2b4224eb974

```

Standard md5 hash goes from 32 characters to 22 characters! And is still valid
and reversible to it's original value.

Please note that if you may have leading zeros in hash, please provide second
argument with hash length to `decode` function - otherwise leading zeros will
disappear.
