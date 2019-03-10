const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const writeFile = promisify(fs.writeFile);

const filePath = path.resolve(__dirname, 'data', 'books.json');
const saveJSON = content => writeFile(filePath, JSON.stringify(content));

const BOOK_SECTION_SELECTOR = 'div.s-result-item';
// const BOOK_TITLE_SELECTOR = 'h5 > a > span';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.amazon.com/s?k=javascript&__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss_2');

    await page.waitForSelector(BOOK_SECTION_SELECTOR);

  const books = await page.$$eval(
      BOOK_SECTION_SELECTOR,
      bookSections => bookSections.map(
          section => ({
              title: section.querySelector('h5 > a > span').innerText,
              image: section.querySelector('img').src,
              author: section.querySelector('.a-row a.a-size-base').innerText,
          }),
      ),
  );

  await saveJSON(books);

  await browser.close();
})();