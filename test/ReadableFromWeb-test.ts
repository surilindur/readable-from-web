import 'jest';
import type { Readable } from 'readable-stream';
import { readableFromWeb } from '../lib/ReadableFromWeb';

// Helper types for linting in the tests
type ReadableToWeb = (stream: Readable) => ReadableStream;
type StreamToString = (stream: Readable) => Promise<string>;
type StringToStream = (string: string) => Readable;

const readableToWeb: ReadableToWeb = require('readable-stream-node-to-web');
const streamToString: StreamToString = require('stream-to-string');
const stringToStream: StringToStream = require('streamify-string');

describe('ReadableFromWeb', () => {
  let originalStream: Readable;
  let whatwgStream: ReadableStream;
  let readableStreamReadable: Readable;
  let expectedError: Error;

  beforeEach(async() => {
    originalStream = stringToStream('abc');
    whatwgStream = readableToWeb(originalStream);
    readableStreamReadable = readableFromWeb(whatwgStream);
    expectedError = new Error('Expected error');
  });

  it('should handle conversion', async() => {
    await expect(streamToString(readableStreamReadable)).resolves.toBe('abc');
  });

  it('should forward errors from the whatwg stream', async() => {
    originalStream._read = () => {
      throw expectedError;
    };
    await expect(streamToString(readableStreamReadable)).rejects.toBe(expectedError);
  });

  it('should allow destroying while reading', async() => {
    originalStream._read = () => {
      readableStreamReadable.destroy(expectedError);
    };
    await expect(streamToString(readableStreamReadable)).rejects.toBe(expectedError);
  });
});
