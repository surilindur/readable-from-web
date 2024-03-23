import { Readable, type ReadableOptions } from 'readable-stream';

class ReadableFromWeb<R> extends Readable {
  private readonly reader: ReadableStreamDefaultReader<R>;
  private readerClosed: boolean;

  public constructor(stream: ReadableStream<R>, options?: ReadableOptions) {
    super(options);
    this.reader = stream.getReader();
    this.readerClosed = false;
    this.reader.closed.then(() => {
      this.readerClosed = true;
    }).catch((error: Error) => {
      this.readerClosed = true;
      this.destroy(error);
    });
  }

  public _read(): void {
    this.reader.read()
      .then(chunk => this.push(chunk.done ? null : chunk.value))
      .catch((error: Error) => this.destroy(error));
  }

  public destroy(error?: Error): this {
    if (!this.readerClosed) {
      this.reader.cancel(error).then().catch(() => {
        // Ideally, the error from cancel should be handled here.
        // However, an error thrown in cancel does not seem to reach this callback.
        // Therefore, the error is simply not handled here.
      });
    }
    return super.destroy(error);
  }
}

function readableFromWeb<R>(stream: ReadableStream<R>, options?: ReadableOptions): Readable {
  return new ReadableFromWeb(stream, options);
}

export { ReadableFromWeb, readableFromWeb };
