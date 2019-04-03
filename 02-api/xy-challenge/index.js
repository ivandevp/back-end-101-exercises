const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);

const filePath = path.resolve(__dirname, 'data', 'arduinoBuy.json');
const saveJSON = content => writeFile(filePath, JSON.stringify(content));



let getArduinos = async () => {
    const ARDUINO_BUY = 'div.grid-product';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://store.arduino.cc/usa/');
    await page.waitFor(1000);
    await page.waitForSelector(ARDUINO_BUY);
    await page.waitFor(1000);
    const arduinos = await page.$$eval(
        ARDUINO_BUY,
        arduinosProducts => arduinosProducts.map(
            section => ({
                id: `${new Date().getTime()}${Math.floor((Math.random() * 1000) + 1)}`,
                title: section.querySelector('h2 > a').innerText,
                oldPrice: section.querySelector('p.old-price') ? section.querySelector('p.old-price').innerText : '',
                price: section.querySelector('p.special-price') ? section.querySelector('p.special-price').innerText : section.querySelector('span.regular-price').innerText,
                image: section.querySelector('a.product-image > img').src,
                buyLink: section.querySelector('a.product-image').href,
                hoverDescription: section.querySelector('div.product-hover-description') ? section.querySelector('div.product-hover-description').innerText : 'No description',
                productLabel: section.querySelector('span.product-label') ? section.querySelector('span.product-label').innerText : (section.querySelector('span.on-sale') ? section.querySelector('span.on-sale').innerText : '')
            }),
        ),
    );
    await page.waitFor(1000);
    await saveJSON(arduinos);
    await page.waitFor(1000);
    await page.screenshot({ path: 'arduino.png' });
    await page.pdf({path: 'arduinos.pdf', format: 'A4'});

    await browser.close();

    return;
};


getArduinos().then((value) => {
    console.log('success', value);
});
