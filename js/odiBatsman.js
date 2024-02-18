const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const fs = require('fs');

// the methods we are going to use are going to be async
// so, we need everything inside an async function
var currPage = 1;
var maxPage = 30;

async function run() {
    // launch browser
    const browser = await puppeteer.launch();

    // Array to store data from all pages
    const allData = [];

    while (currPage <= maxPage) {
        const url = `https://stats.espncricinfo.com/ci/engine/stats/index.html?class=3;page=${currPage};spanmin1=01+Jan+1990;spanval1=span;template=results;type=batting`;
                    
        const page = await browser.newPage();
        await page.goto(url);
        await page.waitForSelector('.engineTable');

        const tableHTML = await page.$eval('.engineTable:nth-of-type(3)', table => table.outerHTML);

        // regx
        const re = /\/player\/(\d+)\.html/;
        const $ = cheerio.load(tableHTML);

        const data = [];
        $('tr.data1').each((index, element) => {
            const columns = $(element).find('td');
            const link = $(columns[0]).find('a');

            const rowData = {
                Id: parseInt(re.exec(link.attr('href'))[1]),
                playerName: link.text().trim(),
                span: $(columns[1]).text().trim(),
                matches: parseInt($(columns[2]).text().trim()),
                innings: parseInt($(columns[3]).text().trim()),
                runs: parseInt($(columns[4]).text().trim()),
                average: parseFloat($(columns[5]).text().trim()),
                hundred: parseInt($(columns[6]).text().trim()),
                fifty: parseInt($(columns[7]).text().trim())
            };

            data.push(rowData);
        });

        // Push data from this page into allData array
        allData.push(...data);

        // Close the page after scraping
        await page.close();

        currPage++;
    }

    // Close the browser after scraping all pages
    await browser.close();

    // Log or return the collected data
    console.log(allData);



    // Inside your run function, after you've accumulated all the data:

    // Convert the data array to JSON format
    const jsonData = JSON.stringify(allData, null, 2);

    // Define the file path where you want to save the JSON file
    const filePath = 'odi_batting_cricket_data.json';

    // Write the JSON data to a file
    fs.writeFileSync(filePath, jsonData);

    console.log('JSON data saved to', filePath);

    return allData;
}

run();
