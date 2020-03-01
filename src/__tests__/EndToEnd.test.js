import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {

    let browser;
    let page;
    beforeAll(async () => {
        browser = await puppeteer.launch(/*{
            headless: false,
            slowMo: 250
        }*/);
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    });

    afterAll(() => {
        browser.close();
    });

    test('an event element is collapsed by default', async () => {
        const extra = await page.$('.event .extra');
        expect(extra).toBeNull();
    });

    test('user can exand an event to see its details', async () => {
        await page.click('.event .event-details-btn');
        const extra = await page.$('.event .extra');
        expect(extra).toBeDefined();
    });

    test('user can collapse an event to hide its details', async () => {
        await page.click('.event .event-details-btn');
        const extra = await page.$('.event .extra');
        expect(extra).toBeNull();
    });

});

describe('filter events by city', () => {
    let browser;
    let page;
    beforeAll(async () => {
        browser = await puppeteer.launch(/*{
            headless: false,
            slowMo: 250
        }*/);
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    });

    afterAll(() => {
        browser.close();
    });

    test('events load based on user location', async () => {
        const extra = await page.$('.event');
        expect(extra).toBeDefined();
    });

    test('user finds events by typing the preferred location', async () => {
        const extra = await page.$('.suggestions');
        await page.type('.city', 'Berlin');
        expect(extra).toBeDefined();
    })
})