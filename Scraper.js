const puppeteer = require('puppeteer');

async function Scrapper(url)
{
    const browser=await puppeteer.launch();
    const page= await browser.newPage();
    await page.goto(url);
const [element] = await page.$x('//*[@id="form1"]/div[3]/div[5]/div/div/div[1]/div[1]/div[2]/div[2]');
const text =await element.getProperty('textContent');
const rawText= await text.jsonValue();
console.log(rawText);
}
Scrapper('https://www.mypetrolprice.com/75/LPG-price-in-Mangalore');
