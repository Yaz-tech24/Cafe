const menuCategories = {
  sobremesas: {
    title: 'Sobremesas',
    note: 'Sobremesa individual: 120 MTS.',
    items: [
      ['Mousse de chocolate, maracujá ou morango', 'Mousse cremosa e leve, com sabor à escolha.', '120 MTS'],
      ['Custard com gelatina e fruta', 'Camadas de creme custard, gelatina colorida e fruta fresca.', '120 MTS'],
      ['Torta de maracujá, morango ou chocolate', 'Torta doce com recheio cremoso e cobertura aromática.', '120 MTS'],
      ['Torta simples com geleia', 'Torta macia recheada com geleia de fruta.', '120 MTS'],
      ['Semifrio de maracujá, morango ou ananás', 'Sobremesa fresca e cremosa, servida gelada.', '120 MTS'],
      ['Cheesecake original ou de fruta', 'Base crocante com creme de queijo e sabor de maracujá, limão, ananás ou morango.', '120 MTS'],
      ['Red Velvet', 'Bolo vermelho aveludado com cobertura cremosa.', '120 MTS'],
      ['Bolo de brigadeiro', 'Bolo macio com brigadeiro de chocolate.', '120 MTS'],
      ['Pavê de chocolate ou caramelo', 'Camadas de creme, bolacha e molho doce.', '120 MTS'],
      ['Bolo gelado / Floresta Negra', 'Bolo gelado com creme e diferentes combinações de chocolate e fruta.', 'Consultar'],
      ['Bolo prestígio', 'Bolo de chocolate com recheio de coco.', 'Consultar'],
      ['Bolo de custard', 'Bolo leve aromatizado com creme custard.', 'Consultar'],
      ['Bolo de massa folhada', 'Camadas finas e crocantes com recheio suave.', 'Consultar'],
      ['Bolo de caramelo', 'Bolo macio coberto ou recheado com caramelo.', 'Consultar'],
      ['Bolo de maracujá', 'Bolo aromático com cobertura ou recheio de maracujá.', 'Consultar'],
      ['Bolo de ananás', 'Bolo macio com pedaços e sabor de ananás.', 'Consultar'],
      ['Bolo Xadre', 'Bolo tradicional em camadas claras e escuras.', 'Consultar'],
      ['Bolo simples', 'Laranja ou mármore, sem cobertura.', 'Consultar'],
      ['Tarte de amêndoa', 'Tarte crocante preparada com amêndoas.', 'Consultar'],
      ['Tiramisu', 'Sobremesa de biscoito embebido com creme de café e cacau.', 'Consultar']
    ]
  },
  takeaway: {
    title: 'Pratos do Dia / Take Away',
    note: 'Opções diárias para levar. Confirme a disponibilidade do dia antes de encomendar.',
    items: [
      ['1/4 de frango grelhado', 'Frango grelhado com arroz e batata.', '250 MTS'],
      ['Peixe Pende', 'Peixe com arroz, batata e salada.', '250 MTS'],
      ['Feijoada', 'Feijoada com carne, arroz e salada.', '250 MTS'],
      ['Guisado de frango ou carne', 'Guisado com arroz e salada.', '250 MTS'],
      ['1/4 de frango frito', 'Frango frito com couve de amendoim e arroz.', '250 MTS'],
      ['Almôndegas de carne', 'Almôndegas servidas com arroz ou esparguete.', '250 MTS'],
      ['1/2 frango grelhado', 'Frango com arroz, batata e salada; inclui sobremesa.', '400 MTS'],
      ['Caldeirada de cabrito', 'Cabrito com arroz e salada; inclui sobremesa.', '400 MTS'],
      ['Bife chinês', 'Bife com arroz de vegetais e salada; inclui sobremesa.', '400 MTS'],
      ['Bife acebolado', 'Bife com arroz, batata e salada; inclui sobremesa.', '400 MTS'],
      ['Filete de peixe panado', 'Peixe panado com arroz e batata; inclui sobremesa.', '400 MTS'],
      ['Estrogonofe de frango ou carne', 'Estrogonofe com arroz e salada; inclui sobremesa.', '400 MTS'],
      ['Espetada de frango ou carne', 'Espetada com arroz e salada; inclui sobremesa.', '400 MTS'],
      ['Caril indiano de frango', 'Caril servido com apas ou arroz; inclui sobremesa.', '400 MTS'],
      ['Peixe Pende no forno', 'Peixe assado com batatas douradas e arroz; inclui sobremesa.', '400 MTS'],
      ['1/2 frango estufado', 'Frango estufado com arroz e salada; inclui sobremesa.', '400 MTS'],
      ['Carne assada na panela', 'Carne assada com arroz, batata e salada; inclui sobremesa.', '400 MTS'],
      ['Sobremesa do dia', 'Fruta da época para acompanhamento da opção de 400 MTS.', 'Incluída']
    ]
  },
  buffet: {
    title: 'Monte seu Buffet',
    note: 'Os pratos podem ser trocados no pedido do cliente, sem custos adicionais.',
    items: [
      ['Frango à Zambézia', 'Frango preparado com coco e especiarias, servido com arroz de coco.', 'Consultar buffet'],
      ['Bife chinês', 'Bife salteado com molho chinês e arroz de vegetais.', 'Consultar buffet'],
      ['Bife com natas e cogumelos', 'Tiras de carne em molho cremoso de natas com cogumelos.', 'Consultar buffet'],
      ['Lasanha de carne ou frango', 'Camadas de massa, carne ou frango e molho gratinado.', 'Consultar buffet'],
      ['Butter chicken com apas', 'Frango em molho indiano cremoso com pão apas.', 'Consultar buffet'],
      ['Biryani de frango, carne ou camarão', 'Arroz aromático com carne ou marisco e especiarias.', 'Consultar buffet'],
      ['Caril de amendoim com frango', 'Frango em molho de caril e pasta de amendoim.', 'Consultar buffet'],
      ['Espetadas de carne ou frango', 'Cubos de carne ou frango grelhados em espetos.', 'Consultar buffet'],
      ['Limino de mandioca', 'Prato tradicional de mandioca com frango ou peixe.', 'Consultar buffet'],
      ['Caril de coco de camarão', 'Camarão em molho cremoso de coco e especiarias.', 'Consultar buffet'],
      ['Caril de cabrito com apas', 'Cabrito em caril servido com pão apas.', 'Consultar buffet'],
      ['Almôndegas de carne', 'Almôndegas em molho de tomate ou molho da casa.', 'Consultar buffet'],
      ['Massa bolonhesa', 'Massa com molho de carne, tomate e ervas.', 'Consultar buffet'],
      ['Penne ao molho de tomate e ervas', 'Penne coberto com molho fresco de tomate e ervas aromáticas.', 'Consultar buffet'],
      ['Arroz de gambas', 'Arroz solto cozinhado com gambas e temperos.', 'Consultar buffet'],
      ['Frango estufado na panela', 'Frango cozido lentamente em molho tradicional.', 'Consultar buffet'],
      ['Arroz ao alho e coentros', 'Arroz aromatizado com alho e coentros frescos.', 'Consultar buffet'],
      ['Arroz chau chau', 'Arroz salteado com legumes e temperos variados.', 'Consultar buffet'],
      ['Arroz de feijão vermelho com vegetais', 'Arroz acompanhado de feijão vermelho e legumes.', 'Consultar buffet']
    ]
  },
  encomendas: {
    title: 'Encomendas',
    note: 'Preços por 3/4, 6/8 ou 10/12 pessoas, conforme indicado.',
    items: [
      ['Massa chinesa', 'Massa salteada com frango, bife ou camarão.', '1.200 / 2.800 / 4.000 MTS'],
      ['Lasanha de frango ou carne', 'Lasanha gratinada com carne ou frango.', '1.500 / 3.000 / 4.200 MTS'],
      ['Lasanha de camarão', 'Lasanha cremosa preparada com camarão.', '1.800 / 3.500 / 5.000 MTS'],
      ['Bacalhau com natas', 'Bacalhau desfiado em molho cremoso de natas e gratinado.', '2.500 / 4.500 / 6.000 MTS'],
      ['Bacalhau Gomes de Sá', 'Bacalhau assado com batata, cebola e ovo.', '2.500 / 4.200 / 6.000 MTS'],
      ['Arroz chau chau', 'Arroz salteado com legumes e proteína.', '1.200 / 2.800 / 4.000 MTS'],
      ['Arroz doce', 'Arroz cremoso adoçado, servido como sobremesa.', '500 / 1.000 / 1.500 MTS'],
      ['Caril de cabrito ou frango com apas', 'Caril aromático com pão apas.', '1.200 / 2.400 / 3.800 MTS'],
      ['Akni de frango, cabrito ou carne', 'Arroz temperado cozinhado com carne e especiarias.', '1.200 / 2.400 / 3.800 MTS'],
      ['Biryani', 'Arroz aromático em camadas com carne e especiarias.', '1.200 / 2.400 / 3.800 MTS'],
      ['Butter chicken com naan', 'Frango em molho cremoso servido com pão naan.', '1.200 / 2.400 / 3.800 MTS'],
      ['Camarão frito com maionese', 'Camarão frito servido com molho de maionese.', '2.800 / 5.200 MTS'],
      ['Salada de lulas', 'Lulas tenras com legumes e tempero de salada.', '2.200 / 4.000 / 5.200 MTS'],
      ['Salada de massas', 'Massa fria com frango, atum ou palone.', '2.200 / 4.000 / 5.200 MTS'],
      ['Maionese de atum', 'Maionese cremosa preparada com atum.', '1.500 / 2.800 / 3.800 MTS'],
      ['Maionese de camarão', 'Maionese cremosa preparada com camarão.', '2.000 / 3.500 / 4.500 MTS'],
      ['Bife fillet com molho especial', 'Bife especial servido em molheira grande ou pequena.', '4.000 / 8.000 MTS'],
      ['Arroz de mariscos', 'Arroz com camarão, lulas, amêijoas, peixe e caranguejo.', '7.500 / 15.000 MTS'],
      ['Bacalhau em formato grande ou pequeno', 'Bacalhau com natas ou à Gomes de Sá / à Brás.', 'Consultar tamanhos']
    ]
  },
  coffee: {
    title: 'Coffee Break',
    note: 'Buffets, lanches e bebidas preparados para reuniões, seminários e eventos.',
    items: [
      ['Coffee break buffet completo', 'Inclui 3 salgados, 1 pão recheado, 1 mini sanduíche, fruta ou iogurte, biscoitos, queques ou bolo, mandioca ou batata doce e bebidas.', '650 MTS por pessoa'],
      ['Lanche simples', '1 sandes mista ou de atum ou palone, 1 fruta e 1 sumo de 250 ml.', '210 MTS'],
      ['Lanche reforçado', 'Prego no pão ou sandes de frango ou carne assada, fruta, sumo de 250 ml e água pequena.', '390 MTS'],
      ['Lanche reforçado premium', 'Prego ou sandes de frango, 3 salgados, 1 mini pizza, fruta, 2 gulabos e sumo de 250 ml.', '520 MTS'],
      ['3 salgados', 'Chamuças, rissois, croquete conchinha ou spring rolls.', 'Consultar'],
      ['Pão recheado', 'Mini hambúrguer, pãozinho de frango ou mini pizza.', 'Consultar'],
      ['Mini sanduíche', 'De atum, frango, misto ou prego.', 'Consultar'],
      ['Fruta da época', 'Fruta fresca selecionada para o serviço.', 'Consultar'],
      ['Iogurte', 'Iogurte individual para o coffee break.', 'Consultar'],
      ['Biscoitos / Gulabos', 'Pequenos biscoitos ou gulabos indianos.', 'Consultar'],
      ['Queques / Bolo quadrado', 'Porções individuais de queque ou bolo.', 'Consultar'],
      ['Mandioca cozida', 'Mandioca cozida servida como opção de acompanhamento.', 'Consultar'],
      ['Batata doce', 'Batata doce cozida servida como opção de acompanhamento.', 'Consultar'],
      ['Abóbora', 'Abóbora cozida servida como opção de acompanhamento.', 'Consultar'],
      ['Chá', 'Chá quente servido com açúcar ou adoçante.', 'Consultar'],
      ['Café', 'Café quente com leite disponível como opção.', 'Consultar'],
      ['Leite', 'Leite quente para acompanhar o coffee break.', 'Consultar'],
      ['Sumo', 'Sumo fresco para individual ou buffet.', 'Consultar']
    ]
  },
  salgados: {
    title: 'Doces e Salgados',
    note: 'Pastelaria variada para festas, reuniões e encomendas especiais.',
    items: [
      ['Chamuças', 'Pastel salgado com carne, frango ou queijo.', '400 MTS'],
      ['Rissois de camarão', 'Pastel empanado recheado com camarão.', '450 MTS'],
      ['Croquetes de carne', 'Croquete crocante com recheio de carne.', '400 MTS'],
      ['Conchinha', 'Salgado crocante preparado em forma de concha.', '400 MTS'],
      ['Spring roll de vegetais', 'Rolo crocante recheado com vegetais.', '400 MTS'],
      ['Spring roll de camarão', 'Rolo crocante recheado com camarão.', '500 MTS'],
      ['Pastel de bacalhau', 'Pastel de massa com recheio de bacalhau.', '500 MTS'],
      ['Almofadinha', 'Salgado macio com recheio da pastelaria.', '400 MTS'],
      ['Bolinha de frango', 'Bolinha frita ou assada recheada com frango.', '350 MTS'],
      ['Almôndegas', 'Almôndegas de frango ou carne.', '360 MTS'],
      ['Folhado de frango ou carne', 'Massa folhada crocante com recheio quente.', '500 MTS'],
      ['Tempura de camarão', 'Camarão panado e frito até ficar crocante.', '600 MTS'],
      ['Mini pizza', 'Mini pizza de frango, atum ou mexicana.', '600 MTS'],
      ['Mini hamburger', 'Mini hambúrguer de frango ou carne.', '600 MTS'],
      ['Pãozinho recheado', 'Pão pequeno recheado com frango, atum ou carne.', '600 MTS'],
      ['Mini croissant misto', 'Croissant pequeno com recheio misto.', '960 MTS'],
      ['Mini croissant de frango', 'Croissant pequeno recheado com frango.', '960 MTS'],
      ['Queques simples', 'Queques individuais de massa tradicional.', '500 MTS'],
      ['Argolas / Bolas de Berlim', 'Doce frito e macio; simples ou recheado.', '450 MTS'],
      ['Donuts / Bola de Berlim com recheio', 'Recheada com Nutella, creme pasteleiro ou outro sabor.', '500 MTS'],
      ['Mini pastel de nata', 'Mini pastel de nata com creme caramelizado.', '960 MTS'],
      ['Mini pastel de coco', 'Mini pastel doce recheado com coco.', '500 MTS'],
      ['Pastel de nata grande', 'Pastel de nata de tamanho grande.', '500 MTS'],
      ['Palmier', 'Folhado doce crocante em forma de coração.', '360 MTS'],
      ['Mini croissant simples', 'Mini croissant de massa folhada simples.', '450 MTS'],
      ['Mini croissant recheado', 'Croissant com Nutella, creme pasteleiro ou caramelo.', '450 MTS'],
      ['Mini pãozinho de leite', 'Pãozinho doce macio em porção mini.', '300 MTS'],
      ['Croissant / pãozinho grande', 'Porção grande de croissant ou pãozinho doce.', '720 MTS'],
      ['Orelhudos', 'Doce tradicional de massa folhada fina e crocante.', '600 MTS'],
      ['Quadrado de chocolate', 'Porção individual de bolo ou doce de chocolate.', '600 MTS'],
      ['Quadrado de maracujá', 'Quadrado doce com sabor cítrico de maracujá.', '600 MTS'],
      ['Quadrado de massa folhada', 'Doce crocante em quadrado de massa folhada.', '600 MTS'],
      ['Quadrado de caramelo', 'Quadrado doce coberto com caramelo.', '600 MTS'],
      ['Quadrado de Red Velvet', 'Porção individual de bolo Red Velvet.', '720 MTS'],
      ['Negritos', 'Mini bolos escuros cobertos com creme ou chocolate.', '600 MTS'],
      ['Bolinhos de coco mini', 'Bolinhos pequenos preparados com coco.', '400 MTS'],
      ['Queque de mandioca', 'Queque tradicional preparado com mandioca.', '600 MTS'],
      ['Gulabos', 'Doce indiano servido em porção pequena.', '400 MTS'],
      ['Brigadeiros', 'Brigadeiros individuais de chocolate.', '600 MTS'],
      ['Eclairs', 'Massa choux recheada com creme doce.', '600 MTS'],
      ['Mini canudos', 'Mini canudos crocantes recheados.', '600 MTS'],
      ['Biscoitos simples', 'Biscoitos tradicionais vendidos por 1 kg.', '1.200 MTS'],
      ['Doces indianos', 'Ladu, barfi, maghaj e monthar vendidos por 1 kg.', '1.600 MTS']
    ]
  },
  finger: {
    title: 'Finger Food',
    note: 'Porções individuais fáceis de servir em pé e ideais para receções.',
    items: [
      ['Mini shawarma', 'Mini shawarma preparado com carne temperada.', '750 MTS'],
      ['Mini naan', 'Pão naan pequeno com recheio ou acompanhamento.', '600 MTS'],
      ['Empadas', 'Mini empadas com recheio saboroso.', '600 MTS'],
      ['Quiche de atum ou frango', 'Tarte pequena com massa e recheio cremoso.', '500 MTS'],
      ['Rolinho de salsicha', 'Mini rolinho crocante com salsicha.', '420 MTS'],
      ['Mini cachorro', 'Cachorro quente em formato pequeno.', '600 MTS'],
      ['Cachorro no palito', 'Porção de cachorro quente servido no palito.', '600 MTS'],
      ['Mini prego', 'Prego pequeno servido em pão.', '900 MTS'],
      ['Canapé de atum ou frango', 'Base pequena com creme e cobertura de atum ou frango.', '600 MTS'],
      ['Canapé de carangueijo', 'Base pequena com creme e carangueijo.', '900 MTS'],
      ['Isca de peixe panado', 'Tiras de peixe empanadas e fritas.', '750 MTS'],
      ['Asinhas de frango', 'Asinhas de frango com batatinhas.', '750 MTS'],
      ['Pops com batatinhas', 'Seis pops servidos com batatinhas.', '1.440 MTS'],
      ['Espeto de palony', 'Espeto de palony servido com batata.', '500 MTS'],
      ['Espeto de carne ou frango', 'Espeto com carne ou frango e batatinhas.', '1.080 MTS'],
      ['Espeto de fígado', 'Espeto de fígado com batatinhas quadradas.', '600 MTS'],
      ['Mini kebab', 'Kebab de frango ou carne com pão naan.', '600 MTS'],
      ['Camarão alhinho', 'Camarão ao alho servido com torradas.', '600 MTS'],
      ['Tábua de queijos pequena', 'Seleção de queijos em porção pequena.', '2.500 MTS'],
      ['Tábua de queijos grande', 'Seleção de queijos em porção grande.', '5.000 MTS']
    ]
  },
  transporte: {
    title: 'Serviços de Transporte',
    note: 'Taxa adicional aplicada conforme a zona de entrega.',
    items: [
      ['Entrega na Cidade', 'Transporte dentro da cidade de Tete.', '500 MTS'],
      ['Entrega em Matema', 'Transporte para a zona de Matema.', '1.000 MTS'],
      ['Entrega em Moatize', 'Transporte para o distrito de Moatize.', '1.500 MTS']
    ]
  }
};

const links = [
  ['sobremesas', 'Sobremesas'], ['takeaway', 'Pratos do Dia'], ['buffet', 'Monte seu Buffet'],
  ['encomendas', 'Encomendas'], ['coffee', 'Coffee Break'], ['salgados', 'Doces e Salgados'],
  ['finger', 'Finger Food'], ['transporte', 'Transporte']
];

(() => {
  const page = document.body.dataset.category;
  if (!page) return;
  const category = menuCategories[page];
  const storageKey = 'cafeConfiancaPedido';
  let stored = {};
  try { stored = JSON.parse(sessionStorage.getItem(storageKey) || '{}'); } catch (_) { stored = {}; }
  if (!stored[page]) stored[page] = {};
  const selected = new Map(Object.entries(stored[page]));
  const nav = document.getElementById('category-nav');
  nav.innerHTML = links.map(([slug, label]) =>
    `<a class="${slug === page ? 'active' : ''}" href="menu-${slug}.html">${label}</a>`
  ).join('');
  document.title = `${category.title} | Café Confiança`;
  document.getElementById('page-title').textContent = category.title;
  document.getElementById('page-note').textContent = category.note;
  document.getElementById('menu-items').innerHTML = category.items.map((item, index) => `
    <article class="menu-card menu-selectable${selected.has(item[0]) ? ' selected' : ''}" data-index="${index}">
      <div><h3>${item[0]}</h3><p>${item[1]}</p></div>
      ${item[2] ? `<strong class="menu-price">${item[2]}</strong>` : ''}
    </article>`).join('');

  if (!document.querySelector('.menu-selection')) {
    document.body.insertAdjacentHTML('beforeend', `
      <aside class="menu-selection" aria-live="polite">
        <button class="menu-selection-toggle" type="button" aria-expanded="true" aria-controls="selection-content">
          <span><strong>Meu pedido</strong><small id="selection-count">0 itens</small></span>
          <b class="selection-chevron" aria-hidden="true">−</b>
        </button>
        <div id="selection-content">
          <ul id="selection-list"></ul>
          <p class="menu-notices">Todos os salgados são vendidos em dúzia.<br>Todos os preços estão sujeitos a alteração.</p>
          <div class="menu-estimate"><span>Total aproximado</span><strong id="selection-total">0 MTS</strong></div>
          <button class="btn" id="selection-whatsapp" type="button" disabled>Preencher orçamento</button>
        </div>
      </aside>`);
  }

  const selectionList = document.getElementById('selection-list');
  const selectionCount = document.getElementById('selection-count');
  const selectionTotal = document.getElementById('selection-total');
  const whatsappButton = document.getElementById('selection-whatsapp');
  const selectionPanel = document.querySelector('.menu-selection');
  const selectionToggle = document.querySelector('.menu-selection-toggle');

  function setCollapsed(collapsed) {
    selectionPanel.classList.toggle('collapsed', collapsed);
    selectionToggle.setAttribute('aria-expanded', String(!collapsed));
    selectionToggle.querySelector('.selection-chevron').textContent = collapsed ? '+' : '−';
  }

  setCollapsed(window.matchMedia('(max-width: 820px), (max-height: 480px)').matches);
  selectionToggle.addEventListener('click', () => {
    setCollapsed(!selectionPanel.classList.contains('collapsed'));
  });

  function updateSelection() {
    stored[page] = Object.fromEntries(selected.entries());
    sessionStorage.setItem(storageKey, JSON.stringify(stored));
    const entries = links.flatMap(([slug, title]) =>
      Object.entries(stored[slug] || {}).map(([name, data]) => ({ slug, title, name, data }))
    );
    selectionCount.textContent = `${entries.length} ${entries.length === 1 ? 'item' : 'itens'}`;
    selectionList.innerHTML = entries.map(({ slug, title, name, data }) =>
      `<li><button type="button" data-remove-category="${slug}" data-remove-item="${name}" aria-label="Remover ${name}">×</button><span><b>${title}:</b> ${name}${data.price ? ` — ${data.price}` : ''}</span><label class="quantity-label">Qtd.<input type="number" min="1" value="${data.quantity || 1}" data-quantity-category="${slug}" data-quantity-item="${name}" aria-label="Quantidade de ${name}"></label></li>`
    ).join('');
    let total = 0;
    entries.forEach(({ data }) => {
      const match = (data.price || '').match(/([\d.]+)\s*MTS|([\d.]+)/);
      const value = match ? Number((match[1] || match[2]).replace(/\./g, '')) : 0;
      total += value * (data.quantity || 1);
    });
    selectionTotal.textContent = `${total.toLocaleString('pt-MZ')} MTS`;
    whatsappButton.disabled = entries.length === 0;
    return entries;
  }

  updateSelection();

  document.getElementById('menu-items').addEventListener('click', event => {
    const card = event.target.closest('.menu-selectable');
    if (!card) return;
    const item = category.items[Number(card.dataset.index)];
    const name = item[0];
    if (selected.has(name)) {
      selected.delete(name);
      card.classList.remove('selected');
    } else {
      selected.set(name, { price: item[2] || '', quantity: 1 });
      card.classList.add('selected');
    }
    updateSelection();
  });

  selectionList.addEventListener('click', event => {
    const removeButton = event.target.closest('[data-remove-category]');
    if (!removeButton) return;
    const slug = removeButton.dataset.removeCategory;
    const name = removeButton.dataset.removeItem;
    delete stored[slug][name];
    if (slug === page) selected.delete(name);
    document.querySelectorAll('.menu-selectable').forEach(card => {
      if (slug === page && category.items[Number(card.dataset.index)][0] === name) card.classList.remove('selected');
    });
    updateSelection();
  });

  selectionList.addEventListener('change', event => {
    const input = event.target.closest('[data-quantity-category]');
    if (!input) return;
    const slug = input.dataset.quantityCategory;
    const name = input.dataset.quantityItem;
    const data = stored[slug] && stored[slug][name];
    if (!data) return;
    data.quantity = Math.max(1, Number.parseInt(input.value, 10) || 1);
    stored[slug][name] = data;
    if (slug === page) selected.set(name, data);
    input.value = data.quantity;
    updateSelection();
  });

  whatsappButton.addEventListener('click', () => {
    const lines = ['Olá, Café Confiança! Gostaria de pedir um orçamento:', ''];
    let total = 0;
    links.forEach(([slug, title]) => {
      const categoryItems = stored[slug];
      if (!categoryItems || Object.keys(categoryItems).length === 0) return;
      lines.push(`${title}:`);
      Object.entries(categoryItems).forEach(([name, data]) => {
        const quantity = data.quantity || 1;
        lines.push(`- ${name} | Quantidade: ${quantity}${data.price ? ` | ${data.price}` : ''}`);
        const match = (data.price || '').match(/([\d.]+)\s*MTS|([\d.]+)/);
        if (match) total += Number((match[1] || match[2]).replace(/\./g, '')) * quantity;
      });
      lines.push('');
    });
    lines.push(`Total aproximado: ${total.toLocaleString('pt-MZ')} MTS`);
    lines.push('Avisos: os salgados são vendidos em dúzia e todos os preços estão sujeitos a alteração.');
    sessionStorage.setItem('cafeConfiancaPedidoTexto', lines.join('\n'));
    window.location.href = '../index.html#orcamento';
  });
})();
