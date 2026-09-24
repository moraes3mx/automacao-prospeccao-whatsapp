# 🚀 Automação de Prospecção (WhatsApp & Google Maps)

Este projeto é uma ferramenta de automação desenvolvida em JavaScript para otimizar a prospecção comercial. Ele realiza a extração de contatos comerciais diretamente do Google Maps e executa o disparo automatizado de mensagens pelo WhatsApp, enviando de forma automática o link do portfólio para potenciais clientes.

## 💻 Tecnologias Utilizadas

* **JavaScript**
* **Node.js**
* **Puppeteer:** Utilizado para o Web Scraping (raspagem de dados) e navegação automatizada no Google Maps.
* **whatsapp-web.js:** Utilizado para a integração e automação dos disparos via WhatsApp.

## ⚙️ Como Utilizar (Passo a Passo)

### 1. Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado no seu computador.

### 2. Instalação do Projeto
Faça o clone deste repositório e instale as dependências necessárias através do terminal:

```bash
git clone [https://github.com/moraes3mx/automacao-prospeccao-whatsapp.git](https://github.com/moraes3mx/automacao-prospeccao-whatsapp.git)
cd automacao-prospeccao-whatsapp
npm install
```

### 3. Extraindo Contatos do Google Maps
O extrator utiliza o Puppeteer para rolar a página do Maps e coletar múltiplos contatos únicos. Para rodar a raspagem de dados, execute:

```bash
node extrator.js
```

### 4. Disparando as Mensagens no WhatsApp
Com a lista de números pronta, inicie o robô de disparos:

```bash
node index.js
```
O terminal irá gerar um **QR Code**. Abra o seu aplicativo do WhatsApp (é recomendado o uso do WhatsApp Business) e faça a leitura do código com a câmera do celular para iniciar a sessão.

> **🛡️ Segurança e Anti-Ban:** O script de disparo já está configurado com validação prévia de números e pausas de segurança de 15 segundos entre cada mensagem. Isso simula o comportamento humano e ajuda a proteger o número contra bloqueios de spam. As pastas sensíveis de cache e tokens estão protegidas e não são enviadas para o repositório.

---

<div align="center">
  <i>Desenvolvido com 💻 por <a href="https://github.com/moraes3mx">João Victor Muniz</a></i>
</div>
