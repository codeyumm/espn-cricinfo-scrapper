const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const fs = require('fs');

var currPage = 1;
var maxPage = 20;

async function run(){

    // launch browser
    const browser = await puppeteer.launch();



    const allData = [];

    while(currPage < maxPage){

        let url = `https://stats.espncricinfo.com/ci/engine/stats/index.html?class=3;orderby=wickets;page=${currPage};spanmin1=01+Jan+1990;spanval1=span;template=results;type=bowling`;
                       
        const page = await browser.newPage();

        await page.goto(url);
        await page.waitForSelector('.engineTable');

        const tableHTML = await page.$eval('.engineTable:nth-of-type(3)', table => table.outerHTML);


        //regx for player ID
        const re = /\/player\/(\d+)\.html/;
        const $ = cheerio.load(tableHTML);

        const data = [];

        $('tr.data1').each( (index, element) => {

            const columns = $(element).find('td');
            const link = $(columns[0]).find('a');


            const rowData = {
                Id: parseInt(re.exec(link.attr('href'))[1]),
                playerName: link.text().trim(),
                span: $(columns[1]).text().trim(),
                matches: parseInt($(columns[2]).text().trim()),
                innings: parseInt($(columns[3]).text().trim()),
                overs: parseInt($(columns[4]).text().trim()),
                Mdns: parseFloat($(columns[5]).text().trim()),
                runs: parseInt($(columns[6]).text().trim()),
                wickets:($(columns[7]).text().trim()),
                bestBowlinFiguer:($(columns[8]).text().trim()),
                avg:parseFloat($(columns[9]).text().trim()),
                economy:parseFloat($(columns[10]).text().trim()),
                strikeRate:parseFloat($(columns[11]).text().trim()),
                fours:parseInt($(columns[12]).text().trim()),
                sixes:parseInt($(columns[13]).text().trim()),

            };


            data.push(rowData);
        });

        allData.push(...data);

        await page.close();

        currPage++;

    }

     // Close the browser after scraping all pages
     await browser.close();

     // Log or return the collected data
    //  console.log(allData);
 
 
 
     // Inside your run function, after you've accumulated all the data:
 
     // Convert the data array to JSON format
     const jsonData = JSON.stringify(allData, null, 2);
 
     // Define the file path where you want to save the JSON file
     const filePath = 't20_bowling_cricket_data.json';
 
     // Write the JSON data to a file
     fs.writeFileSync(filePath, jsonData);
 
     console.log('JSON data saved to', filePath);
 
     return allData;
    
}


run();