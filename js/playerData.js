const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

async function getPlayerData() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const playerUrl = 'https://stats.espncricinfo.com/ci/content/player/45789.html';

    await page.goto(playerUrl);
    const playerHtml = await page.content();
    const $ = cheerio.load(playerHtml);

    const texts = [];
    $('.ds-text-title-s').each((index, element) => {
        texts.push($(element).text().trim());
    });
    
    console.log(texts);

    await browser.close();
}

getPlayerData();