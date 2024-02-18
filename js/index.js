const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

// the methods we are going to use are going to be async 
// so, we need everything is async function

async function run(){
    
    // launch browser
    const browser = await puppeteer.launch();

    // helps us to go to any page
    const page = await browser.newPage();

    let url = "https://stats.espncricinfo.com/ci/engine/stats/index.html?class=2;spanmin1=01+Jan+1990;spanval1=span;template=results;type=batting";
    
    const currPage = 30;
    const startPage = 2;

    // specify the page and run goto method
    await page.goto(url);

    // to get screen shot of a page
    // await page.screenshot( { path: 'ss.png', fullPage: true} );

    // to get pdf of a page
    // await page.pdf( { path: 'example.pdf', fullPage: true });

    // to get html of a page
    // const html = await page.content();

    // to get title of a page
    // const title = await page.evaluate( () => document.title );

    // const text = await page.evaluate( () => document.body.innerText);

    // Wait for the table to be rendered
    await page.waitForSelector('.engineTable');

 
    const tableHTML = await page.$eval('.engineTable:nth-of-type(3)', table => table.outerHTML);

    console.log(typeof(tableHTML));

    browser.close();

    // regx
    const re = /\/player\/(\d+)\.html/;

    const $ = cheerio.load(tableHTML);

    const data = [];
    $('tr.data1').each((index, element) => {

        const columns = $(element).find('td');
        const link = $(columns[0]).find('a');

        const rowData = {

            // use regx to find player ID
            playerData: parseInt(re.exec(link.attr('href'))[1]),
            playerName: $(columns[0]).text().trim(),
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


    while( currPage < maxPage ){

        url = `https://stats.espncricinfo.com/ci/engine/stats/index.html?class=2;page=${currPage};spanmin1=01+Jan+1990;spanval1=span;template=results;type=batting`;
        currPage = currPage + 1;

        const page = await browser.newPage();

        await page.goto(url);
        
        



    }

    console.log(data);
}

run();
