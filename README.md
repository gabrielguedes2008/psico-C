# Psico-C

Site estático de apresentação, em português, com topo editorial inspirado na referência Raft e seções alternadas inspiradas na página de terapias.

## Executar

```sh
npm run dev -- --port 5173 --strictPort
```

Abra `http://localhost:5173`. Não há dependências para instalar. Para gerar a versão estática:

```sh
npm run build
```

O resultado fica em `dist/`.

## Arquivos

- `index.html`: conteúdo, navegação, FAQ e janela de contato.
- `styles.css`: paleta, tipografia, grid e regras responsivas.
- `app.js`: menu mobile e janela acessível de contato.
- `assets/images`: imagens originais e peças SVG.
- `DESIGN-SPEC.md` e `PROMPTS-IMAGENS.md`: direção visual e prompts.
- `sites/psico-c`: cópia isolada dos arquivos do site preparada para publicação privada via Sites, preservando o repositório principal. A publicação não foi concluída: depende de autorização para enviar os arquivos.

## Conteúdo a configurar

Os canais de contato, dados profissionais e modalidades finais ainda precisam ser fornecidos. O botão de contato abre uma janela informativa; não envia solicitações nem simula um agendamento. O retrato é de uma modelo fictícia e está identificado como imagem ilustrativa. Não há depoimentos inventados.

As fontes DM Serif Display e DM Sans são carregadas do Google Fonts, com fallbacks locais. Os PNGs preservam os assets fonte; uma futura otimização pode acrescentar WebP/AVIF conforme os tamanhos finais.

## Validação

Build e sintaxe JavaScript verificados; página retornou HTTP 200. Desktop e mobile inspecionados no navegador. Menu, FAQ e janela de contato testados. Sem overflow horizontal nos viewports 320, 390, 768, 1024 e 1440 px.
