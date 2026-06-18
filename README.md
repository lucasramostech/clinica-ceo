# CEO – Centro de Excelência em Oftalmologia

**Versão 1.0**

Landing page institucional do Dr. Alexandre C. Nascimento, oftalmologista em Nova Mutum – MT. Site one-page, responsivo, com agendamento via WhatsApp.

🔗 **Demo:** https://clinica-de-olhos-true.web.app

## Stack
- HTML5
- CSS3 (variáveis, Flexbox, Grid, media queries)
- JavaScript vanilla — sem frameworks, sem build
- Cormorant Garamond (Google Fonts)
- Firebase Hosting

## Funcionalidades
- Header fixo responsivo com menu hambúrguer no mobile
- Carrossel no hero: loop infinito, autoplay (6s) e setas ‹ ›
- Carrossel de exames com navegação manual, adaptado ao tamanho da tela
- Galeria com lightbox (tela cheia + navegação)
- Animações de entrada via IntersectionObserver
- Mapa do Google Maps incorporado
- CTAs de WhatsApp com mensagem pré-preenchida

## Seções
`#hero` · `#sobre` · `#galeria` · `#exames` · `#cirurgias` · `#convenios` · `#mapa` · `#contato`

## Estrutura
```
index.html
assets/
  css/global.css   # reset, variáveis, header, footer, lightbox
  css/style.css    # estilos das seções
  main.js          # menu, carrosséis, lightbox, observer
  img/             # logos, fotos, exames/
```

## Rodar localmente
```bash
git clone <url-do-repo>
```
Abra o `index.html` no navegador.

## Deploy
```bash
firebase deploy
```