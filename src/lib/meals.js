

const cafe1 = {
  id: "cafe1",
  name: "Shake",
  portions: [
    {
      id: "cafe1-portion-1",
      name: "Base líquida",
      options: [
        { id: "cafe1-portion-1-option-1", item: "Leite vegetal de amêndoas", quantity: "200ml" },
        { id: "cafe1-portion-1-option-2", item: "Leite vegetal de castanha de caju", quantity: "125ml" },
        { id: "cafe1-portion-1-option-3", item: "Leite vegetal de castanha de caju e pará", quantity: "130ml" },
        { id: "cafe1-portion-1-option-4", item: "Leite vegetal de coco", quantity: "150ml" },
        { id: "cafe1-portion-1-option-5", item: "Pasta de Castanha de Caju (Vitanuts) - Sabores diversos", quantity: "10g" },
        { id: "cafe1-portion-1-option-6", item: "Pasta de Amendoim Integral Tradicional ou Crocante (sem açúcar)", quantity: "10g" },
        { id: "cafe1-portion-1-option-7", item: "Amendoim", quantity: "10g" },
        { id: "cafe1-portion-1-option-8", item: "Amêndoa", quantity: "10g" },
        { id: "cafe1-portion-1-option-9", item: "Pistache", quantity: "10un (10g)" },
        { id: "cafe1-portion-1-option-10", item: "Açai, polpa pura sem açúcar", quantity: "1un (100g)" },
        { id: "cafe1-portion-1-option-11", item: "Abacate", quantity: "80g" }
      ]
    },
    {
      id: "cafe1-portion-2",
      name: "Proteína",
      options: [
        { id: "cafe1-portion-2-option-1", item: "Bodybalance ou Whey isolado", quantity: "30g" }
      ]
    },
    {
      id: "cafe1-portion-3",
      name: "Frutas",
      options: [
        { id: "cafe1-portion-3-option-1", item: "Amora e/ou Mirtilo congelada", quantity: "100g" },
        { id: "cafe1-portion-3-option-2", item: "Abacaxi", quantity: "145g" },
        { id: "cafe1-portion-3-option-3", item: "Banana", quantity: "65g" },
        { id: "cafe1-portion-3-option-4", item: "Framboesa congelada", quantity: "145g" },
        { id: "cafe1-portion-3-option-5", item: "Goiaba", quantity: "140g" },
        { id: "cafe1-portion-3-option-6", item: "Kiwi", quantity: "115g" },
        { id: "cafe1-portion-3-option-7", item: "Maçã", quantity: "100g" },
        { id: "cafe1-portion-3-option-8", item: "Manga", quantity: "110g" },
        { id: "cafe1-portion-3-option-9", item: "Mamão", quantity: "170g" },
        { id: "cafe1-portion-3-option-10", item: "Melão", quantity: "300.5g" },
        { id: "cafe1-portion-3-option-11", item: "Morango", quantity: "240g" },
        { id: "cafe1-portion-3-option-12", item: "Pera", quantity: "130g" },
        { id: "cafe1-portion-3-option-13", item: "Pitaia vermelha", quantity: "200g" },
        { id: "cafe1-portion-3-option-14", item: "Pitaia branca", quantity: "170g" }
      ]
    },
    {
      id: "cafe1-portion-4",
      name: "Gorduras boas / adicionais",
      options: [
        { id: "cafe1-portion-4-option-1", item: "Pasta de Castanha de Caju (Vitanuts) - Sabores diversos", quantity: "15g" },
        { id: "cafe1-portion-4-option-2", item: "Pasta de Amendoim Integral Tradicional ou Crocante (sem açúcar)", quantity: "13g" },
        { id: "cafe1-portion-4-option-3", item: "Açai, polpa pura sem açúcar", quantity: "1un (100g)" },
        { id: "cafe1-portion-4-option-4", item: "Amendoim", quantity: "15g" },
        { id: "cafe1-portion-4-option-5", item: "Pistache", quantity: "15g" },
        { id: "cafe1-portion-4-option-6", item: "Amêndoa", quantity: "14g" },
        { id: "cafe1-portion-4-option-7", item: "Avocado in natura", quantity: "50g" },
        { id: "cafe1-portion-4-option-8", item: "Abacate", quantity: "100g" }
      ]
    }
  ]
};

const cafe2 = {
  id: "cafe2",
  name: "Opção 2",
  portions: [
    {
      id: "cafe2-portion-1",
      name: "Base proteica/láctea",
      options: [
        { id: "cafe2-portion-1-option-1", item: "Iogurte Natural Integral", quantity: "1un (160ml)" },
        { id: "cafe2-portion-1-option-2", item: "Bebida Proteica - CleanPro Whey (Nutrify)", quantity: "0.5un (125ml)" },
        { id: "cafe2-portion-1-option-3", item: "Bebida Proteica Vegetal - V PRO (Nutrify)", quantity: "0.5un (125ml)" },
        { id: "cafe2-portion-1-option-4", item: "Bebida Proteica - Body Protein Cacau (Equaliv - 15g de proteína)", quantity: "0.5un (125ml)" },
        { id: "cafe2-portion-1-option-5", item: "Iogurte Natural Whey - Verde Campo - Pêssego / Cranberry E Goji Berry", quantity: "1 Garrafinha (170g)" },
        { id: "cafe2-portion-1-option-6", item: "Iogurte Natural Whey Colherável Tradicional - Verde Campo", quantity: "1un (140g)" },
        { id: "cafe2-portion-1-option-7", item: "Iogurte Natural Whey (21g de proteína) - sabores diversos - Verde Campo", quantity: "0.5un (125g)" },
        { id: "cafe2-portion-1-option-8", item: "Bebida Láctea Piracanjuba (23g de proteína) - sabores diversos", quantity: "0.5un (125ml)" },
        { id: "cafe2-portion-1-option-9", item: "Queijo mozzarella de búfala", quantity: "40g" },
        { id: "cafe2-portion-1-option-10", item: "Queijo minas padrão", quantity: "40g" },
        { id: "cafe2-portion-1-option-11", item: "Queijo muçarela ou Coalho", quantity: "35g" },
        { id: "cafe2-portion-1-option-12", item: "Queijo parmesão", quantity: "25g" },
        { id: "cafe2-portion-1-option-13", item: "Ovo de codorna cozido", quantity: "5un (65g)" },
        { id: "cafe2-portion-1-option-14", item: "Ovo de galinha cozido", quantity: "1.5un (75g)" }
      ]
    },
    {
      id: "cafe2-portion-2",
      name: "Proteína complementar",
      options: [
        { id: "cafe2-portion-2-option-1", item: "BodyBalance ou Whey isolado", quantity: "25g" }
      ]
    },
    {
      id: "cafe2-portion-3",
      name: "Frutas / Geleia",
      options: [
        { id: "cafe2-portion-3-option-1", item: "Geleia sem açúcar", quantity: "25g" },
        { id: "cafe2-portion-3-option-2", item: "Abacaxi", quantity: "60g" },
        { id: "cafe2-portion-3-option-3", item: "Ameixa fresca", quantity: "55g" },
        { id: "cafe2-portion-3-option-4", item: "Amora", quantity: "85g" },
        { id: "cafe2-portion-3-option-5", item: "Banana", quantity: "27g" },
        { id: "cafe2-portion-3-option-6", item: "Caqui", quantity: "0.5un (42.5g)" },
        { id: "cafe2-portion-3-option-7", item: "Framboesa", quantity: "65g" },
        { id: "cafe2-portion-3-option-8", item: "Goiaba", quantity: "60g" },
        { id: "cafe2-portion-3-option-9", item: "Kiwi", quantity: "50g" },
        { id: "cafe2-portion-3-option-10", item: "Maçã", quantity: "45g" },
        { id: "cafe2-portion-3-option-11", item: "Melão", quantity: "125g" },
        { id: "cafe2-portion-3-option-12", item: "Melancia", quantity: "110g" },
        { id: "cafe2-portion-3-option-13", item: "Mamão", quantity: "70g" },
        { id: "cafe2-portion-3-option-14", item: "Manga", quantity: "45g" },
        { id: "cafe2-portion-3-option-15", item: "Mirtilo", quantity: "50g" },
        { id: "cafe2-portion-3-option-16", item: "Morango", quantity: "100g" },
        { id: "cafe2-portion-3-option-17", item: "Pera", quantity: "55g" },
        { id: "cafe2-portion-3-option-18", item: "Tangerina", quantity: "80g" },
        { id: "cafe2-portion-3-option-19", item: "Uva", quantity: "55g" }
      ]
    },
    {
      id: "cafe2-portion-4",
      name: "Gorduras boas",
      options: [
        { id: "cafe2-portion-4-option-1", item: "Pasta de Castanha de Caju", quantity: "1c.s. (15g)" },
        { id: "cafe2-portion-4-option-2", item: "Pasta de Amendoim Integral Tradicional ou Crocante (sem açúcar)", quantity: "13g" },
        { id: "cafe2-portion-4-option-3", item: "Amendoim ou Farinha de amendoim", quantity: "15g" },
        { id: "cafe2-portion-4-option-4", item: "Pistache", quantity: "15g" },
        { id: "cafe2-portion-4-option-5", item: "Amêndoa", quantity: "14g" },
        { id: "cafe2-portion-4-option-6", item: "Farinha de linhaça dourada", quantity: "15g" },
        { id: "cafe2-portion-4-option-7", item: "Semente de gergelim crua", quantity: "15g" },
        { id: "cafe2-portion-4-option-8", item: "Coco seco ralado sem açúcar", quantity: "13g" },
        { id: "cafe2-portion-4-option-9", item: "Açai, polpa pura sem açúcar", quantity: "1un (100g)" }
      ]
    }
  ]
};

const cafe3 = {
  id: "cafe3",
  name: "Opção 3",
  portions: [
    {
      id: "cafe3-portion-1",
      name: "Proteína principal",
      options: [
        { id: "cafe3-portion-1-option-1", item: "Ovo de galinha cozido/mexido", quantity: "2un (100g)" },
        { id: "cafe3-portion-1-option-2", item: "Atum Sólido em Óleo ou Azeite (retirar todo o óleo)", quantity: "40g" },
        { id: "cafe3-portion-1-option-3", item: "Frango desfiado", quantity: "35g" },
        { id: "cafe3-portion-1-option-4", item: "Patinho ou Contrafilé, sem gordura grelhado/desfiado", quantity: "30g" },
        { id: "cafe3-portion-1-option-5", item: "Maminha grelhada/assada", quantity: "35g" }
      ]
    },
    {
      id: "cafe3-portion-2",
      name: "Proteína complementar",
      options: [
        { id: "cafe3-portion-2-option-1", item: "Clara de ovo cozida/mexida", quantity: "2un (60g)" },
        { id: "cafe3-portion-2-option-2", item: "Atum Sólido ao Natural (Coqueiro)", quantity: "30g" },
        { id: "cafe3-portion-2-option-3", item: "Atum Sólido ao Natural - Light em Sódio (Gomes da Costa)", quantity: "35g" },
        { id: "cafe3-portion-2-option-4", item: "Peito de frango sem pele cozido/grelhado/desfiado", quantity: "25g" },
        { id: "cafe3-portion-2-option-5", item: "Bodybalance ou Whey isolado", quantity: "10g" }
      ]
    },
    {
      id: "cafe3-portion-3",
      name: "Laticínios",
      options: [
        { id: "cafe3-portion-3-option-1", item: "Queijo muçarela light", quantity: "30g" },
        { id: "cafe3-portion-3-option-2", item: "Queijo minas padrão light", quantity: "26g" },
        { id: "cafe3-portion-3-option-3", item: "Queijo minas frescal light", quantity: "45g" },
        { id: "cafe3-portion-3-option-4", item: "Ricota ou Creme de ricota LIGHT", quantity: "55g" },
        { id: "cafe3-portion-3-option-5", item: "Queijo tipo cottage - com ou sem lactose - Lacfree Verde Campo", quantity: "60g" },
        { id: "cafe3-portion-3-option-6", item: "Queijo minas padrão ou prato sem lactose - Lacfree Verde Campo", quantity: "27g" }
      ]
    },
    {
      id: "cafe3-portion-4",
      name: "Fonte de carboidrato",
      options: [
        { id: "cafe3-portion-4-option-1", item: "Cuscuz de milho cozido com sal", quantity: "75g" },
        { id: "cafe3-portion-4-option-2", item: "Inhame (cará) cozido", quantity: "90g" },
        { id: "cafe3-portion-4-option-3", item: "Batata doce cozida", quantity: "85g" },
        { id: "cafe3-portion-4-option-4", item: "Banana da terra assada", quantity: "50g" },
        { id: "cafe3-portion-4-option-5", item: "Mandioca (aipim, macaxeira, maniva) cozida", quantity: "65g" },
        { id: "cafe3-portion-4-option-6", item: "Bolacha de arroz integral", quantity: "25g" },
        { id: "cafe3-portion-4-option-7", item: "Goma de tapioca + Farelo de aveia (p/ crepioca)", quantity: "20g + 5g" },
        { id: "cafe3-portion-4-option-8", item: "Farelo de aveia (p/ crepe/panqueca)", quantity: "25g" },
        { id: "cafe3-portion-4-option-9", item: "Pão de Forma 100% Grãos Inteiros (Nutrella)", quantity: "1.5 Fatia(s) (37.5g)" }
      ]
    }
  ]
};

const lanche_manha = {
  id: "lanche_manha",
  name: "Lanche manhã",
  isOptional: true,
  portions: [
    {
      id: "lanche_manha-portion-1",
      name: "Fruta",
      options: [
        { id: "lanche_manha-portion-1-option-1", item: "Tangerina", quantity: "1un (135g)" },
        { id: "lanche_manha-portion-1-option-2", item: "Abacaxi", quantity: "110g" },
        { id: "lanche_manha-portion-1-option-3", item: "Amora preta", quantity: "155g" },
        { id: "lanche_manha-portion-1-option-4", item: "Ameixa fresca", quantity: "95g" },
        { id: "lanche_manha-portion-1-option-5", item: "Banana", quantity: "45g" },
        { id: "lanche_manha-portion-1-option-6", item: "Caqui", quantity: "70g" },
        { id: "lanche_manha-portion-1-option-7", item: "Framboesa congelada", quantity: "110g" },
        { id: "lanche_manha-portion-1-option-8", item: "Geleia sem açúcar", quantity: "40g" },
        { id: "lanche_manha-portion-1-option-9", item: "Goiaba", quantity: "90g" },
        { id: "lanche_manha-portion-1-option-10", item: "Jaca", quantity: "4 bagos (48g)" },
        { id: "lanche_manha-portion-1-option-11", item: "Kiwi", quantity: "95g" },
        { id: "lanche_manha-portion-1-option-12", item: "Laranja", quantity: "140g" },
        { id: "lanche_manha-portion-1-option-13", item: "Maçã", quantity: "80g" },
        { id: "lanche_manha-portion-1-option-14", item: "Mamão", quantity: "120g" },
        { id: "lanche_manha-portion-1-option-15", item: "Melão", quantity: "225g" },
        { id: "lanche_manha-portion-1-option-16", item: "Melancia", quantity: "190g" },
        { id: "lanche_manha-portion-1-option-17", item: "Manga", quantity: "80g" },
        { id: "lanche_manha-portion-1-option-18", item: "Mirtilo", quantity: "90g" },
        { id: "lanche_manha-portion-1-option-19", item: "Morango", quantity: "180g" },
        { id: "lanche_manha-portion-1-option-20", item: "Pera", quantity: "90g" },
        { id: "lanche_manha-portion-1-option-21", item: "Pitaia branca", quantity: "135g" },
        { id: "lanche_manha-portion-1-option-22", item: "Pitaia vermelha/rosa", quantity: "155g" },
        { id: "lanche_manha-portion-1-option-23", item: "Uva", quantity: "90g" }
      ]
    }
  ]
};

const almoco = {
  id: "almoco",
  name: "Opção 1",
  portions: [
    {
      id: "almoco-portion-1",
      name: "Salada e vegetais",
      options: [
        {
          id: "almoco-portion-1-option-1",
          item: "Salada crua + Vegetais cozidos/grelhados",
          quantity: "1/3 do prato (100g)+"
        }
      ]
    },
    {
      id: "almoco-portion-2",
      name: "Proteína principal",
      options: [
        { id: "almoco-portion-2-option-1", item: "Peito de frango sem pele assado/cozido", quantity: "100g" },
        { id: "almoco-portion-2-option-2", item: "Atum Sólido ao Natural (Coqueiro)", quantity: "120g" },
        { id: "almoco-portion-2-option-3", item: "Atum Sólido ao Natural - Light em Sódio (Gomes da Costa)", quantity: "135g" },
        { id: "almoco-portion-2-option-4", item: "Camarão sem casca cozido", quantity: "180g" },
        { id: "almoco-portion-2-option-5", item: "Filé de tilápia grelhado sem pele", quantity: "170g" },
        { id: "almoco-portion-2-option-6", item: "Filé de tilápia cozido sem pele", quantity: "145g" },
        { id: "almoco-portion-2-option-7", item: "Merluza assada/grelhada", quantity: "125g" },
        { id: "almoco-portion-2-option-8", item: "Merluza cozida", quantity: "160g" },
        { id: "almoco-portion-2-option-9", item: "Atum assado/grelhado (filé)", quantity: "95g" },
        { id: "almoco-portion-2-option-10", item: "Carne cozida/grelhada/assada sem gordura", quantity: "90g" }
      ]
    },
    {
      id: "almoco-portion-3",
      name: "Carboidrato 1",
      options: [
        { id: "almoco-portion-3-option-1", item: "Arroz integral cozido", quantity: "60g" },
        { id: "almoco-portion-3-option-2", item: "Quinoa cozida", quantity: "60g" },
        { id: "almoco-portion-3-option-3", item: "Arroz branco cozido com vegetais", quantity: "55g" },
        { id: "almoco-portion-3-option-4", item: "Arroz negro cozido", quantity: "40g" },
        { id: "almoco-portion-3-option-5", item: "Macarrão de arroz integral cozido", quantity: "45g" },
        { id: "almoco-portion-3-option-6", item: "Batata doce cozida", quantity: "60g" },
        { id: "almoco-portion-3-option-7", item: "Batata inglesa cozida", quantity: "120g" },
        { id: "almoco-portion-3-option-8", item: "Grão de bico cozido", quantity: "55g" },
        { id: "almoco-portion-3-option-9", item: "Lentilha cozida ou Ervilha cozida", quantity: "65g" },
        { id: "almoco-portion-3-option-10", item: "Feijão verde cozido", quantity: "125g" },
        { id: "almoco-portion-3-option-11", item: "Feijão carioca/fradinho cozido", quantity: "90g" },
        { id: "almoco-portion-3-option-12", item: "Feijão preto cozido", quantity: "100g" },
        { id: "almoco-portion-3-option-13", item: "Abóbora cabotian cozida", quantity: "135g" }
      ]
    },
    {
      id: "almoco-portion-4",
      name: "Carboidrato 2",
      options: [
        { id: "almoco-portion-4-option-1", item: "Batata inglesa cozida", quantity: "100g" },
        { id: "almoco-portion-4-option-2", item: "Feijão carioca/fradinho cozido", quantity: "70g" },
        { id: "almoco-portion-4-option-3", item: "Feijão verde cozido", quantity: "100g" },
        { id: "almoco-portion-4-option-4", item: "Grão de bico cozido", quantity: "45g" },
        { id: "almoco-portion-4-option-5", item: "Lentilha cozida ou Ervilha cozida", quantity: "50g" },
        { id: "almoco-portion-4-option-6", item: "Arroz integral cozido ou Quinoa cozida", quantity: "45g" },
        { id: "almoco-portion-4-option-7", item: "Feijão preto cozido", quantity: "80g" },
        { id: "almoco-portion-4-option-8", item: "Batata doce cozida", quantity: "50g" },
        { id: "almoco-portion-4-option-9", item: "Macarrão de arroz integral cozido", quantity: "35g" },
        { id: "almoco-portion-4-option-10", item: "Abóbora cabotian (japonesa) cozida", quantity: "110g" }
      ]
    },
    {
      id: "almoco-portion-5",
      name: "Gordura boa (extra)",
      options: [
        { id: "almoco-portion-5-option-1", item: "Azeite de oliva", quantity: "1g" }
      ]
    }
  ]
};

const lanche_tarde = {
  id: "lanche_tarde",
  name: "Opção 1",
  portions: [
    {
      id: "lanche_tarde-portion-1",
      name: "Fruta",
      options: [
        { id: "lanche_tarde-portion-1-option-1", item: "Banana", quantity: "55g" },
        { id: "lanche_tarde-portion-1-option-2", item: "Abacaxi", quantity: "125g" },
        { id: "lanche_tarde-portion-1-option-3", item: "Ameixa", quantity: "110g" },
        { id: "lanche_tarde-portion-1-option-4", item: "Amora congelada", quantity: "90g" },
        { id: "lanche_tarde-portion-1-option-5", item: "Caqui", quantity: "85g" },
        { id: "lanche_tarde-portion-1-option-6", item: "Framboesa congelada", quantity: "125g" },
        { id: "lanche_tarde-portion-1-option-7", item: "Geleia sem açúcar", quantity: "50g" },
        { id: "lanche_tarde-portion-1-option-8", item: "Goiaba", quantity: "115g" },
        { id: "lanche_tarde-portion-1-option-9", item: "Jaca", quantity: "65g" },
        { id: "lanche_tarde-portion-1-option-10", item: "Kiwi", quantity: "110g" },
        { id: "lanche_tarde-portion-1-option-11", item: "Laranja", quantity: "135g" },
        { id: "lanche_tarde-portion-1-option-12", item: "Maçã", quantity: "90g" },
        { id: "lanche_tarde-portion-1-option-13", item: "Mamão", quantity: "140g" },
        { id: "lanche_tarde-portion-1-option-14", item: "Melão", quantity: "260g" },
        { id: "lanche_tarde-portion-1-option-15", item: "Melancia", quantity: "220g" },
        { id: "lanche_tarde-portion-1-option-16", item: "Morango", quantity: "200g" },
        { id: "lanche_tarde-portion-1-option-17", item: "Mirtilo congelado", quantity: "90g" },
        { id: "lanche_tarde-portion-1-option-18", item: "Pera", quantity: "110g" },
        { id: "lanche_tarde-portion-1-option-19", item: "Pitaia", quantity: "150g" },
        { id: "lanche_tarde-portion-1-option-20", item: "Tangerina", quantity: "155g" },
        { id: "lanche_tarde-portion-1-option-21", item: "Uva", quantity: "110g" }
      ]
    },
    {
      id: "lanche_tarde-portion-2",
      name: "Gordura boa",
      options: [
        { id: "lanche_tarde-portion-2-option-1", item: "Pasta de Castanha de Caju", quantity: "15g" },
        { id: "lanche_tarde-portion-2-option-2", item: "Pasta de Amendoim Integral Tradicional ou Crocante (sem açúcar)", quantity: "15g" },
        { id: "lanche_tarde-portion-2-option-3", item: "Amendoim ou Farinha de amendoim", quantity: "15g" },
        { id: "lanche_tarde-portion-2-option-4", item: "Amêndoa", quantity: "13 Unidades (13g)" },
        { id: "lanche_tarde-portion-2-option-5", item: "Semente de Gergelim", quantity: "15g" },
        { id: "lanche_tarde-portion-2-option-6", item: "Semente de Girassol ou Farinha de linhaça dourada", quantity: "15g" },
        { id: "lanche_tarde-portion-2-option-7", item: "Açai, polpa pura sem açúcar", quantity: "1un (102.3g)" },
        { id: "lanche_tarde-portion-2-option-8", item: "Avocado", quantity: "50g" }
      ]
    },
    {
      id: "lanche_tarde-portion-3",
      name: "Proteína",
      options: [
        { id: "lanche_tarde-portion-3-option-1", item: "Body balance ou Whey isolado", quantity: "25g" }
      ]
    },
    {
      id: "lanche_tarde-portion-4",
      name: "Fibra complementar",
      options: [
        { id: "lanche_tarde-portion-4-option-1", item: "Farelo de aveia", quantity: "1 c.d.s. (5g)" }
      ]
    }
  ]
};

const lanche_tarde2 = {
  id: "lanche_tarde2",
  name: "Opção 2",
  portions: [
    {
      id: "lanche_tarde2-portion-1",
      name: "Base láctea/proteica",
      options: [
        { id: "lanche_tarde2-portion-1-option-1", item: "Iogurte Natural Integral", quantity: "1un (160ml)" },
        { id: "lanche_tarde2-portion-1-option-2", item: "Queijo muçarela de búfala", quantity: "57g" },
        { id: "lanche_tarde2-portion-1-option-3", item: "Queijo coalho", quantity: "35g" },
        { id: "lanche_tarde2-portion-1-option-4", item: "Queijo muçarela", quantity: "35g" },
        { id: "lanche_tarde2-portion-1-option-5", item: "Queijo parmesão", quantity: "25g" },
        { id: "lanche_tarde2-portion-1-option-6", item: "Queijo minas padrão", quantity: "40g" },
        { id: "lanche_tarde2-portion-1-option-7", item: "Queijo gouda", quantity: "32g" },
        { id: "lanche_tarde2-portion-1-option-8", item: "Ricota", quantity: "65g" },
        { id: "lanche_tarde2-portion-1-option-9", item: "Creme de ricota LIGHT", quantity: "65g" },
        { id: "lanche_tarde2-portion-1-option-10", item: "Ovo de codorna cozido", quantity: "5un (65g)" },
        { id: "lanche_tarde2-portion-1-option-11", item: "Ovo de galinha cozido", quantity: "2un (100g)" }
      ]
    },
    {
      id: "lanche_tarde2-portion-2",
      name: "Proteína complementar",
      options: [
        { id: "lanche_tarde2-portion-2-option-1", item: "Whey isolado ou Body Balance ou Proteína vegana", quantity: "15g" }
      ]
    },
    {
      id: "lanche_tarde2-portion-3",
      name: "Fruta",
      options: [
        { id: "lanche_tarde2-portion-3-option-1", item: "Uva", quantity: "100g" },
        { id: "lanche_tarde2-portion-3-option-2", item: "Abacaxi", quantity: "115g" },
        { id: "lanche_tarde2-portion-3-option-3", item: "Ameixa", quantity: "3un (102g)" },
        { id: "lanche_tarde2-portion-3-option-4", item: "Amora congelada", quantity: "80g" },
        { id: "lanche_tarde2-portion-3-option-5", item: "Banana", quantity: "50g" },
        { id: "lanche_tarde2-portion-3-option-6", item: "Caqui", quantity: "75g" },
        { id: "lanche_tarde2-portion-3-option-7", item: "Framboesa congelada", quantity: "115g" },
        { id: "lanche_tarde2-portion-3-option-8", item: "Geleia sem açúcar", quantity: "45g" },
        { id: "lanche_tarde2-portion-3-option-9", item: "Goiaba", quantity: "110g" },
        { id: "lanche_tarde2-portion-3-option-10", item: "Jaca", quantity: "5 bagos (60g)" },
        { id: "lanche_tarde2-portion-3-option-11", item: "Kiwi", quantity: "100g" },
        { id: "lanche_tarde2-portion-3-option-12", item: "Laranja", quantity: "125g" },
        { id: "lanche_tarde2-portion-3-option-13", item: "Maçã", quantity: "1un (85g)" },
        { id: "lanche_tarde2-portion-3-option-14", item: "Mamão", quantity: "130g" },
        { id: "lanche_tarde2-portion-3-option-15", item: "Manga", quantity: "85g" },
        { id: "lanche_tarde2-portion-3-option-16", item: "Melão", quantity: "235g" },
        { id: "lanche_tarde2-portion-3-option-17", item: "Melancia", quantity: "195g" },
        { id: "lanche_tarde2-portion-3-option-18", item: "Mirtilo congelado", quantity: "85g" },
        { id: "lanche_tarde2-portion-3-option-19", item: "Morango", quantity: "190g" },
        { id: "lanche_tarde2-portion-3-option-20", item: "Pera", quantity: "100g" },
        { id: "lanche_tarde2-portion-3-option-21", item: "Tangerina", quantity: "140g" }
      ]
    }
  ]
};

const jantar = {
  id: "jantar",
  name: "Opção 1",
  portions: [
    {
      id: "jantar-portion-1",
      name: "Carboidrato",
      options: [
        { id: "jantar-portion-1-option-1", item: "Batata inglesa cozida", quantity: "250g" },
        { id: "jantar-portion-1-option-2", item: "Cuscuz de milho cozido", quantity: "120g" },
        { id: "jantar-portion-1-option-3", item: "Batata doce cozida", quantity: "130g" },
        { id: "jantar-portion-1-option-4", item: "Inhame (cará) cozido", quantity: "145g" },
        { id: "jantar-portion-1-option-5", item: "Mandioca (aipim, macaxeira, maniva) cozida", quantity: "110g" },
        { id: "jantar-portion-1-option-6", item: "Banana da terra assada", quantity: "75g" },
        { id: "jantar-portion-1-option-7", item: "Bolacha de arroz integral", quantity: "35g" },
        { id: "jantar-portion-1-option-8", item: "Goma de tapioca + Farelo de aveia (para crepioca)", quantity: "35g + 10g" },
        { id: "jantar-portion-1-option-9", item: "Arroz integral cozido ou Quinoa cozida", quantity: "125g" },
        { id: "jantar-portion-1-option-10", item: "Arroz negro cozido", quantity: "85g" },
        { id: "jantar-portion-1-option-11", item: "Macarrão de arroz integral cozido", quantity: "95g" },
        { id: "jantar-portion-1-option-12", item: "Abóbora cabotian cozida (japonesa)", quantity: "275g" },
        { id: "jantar-portion-1-option-13", item: "Pão de forma integral sem glúten", quantity: "3 fatias (74.1g)" }
      ]
    },
    {
      id: "jantar-portion-2",
      name: "Proteína",
      options: [
        { id: "jantar-portion-2-option-1", item: "Sobrecoxa de frango sem pele assada/cozida", quantity: "100g" },
        { id: "jantar-portion-2-option-2", item: "Ovo de galinha cozido (3 inteiros) + Clara cozida (3 unid)", quantity: "3.3un (165g)" },
        { id: "jantar-portion-2-option-3", item: "Peito de frango sem pele assado/cozido", quantity: "110g" },
        { id: "jantar-portion-2-option-4", item: "Coxa de frango sem pele cozida", quantity: "115g" },
        { id: "jantar-portion-2-option-5", item: "Filé de Tilápia ou Merluza grelhado/cozido", quantity: "160g" },
        { id: "jantar-portion-2-option-6", item: "Filé de salmão sem pele cozido/forno", quantity: "125g" },
        { id: "jantar-portion-2-option-7", item: "Atum Sólido em Óleo/Azeite (retirar o óleo)", quantity: "110g" },
        { id: "jantar-portion-2-option-8", item: "Atum assado/grelhado (filé)", quantity: "90g" },
        { id: "jantar-portion-2-option-9", item: "Camarão sem casca cozido", quantity: "175g" },
        { id: "jantar-portion-2-option-10", item: "Lombo de porco assado", quantity: "85g" },
        { id: "jantar-portion-2-option-11", item: "Carne sem gordura, grelhada (maminha, patinho, miolo de alcatra, músculo, contrafilé, coxão mole)", quantity: "95g" },
        { id: "jantar-portion-2-option-12", item: "Carne moída sem gordura, crua (patinho, músculo, coxão mole)", quantity: "155g" },
        { id: "jantar-portion-2-option-13", item: "Sashimi de Atum e/ou de Salmão", quantity: "10un (150g)" }
      ]
    },
    {
      id: "jantar-portion-3",
      name: "Gordura boa (preparo)",
      options: [
        { id: "jantar-portion-3-option-1", item: "Azeite de oliva (de preparo dos alimentos)", quantity: "1c.c. (2g)" }
      ]
    }
  ]
};

const jantar2 = {
  id: "jantar2",
  name: "Opção 2",
  portions: [
    {
      id: "jantar2-portion-1",
      name: "Carboidrato",
      options: [
        { id: "jantar2-portion-1-option-1", item: "Cuscuz de milho cozido", quantity: "120g" },
        { id: "jantar2-portion-1-option-2", item: "Batata doce cozida", quantity: "130g" },
        { id: "jantar2-portion-1-option-3", item: "Inhame (cará) cozido", quantity: "145g" },
        { id: "jantar2-portion-1-option-4", item: "Mandioca (aipim, macaxeira, maniva) cozida", quantity: "110g" },
        { id: "jantar2-portion-1-option-5", item: "Banana da terra assada", quantity: "75g" },
        { id: "jantar2-portion-1-option-6", item: "Bolacha de arroz integral", quantity: "35g" },
        { id: "jantar2-portion-1-option-7", item: "Goma de tapioca + Farelo de aveia", quantity: "35g + 10g" },
        { id: "jantar2-portion-1-option-8", item: "Batata inglesa cozida", quantity: "250g" },
        { id: "jantar2-portion-1-option-9", item: "Arroz integral cozido ou Quinoa cozida", quantity: "125g" },
        { id: "jantar2-portion-1-option-10", item: "Arroz negro cozido", quantity: "85g" },
        { id: "jantar2-portion-1-option-11", item: "Macarrão de arroz integral cozido", quantity: "95g" },
        { id: "jantar2-portion-1-option-12", item: "Abóbora cabotian cozida (japonesa)", quantity: "275g" },
        { id: "jantar2-portion-1-option-13", item: "Pão de forma integral sem glúten", quantity: "3 fatias (74.1g)" }
      ]
    },
    {
      id: "jantar2-portion-2",
      name: "Proteína principal",
      options: [
        { id: "jantar2-portion-2-option-1", item: "Ovo de galinha cozido/mexido", quantity: "2un (100g)" },
        { id: "jantar2-portion-2-option-2", item: "Atum Sólido em Óleo ou Azeite (retirar todo o óleo)", quantity: "40g" },
        { id: "jantar2-portion-2-option-3", item: "Frango desfiado", quantity: "35g" },
        { id: "jantar2-portion-2-option-4", item: "Patinho ou Contrafilé, sem gordura grelhado/desfiado", quantity: "30g" },
        { id: "jantar2-portion-2-option-5", item: "Maminha grelhada/assada", quantity: "35g" },
        { id: "jantar2-portion-2-option-6", item: "Tilápia cozida", quantity: "50g" },
        { id: "jantar2-portion-2-option-7", item: "Filé de merluza assado", quantity: "40g" },
        { id: "jantar2-portion-2-option-8", item: "Filé de salmão sem pele assado/grelhado", quantity: "40g" },
        { id: "jantar2-portion-2-option-9", item: "Bacalhau dessalgado cozido", quantity: "55g" },
        { id: "jantar2-portion-2-option-10", item: "Camarão sem casca cozido", quantity: "60g" }
      ]
    },
    {
      id: "jantar2-portion-3",
      name: "Proteína complementar",
      options: [
        { id: "jantar2-portion-3-option-1", item: "Clara de ovo cozida/mexida", quantity: "2un (60g)" },
        { id: "jantar2-portion-3-option-2", item: "Atum Sólido ao Natural", quantity: "30g" },
        { id: "jantar2-portion-3-option-3", item: "Atum Sólido ao Natural - Light em Sódio (Gomes da Costa)", quantity: "35g" },
        { id: "jantar2-portion-3-option-4", item: "Peito de frango sem pele cozido/grelhado/desfiado", quantity: "25g" },
        { id: "jantar2-portion-3-option-5", item: "Camarão sem casca cozido", quantity: "45g" },
        { id: "jantar2-portion-3-option-6", item: "Filé de tilápia sem pele grelhado sem sal", quantity: "43g" },
        { id: "jantar2-portion-3-option-7", item: "Filé de tilápia sem pele cozido sem sal", quantity: "35g" },
        { id: "jantar2-portion-3-option-8", item: "Bodybalance ou Whey isolado", quantity: "10g" }
      ]
    },
    {
      id: "jantar2-portion-4",
      name: "Laticínios",
      options: [
        { id: "jantar2-portion-4-option-1", item: "Queijo muçarela light", quantity: "35g" },
        { id: "jantar2-portion-4-option-2", item: "Queijo minas padrão light", quantity: "30g" },
        { id: "jantar2-portion-4-option-3", item: "Queijo minas frescal light", quantity: "50g" },
        { id: "jantar2-portion-4-option-4", item: "Ricota ou Creme de ricota LIGHT", quantity: "65g" },
        { id: "jantar2-portion-4-option-5", item: "Queijo tipo cottage - com ou sem lactose - Lacfree Verde Campo", quantity: "65g" },
        { id: "jantar2-portion-4-option-6", item: "Queijo minas padrão sem lactose - Lacfree Verde Campo", quantity: "30g" }
      ]
    }
  ]
};

const ceia = {
  id: "ceia",
  name: "Opção 1",
  isOptional: true,
  portions: [
    {
      id: "ceia-portion-1",
      name: "Fruta/doce leve",
      options: [
        { id: "ceia-portion-1-option-1", item: "Morango", quantity: "150g" },
        { id: "ceia-portion-1-option-2", item: "Geleia sem açúcar", quantity: "35g" },
        { id: "ceia-portion-1-option-3", item: "Amora, Mirtilo e/ou Framboesa (mix ou individual)", quantity: "75g" },
        { id: "ceia-portion-1-option-4", item: "Abacaxi", quantity: "90g" },
        { id: "ceia-portion-1-option-5", item: "Ameixa fresca", quantity: "85g" },
        { id: "ceia-portion-1-option-6", item: "Banana", quantity: "40g" },
        { id: "ceia-portion-1-option-7", item: "Kiwi", quantity: "75g" },
        { id: "ceia-portion-1-option-8", item: "Maçã", quantity: "65g" },
        { id: "ceia-portion-1-option-9", item: "Melão", quantity: "185g" },
        { id: "ceia-portion-1-option-10", item: "Melancia", quantity: "150g" },
        { id: "ceia-portion-1-option-11", item: "Mamão", quantity: "100g" },
        { id: "ceia-portion-1-option-12", item: "Manga", quantity: "65g" },
        { id: "ceia-portion-1-option-13", item: "Pera", quantity: "80g" },
        { id: "ceia-portion-1-option-14", item: "Tangerina", quantity: "110g" },
        { id: "ceia-portion-1-option-15", item: "Uva", quantity: "80g" }
      ]
    },
    {
      id: "ceia-portion-2",
      name: "Gordura boa / doce funcional",
      options: [
        { id: "ceia-portion-2-option-1", item: "Chocolate 70%", quantity: "15g" },
        { id: "ceia-portion-2-option-2", item: "Pasta de Amendoim Integral Tradicional ou Crocante (sem açúcar)", quantity: "13g" },
        { id: "ceia-portion-2-option-3", item: "Amendoim ou Farinha de amendoim", quantity: "15g" },
        { id: "ceia-portion-2-option-4", item: "Pistache", quantity: "15g" },
        { id: "ceia-portion-2-option-5", item: "Amêndoa", quantity: "14g" },
        { id: "ceia-portion-2-option-6", item: "Farinha de linhaça dourada", quantity: "15g" },
        { id: "ceia-portion-2-option-7", item: "Semente de gergelim crua", quantity: "15g" },
        { id: "ceia-portion-2-option-8", item: "Açai, polpa pura sem açúcar", quantity: "1un (100g)" },
        { id: "ceia-portion-2-option-9", item: "Avocado in natura", quantity: "50g" },
        { id: "ceia-portion-2-option-10", item: "Abacate", quantity: "100g" },
        { id: "ceia-portion-2-option-11", item: "Pasta de Castanha de Caju", quantity: "15g" }
      ]
    }
  ]
};

const ceia2 = {
  id: "ceia2",
  name: "Opção 2",
  portions: [
    {
      id: "ceia2-portion-1",
      name: "Snack",
      options: [
        { id: "ceia2-portion-1-option-1", item: "Milho para pipoca", quantity: "20g" }
      ]
    },
    {
      id: "ceia2-portion-2",
      name: "Gordura de preparo",
      options: [
        { id: "ceia2-portion-2-option-1", item: "Azeite de oliva extravirgem", quantity: "1c.c. (2ml)" }
      ]
    }
  ]
};

  export const meals = [
    {
      id: "meal1",
      name: "Café da manhã",
      isOptional: false,
      options: [cafe1, cafe2, cafe3]
    },
    {
      id: "meal2",
      name: "Lanche da manhã",
      isOptional: true,
      options: [lanche_manha]
    },
    {
      id: "meal3",
      name: "Almoço",
      isOptional: false,
      options: [almoco]
    },
    {
      id: "meal4",
      name: "Lanche da tarde",
      isOptional: false,
      options: [lanche_tarde, lanche_tarde2]
    },
    {
      id: "meal5",
      name: "Jantar",
      isOptional: false,
      options: [jantar, jantar2]
    },
    {
      id: "meal6",
      name: "Ceia",
      isOptional: true,
      options: [ceia, ceia2]
    }
  ];