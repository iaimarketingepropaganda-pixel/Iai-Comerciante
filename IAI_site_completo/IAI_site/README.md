# IAI? — Site institucional de apresentação

Site responsivo, em português, criado com base no logotipo enviado e no documento **IAI? — Posicionamento da marca e planos comerciais (novembro/2026)**.

## Arquivos

- `index.html` — estrutura do site, com textos, planos, FAQ e formulário.
- `styles.css` — identidade visual neon, responsividade e acessibilidade.
- `script.js` — menu para celular, seleção de plano, formulário e cópia da mensagem.
- `config.js` — telefone comercial para ativar o link de WhatsApp.
- `assets/logo-original.png` — imagem original enviada (com fundo).
- `assets/logo-iai-transparente.png` — adaptação do logo para composição no site.
- `assets/favicon.svg` — pequeno ícone vetorial de navegador.
- `textos-site.md` — todos os textos organizados para revisão e uso em outros materiais.

## Como abrir

Abra `index.html` no navegador. Os arquivos não dependem de frameworks, serviços externos ou instalação de pacotes.

## Como ativar o contato

Abra `config.js` e edite `whatsapp: ""` com o número verdadeiro da agência no formato `55DDDNUMERO`, sem `+`, parênteses ou espaços. Exemplo de formato (fictício): `5582999999999`. Sem essa configuração, o formulário permite **preparar e copiar** a mensagem, mas não exibe botão de envio via WhatsApp.

O formulário não armazena nem transmite informações para servidores. Depois de configurar o número, o visitante poderá abrir a conversa no WhatsApp com a mensagem preparada. Nenhuma mensagem é enviada sem ação do visitante.

## Como publicar

Envie todo o conteúdo desta pasta a uma hospedagem estática, como GitHub Pages, Netlify ou Vercel. O arquivo inicial é `index.html`. Em serviços que permitem importação direta, selecione esta pasta. Depois de publicado, teste a navegação e o contato no celular.

## Conferências comerciais antes de publicar

1. Validar a quantidade exata de Stories, Reels, carrosséis e demais peças por plano, embora já exista a previsão de conteúdo para 30 dias.
2. Estabelecer rodadas de revisão, duração dos vídeos e política de urgência.
3. Confirmar critérios da influenciadora virtual, prazo de implantação e licença de uso dos arquivos.
4. Formalizar contrato, prazos, domínio, hospedagem, manutenção e período mínimo de contratação do plano Destaca. O documento-base **recomenda** seis meses, sem definir isso como condição definitiva.
5. Confirmar o preço e o escopo dos serviços opcionais. O documento contém valores de referência internos, ainda não validados; por isso não foram anunciados publicamente no site.
6. Adicionar telefone comercial real, dados da empresa, política de privacidade e demais exigências aplicáveis antes da publicação definitiva.

## Referência comercial

Planos: **Começa — R$ 399/mês**, **Aparece — R$ 599/mês**, **Destaca — R$ 999/mês**. Diferentemente de uma imagem promocional anterior, o plano de R$ 999 é o **Destaca**, e o Aparece custa **R$ 599** conforme o documento de posicionamento mais completo enviado.

## Identidade visual

Fundo azul-marinho escuro, branco predominante, acentos em ciano, azul, violeta e magenta, mantendo legibilidade e evitando brilho excessivo em blocos de texto. O logo foi preservado como imagem, e uma versão com transparência aproximada foi preparada para o destaque da página. Para produção gráfica final ou vetor, idealmente utilizar o arquivo-fonte oficial do logotipo.
