import { test, expect } from '@playwright/test';
import { readableFromWeb } from '../lib/index';

// Helper definitions for TypeScript and linting, not available in the browser
const index = { readableFromWeb };
const streamtostring = require('stream-to-string');

test('webpack bundle', async({ page }) => {
  await page.goto('http://localhost:4000/');

  await page.addScriptTag({ url: '/index.js', type: 'text/javascript' });
  await page.addScriptTag({ url: '/streamtostring.js', type: 'text/javascript' });

  await expect(page.evaluate(async() => {
    const response = await fetch('/');
    const whatwgStream = response.body!;
    const readableStreamReadable = index.readableFromWeb(whatwgStream);
    return readableStreamReadable.constructor.name;
  })).resolves.toBe('ReadableFromWeb');

  await expect(page.evaluate(async() => {
    const response = await fetch('/');
    const whatwgStream = response.body!;
    const readableStreamReadable = index.readableFromWeb(whatwgStream);
    const stringFromReadable = streamtostring(readableStreamReadable);
    return stringFromReadable;
  })).resolves.toMatch(/^<!DOCTYPE html>/u);
});
