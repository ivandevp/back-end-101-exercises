const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);

const filePath = path.resolve(__dirname, 'data', 'arduinoBuy.json');
const saveJSON = content => writeFile(filePath, JSON.stringify(content));



let getArduinos = async () => {
    const ARDUINO_BUY = 'div.grid-product';
    const browser = await puppeteer.launch({ headless: false });
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
                price: section.querySelector('span.price').innerText,
                image: section.querySelector('a.product-image > img').src,
                buyLink: section.querySelector('a.product-image').href,
            }),
        ),
    );
    await page.waitFor(1000);
    await saveJSON(arduinos);
    await page.waitFor(1000);
    await page.screenshot({ path: 'arduino.png' });

    await browser.close();

    return;
};


getArduinos().then((value) => {
    console.log('success', value);
});
