const puppeteer = require('puppeteer');

async function buscarContatos(pesquisa) {
    console.log(`Buscando empresas: ${pesquisa}...`);
    const browser = await puppeteer.launch({ headless: false }); 
    const page = await browser.newPage();
    
    await page.goto(`https://www.google.com.br/maps/search/${encodeURIComponent(pesquisa)}`);
    await new Promise(r => setTimeout(r, 6000)); 

    console.log('Rolando a página para carregar o máximo de empresas...');

    for (let i = 0; i < 8; i++) {
        await page.evaluate(() => {
            const painel = document.querySelector('div[role="feed"]');
            if (painel) painel.scrollBy(0, 3000);
        });
        await new Promise(r => setTimeout(r, 2000)); 
    }


    const links = await page.evaluate(() => {
        const elementosA = Array.from(document.querySelectorAll('a[href*="/maps/place/"]'));
        return elementosA.map(a => a.href);
    });

    const linksUnicos = [...new Set(links)];
    console.log(`Encontrou ${linksUnicos.length} empresas. Extraindo contatos (isso vai demorar alguns minutos)...`);
    
    const telefones = [];


    for (let i = 0; i < linksUnicos.length; i++) {
        await page.goto(linksUnicos[i]);
        await new Promise(r => setTimeout(r, 3500)); 
        
        const texto = await page.evaluate(() => document.body.innerText);
        const encontrados = texto.match(/\(?\d{2}\)?\s?(?:9\d{4}|\d{4})-?\d{4}/g);
        
        if (encontrados) telefones.push(...encontrados);
    }

    const telefonesFinais = [...new Set(telefones)];
    console.log('\n--- EXTRAÇÃO CONCLUÍDA ---');
    console.log('Total de contatos únicos:', telefonesFinais.length);
    console.log('Lista:', telefonesFinais);
    
    await browser.close();
}

buscarContatos('advogado em salvador');