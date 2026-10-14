# Especificação visual — projeto Psico-C

## Objetivo e referências

Criar uma página de apresentação de serviços de psicologia com acolhimento, personalidade editorial e boa leitura. Usar as referências como direção visual, sem reproduzir marcas, pessoas, textos ou composições inteiras.

Fontes analisadas:

- `ref/6be2a1df874796a230c3eaa356a93c10.jpg`: 675 × 1200 px. Página de terapias, com nome em serifada monumental, retrato recortado, roxo vibrante, brilho difuso e serviços alternados entre imagem e texto. A captura corta a seção de depoimentos.
- `ref/cf5dc9e167a013c1f6abe662fbe26b1c.jpg`: 1200 × 925 px. Primeiro bloco da marca Raft: moldura azul acinzentada, superfície branca, manchete serifada preta, ilustração de perfil humano, estrelas, selos circulares e pequenas chamadas laterais.

Não há HTML, CSS, imagens originais separadas ou restante dessas páginas na pasta. As medidas observadas abaixo são estimativas sobre capturas achatadas; não são valores extraídos do CSS dos sites. Os valores propostos são decisões para o nosso projeto.

## Leitura visual e transformação

| Aspecto | Referência de terapias | Referência Raft | Proposta Psico-C |
|---|---|---|---|
| Estrutura | Página longa, blocos alternados | Hero editorial com chamadas laterais | Hero em duas colunas, seguido de serviços alternados |
| Fundo | Cinza muito claro com névoa lilás | Branco dentro de moldura azul cinza | Marfim com moldura sálvia clara e um halo pontual |
| Cor de destaque | Roxo/fúcsia saturado | Preto, azul profundo, coral e amarelo | Ameixa moderada, sálvia e pêssego |
| Título | Nome próprio enorme sobreposto ao retrato | Mensagem em duas linhas no centro | Mensagem em até três linhas à esquerda, sem sobrepor o rosto |
| Imagem principal | Fotografia recortada | Ilustração vetorial conceitual | Retrato editorial; ilustração conceitual em seção secundária |
| Elementos gráficos | Selo, brilhos, pentágono | Selos, estrelas, cérebro, ondas de áudio | Um selo de marca, formas orgânicas e ícones discretos |
| Serviços | Fotomontagens e CTAs roxos | Não visíveis na captura | Três blocos com imagens maiores e texto mais arejado |

Não repetir o nome das referências, o logotipo Raft, a figura de yoga dentro da mesma silhueta, o pentágono “Glow Up” ou a sobreposição exata de letras e retrato.

## Medidas observadas nas capturas

| Elemento | Estimativa na captura | Consequência para a proposta |
|---|---|---|
| Margens da página de terapias | Cerca de 88–130 px em 675 px, variando por seção | Preservar centralização, ampliar área útil em telas pequenas |
| Hero da página de terapias | Aproximadamente 350 px de altura na imagem | Criar hero mais espaçoso, com altura determinada pelo conteúdo |
| Título da página de terapias | Letras com cerca de 60–90 px | Manter contraste de escala sem comprometer leitura |
| Moldura Raft | Cerca de 30 px nas laterais e 25 px no topo | Usar moldura de 20 px no desktop e 8 px no mobile |
| Conteúdo Raft | Aproximadamente 100–1100 px no eixo horizontal | Trabalhar com container próprio de 1160 px |
| Manchete Raft | Aproximadamente 100 px de corpo visual | Propor máximo de 96 px no nosso desktop |
| Ilustração Raft | Aproximadamente 430 × 440 px visíveis, cortada na base | Reservar área de 440–520 px, evitando cortes de rostos e mãos |

## Tokens de cor propostos

Os códigos abaixo são a paleta do projeto, não uma amostragem exata dos JPGs.

| Token | Hex | Uso |
|---|---|---|
| `--color-frame` | `#D8E2DC` | Moldura externa sálvia |
| `--color-background` | `#FAF8F3` | Fundo principal marfim |
| `--color-surface` | `#FFFFFF` | Cards e áreas pontuais |
| `--color-text` | `#252821` | Títulos e texto principal |
| `--color-muted` | `#596158` | Texto secundário |
| `--color-primary` | `#694875` | Botões, links e pequenos destaques |
| `--color-primary-hover` | `#51365B` | Hover de ações principais |
| `--color-lilac` | `#E5DAED` | Halo e fundos decorativos |
| `--color-sage` | `#A9BAAA` | Ilustrações e detalhes |
| `--color-peach` | `#EAB89A` | Acentos em imagens e formas |
| `--color-line` | `#DDDCD3` | Bordas e divisórias |

Texto corrido usa `text` ou `muted` sobre fundos claros. Lilás, sálvia e pêssego não devem ser usados como cor de texto pequeno. Verificar contraste dos estados finais: mínimo 4,5:1 para texto comum e 3:1 para texto grande.

## Tipografia

- Títulos: família serifada editorial, sugerida `DM Serif Display`, fallback `Georgia, serif`.
- Corpo, navegação e botões: `Manrope`, fallback `Arial, sans-serif`.
- Confirmar disponibilidade e licença antes de incorporar arquivos das fontes; as famílias são propostas, não identificação das fontes das referências.
- H1: `clamp(48px, 6.6vw, 96px)`, peso 400, entrelinha 0,98, tracking −0,035em; ajustar a largura para duas ou três linhas no desktop, sem quebra artificial em mobile.
- H2: `clamp(34px, 4vw, 56px)`, entrelinha 1,08, tracking −0,02em.
- H3: 28 px desktop / 24 px mobile, entrelinha 1,15.
- Texto principal: 17 px desktop / 16 px mobile, entrelinha 1,65.
- Introdução do hero: 19 px desktop / 17 px mobile, entrelinha 1,55.
- Navegação: 14 px, peso 600. Tags: 12 px, peso 600. Botões: 15 px, peso 600.
- Limitar texto corrido a 58–65 caracteres por linha; descrições de serviço a 420 px.

## Grid, espaçamento e componentes

| Parâmetro | Desktop ≥ 1200 px | Tablet 768–1199 px | Mobile ≤ 767 px |
|---|---|---|---|
| Moldura externa | 20 px | 12 px | 8 px |
| Container | Máximo 1160 px | Largura disponível | Largura disponível |
| Padding interno lateral | 48 px | 32 px | 20 px |
| Grid | 12 colunas, gap 24 px | 8 colunas, gap 24 px | 4 colunas, gap 16 px |
| Padding vertical de seção | 104 px | 80 px | 56 px |
| Gap entre texto e imagem | 64 px | 40 px | 28 px |
| Altura do cabeçalho | 88 px | 80 px | 72 px |

Escala de espaçamento: 4, 8, 12, 16, 24, 32, 48, 64, 80, 104 px. A largura máxima inclui o padding interno, com `box-sizing: border-box`.

- Botão principal: altura mínima 48 px, padding 14 × 24 px, fundo ameixa, texto branco, raio 999 px. Ícone de seta opcional de 18 px, gap 10 px.
- Botão secundário: mesmas medidas, borda 1 px ameixa, fundo transparente.
- Links textuais: sublinhado visível, área de interação mínima 44 × 44 px quando isolados.
- Tags: borda 1 px, padding 5 × 10 px, raio 999 px; sem texto gerado dentro de imagens.
- Cards: raio 20 px, borda 1 px `line`, padding 28 px; sombra apenas se necessária (`0 12px 32px rgba(37,40,33,.06)`).
- Imagens de serviços: raio 24 px. Retrato recortado do hero sem caixa rígida, apoiado em forma orgânica.
- Foco de teclado: outline 3 px ameixa, offset 4 px; não remover sem substituição.

## Página proposta

### 1. Cabeçalho

Marca Psico-C à esquerda, navegação “Sobre”, “Atendimentos”, “Conteúdos” e CTA “Agendar conversa” à direita. Marca final e destinos dependem do conteúdo real. No mobile, menu acessível com botão de 44 px; manter logo e menu na mesma linha.

Não usar uma marca de profissional fictício. Psico-C é o nome de trabalho inferido da pasta do projeto.

### 2. Hero

Grid de 6 colunas de texto e 6 de imagem; altura mínima de 660 px no desktop, sem altura fixa no mobile. Texto alinhado à esquerda, imagem à direita. Largura de texto até 560 px e retrato até 480 px. Um halo lilás de cerca de 460 px, suave, fica atrás da imagem.

Ordem do conteúdo: tag “Psicologia • cuidado individual”, H1, introdução, CTA principal e link secundário. Exemplo de H1: “Um espaço para escutar você.” Exemplo de descrição: “Acolhimento e cuidado para compreender sua história, no seu tempo.” São textos provisórios para composição, sem promessa de resultado.

Um único selo de 88 px pode ficar próximo da base da imagem; evitar texto giratório e rosto encoberto. A fotografia não replica a pose sentada da primeira referência. No mobile, texto antes da imagem, retrato com largura máxima de 360 px e hero sem elementos laterais flutuantes.

### 3. Introdução ao cuidado

Bloco central de até 760 px, H2 e parágrafo curto. Padding vertical de 80 px desktop / 48 px mobile. Divisória sutil em vez de faixa brilhante. O texto descreve a abordagem efetivamente praticada; modalidades das referências não são automaticamente serviços do projeto.

### 4. Atendimentos

Três blocos, gap vertical de 80 px desktop / 48 px mobile. Em desktop, alternar imagem à esquerda e à direita; em mobile, apresentar título, descrição, imagem e CTA em ordem consistente.

| Bloco provisório | Imagem | Medidas desktop | Conteúdo |
|---|---|---|---|
| Atendimento individual online | Notebook com videochamada fictícia | Área 480 × 360 px, proporção 4:3 | Tag, H3, 70–110 palavras no máximo, CTA |
| Sobre o atendimento | Retrato em ambiente acolhedor com detalhe do espaço | Área 440 × 550 px, proporção 4:5 | Tag, H3, descrição e link |
| Caminhos de cuidado | Ilustração abstrata de conexões | Área 480 × 480 px, proporção 1:1 | Explicação sem pentágono ou promessa de transformação |

Esses títulos são placeholders de arquitetura. Só apresentar atendimento em grupo, constelação familiar, podcast ou qualquer modalidade específica após confirmação de que integra a oferta real.

### 5. Depoimentos — condicional

Na primeira referência só aparecem os topos de três cards com avatar e texto. Proposta: três cards de largura igual, gap 24 px, padding 28 px. Mobile em uma coluna, sem carrossel automático.

Só incluir conteúdo real autorizado e adequado ao projeto. Não inventar avaliações, nomes, fotos de pacientes ou resultados. Omitir a seção se não houver material confirmado. As imagens dos prompts de avatar servem apenas como alternativas visuais genéricas em protótipo, nunca como identificação de depoentes reais.

### 6. Encerramento e rodapé — extensão proposta

Não estão visíveis nas capturas. Criar CTA final simples sobre fundo lilás claro, H2 de até duas linhas e botão. Rodapé com marca, contatos reais, links necessários e identificação profissional quando fornecida. Sem inventar dados ou credenciais.

## Imagens, ícones e efeitos

O inventário completo e os prompts estão em `PROMPTS-IMAGENS.md`. Prioridade de geração: retrato do hero, retrato ambiental, notebook, ilustração conceitual e ilustração de conexões.

- Fotografias: luz natural suave, materiais reais, roupas neutras, composição editorial. Evitar excesso de brilho e retoque.
- Ilustrações: formas planas orgânicas, ameixa/sálvia/pêssego, pouco detalhe, coerência entre cenas.
- Logo, selos, ícones, estrela, waveform e diagrama: preferir SVG; textos permanecem em HTML/SVG editável.
- Fundo: usar gradiente CSS pontual. Não aplicar camada de partículas sobre todo o texto.
- Imagens responsivas: exportar WebP/AVIF com fallback, fornecer `width` e `height`, `srcset` e `sizes`. Hero com carregamento prioritário; restantes com lazy loading.
- Alt text descreve função/conteúdo; decorações com alt vazio. Não inserir o copy da página dentro das imagens.

## Movimento e comportamento

- Hover e foco: transições de 160–220 ms em cor e sombra; sem deslocar layout.
- Entrada opcional de conteúdo: opacidade e movimento de no máximo 12 px em 300 ms.
- Respeitar `prefers-reduced-motion`; sem selos giratórios ou partículas permanentes.
- O componente de áudio da referência Raft só entra se houver áudio real; então precisa de controles acessíveis e descrição/transcrição. Não incluir player decorativo sem função.

## Critérios de aceite

- Validar visualmente em 1440, 1024, 768 e 390 px, e ausência de overflow horizontal em 320 px.
- H1 continua legível sem cobrir imagem ou navegação; botões não cortam rótulos.
- Conteúdo real substitui placeholders antes de publicar; nenhum dado profissional ou depoimento é inventado.
- Paleta, espaçamentos, botões e raios seguem os tokens propostos.
- Retratos representam a pessoa correta quando houver identificação profissional; sem reutilizar rostos das referências.
- Composição preserva a sensação editorial e acolhedora, mas difere em cores, posição do título, pose, formas e distribuição dos elementos.
- Não reproduzir marca, textos, selos ou ilustrações distintivas das referências.
- Navegação por teclado, contraste, redução de movimento e descrições de imagens verificados na implementação.
