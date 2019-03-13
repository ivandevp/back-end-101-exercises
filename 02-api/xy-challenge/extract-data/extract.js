const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const {
    promisify
} = require('util');

const writeFile = promisify(fs.writeFile);
const filePath = path.resolve(__dirname, '../data', 'funkos.json');
const saveJSON = content => writeFile(filePath, JSON.stringify(content));

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const links = [
        'https://www.amazon.com.mx/b/ref=s9_acss_bw_cg_funkgrid_1b1_w?node=17715493011&pf_rd_m=A3TO6F13CSVUA4&pf_rd_s=merchandised-search-3&pf_rd_r=0EVAKNZTQ811ETH4QK8R&pf_rd_t=101&pf_rd_p=db9e3b35-55b6-4ebc-bd3f-d9ee1b11f94a&pf_rd_i=17707554011',
        'https://www.amazon.com.mx/b/ref=s9_acss_bw_cg_funkgrid_3a1_w?node=17715481011&pf_rd_m=A3TO6F13CSVUA4&pf_rd_s=merchandised-search-3&pf_rd_r=2CWHYE6NZ61B09ABYJPC&pf_rd_t=101&pf_rd_p=db9e3b35-55b6-4ebc-bd3f-d9ee1b11f94a&pf_rd_i=17707554011',
        'https://www.amazon.com.mx/b/ref=s9_acss_bw_cg_funkgrid_2a1_w?node=17715491011&pf_rd_m=A3TO6F13CSVUA4&pf_rd_s=merchandised-search-3&pf_rd_r=2CWHYE6NZ61B09ABYJPC&pf_rd_t=101&pf_rd_p=db9e3b35-55b6-4ebc-bd3f-d9ee1b11f94a&pf_rd_i=17707554011',
        'https://www.amazon.com.mx/b/ref=s9_acss_bw_cg_funkgrid_2b1_w?node=17715482011&pf_rd_m=A3TO6F13CSVUA4&pf_rd_s=merchandised-search-3&pf_rd_r=2CWHYE6NZ61B09ABYJPC&pf_rd_t=101&pf_rd_p=db9e3b35-55b6-4ebc-bd3f-d9ee1b11f94a&pf_rd_i=17707554011',
        'https://www.amazon.com.mx/b/ref=s9_acss_bw_cg_funkgrid_1a1_w?node=17715483011&pf_rd_m=A3TO6F13CSVUA4&pf_rd_s=merchandised-search-3&pf_rd_r=2CWHYE6NZ61B09ABYJPC&pf_rd_t=101&pf_rd_p=db9e3b35-55b6-4ebc-bd3f-d9ee1b11f94a&pf_rd_i=17707554011',
        'https://www.amazon.com.mx/b/ref=s9_acss_bw_cg_funkgrid_3b1_w?node=17715494011&pf_rd_m=A3TO6F13CSVUA4&pf_rd_s=merchandised-search-3&pf_rd_r=XQ14DFX6V40W6M24HJRJ&pf_rd_t=101&pf_rd_p=db9e3b35-55b6-4ebc-bd3f-d9ee1b11f94a&pf_rd_i=17707554011',
    ]
    links.forEach(element => (await page.goto(element)));



    const divsCounts = await page.$$eval(
        'ul > li.s-result-item',
        funkoSections => funkoSections.map(
            (section, index) => {
                let price = section.querySelector('div > div > div > a > span.a-size-base');
                let star = (section.querySelector('a > i > span'));

                const obj = {
                    id: `${new Date().getTime()}${index}`,
                    titleProduct: section.querySelector(' div > div > a > h2').innerText,
                    imageProduct: section.querySelector('div > div > a > img').src,
                    price: price ? price.innerText : '0',
                    star: star ? star.innerText.slice(0, 3) : '0',
                    type: document.querySelector('#s-result-count > span > span').innerText,
                };
                return obj;
            }
        )
    )
    console.log(`divsCounts`, divsCounts);
    saveJSON(divsCounts);
    await browser.close();
})();