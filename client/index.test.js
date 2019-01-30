import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

const { JSDOM } = jsdom;

describe('Our first test', () => {
  it('Should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', (done) => {
    const indexPage = fs.readFileSync('./client/index.html', "utf-8");
    const dom = new JSDOM(indexPage);
    const h1 = dom.window.document.getElementsByTagName('h1')[0];
    expect(h1.innerHTML).to.equal("Hello World!");
    done();
    dom.window.close();
  });
});
