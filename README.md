# Readable from Web

[![CI](https://github.com/surilindur/readable-from-web/actions/workflows/ci.yml/badge.svg)](https://github.com/surilindur/readable-from-web/actions/workflows/ci.yml)
[![Coverage](https://coveralls.io/repos/github/surilindur/readable-from-web/badge.svg?branch=main)](https://coveralls.io/github/surilindur/readable-from-web?branch=main)
[![Version](https://badge.fury.io/js/@comunica/readable-from-web.svg)](https://www.npmjs.com/package/@comunica/readable-from-web)

Experimental implementation of [WHATWG `ReadableStream`](https://streams.spec.whatwg.org/#rs-class)
to [`readable-stream`](https://github.com/nodejs/readable-stream) `Readable` conversion.
This code tries to follow the functionality of Node's own [implementation](https://github.com/nodejs/node/blob/0b676736a0e9ab4939c195a516aa7e82fcd839aa/lib/internal/webstreams/adapters.js#L512)
of [`Readable.fromWeb`](https://nodejs.org/api/stream.html#streamreadablefromwebreadablestream-options)
to the extent possible without introducing anything new.

## Install

This package can be installed via [npm](https://www.npmjs.com/package/@comunica/readable-from-web).

```bash
$ npm install @comunica/readable-from-web
```

## Usage

```js
import { readableFromWeb } from '@comunica/readable-from-web';

async function example(request, init) {
  const response = await fetch(request, init);
  const whatwgReadableStream = fetch.body;
  const readableStreamReadable = readableFromWeb(whatwgReadableStream);
}
```

## License

This code is copyrighted by [the Comunica Association](https://comunica.dev/association/)
and [Ghent University – imec](http://idlab.ugent.be/)
and released under the [MIT license](http://opensource.org/licenses/MIT).
