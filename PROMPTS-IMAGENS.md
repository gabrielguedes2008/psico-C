# Leitura das imagens e prompts para GPT

## Escopo

Análise das duas imagens existentes em `ref`. Os JPGs são capturas de layouts completos, não arquivos individuais dos elementos. Este inventário cobre imagens, marcas e decorações visíveis; não afirma cobrir o restante dos sites, que não foi fornecido.

Arquivo A: `6be2a1df874796a230c3eaa356a93c10.jpg` (675 × 1200 px), página de terapias.

Arquivo B: `cf5dc9e167a013c1f6abe662fbe26b1c.jpg` (1200 × 925 px), hero Raft.

Os prompts abaixo criam alternativas originais para Psico-C, alinhadas a `DESIGN-SPEC.md`. As 16 peças foram criadas em `assets/images`: nove PNGs por geração de imagens e sete SVGs para elementos simples. Veja a [galeria](assets/images/galeria.html) e o [inventário de arquivos entregues](assets/images/README.md). As resoluções abaixo são alvos; as dimensões efetivamente entregues estão no inventário.

## Inventário de todos os elementos visíveis

| ID | Origem e posição | Leitura visual | Tratamento proposto |
|---|---|---|---|
| A01 | A, topo esquerdo | Símbolo lilás orgânico acompanhado de nome profissional | Novo símbolo Psico-C; tipografia aplicada fora da imagem |
| A02 | A, hero central | Mulher adulta, cabelo castanho, blazer claro, calça bege; sentada com pernas cruzadas e mãos unidas | Retrato editorial em outra pose e composição |
| A03 | A, sobre o nome no hero | Selo redondo com símbolo e letras pequenas | Selo próprio com texto editável |
| A04 | A, fundo de toda a página | Névoa clara lilás/rosada, pontos e brilhos brancos | Gradiente CSS; textura opcional de baixa intensidade |
| A05 | A, primeiro serviço à direita | Notebook inclinado, tela de videochamada com dois rostos, formas roxas e arco ao redor | Notebook em perspectiva suave com interfaces fictícias |
| A06 | A, segundo serviço à esquerda | Retrato de mulher sentada em blazer bege, fundo claro, recorte retangular arredondado | Retrato ambiental da mesma pessoa do hero |
| A07 | A, ao lado superior de A06 | Close de mãos com objetos pequenos sobre apoio claro; detalhe pouco legível | Detalhe original do ambiente com mãos, sem atribuir técnica |
| A08 | A, ao lado inferior de A06 | Pequenas figuras humanas coloridas/manipuladas com as mãos | Natureza-morta original com peças de madeira, somente se pertinente |
| A09 | A, terceiro serviço à direita | Diagrama pentagonal roxo; cinco eixos, linhas radiais, marca “Glow Up” no centro | Diagrama circular SVG e arte abstrata própria |
| A10 | A, base, card esquerdo | Avatar circular pequeno, aparente retrato feminino; detalhe insuficiente para descrever rosto | Avatar abstrato opcional |
| A11 | A, base, card central | Avatar circular pequeno com tratamento lilás; detalhe insuficiente | Avatar abstrato opcional |
| A12 | A, base, card direito | Avatar circular pequeno, aparente retrato feminino; detalhe insuficiente | Avatar abstrato opcional |
| B01 | B, topo esquerdo | Marca “Raft” e símbolo circular preto/branco com ponto amarelo | Mesmo novo símbolo de A01, sem segunda marca |
| B02 | B, canto superior esquerdo do hero | Selo preto com estrela lilás e letras em círculo | Mesmo sistema de selo A03, sem duplicação de marca |
| B03 | B, junto da manchete | Estrela amarela de quatro pontas arredondadas | Ícone original ameixa/pêssego em SVG |
| B04 | B, centro inferior | Perfil de cabeça azul escuro com formas internas, mulher de cabelo laranja em postura de equilíbrio, planetas e estrelas | Nova ilustração de acolhimento, com narrativa diferente |
| B05 | B, sobre a ilustração | Selo preto com estrela coral e frase circular | Variante secundária do selo, uso limitado |
| B06 | B, à direita | Dois discos sobrepostos, branco/preto, com pequenos desenhos de cérebro lilás/amarelo | Dois cartões orgânicos com desenho conceitual próprio |
| B07 | B, inferior esquerdo | Play preto circular e waveform de barras pretas/cinza | UI construída em SVG/CSS, só se existir áudio real |
| B08 | B, atrás da cabeça | Ramos/raios creme, planetas coral, pequenos pontos e estrelas | Componentes integrados à nova ilustração, sem recortar a referência |

Títulos, tags, botões, setas simples e textos dos cards são elementos de interface, não fotografias. Devem ser construídos com HTML/CSS/SVG. A moldura de B também é layout, não uma imagem de fundo. A composição B04 contém seus próprios elementos B08; não é necessário gerar planetas e raios separadamente.

## Como usar os prompts

1. Em uma conversa de geração de imagens no GPT, enviar o prompt base abaixo.
2. Enviar um prompt individual por vez, com o identificador correspondente. Repetir o prompt base em uma conversa nova.
3. Para os retratos, usar a fotografia autorizada da profissional como referência, quando disponível. Sem foto, tratar a pessoa gerada como modelo fictícia de protótipo.
4. Depois de aprovar o primeiro retrato e a primeira ilustração, anexá-los como referências nas gerações seguintes para manter consistência.
5. Solicitar transparência real nas peças indicadas. Se não estiver disponível, usar fundo marfim uniforme e recortar depois; não aceitar quadriculado desenhado como transparência.
6. Aplicar nomes, títulos, rótulos e textos de interface no código. Não pedir ao modelo para escrever letras minúsculas em telas ou selos.

## Prompt base — copiar e enviar primeiro

```text
Você vai criar uma família de imagens originais para Psico-C, um projeto de site de psicologia em português brasileiro. A direção visual combina fotografia editorial acolhedora e ilustração orgânica contemporânea. As imagens devem transmitir escuta, humanidade, serenidade e autonomia, sem promessas de cura ou resultados.

Paleta de referência: fundo marfim #FAF8F3, ameixa #694875, lilás claro #E5DAED, sálvia #A9BAAA, pêssego #EAB89A e carvão #252821. Nas fotografias, preservar tons de pele naturais e usar a paleta apenas no ambiente, roupas ou objetos. Nas ilustrações, usar essas cores como direção aproximada; os códigos exatos serão aplicados no layout.

Fotografias: luz natural lateral difusa, contraste suave, textura real de pele e tecido, ambiente sóbrio, expressão acolhedora sem sorriso publicitário exagerado, roupas neutras, composição com espaço de respiro. Evitar aparência de banco de imagens genérico, retoque plástico, mãos deformadas, dedos extras e objetos fundidos.

Ilustrações: formas orgânicas limpas, desenho editorial plano, textura de papel muito sutil, contornos delicados quando necessários, poucos elementos e leitura clara em tamanhos pequenos. Não misturar 3D brilhante, anime ou estética infantil com essa linguagem.

Criar uma composição própria a partir da descrição de cada peça. Não reproduzir marcas, rostos, textos ou ilustrações das capturas de referência. Não incluir logotipo Raft, nome Maria Antonietta Silva, marca Glow Up, marcas d'água, assinatura ou texto dentro da imagem. Não produzir uma captura do site inteiro; gerar apenas o asset solicitado.

Quando a peça exigir uma pessoa real, preservar sua identidade a partir da foto autorizada anexada. Se não houver foto, usar uma modelo fictícia para protótipo e não sugerir que é a profissional do site. Manter a mesma identidade aprovada em todos os retratos subsequentes.

Obedecer à proporção, ao enquadramento, à área livre e ao tipo de fundo indicados no prompt individual. Transparência significa canal alfa real, não padrão quadriculado. Entregar uma única composição por solicitação.
```

## Prompts individuais

### P01 — símbolo original da marca (A01 e B01)

Destino sugerido: `simbolo-psico-c.png`. Proporção 1:1; alvo 1024 × 1024; fundo transparente. Preferir reconstrução final em SVG.

```text
Crie apenas um símbolo gráfico original para uma identidade de psicologia chamada Psico-C, sem escrever o nome. Desenhe duas curvas orgânicas assimétricas que formam um espaço aberto central, evocando escuta e encontro. Não usar cérebro literal, coração literal, flor de lótus ou o símbolo circular da marca Raft. Traço de espessura uniforme, extremidades arredondadas, cor ameixa #694875. Forma simples e reconhecível a 24 pixels. Símbolo centralizado ocupando cerca de 65% de uma tela quadrada, com bastante margem. Sem sombra, mockup ou textura. Fundo realmente transparente. Uma única proposta.
```

### P02 — retrato recortado do hero (A02)

Destino: `hero-profissional.png`. Proporção 4:5; alvo 1600 × 2000; transparente. Asset prioritário.

```text
Crie um retrato fotográfico editorial de uma profissional adulta em pose natural, sentada em uma poltrona de tecido claro, tronco em leve ângulo e rosto voltado para a câmera. Usar a identidade da foto autorizada anexada; sem foto, criar uma modelo fictícia adulta para protótipo. Blusa marfim e calça em tom sálvia muito suave, cabelo natural, expressão tranquila e acessível. Mãos relaxadas e inteiras apoiadas no colo, sem juntar as palmas e sem pose de meditação. Mostrar da cabeça até abaixo dos joelhos, sem cortar cabeça ou mãos. Iluminação suave lateral, pele e tecidos reais. Pessoa e poltrona formam um único recorte sobre fundo transparente, com sombra de contato discreta. Composição vertical 4:5, pessoa ligeiramente deslocada para a direita, margem de 12% no topo. Não incluir letras, halo, selo, objetos clínicos ou decoração atrás: esses elementos serão aplicados no layout.
```

### P03 — selo gráfico sem texto (A03, B02 e B05)

Destino: `selo-acolhimento.png`. Proporção 1:1; alvo 1024 × 1024; transparente. Usar um único selo na página; preferir SVG.

```text
Crie um pequeno selo editorial circular original, sem qualquer texto. Dois anéis finos ameixa, levemente espaçados, circundam um símbolo central de duas curvas abertas que sugere encontro. Fundo interno marfim sólido e exterior transparente. Aparência leve e elegante, com ampla área vazia entre símbolo e borda para receber letras editáveis depois. Não usar estrela como elemento central, letras aleatórias, medalha metálica, relevo ou brilho. Simétrico, frontal, proporção quadrada, boa legibilidade quando reduzido para 88 pixels.
```

### P04 — textura ambiente opcional (A04)

Destino: `textura-halo.webp`. Proporção 3:2; alvo 2400 × 1600; fundo opaco. CSS é a opção principal, sem geração necessária.

```text
Crie uma textura de fundo abstrata extremamente suave para um site editorial de psicologia. Base uniforme marfim #FAF8F3, com uma única névoa difusa de lilás claro e sálvia concentrada no terço direito. Preservar os dois terços esquerdos praticamente lisos para leitura de texto. Granulação de papel quase imperceptível, sem formas reconhecíveis, sem pessoas, sem estrelas, sem pontos luminosos e sem vinheta escura. Contraste muito baixo. Formato horizontal 3:2, imagem opaca, sem texto ou bordas.
```

### P05 — notebook com atendimento online (A05)

Destino: `atendimento-online.png`. Proporção 4:3; alvo 1600 × 1200; transparente. Asset prioritário.

```text
Crie uma fotografia de produto editorial de um notebook fino e sem marca, aberto, visto em perspectiva de três quartos com inclinação discreta. Tela com videochamada fictícia composta por uma janela principal de uma profissional adulta e uma pequena janela de outra pessoa adulta; não utilizar pessoas das referências. Interface minimalista, sem nomes, mensagens ou letras, apenas ícones simples. Expressões naturais e acolhedoras. Notebook em tom prata quente, teclado e dobradiças geometricamente corretos, tela sem reflexos que escondam os rostos. Inserir uma única fita orgânica sálvia discreta atrás do aparelho, sem reproduzir arcos roxos das referências. Objeto completo, margem de 10% em todos os lados. Fundo realmente transparente, sombra suave de contato, formato horizontal 4:3. Sem logotipos e sem texto.
```

### P06 — retrato no espaço de atendimento (A06)

Destino: `profissional-ambiente.webp`. Proporção 4:5; alvo 1600 × 2000; fundo opaco. Asset prioritário.

```text
Usando a foto autorizada da profissional e o retrato aprovado como referências de identidade, crie uma segunda fotografia editorial da mesma pessoa em um espaço de atendimento acolhedor. Sem identidade fornecida, manter a mesma modelo fictícia do protótipo. Pessoa sentada de modo natural em poltrona de tecido claro, roupa marfim com detalhe sálvia, mãos relaxadas no colo, postura confortável e expressão serena. Ambiente com parede marfim, cortina de linho, pequena planta e móvel de madeira clara desfocado, sem símbolos religiosos ou instrumentos médicos. Luz natural lateral, textura real, enquadramento da cabeça aos joelhos, sem cortar mãos. Pessoa ocupa aproximadamente 65% da altura. Composição vertical 4:5, fundo integrado e opaco. Não aplicar bordas arredondadas na imagem: serão feitas por CSS. Sem letras ou marcas.
```

### P07 — detalhe de mãos e espaço (A07)

Destino: `detalhe-escuta.webp`. Proporção 4:3; alvo 1200 × 900; fundo opaco. Opcional; não precisa compor uma colagem.

```text
Crie um close fotográfico editorial de mãos adultas naturais apoiadas ao lado de um caderno fechado sem marca sobre uma mesa de madeira clara. Uma xícara de cerâmica sálvia ao fundo, fora de foco. Luz natural suave, roupa de linho marfim aparecendo discretamente nas mangas, atmosfera de pausa e escuta. Mãos anatomicamente corretas e completas, sem toque encenado entre duas pessoas. Nenhuma escrita visível, nenhuma informação pessoal, nenhum equipamento médico. Enquadramento horizontal 4:3 com área livre de 15% nas bordas e fundo real opaco.
```

### P08 — peças de madeira, alternativa ao detalhe familiar (A08)

Destino: `pecas-conexao.webp`. Proporção 4:3; alvo 1200 × 900; fundo opaco. Condicional à pertinência do conteúdo; não atribuir eficácia ou modalidade à foto.

```text
Crie uma fotografia editorial de três pequenas peças abstratas de madeira com formas diferentes, posicionadas de maneira espaçada sobre uma mesa clara. Uma mão adulta ajusta delicadamente uma das peças; mostrar dedos completos e naturais. Peças simples sem rostos ou uniformes, com detalhes discretos em ameixa, sálvia e pêssego. Fundo marfim desfocado, luz de janela suave, composição horizontal 4:3. A imagem sugere relações e diferentes perspectivas de forma abstrata, sem simular paciente real, diagnóstico ou técnica específica. Não copiar as figuras coloridas da referência, não incluir texto, cartas ou marca.
```

### P09 — caminhos de cuidado, arte abstrata (A09)

Destino: `caminhos-cuidado.png`. Proporção 1:1; alvo 1600 × 1600; transparente. Asset prioritário. Os rótulos ficam fora da imagem.

```text
Crie uma ilustração editorial abstrata quadrada sobre conexões e cuidado. Cinco formas orgânicas diferentes, nas cores ameixa, sálvia, lilás e pêssego, ficam distribuídas de modo assimétrico ao redor de um espaço central vazio. Curvas delicadas conectam algumas formas sem produzir um pentágono, radar ou hierarquia. Composição leve, poucos detalhes, textura de papel muito sutil apenas dentro das formas. Centro com espaço livre de aproximadamente 25% da tela para conteúdo editável posterior. Não incluir palavras, logotipo, estrela central ou referência à marca Glow Up. Fundo transparente e margem externa de 12%.
```

Se for necessário um diagrama informativo, construir em SVG: círculo de 320 px, cinco nós de 12 px, linhas de 1,5 px e rótulos em HTML/SVG. Definir os nomes com base na abordagem real; não reaproveitar automaticamente os cinco pilares da referência.

### P10 — avatar genérico 1 (A10)

Destino: `avatar-abstrato-01.png`. Proporção 1:1; alvo 512 × 512; exterior transparente. Opcional para protótipo.

```text
Crie um avatar editorial abstrato, sem representar uma pessoa real. Dentro de um disco marfim, duas formas suaves ameixa e lilás se aproximam e deixam uma pequena abertura central. Composição limpa, sem rosto, letras, olhos ou símbolos médicos. Ícone legível a 48 pixels. Formato quadrado com disco ocupando 85% da área, exterior realmente transparente. Não incluir contorno decorativo pesado.
```

### P11 — avatar genérico 2 (A11)

Destino: `avatar-abstrato-02.png`. Mesmas dimensões e acabamento de P10.

```text
Crie um segundo avatar do mesmo sistema visual do avatar abstrato aprovado. Dentro de um disco marfim, desenhe três formas orgânicas sálvia e ameixa em composição equilibrada, com espaço livre entre elas. Variar a disposição sem alterar a espessura visual, a escala e o acabamento da família. Sem rosto, letras ou representação de pessoa real. Ícone legível a 48 pixels, formato 1:1, disco ocupando 85% da área e exterior transparente.
```

### P12 — avatar genérico 3 (A12)

Destino: `avatar-abstrato-03.png`. Mesmas dimensões e acabamento de P10.

```text
Crie um terceiro avatar do mesmo sistema visual dos avatares abstratos aprovados. Dentro de um disco marfim, combine uma curva ampla ameixa e uma pequena forma pêssego, com composição acolhedora e assimétrica. Preservar simplicidade, escala e acabamento da família. Sem rosto, letras ou identificação de pessoa real. Ícone legível a 48 pixels, formato 1:1, disco ocupando 85% da área e exterior transparente.
```

Os três avatares não substituem fotografias autorizadas de pessoas reais e não autorizam inventar depoimentos. Se a seção for omitida, esses assets também são dispensados.

### P13 — acento orgânico, alternativa à estrela (B03)

Destino: `acento-organico.png`. Proporção 1:1; alvo 512 × 512; transparente. Preferir SVG.

```text
Crie um pequeno acento gráfico editorial original, em forma de quatro pétalas irregulares unidas por um centro estreito, com curvas suaves e assimetria discreta. Cor pêssego sólida, sem gradiente, contorno, sombra ou textura. Não reproduzir a estrela amarela arredondada da referência. Um único símbolo centralizado, ocupando 70% de uma tela quadrada, com exterior transparente. Precisa funcionar a 32 pixels e não parecer um logotipo existente.
```

### P14 — ilustração conceitual de acolhimento (B04 e B08)

Destino: `ilustracao-acolhimento.png`. Proporção 4:5; alvo 1600 × 2000; transparente. Asset prioritário; reservar para seção secundária ou alternativa ao retrato no hero.

```text
Crie uma ilustração editorial original sobre acolhimento e espaço interior. Uma pessoa adulta com aparência não infantil está sentada de maneira confortável em uma forma orgânica que lembra um pequeno jardim protegido. Ela segura uma xícara e observa tranquilamente uma abertura de luz. Ao redor, poucas folhas amplas e duas formas abstratas suspensas sugerem pensamentos, sem planetas ou símbolos esotéricos. Composição vertical 4:5, foco na pessoa e no espaço de respiro, margem de 12%.

Estilo plano sofisticado, textura de papel muito sutil, formas grandes, ameixa escura como base, sálvia, marfim, lilás e pêssego como complementos. Figura anatomicamente coerente, mãos simples mas corretas. Não desenhar perfil de cabeça gigante, pessoa em yoga, órbita na cintura, cabelo laranja esvoaçante ou a composição da referência Raft. Sem letras, selo ou marca. Fundo transparente fora da composição; a área interna do jardim pode ter cor sólida.
```

### P15 — duas perspectivas, alternativa aos cérebros (B06)

Destino: `duas-perspectivas.png`. Proporção 3:2; alvo 1200 × 800; transparente. Opcional.

```text
Crie uma pequena ilustração editorial com dois cartões de contorno orgânico parcialmente sobrepostos, um marfim com borda ameixa fina e outro sálvia. Cada cartão contém um desenho abstrato de linhas curvas abertas, diferente mas complementar, evocando duas perspectivas de uma conversa. Não usar cérebro anatômico, discos preto e branco, letras, emojis ou rostos. Vista frontal, inclinação discreta e diferente em cada cartão, estilo plano com sombra muito suave. Formato horizontal 3:2, objetos completos e centralizados, margem de 15%, fundo transparente.
```

### P16 — estudo visual do áudio (B07)

Destino opcional: `estudo-audio.png`. Proporção 4:1; alvo 1600 × 400; transparente. Referência visual apenas: o componente funcional deve ser HTML/SVG.

```text
Crie um estudo gráfico plano para um pequeno componente de áudio editorial. À esquerda, um círculo ameixa com triângulo marfim de reprodução centralizado. À direita, doze barras verticais arredondadas de alturas variadas, espaçadas uniformemente, alternando ameixa e sálvia clara. Composição horizontal 4:1, muito limpa, sem texto, números, interface adicional, sombra ou perspectiva. Fundo transparente e margem de 10%. Não reproduzir exatamente a sequência de barras da referência. Este desenho será usado apenas como referência para implementar um player acessível.
```

## Sequência de produção e critérios de revisão

- Gerar P02, aprovar identidade e enquadramento; usar o resultado como referência de P06. P05 não precisa retratar a mesma pessoa, mas pode fazê-lo com foto autorizada.
- Gerar P14 e usar seu acabamento como referência para P09 e P15.
- P01, P03, P13 e P16 são preferencialmente construídos em SVG; prompts permitem estudos no GPT quando desejado.
- P04, P07, P08, P10–P12 e P15 são opcionais; gerar apenas se entrarem no layout. Não acumular todas as decorações em uma única página.
- Revisar rosto, mãos, teclado, geometria da tela, recorte e transparência em tamanho real.
- Conferir contraste, unidade de paleta e legibilidade no tamanho final; imagens claras não devem prejudicar textos sobrepostos.
- Exportar fotografias opacas em WebP/AVIF e recortes em formato com alfa. Preservar originais aprovados em alta resolução.
- Não colocar nomes, resultados clínicos, depoimentos ou títulos nos pixels das imagens.
- Para cada imagem usada, escrever alt text a partir do resultado real; para elementos puramente decorativos usar alt vazio.
