const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');


const contatos = [
    '(71) 99999-9999',

];

const mensagem = 'Olá! Sou programador front-end e ajudo empresas a fortalecerem sua identidade visual na internet. Segue meu portfólio para você conhecer meu trabalho: https://portfoliojoaomuniz.vercel.app/';

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true }); 
});

client.on('ready', async () => {
    console.log('Sessão conectada! Iniciando os disparos...');
    
    for (let numero of contatos) {

        const numeroLimpo = '55' + numero.replace(/\D/g, ''); 

        const idCorreto = await client.getNumberId(numeroLimpo);

        if (idCorreto) {
            try {
                await client.sendMessage(idCorreto._serialized, mensagem);
                console.log(`Mensagem enviada para: ${numero}`);
            } catch (erro) {
                console.error(`Erro ao enviar para ${numero}:`, erro);
            }
        } else {
            console.log(`Erro: Número não possui WhatsApp - ${numero}`);
        }

        // Delay de 15 segundos entre cada envio (MUITO IMPORTANTE para não tomar ban)
        console.log('Pausa de 15 segundos...');
        await new Promise(resolve => setTimeout(resolve, 15000));
    }
    
    console.log('Disparos finalizados com sucesso!');
});

client.initialize();