// Formato: r(id, nombre, emoji, edad_minima_meses, minutos, alergenos, rica_en_hierro, ingredientes['clave|texto'], pasos, como_ofrecerlo, nota)
window.R = window.R || [];
window.r = function (id, nombre, emoji, edad, min, alerg, fe, ing, pasos, corte, nota) {
  R.push({
    id: id, nombre: nombre, emoji: emoji, edad: edad, min: min,
    alerg: alerg ? alerg.split(',') : [], fe: !!fe,
    ing: ing.map(function (s) { var p = s.split('|'); var k = p.shift().trim(); return { k: k, t: (p.join('|') || k).trim() }; }),
    pasos: pasos, corte: corte, nota: nota || ''
  });
};

r('aguacate', 'Bastones de aguacate', '🥑', 6, 5, 'gluten', 0,
  ['aguacate|1 aguacate maduro', 'avena|2 cucharadas de copos de avena finos (opcional, para que no resbale)'],
  ['Pela el aguacate y quita el hueso.', 'Córtalo en bastones gruesos, del tamaño de un dedo de adulto.', 'Reboza los bastones en la avena molida para que el bebé pueda agarrarlos.'],
  'Bastones gruesos que sobresalgan del puño del bebé.', 'La avena puede llevar trazas de gluten. Si no la usas, la receta no lleva alérgenos.');

r('boniato', 'Bastones de boniato al horno', '🍠', 6, 30, '', 0,
  ['boniato|1 boniato mediano', 'aceite|1 cucharadita de aceite de oliva'],
  ['Precalienta el horno a 200 °C.', 'Pela el boniato y córtalo en bastones gruesos.', 'Mézclalos con el aceite y hornea 20-25 minutos, dándoles la vuelta a mitad.', 'Deben quedar blandos: se aplastan presionando con dos dedos.'],
  'Bastones del grosor de un dedo adulto.');

r('brocoli', 'Arbolitos de brócoli al vapor', '🥦', 6, 10, '', 0,
  ['brócoli|1 brócoli pequeño'],
  ['Separa los ramitos dejando un tallo largo para que sea fácil agarrarlos.', 'Cuécelos al vapor 8-10 minutos hasta que estén muy blandos.', 'Deja enfriar antes de servir.'],
  'Ramito entero con tallo largo, que se pueda sujetar con el puño.');

r('tortitas-platano', 'Tortitas de plátano y avena', '🥞', 6, 15, 'huevo,gluten', 0,
  ['plátano|1 plátano maduro', 'huevo|1 huevo', 'avena|3 cucharadas de copos de avena', 'aceite|Unas gotas de aceite de oliva para la sartén'],
  ['Chafa el plátano con un tenedor.', 'Añade el huevo y la avena y mezcla.', 'Cocina cucharadas de masa en una sartén antiadherente con una gota de aceite, 2 minutos por lado.', 'Asegúrate de que el huevo queda bien cocinado.'],
  'Tortitas pequeñas o cortadas en tiras.');

r('tortilla', 'Tortilla francesa en tiras', '🍳', 6, 8, 'huevo', 0,
  ['huevo|1 huevo', 'aceite|Unas gotas de aceite de oliva', 'perejil|Perejil picado (opcional)'],
  ['Bate el huevo con el perejil.', 'Cuájalo en una sartén antiadherente con unas gotas de aceite, por ambos lados, hasta que no quede nada líquido.', 'Deja enfriar y córtala en tiras.'],
  'Tiras anchas, de unos 6-7 cm de largo.', 'El huevo debe estar siempre completamente cocinado.');

r('zanahoria', 'Bastones de zanahoria al vapor', '🥕', 6, 15, '', 0,
  ['zanahoria|2 zanahorias grandes'],
  ['Pela las zanahorias y córtalas en bastones gruesos.', 'Cuécelas al vapor 12-15 minutos.', 'Comprueba que se aplastan fácilmente con la presión de la lengua contra el paladar.'],
  'Bastones gruesos, nunca finos ni en rodajas.', 'La zanahoria cruda no es segura para bebés: siempre bien cocida.');

r('albondigas-pollo', 'Albóndigas de pollo y calabacín', '🍗', 6, 25, 'huevo,gluten', 0,
  ['pollo|200 g de pollo picado', 'calabacín|½ calabacín rallado y bien escurrido', 'avena|2 cucharadas de copos de avena', 'huevo|1 huevo'],
  ['Mezcla todos los ingredientes.', 'Forma bolitas alargadas, como mini salchichas, para que el bebé pueda agarrarlas.', 'Hornea a 200 °C unos 15-18 minutos o cocínalas en sartén hasta que no queden rosadas por dentro.'],
  'Forma alargada, tiernas y jugosas, no redondas ni duras.');

r('hamburguesa-lentejas', 'Hamburguesa de lentejas y zanahoria', '🫘', 6, 30, 'gluten', 1,
  ['lentejas|1 taza de lentejas cocidas (sin sal)', 'zanahoria|1 zanahoria rallada y cocida', 'avena|2 cucharadas de copos de avena', 'comino|1 pizca de comino'],
  ['Aplasta las lentejas con un tenedor.', 'Mezcla con la zanahoria, la avena y el comino.', 'Forma hamburguesas pequeñas y hornéalas a 200 °C unos 15 minutos.'],
  'Hamburguesas pequeñas y gruesas, o en tiras.', 'Fuente de hierro vegetal. Ofrécela con alimentos ricos en vitamina C, como naranja o tomate, para que se absorba mejor.');

r('pera', 'Gajos de pera cocida', '🍐', 6, 12, '', 0,
  ['pera|1 pera madura'],
  ['Pela la pera y quita el corazón.', 'Córtala en gajos gruesos.', 'Cuécelos al vapor 8-10 minutos hasta que estén muy blandos.'],
  'Gajos gruesos y blandos.');

r('calabacin', 'Bastones de calabacín al horno', '🥒', 6, 20, '', 0,
  ['calabacín|1 calabacín', 'aceite|1 cucharadita de aceite de oliva'],
  ['Corta el calabacín en bastones gruesos, con piel.', 'Mézclalos con el aceite.', 'Hornea a 200 °C unos 15 minutos, hasta que estén blandos.'],
  'Bastones gruesos de unos 6 cm.');

r('ternera', 'Ternera estofada tierna', '🥩', 6, 90, '', 1,
  ['ternera|300 g de ternera (morcillo o falda) en trozos grandes', 'zanahoria|1 zanahoria', 'cebolla|½ cebolla', 'agua|Agua (sin sal)'],
  ['Pon la carne con las verduras y agua en una olla a presión, unos 40 minutos (o 1 hora y media en olla normal).', 'Deja enfriar y desmenúzala en tiras gruesas o hebras.', 'Ofrécela con un poco de caldo o salsa para que sea más jugosa.'],
  'Tiras gruesas y tiernas, o carne desmenuzada.', 'Buena fuente de hierro, uno de los nutrientes clave a partir de los 6 meses.');

r('crema-calabaza', 'Crema espesa de calabaza para mojar', '🎃', 6, 25, '', 0,
  ['calabaza|200 g de calabaza', 'patata|1 patata pequeña', 'cebolla|¼ de cebolla', 'aceite|1 cucharadita de aceite de oliva', 'agua|Agua (sin sal)'],
  ['Cuece las verduras en poca agua hasta que estén muy blandas.', 'Tritura con muy poca agua para que quede espesa.', 'Ofrécela en una cuchara precargada o para mojar bastones de verdura.'],
  'Textura espesa que no gotee de la cuchara.');

r('yogur-almendra', 'Yogur natural con fruta y almendra molida', '🥣', 6, 5, 'leche,frutos', 0,
  ['yogur|1 yogur natural sin azúcar', 'plátano|½ plátano o 1 fresa madura bien chafada', 'almendra|1 cucharadita de almendra molida'],
  ['Chafa la fruta con un tenedor.', 'Mézclala con el yogur.', 'Espolvorea la almendra molida y sírvelo con una cuchara precargada.'],
  'Cuchara precargada, nunca frutos secos enteros.', 'Es una forma segura de introducir el yogur y los frutos secos.');

r('pasta-tomate', 'Fusilli con tomate casero', '🍝', 8, 20, 'gluten', 0,
  ['pasta|80 g de pasta tipo fusilli', 'tomate|2 tomates maduros pelados y triturados', 'aceite|1 chorrito de aceite de oliva'],
  ['Cuece la pasta sin sal 2-3 minutos más de lo que indica el paquete, hasta que quede muy blanda.', 'Cocina el tomate triturado con el aceite 10 minutos.', 'Mezcla y deja templar.'],
  'Pasta con forma de espiral que el bebé pueda agarrar.', 'Sin sal en el agua ni en la salsa.');

r('croquetas-merluza', 'Croquetas de merluza y patata al horno', '🐟', 8, 35, 'pescado,gluten', 0,
  ['merluza|150 g de merluza sin espinas', 'patata|1 patata cocida', 'perejil|Perejil picado', 'avena|2 cucharadas de avena molida para rebozar'],
  ['Cuece la merluza y desmenúzala, revisando que no queden espinas.', 'Aplasta la patata y mezcla con el pescado y el perejil.', 'Forma croquetas alargadas, rebózalas en la avena y hornea a 200 °C unos 15 minutos.'],
  'Forma alargada, blandas por dentro.', 'Revisa muy bien las espinas antes de servir.');

r('muffins-platano', 'Muffins de plátano y avena sin azúcar', '🧁', 8, 30, 'huevo,gluten', 0,
  ['plátano|2 plátanos maduros', 'huevo|2 huevos', 'avena|80 g de copos de avena', 'levadura|1 cucharadita de levadura química'],
  ['Chafa los plátanos y mezcla con los huevos.', 'Añade la avena y la levadura.', 'Reparte en moldes y hornea a 180 °C unos 20 minutos.'],
  'Trozos pequeños o a mordiscos con supervisión.', 'Son un tentempié, no sustituyen una comida completa.');

r('hummus', 'Hummus suave de garbanzos', '🫛', 8, 10, '', 1,
  ['garbanzos|200 g de garbanzos cocidos (sin sal)', 'limón|Zumo de ½ limón', 'aceite|2 cucharadas de aceite de oliva', 'agua|Agua para ajustar la textura'],
  ['Tritura todo hasta que quede cremoso.', 'Ajusta la textura con un poco de agua.', 'Sirve en cuchara precargada o para untar en bastones de verdura cocida.'],
  'Crema espesa para mojar o untar, sin tahini (sin sésamo).', 'Si lo sirves con pan, ten en cuenta el gluten.');

r('salmon', 'Salmón al horno con patata', '🍣', 8, 25, 'pescado', 0,
  ['salmón|1 lomo de salmón de 100 g, sin piel ni espinas', 'patata|1 patata en láminas', 'aceite|Aceite de oliva', 'eneldo|Eneldo (opcional)'],
  ['Precalienta el horno a 180 °C.', 'Coloca las láminas de patata y el salmón encima con un poco de aceite.', 'Hornea 15-18 minutos, hasta que el pescado se desmenuce.', 'Desmenúzalo revisando que no haya espinas.'],
  'Lascas grandes de pescado y patata en trozos blandos.', 'Revisa las espinas.');

r('arroz-huevo', 'Arroz con verduras y huevo duro', '🍚', 10, 25, 'huevo', 0,
  ['arroz|½ taza de arroz cocido', 'calabacín|Calabacín en cubitos muy pequeños', 'zanahoria|Zanahoria en cubitos muy pequeños', 'huevo|1 huevo duro picado'],
  ['Cuece las verduras hasta que estén muy blandas.', 'Mézclalas con el arroz, que debe quedar algo pegajoso.', 'Añade el huevo duro picado.', 'Forma bolitas o ofrécelo con cuchara.'],
  'Bolitas pegajosas o cuchara precargada.', 'Alterna el arroz con otros cereales a lo largo de la semana.');

r('tortitas-yogur', 'Tortitas de yogur', '🥛', 10, 20, 'leche,huevo,gluten', 0,
  ['yogur|1 yogur natural sin azúcar', 'huevo|1 huevo', 'harina|4 cucharadas de harina', 'levadura|½ cucharadita de levadura química', 'aceite|Unas gotas de aceite para la sartén'],
  ['Mezcla el yogur, el huevo, la harina y la levadura.', 'Cocina cucharadas de masa en una sartén antiadherente con unas gotas de aceite, 2 minutos por lado.', 'Deja enfriar antes de servir.'],
  'Tortitas pequeñas o en tiras.');
// Verduras, huevos y primeras frutas

r('coliflor-vapor', 'Ramitos de coliflor al vapor', '🥦', 6, 15, '', 0,
  ['coliflor|1 coliflor pequeña'],
  ['Separa ramitos con un tallo largo.', 'Cuécelos al vapor 10-12 minutos hasta que estén muy blandos.', 'Deja templar.'],
  'Ramito con tallo largo que se pueda agarrar con el puño.');

r('judias-verdes', 'Judías verdes blandas salteadas', '🫛', 8, 25, '', 0,
  ['judías verdes|150 g de judías verdes', 'aceite|1 cucharadita de aceite de oliva'],
  ['Quita las puntas y las hebras.', 'Cuécelas 15 minutos, hasta que estén muy blandas.', 'Saltéalas 2 minutos con el aceite.'],
  'Enteras si son finas y blandas, o en bastones.', 'Deben quedar muy blandas: se aplastan con dos dedos.');

r('pimiento-asado', 'Tiras de pimiento rojo asado', '🫑', 8, 45, '', 0,
  ['pimiento|1 pimiento rojo', 'aceite|1 cucharadita de aceite de oliva'],
  ['Hornea el pimiento entero a 200 °C unos 35 minutos con un poco de aceite.', 'Déjalo 10 minutos tapado para que suelte la piel.', 'Pela, quita las semillas y córtalo en tiras anchas.'],
  'Tiras anchas y blandas, sin piel.', 'Quita bien la piel: es difícil de masticar para un bebé.');

r('berenjena-asada', 'Bastones de berenjena asada', '🍆', 6, 30, '', 0,
  ['berenjena|1 berenjena', 'aceite|1 cucharadita de aceite de oliva'],
  ['Corta la berenjena en bastones gruesos.', 'Mézclalos con el aceite.', 'Hornea a 200 °C unos 20-25 minutos, hasta que estén tiernos.'],
  'Bastones gruesos, con o sin piel.');

r('tortilla-patata', 'Tortilla de patata muy blanda', '🍳', 8, 30, 'huevo', 0,
  ['patata|1 patata mediana', 'cebolla|¼ de cebolla', 'huevo|2 huevos', 'aceite|2 cucharadas de aceite de oliva'],
  ['Corta la patata y la cebolla en láminas finas.', 'Poche con el aceite tapado 15 minutos hasta que estén muy blandas.', 'Mezcla con el huevo batido y cuaja por ambos lados.', 'Corta en tiras cuando se enfríe.'],
  'Tiras anchas y blandas.', 'Sin sal.');

r('patatas-gajos', 'Patatas al horno en gajos', '🥔', 6, 35, '', 0,
  ['patata|2 patatas', 'aceite|1 cucharadita de aceite de oliva', 'perejil|Perejil picado (opcional)'],
  ['Corta las patatas en gajos gruesos con piel bien lavada.', 'Mézclalas con el aceite y el perejil.', 'Hornea a 200 °C unos 30 minutos, hasta que estén blandas por dentro.'],
  'Gajos gruesos, blandos por dentro.');

r('calabaza-asada', 'Gajos de calabaza asada', '🎃', 6, 30, '', 0,
  ['calabaza|300 g de calabaza', 'aceite|1 cucharadita de aceite de oliva', 'canela|Una pizca de canela (opcional)'],
  ['Corta la calabaza en gajos gruesos sin piel.', 'Mézclalos con el aceite y la canela.', 'Hornea a 200 °C unos 25 minutos, hasta que estén tiernos.'],
  'Gajos gruesos y blandos.');

r('champinones', 'Champiñones salteados en tiras', '🍄', 8, 12, '', 0,
  ['champiñón|150 g de champiñones', 'aceite|1 cucharadita de aceite de oliva', 'perejil|Perejil picado (opcional)'],
  ['Limpia los champiñones con un paño húmedo.', 'Córtalos en tiras gruesas.', 'Saltéalos con el aceite unos 8 minutos hasta que estén muy blandos.'],
  'Tiras gruesas y bien cocinadas.', 'Nunca crudos.');

r('tortitas-calabacin', 'Tortitas de calabacín', '🥒', 8, 20, 'huevo,gluten', 0,
  ['calabacín|1 calabacín pequeño rallado y escurrido', 'huevo|1 huevo', 'harina|3 cucharadas de harina', 'aceite|Unas gotas de aceite para la sartén'],
  ['Escurre muy bien el calabacín rallado.', 'Mézclalo con el huevo y la harina.', 'Cocina cucharadas de masa 2-3 minutos por lado.'],
  'Tortitas pequeñas o en tiras.');

r('bunuelos-coliflor', 'Buñuelos de coliflor al horno', '🥦', 8, 35, 'huevo,gluten', 0,
  ['coliflor|½ coliflor', 'huevo|1 huevo', 'avena|3 cucharadas de avena'],
  ['Cuece la coliflor hasta que esté blanda y tritúrala gruesa.', 'Escurre bien y mezcla con el huevo y la avena.', 'Forma bolas aplastadas y hornea a 200 °C unos 20 minutos.'],
  'Bolitas aplastadas, blandas por dentro.');

r('tortitas-zanahoria', 'Tortitas de zanahoria y avena', '🥕', 8, 25, 'huevo,gluten', 0,
  ['zanahoria|1 zanahoria cocida y rallada', 'avena|3 cucharadas de avena', 'huevo|1 huevo', 'aceite|Unas gotas de aceite para la sartén'],
  ['Mezcla la zanahoria con la avena y el huevo.', 'Cocina cucharadas de masa 2 minutos por lado.'],
  'Tortitas pequeñas o en tiras.');

r('tostada-guisantes', 'Tostada de guisantes aplastados', '🫛', 8, 15, 'gluten', 0,
  ['guisantes|100 g de guisantes', 'pan|1 rebanada de pan', 'aceite|1 cucharadita de aceite de oliva'],
  ['Cuece los guisantes hasta que estén muy blandos.', 'Aplástalos con un tenedor con el aceite.', 'Úntalos sobre el pan tostado y córtalo en tiras.'],
  'Tiras de tostada con los guisantes aplastados.', 'Aplasta siempre los guisantes: enteros pueden atragantar.');

r('tostada-aguacate-huevo', 'Tostada de aguacate y huevo', '🥑', 8, 15, 'gluten,huevo', 0,
  ['pan|1 rebanada de pan', 'aguacate|½ aguacate maduro', 'huevo|1 huevo duro'],
  ['Cuece el huevo 10 minutos y pícalo.', 'Chafa el aguacate sobre el pan tostado.', 'Añade el huevo y corta en tiras.'],
  'Tiras de tostada con la crema por encima.');

r('crema-puerro', 'Crema espesa de puerro y patata', '🥣', 6, 25, '', 0,
  ['puerro|1 puerro', 'patata|1 patata', 'aceite|1 cucharadita de aceite de oliva', 'agua|Agua (sin sal)'],
  ['Cuece el puerro y la patata en poca agua hasta que estén muy blandos.', 'Tritura con un poco de agua y el aceite, hasta una textura espesa.', 'Ofrécela con cuchara precargada o para mojar bastones de verdura.'],
  'Textura espesa que no gotee de la cuchara.');

r('rollitos-queso', 'Rollitos de tortilla con queso fresco', '🌯', 8, 15, 'huevo,leche', 0,
  ['huevo|2 huevos', 'queso fresco|2 cucharadas de queso fresco pasteurizado sin sal', 'aceite|Unas gotas de aceite para la sartén'],
  ['Haz una tortilla fina y déjala enfriar.', 'Unta el queso fresco por encima y enróllala.', 'Corta en tiras anchas.'],
  'Tiras anchas, no rodajas pequeñas.', 'Usa queso pasteurizado, fresco y sin sal añadida.');

r('manzana-cocida', 'Gajos de manzana cocida', '🍎', 6, 15, '', 0,
  ['manzana|1 manzana'],
  ['Pela la manzana y quita el corazón.', 'Córtala en gajos gruesos.', 'Cuécelos al vapor unos 10 minutos hasta que estén blandos.'],
  'Gajos gruesos y blandos.', 'La manzana cruda es dura y no es segura para bebés pequeños.');

r('manzana-canela', 'Manzana asada con canela', '🍏', 6, 35, '', 0,
  ['manzana|1 manzana', 'canela|Una pizca de canela'],
  ['Quita el corazón de la manzana y ponla en una fuente.', 'Espolvorea la canela.', 'Hornea a 180 °C unos 30 minutos hasta que esté muy blanda.'],
  'Cuartos blandos o con cuchara.');

r('melocoton', 'Gajos de melocotón maduro', '🍑', 6, 5, '', 0,
  ['melocotón|1 melocotón muy maduro'],
  ['Pela el melocotón y quita el hueso.', 'Córtalo en gajos gruesos.'],
  'Gajos gruesos, muy maduros y blandos.');

r('mango', 'Tiras de mango maduro', '🥭', 6, 5, '', 0,
  ['mango|1 mango muy maduro'],
  ['Pela el mango y quita el hueso.', 'Córtalo en tiras anchas.'],
  'Tiras anchas; resbalan, así que pueden rebozarse en avena molida.');

r('melon', 'Bastones de melón', '🍈', 6, 5, '', 0,
  ['melón|¼ de melón muy maduro'],
  ['Quita la piel y las pipas.', 'Córtalo en bastones gruesos.'],
  'Bastones gruesos y maduros.');
// Frutas, cereales, pan y pasta

r('sandia', 'Bastones de sandía', '🍉', 6, 5, '', 0,
  ['sandía|1 trozo de sandía sin pepitas'],
  ['Quita la piel y las pepitas.', 'Córtala en bastones gruesos.'],
  'Bastones gruesos; resbalan, mejor con las manos secas.');

r('fresas', 'Fresas en cuartos', '🍓', 8, 5, '', 0,
  ['fresa|5 fresas maduras'],
  ['Lava las fresas y quita el rabito.', 'Córtalas en cuartos a lo largo.'],
  'Cuartos a lo largo, nunca enteras.', 'Pueden causar rojeces alrededor de la boca; es normal si no hay otros síntomas.');

r('yogur-arandanos', 'Yogur con arándanos aplastados', '🫐', 8, 5, 'leche', 0,
  ['yogur|1 yogur natural sin azúcar', 'arándano|1 puñado de arándanos'],
  ['Aplasta los arándanos con un tenedor.', 'Mézclalos con el yogur.'],
  'Cuchara precargada.', 'Aplasta siempre los arándanos: enteros pueden atragantar.');

r('platano-almendra', 'Plátano rebozado en almendra molida', '🍌', 6, 5, 'frutos', 0,
  ['plátano|1 plátano maduro', 'almendra|2 cucharaditas de almendra molida muy fina'],
  ['Pela el plátano y córtalo por la mitad a lo largo.', 'Reboza en la almendra molida para que no resbale.'],
  'Medio plátano a lo largo.', 'La almendra siempre molida muy fina, nunca entera.');

r('compota-manzana-pera', 'Compota de manzana y pera sin azúcar', '🍐', 6, 20, '', 0,
  ['manzana|1 manzana', 'pera|1 pera', 'canela|Una pizca de canela (opcional)'],
  ['Pela y trocea la fruta.', 'Cuécela con poca agua unos 15 minutos.', 'Tritura gruesa y deja enfriar.'],
  'Cuchara precargada.');

r('bizcocho-manzana', 'Bizcocho de manzana sin azúcar', '🍰', 10, 50, 'huevo,gluten,leche', 0,
  ['manzana|2 manzanas', 'huevo|2 huevos', 'harina|100 g de harina', 'yogur|1 yogur natural sin azúcar', 'levadura|1 cucharadita de levadura química', 'aceite|2 cucharadas de aceite de oliva'],
  ['Ralla una manzana y corta la otra en láminas.', 'Mezcla huevos, yogur, aceite, harina y levadura.', 'Añade la manzana rallada y vierte en un molde con las láminas por encima.', 'Hornea a 180 °C unos 35 minutos.'],
  'Trozos pequeños, a mordiscos con supervisión.', 'Es un tentempié ocasional, sin azúcar añadido.');

r('helado-platano-fresa', 'Helado casero de plátano y fresa', '🍨', 8, 10, '', 0,
  ['plátano|2 plátanos maduros congelados en rodajas', 'fresa|4 fresas congeladas'],
  ['Tritura el plátano y las fresas congeladas hasta que quede cremoso.', 'Sírvelo enseguida.'],
  'Con cuchara y en cantidad pequeña.', 'Bueno para la dentición. Sin azúcar ni leche.');

r('tostadas-francesas', 'Tostadas francesas sin azúcar', '🍞', 8, 15, 'gluten,huevo', 0,
  ['pan|2 rebanadas de pan', 'huevo|1 huevo', 'canela|Una pizca de canela', 'aceite|Unas gotas de aceite para la sartén'],
  ['Bate el huevo con la canela.', 'Moja el pan por ambos lados.', 'Cocina en sartén 2 minutos por lado, hasta que el huevo esté cuajado.', 'Corta en tiras.'],
  'Tiras anchas.');

r('porridge-platano', 'Porridge de avena y plátano', '🥣', 6, 10, 'gluten', 0,
  ['avena|4 cucharadas de copos de avena', 'plátano|½ plátano maduro', 'agua|150 ml de agua'],
  ['Cuece la avena con el agua 5 minutos removiendo.', 'Añade el plátano chafado.', 'Deja templar hasta que espese.'],
  'Cuchara precargada con textura espesa.');

r('porridge-manzana', 'Porridge de avena con manzana y canela', '🍎', 6, 15, 'gluten', 0,
  ['avena|4 cucharadas de copos de avena', 'manzana|½ manzana rallada', 'canela|Una pizca de canela', 'agua|150 ml de agua'],
  ['Cuece la avena con el agua y la manzana rallada 6-8 minutos.', 'Añade la canela y deja templar.'],
  'Cuchara precargada con textura espesa.');

r('cuscus-verduras', 'Cuscús con verduras', '🍲', 10, 20, 'gluten', 0,
  ['cuscús|½ taza de cuscús', 'calabacín|Calabacín en cubitos muy pequeños', 'zanahoria|Zanahoria en cubitos muy pequeños', 'aceite|1 cucharadita de aceite de oliva'],
  ['Cuece las verduras hasta que estén muy blandas.', 'Hidrata el cuscús con agua caliente 5 minutos.', 'Mezcla todo con el aceite.'],
  'Cuchara precargada o bolitas pegajosas.');

r('quinoa-verduras', 'Quinoa con verduras', '🌾', 10, 25, '', 0,
  ['quinoa|½ taza de quinoa', 'zanahoria|Zanahoria en cubitos muy pequeños', 'calabacín|Calabacín en cubitos muy pequeños', 'aceite|1 cucharadita de aceite de oliva'],
  ['Lava bien la quinoa para quitarle el amargor.', 'Cuécela 15 minutos con las verduras.', 'Escurre y mezcla con el aceite.'],
  'Bolitas pegajosas o cuchara precargada.');

r('arroz-pollo', 'Arroz meloso con pollo', '🍗', 10, 30, '', 0,
  ['arroz|½ taza de arroz', 'pollo|100 g de pollo en trocitos', 'zanahoria|1 zanahoria en cubitos pequeños', 'aceite|1 cucharadita de aceite de oliva', 'agua|Agua (sin sal)'],
  ['Sofríe el pollo con el aceite.', 'Añade la zanahoria y el arroz y cubre con agua.', 'Cuece 20 minutos hasta que quede meloso.', 'Desmenuza el pollo.'],
  'Bolitas pegajosas o cuchara.', 'Alterna el arroz con otros cereales a lo largo de la semana.');

r('bolitas-arroz-queso', 'Bolitas de arroz y queso al horno', '🍙', 10, 30, 'leche,huevo', 0,
  ['arroz|1 taza de arroz cocido', 'queso fresco|2 cucharadas de queso fresco pasteurizado sin sal', 'huevo|1 huevo'],
  ['Mezcla el arroz cocido con el queso y el huevo.', 'Forma bolitas aplastadas.', 'Hornea a 200 °C unos 15 minutos.'],
  'Bolitas pequeñas y blandas.');

r('tortitas-garbanzo', 'Tortitas de harina de garbanzo', '🥞', 8, 15, '', 0,
  ['harina de garbanzo|4 cucharadas de harina de garbanzo', 'agua|6 cucharadas de agua', 'aceite|Unas gotas de aceite', 'comino|Una pizca de comino (opcional)'],
  ['Mezcla la harina con el agua hasta obtener una masa fina.', 'Cocina cucharadas de masa en una sartén 2 minutos por lado.'],
  'Tortitas pequeñas o en tiras.');

r('tortitas-calabaza', 'Tortitas de calabaza y avena', '🎃', 8, 25, 'huevo,gluten', 0,
  ['calabaza|100 g de calabaza cocida y aplastada', 'avena|3 cucharadas de avena', 'huevo|1 huevo', 'aceite|Unas gotas de aceite para la sartén'],
  ['Mezcla la calabaza con la avena y el huevo.', 'Cocina cucharadas de masa 2 minutos por lado.'],
  'Tortitas pequeñas o en tiras.');

r('pizza-coliflor', 'Pizza de coliflor con tomate y queso', '🍕', 10, 45, 'huevo,leche', 0,
  ['coliflor|½ coliflor rallada y cocida', 'huevo|1 huevo', 'tomate|2 cucharadas de tomate triturado', 'queso mozzarella|2 cucharadas de queso mozzarella'],
  ['Escurre muy bien la coliflor y mezcla con el huevo.', 'Extiende la base y hornea a 200 °C 15 minutos.', 'Añade el tomate y el queso y hornea 5 minutos más.', 'Corta en tiras.'],
  'Tiras anchas.');

r('minipizzas-pan', 'Mini pizzas de pan con tomate y queso', '🍕', 10, 15, 'gluten,leche', 0,
  ['pan|2 rebanadas de pan', 'tomate|2 cucharadas de tomate triturado', 'queso mozzarella|2 cucharadas de queso mozzarella'],
  ['Unta el pan con el tomate y cubre con el queso.', 'Hornea a 200 °C unos 8 minutos.', 'Corta en tiras.'],
  'Tiras anchas, templadas.');

r('pasta-crema-calabacin', 'Pasta con crema de calabacín y queso', '🍝', 10, 25, 'gluten,leche', 0,
  ['pasta|80 g de pasta', 'calabacín|1 calabacín', 'queso fresco|2 cucharadas de queso fresco pasteurizado sin sal'],
  ['Cuece la pasta sin sal hasta que esté muy blanda.', 'Cuece el calabacín y tritúralo con el queso.', 'Mezcla con la pasta.'],
  'Pasta con forma que el bebé pueda agarrar.');

r('macarrones-pavo', 'Macarrones con pavo y verduras', '🍝', 10, 30, 'gluten', 0,
  ['pasta|80 g de macarrones', 'pavo|100 g de pavo picado', 'zanahoria|1 zanahoria rallada', 'tomate|2 cucharadas de tomate triturado'],
  ['Cuece la pasta sin sal hasta que esté muy blanda.', 'Cocina el pavo con la zanahoria y el tomate 10 minutos.', 'Mezcla.'],
  'Cuchara o pasta con salsa espesa.');
// Legumbres, carnes y pescados

r('lentejas-arroz', 'Lentejas con arroz y verduras', '🍛', 8, 40, '', 1,
  ['lentejas|½ taza de lentejas', 'arroz|2 cucharadas de arroz', 'zanahoria|1 zanahoria', 'calabaza|50 g de calabaza', 'agua|Agua (sin sal)'],
  ['Cuece las lentejas con las verduras 25 minutos.', 'Añade el arroz y cuece 15 minutos más.', 'Aplasta ligeramente para que quede espeso.'],
  'Cuchara precargada o bolitas pegajosas.', 'Acompáñalo de fruta rica en vitamina C para absorber mejor el hierro.');

r('albondigas-garbanzos', 'Albóndigas de garbanzos', '🧆', 8, 30, 'huevo,gluten', 1,
  ['garbanzos|1 taza de garbanzos cocidos', 'avena|2 cucharadas de avena', 'huevo|1 huevo', 'perejil|Perejil picado'],
  ['Aplasta los garbanzos con un tenedor.', 'Mezcla con la avena, el huevo y el perejil.', 'Forma bolitas alargadas y hornea a 200 °C unos 15 minutos.'],
  'Forma alargada y blandas.');

r('falafel', 'Falafel al horno sin sésamo', '🧆', 10, 35, '', 1,
  ['garbanzos|1 taza de garbanzos cocidos', 'cebolla|¼ de cebolla rallada', 'harina de garbanzo|2 cucharadas de harina de garbanzo', 'perejil|Perejil picado', 'comino|Una pizca de comino', 'aceite|1 cucharadita de aceite de oliva'],
  ['Tritura los garbanzos con la cebolla y las especias.', 'Mezcla con la harina y forma bolitas aplastadas.', 'Pincela con aceite y hornea a 200 °C unos 20 minutos.'],
  'Bolitas aplastadas y blandas.');

r('alubias-tomate', 'Alubias blancas aplastadas con tomate', '🫘', 8, 25, '', 1,
  ['alubias|1 taza de alubias cocidas (sin sal)', 'tomate|2 tomates pelados', 'cebolla|¼ de cebolla', 'aceite|1 cucharadita de aceite de oliva'],
  ['Sofríe la cebolla con el aceite.', 'Añade el tomate y cocina 10 minutos.', 'Mezcla con las alubias y aplástalas ligeramente.'],
  'Cuchara precargada, con las alubias aplastadas.');

r('hummus-zanahoria', 'Hummus de zanahoria', '🥕', 8, 25, '', 1,
  ['garbanzos|1 taza de garbanzos cocidos', 'zanahoria|1 zanahoria cocida', 'limón|Zumo de ½ limón', 'aceite|1 cucharada de aceite de oliva'],
  ['Tritura todos los ingredientes hasta que quede cremoso.', 'Ajusta con agua si hace falta.'],
  'Crema espesa para untar en tiras de verdura cocida.');

r('tofu', 'Tiras de tofu a la plancha', '⬜', 8, 10, 'soja', 1,
  ['tofu|100 g de tofu firme', 'aceite|Unas gotas de aceite'],
  ['Escurre el tofu y sécalo con papel de cocina.', 'Córtalo en tiras gruesas.', 'Dóralo en la plancha 2 minutos por lado.'],
  'Tiras gruesas y blandas.', 'Introduce la soja en pequeña cantidad, como cualquier otro alérgeno.');

r('tortitas-lentejas', 'Tortitas de lentejas rojas', '🥞', 8, 25, 'huevo,gluten', 1,
  ['lentejas|1 taza de lentejas rojas cocidas', 'zanahoria|1 zanahoria rallada', 'huevo|1 huevo', 'avena|2 cucharadas de avena'],
  ['Aplasta las lentejas.', 'Mézclalas con la zanahoria, el huevo y la avena.', 'Cocina cucharadas de masa 2-3 minutos por lado.'],
  'Tortitas pequeñas.');

r('lentejas-rojas-calabaza', 'Crema de lentejas rojas y calabaza', '🍲', 6, 30, '', 1,
  ['lentejas|½ taza de lentejas rojas', 'calabaza|150 g de calabaza', 'cebolla|¼ de cebolla', 'comino|Una pizca de comino', 'aceite|1 cucharadita de aceite de oliva'],
  ['Sofríe la cebolla con el aceite.', 'Añade la calabaza, las lentejas y agua hasta cubrir.', 'Cuece 20 minutos y tritura hasta una crema espesa.'],
  'Cuchara precargada, textura espesa.');

r('pollo-desmenuzado', 'Pollo desmenuzado con verduras', '🍗', 6, 40, '', 0,
  ['pollo|1 pechuga de pollo', 'zanahoria|1 zanahoria', 'patata|1 patata', 'cebolla|¼ de cebolla'],
  ['Cuece el pollo con las verduras 25 minutos, sin sal.', 'Desmenúzalo bien.', 'Aplasta las verduras y mézclalo todo con un poco de caldo.'],
  'Hebras tiernas y jugosas con verduras aplastadas.', 'Asegúrate de que el pollo está completamente cocinado.');

r('pavo-guisado', 'Pavo guisado en tiras', '🦃', 8, 40, '', 0,
  ['pavo|150 g de pechuga de pavo', 'cebolla|¼ de cebolla', 'zanahoria|1 zanahoria', 'aceite|1 cucharadita de aceite de oliva', 'agua|Agua (sin sal)'],
  ['Dora la cebolla con el aceite.', 'Añade el pavo en trozos, la zanahoria y agua.', 'Cuece tapado 25 minutos hasta que esté muy tierno.', 'Córtalo en tiras.'],
  'Tiras tiernas y jugosas.');

r('cerdo-desmenuzado', 'Lomo de cerdo estofado y desmenuzado', '🐖', 8, 70, '', 0,
  ['cerdo|200 g de lomo de cerdo', 'cebolla|¼ de cebolla', 'zanahoria|1 zanahoria', 'agua|Agua (sin sal)'],
  ['Pon el lomo con las verduras y agua en una olla.', 'Cuece tapado 1 hora hasta que esté muy tierno.', 'Desmenúzalo en hebras.'],
  'Hebras tiernas con un poco de caldo.');

r('cordero-patata', 'Cordero tierno con patata', '🐑', 8, 70, '', 1,
  ['cordero|200 g de cordero sin hueso', 'patata|1 patata', 'zanahoria|1 zanahoria', 'agua|Agua (sin sal)'],
  ['Pon el cordero con las verduras y agua en una olla.', 'Cuece tapado 1 hora hasta que esté muy tierno.', 'Desmenuza la carne y aplasta la patata.'],
  'Hebras tiernas y patata aplastada.', 'Comprueba que no queden huesos ni cartílagos.');

r('hamburguesa-ternera', 'Hamburguesa de ternera y cebolla', '🍔', 8, 25, 'huevo,gluten', 1,
  ['ternera|150 g de ternera picada', 'cebolla|¼ de cebolla rallada', 'avena|2 cucharadas de avena', 'huevo|1 huevo'],
  ['Mezcla todos los ingredientes.', 'Forma hamburguesas pequeñas y gruesas.', 'Cocínalas en la plancha 4 minutos por lado, hasta que no queden rosadas.'],
  'Hamburguesas pequeñas, jugosas.');

r('bolitas-pavo-manzana', 'Bolitas de pavo y manzana', '🍎', 8, 30, 'gluten', 0,
  ['pavo|150 g de pavo picado', 'manzana|½ manzana rallada', 'avena|2 cucharadas de avena'],
  ['Mezcla todo.', 'Forma bolitas alargadas.', 'Hornea a 200 °C unos 15-18 minutos, sin que queden rosadas.'],
  'Forma alargada y tiernas.');

r('pollo-tomate', 'Tiras de pollo con tomate', '🍅', 8, 25, '', 0,
  ['pollo|1 pechuga de pollo', 'tomate|2 tomates pelados', 'cebolla|¼ de cebolla', 'aceite|1 cucharadita de aceite de oliva'],
  ['Corta el pollo en tiras gruesas.', 'Sofríe la cebolla con el aceite, añade el tomate y el pollo.', 'Cocina tapado 15 minutos hasta que esté muy tierno.'],
  'Tiras tiernas con salsa espesa.');

r('lasana-calabacin', 'Lasaña de calabacín', '🧀', 10, 50, 'leche', 1,
  ['calabacín|1 calabacín grande en láminas', 'ternera|150 g de ternera picada', 'tomate|3 cucharadas de tomate triturado', 'queso mozzarella|3 cucharadas de queso mozzarella'],
  ['Cocina la ternera con el tomate 10 minutos.', 'Monta capas de calabacín y carne, y cubre con el queso.', 'Hornea a 200 °C unos 25 minutos.', 'Deja templar y corta en tiras.'],
  'Tiras anchas, bien templadas.');

r('cocido-bebe', 'Cocido para bebés', '🍲', 10, 60, '', 1,
  ['garbanzos|½ taza de garbanzos cocidos', 'zanahoria|1 zanahoria', 'patata|1 patata', 'pollo|100 g de pollo'],
  ['Cuece el pollo con las verduras sin sal.', 'Aplasta los garbanzos y las verduras.', 'Desmenuza el pollo y mezcla.'],
  'Cuchara precargada con todo aplastado.');

r('merluza-vapor', 'Merluza al vapor en lascas con patata', '🐟', 6, 25, 'pescado', 0,
  ['merluza|100 g de merluza sin espinas', 'patata|1 patata', 'aceite|1 cucharadita de aceite de oliva'],
  ['Cuece la patata al vapor 15 minutos.', 'Añade la merluza los últimos 5 minutos.', 'Desmenuza y revisa que no queden espinas.', 'Aliña con aceite.'],
  'Lascas grandes de pescado y patata en trozos blandos.', 'Revisa muy bien las espinas.');

r('lenguado-limon', 'Lenguado a la plancha con limón', '🐟', 8, 10, 'pescado', 0,
  ['lenguado|1 filete de lenguado', 'limón|Unas gotas de limón', 'aceite|Unas gotas de aceite'],
  ['Dora el filete 2-3 minutos por lado.', 'Añade unas gotas de limón.', 'Desmenuza revisando que no queden espinas.'],
  'Lascas tiernas.', 'Revisa las espinas.');

r('bacalao-tomate', 'Bacalao fresco con tomate', '🐟', 8, 30, 'pescado', 0,
  ['bacalao|1 lomo de bacalao fresco', 'tomate|2 tomates pelados', 'cebolla|¼ de cebolla', 'aceite|1 cucharadita de aceite de oliva'],
  ['Sofríe la cebolla con el aceite.', 'Añade el tomate y cocina 10 minutos.', 'Pon el bacalao encima y cuece tapado 8 minutos.', 'Desmenuza revisando las espinas.'],
  'Lascas grandes con salsa.', 'Usa bacalao fresco, no salado.');

r('hamburguesa-salmon', 'Hamburguesa de salmón y patata', '🍣', 8, 30, 'pescado', 0,
  ['salmón|100 g de salmón sin piel ni espinas', 'patata|1 patata cocida', 'eneldo|Eneldo (opcional)', 'aceite|Unas gotas de aceite'],
  ['Cuece el salmón y desmenúzalo.', 'Mézclalo con la patata aplastada y el eneldo.', 'Forma hamburguesas pequeñas y dóralas 3 minutos por lado.'],
  'Hamburguesas pequeñas y blandas.', 'Revisa las espinas.');

r('sardinas-horno', 'Sardinas al horno con tomate', '🐟', 10, 30, 'pescado', 1,
  ['sardina|2 sardinas frescas limpias y sin espinas', 'tomate|1 tomate', 'aceite|1 cucharadita de aceite de oliva'],
  ['Pide en la pescadería que las abran y quiten la espina central.', 'Colócalas con rodajas de tomate y aceite.', 'Hornea a 180 °C unos 12 minutos.', 'Revisa y desmenuza.'],
  'Lascas pequeñas sin espinas.', 'Pescado azul rico en hierro y omega 3. Revisa bien las espinas.');

r('pescadilla-avena', 'Tiras de pescadilla rebozadas con avena', '🐟', 8, 20, 'pescado,huevo,gluten', 0,
  ['pescadilla|1 filete de pescadilla', 'avena|3 cucharadas de avena molida', 'huevo|1 huevo batido'],
  ['Corta el pescado en tiras anchas.', 'Pásalas por el huevo y la avena.', 'Hornea a 200 °C unos 10 minutos.'],
  'Tiras anchas.', 'Revisa las espinas.');

r('arroz-merluza', 'Arroz con merluza y guisantes', '🍚', 10, 30, 'pescado', 0,
  ['arroz|½ taza de arroz', 'merluza|100 g de merluza', 'guisantes|2 cucharadas de guisantes', 'aceite|1 cucharadita de aceite de oliva'],
  ['Cuece el arroz con los guisantes 18 minutos.', 'Añade la merluza los últimos 5 minutos.', 'Desmenuza el pescado y aplasta los guisantes.'],
  'Bolitas pegajosas o cuchara.', 'Revisa las espinas.');

r('tortilla-salmon', 'Tortilla de salmón', '🍳', 8, 15, 'pescado,huevo', 0,
  ['salmón|60 g de salmón cocido y desmenuzado', 'huevo|2 huevos', 'aceite|Unas gotas de aceite'],
  ['Bate los huevos y mezcla con el salmón.', 'Cuaja en sartén por ambos lados.', 'Corta en tiras.'],
  'Tiras anchas.');
// Huevos, lácteos, frutas y recetas rápidas

r('revuelto-tomate', 'Huevos revueltos con tomate', '🍳', 6, 10, 'huevo', 0,
  ['huevo|2 huevos', 'tomate|1 tomate pelado y triturado', 'aceite|Unas gotas de aceite'],
  ['Cocina el tomate 5 minutos con el aceite.', 'Añade los huevos batidos y remueve hasta que cuajen.', 'Deja templar.'],
  'Trozos grandes y cuajados.', 'El huevo debe estar completamente cocinado.');

r('huevo-duro-aguacate', 'Huevo duro con aguacate', '🥚', 6, 15, 'huevo', 0,
  ['huevo|1 huevo', 'aguacate|½ aguacate maduro'],
  ['Cuece el huevo 10 minutos y pélalo.', 'Córtalo en gajos.', 'Sirve con el aguacate chafado.'],
  'Gajos grandes de huevo con aguacate para untar.');

r('revuelto-calabacin', 'Revuelto de calabacín', '🥒', 8, 15, 'huevo', 0,
  ['huevo|2 huevos', 'calabacín|½ calabacín rallado', 'aceite|Unas gotas de aceite'],
  ['Saltea el calabacín 4 minutos con el aceite.', 'Añade los huevos batidos y remueve hasta que cuajen.'],
  'Trozos grandes y cuajados.');

r('muffins-salados', 'Muffins salados de verduras', '🧁', 10, 35, 'huevo,gluten,leche', 0,
  ['huevo|2 huevos', 'zanahoria|1 zanahoria rallada', 'calabacín|½ calabacín rallado', 'harina|60 g de harina', 'queso mozzarella|2 cucharadas de queso mozzarella', 'levadura|½ cucharadita de levadura química', 'aceite|1 cucharada de aceite de oliva'],
  ['Mezcla huevos, aceite, harina y levadura.', 'Añade las verduras y el queso.', 'Reparte en moldes y hornea a 180 °C unos 20 minutos.'],
  'Trozos pequeños.');

r('queso-fresco-fruta', 'Queso fresco con fruta', '🧀', 8, 5, 'leche', 0,
  ['queso fresco|3 cucharadas de queso fresco pasteurizado sin sal', 'melocotón|½ melocotón maduro'],
  ['Chafa el melocotón con un tenedor.', 'Mézclalo con el queso fresco.'],
  'Cuchara precargada.', 'Usa queso fresco pasteurizado y sin sal añadida.');

r('overnight-avena', 'Avena en remojo con yogur y plátano', '🥣', 8, 10, 'gluten,leche', 0,
  ['avena|4 cucharadas de copos de avena', 'yogur|1 yogur natural sin azúcar', 'plátano|½ plátano'],
  ['Mezcla la avena con el yogur.', 'Déjalo en la nevera 6 horas o toda la noche.', 'Añade el plátano chafado.'],
  'Cuchara precargada.');

r('tortitas-boniato', 'Tortitas de boniato y avena', '🍠', 8, 30, 'huevo,gluten', 0,
  ['boniato|1 boniato cocido y aplastado', 'avena|3 cucharadas de avena', 'huevo|1 huevo', 'aceite|Unas gotas de aceite'],
  ['Mezcla el boniato con la avena y el huevo.', 'Cocina cucharadas de masa 2-3 minutos por lado.'],
  'Tortitas pequeñas o en tiras.');

r('croquetas-pollo', 'Croquetas de pollo y patata al horno', '🍗', 8, 35, 'gluten', 0,
  ['pollo|100 g de pollo cocido y desmenuzado', 'patata|1 patata cocida', 'avena|2 cucharadas de avena molida', 'perejil|Perejil picado'],
  ['Mezcla el pollo con la patata aplastada y el perejil.', 'Forma croquetas alargadas y rebózalas con la avena.', 'Hornea a 200 °C unos 15 minutos.'],
  'Forma alargada y blanda.');

r('naranja', 'Gajos de naranja sin piel', '🍊', 8, 5, '', 0,
  ['naranja|1 naranja'],
  ['Pela la naranja quitando bien la parte blanca.', 'Separa los gajos y quita las pepitas.', 'Quita la membrana si es gruesa.'],
  'Gajos pelados, sin pepitas.', 'Puede resultar ácida: ofrécela en pequeñas cantidades.');

r('kiwi', 'Kiwi maduro en cuñas', '🥝', 8, 5, '', 0,
  ['kiwi|1 kiwi maduro'],
  ['Pela el kiwi.', 'Córtalo en cuñas gruesas.'],
  'Cuñas gruesas y muy maduras.', 'Puede picar un poco en la boca; si hay rojeces, pausa.');

r('ensalada-zanahoria-manzana', 'Ensalada de zanahoria y manzana rallada', '🥗', 12, 10, '', 0,
  ['zanahoria|1 zanahoria', 'manzana|½ manzana', 'aceite|1 cucharadita de aceite de oliva', 'limón|Unas gotas de limón'],
  ['Ralla la zanahoria y la manzana muy fina.', 'Mezcla con el aceite y el limón.'],
  'Ralladura fina con cuchara.', 'La zanahoria cruda solo rallada muy fina y a partir de los 12 meses.');

r('ensalada-tomate-aguacate', 'Tomate y aguacate en trozos', '🥗', 10, 5, '', 0,
  ['tomate|1 tomate maduro sin piel', 'aguacate|½ aguacate', 'aceite|Un chorrito de aceite de oliva'],
  ['Pela el tomate y quita las semillas.', 'Córtalo en gajos con el aguacate.', 'Aliña con el aceite.'],
  'Gajos grandes y blandos.');

r('pan-tomate', 'Tostada con tomate y aceite', '🍞', 8, 5, 'gluten', 0,
  ['pan|1 rebanada de pan', 'tomate|1 tomate maduro rallado', 'aceite|Un chorrito de aceite de oliva'],
  ['Tuesta el pan.', 'Unta el tomate rallado y el aceite.', 'Corta en tiras.'],
  'Tiras de tostada.', 'Sin sal.');

r('judias-patata-huevo', 'Judías verdes con patata y huevo', '🥗', 10, 30, 'huevo', 0,
  ['judías verdes|100 g de judías verdes', 'patata|1 patata', 'huevo|1 huevo', 'aceite|1 cucharadita de aceite de oliva'],
  ['Cuece las judías y la patata hasta que estén muy blandas.', 'Cuece el huevo 10 minutos.', 'Trocea todo y aliña con aceite.'],
  'Trozos blandos del tamaño de un dedo.');

r('boniato-relleno', 'Boniato relleno de lentejas', '🍠', 10, 60, '', 1,
  ['boniato|1 boniato mediano', 'lentejas|½ taza de lentejas cocidas', 'cebolla|¼ de cebolla', 'comino|Una pizca de comino', 'aceite|1 cucharadita de aceite de oliva'],
  ['Hornea el boniato entero a 200 °C unos 45 minutos.', 'Sofríe la cebolla con el aceite y las lentejas.', 'Abre el boniato, rellénalo y aplasta ligeramente.'],
  'Cuchara precargada o trozos blandos.');

r('pure-rustico', 'Puré rústico de zanahoria y patata', '🥕', 6, 25, '', 0,
  ['zanahoria|2 zanahorias', 'patata|1 patata', 'aceite|1 cucharadita de aceite de oliva', 'agua|Agua (sin sal)'],
  ['Cuece las verduras en poca agua hasta que estén muy blandas.', 'Aplasta con un tenedor dejando algunos trozos.', 'Añade el aceite.'],
  'Cuchara precargada o bolitas aplastadas con la mano.');

// Categorías: 'momentos|tipo'. Momentos: D = desayuno o merienda, C = comida o cena, T = tentempié.
window.CAT = {
  'aguacate':'T|verdura','boniato':'CT|verdura','brocoli':'C|verdura','tortitas-platano':'DT|masas','tortilla':'CD|huevo',
  'zanahoria':'C|verdura','albondigas-pollo':'C|carne','hamburguesa-lentejas':'C|legumbre','pera':'TD|fruta','calabacin':'C|verdura',
  'ternera':'C|carne','crema-calabaza':'C|cremas','yogur-almendra':'DT|lacteo','pasta-tomate':'C|masas','croquetas-merluza':'C|pescado',
  'muffins-platano':'DT|masas','hummus':'T|cremas','salmon':'C|pescado','arroz-huevo':'C|masas','tortitas-yogur':'DT|masas',
  'coliflor-vapor':'C|verdura','judias-verdes':'C|verdura','pimiento-asado':'C|verdura','berenjena-asada':'C|verdura','tortilla-patata':'C|huevo',
  'patatas-gajos':'C|verdura','calabaza-asada':'C|verdura','champinones':'C|verdura','tortitas-calabacin':'CT|masas','bunuelos-coliflor':'CT|masas',
  'tortitas-zanahoria':'CT|masas','tostada-guisantes':'DT|masas','tostada-aguacate-huevo':'DC|huevo','crema-puerro':'C|cremas','rollitos-queso':'CT|huevo',
  'manzana-cocida':'TD|fruta','manzana-canela':'T|fruta','melocoton':'T|fruta','mango':'T|fruta','melon':'T|fruta',
  'sandia':'T|fruta','fresas':'T|fruta','yogur-arandanos':'DT|lacteo','platano-almendra':'TD|fruta','compota-manzana-pera':'TD|fruta',
  'bizcocho-manzana':'DT|masas','helado-platano-fresa':'T|fruta','tostadas-francesas':'D|masas','porridge-platano':'D|masas','porridge-manzana':'D|masas',
  'cuscus-verduras':'C|masas','quinoa-verduras':'C|masas','arroz-pollo':'C|masas','bolitas-arroz-queso':'CT|masas','tortitas-garbanzo':'CT|legumbre',
  'tortitas-calabaza':'CT|masas','pizza-coliflor':'C|masas','minipizzas-pan':'CT|masas','pasta-crema-calabacin':'C|masas','macarrones-pavo':'C|masas',
  'lentejas-arroz':'C|legumbre','albondigas-garbanzos':'C|legumbre','falafel':'CT|legumbre','alubias-tomate':'C|legumbre','hummus-zanahoria':'T|cremas',
  'tofu':'C|legumbre','tortitas-lentejas':'CT|legumbre','lentejas-rojas-calabaza':'C|legumbre','pollo-desmenuzado':'C|carne','pavo-guisado':'C|carne',
  'cerdo-desmenuzado':'C|carne','cordero-patata':'C|carne','hamburguesa-ternera':'C|carne','bolitas-pavo-manzana':'C|carne','pollo-tomate':'C|carne',
  'lasana-calabacin':'C|carne','cocido-bebe':'C|legumbre','merluza-vapor':'C|pescado','lenguado-limon':'C|pescado','bacalao-tomate':'C|pescado',
  'hamburguesa-salmon':'C|pescado','sardinas-horno':'C|pescado','pescadilla-avena':'C|pescado','arroz-merluza':'C|pescado','tortilla-salmon':'C|pescado',
  'revuelto-tomate':'DC|huevo','huevo-duro-aguacate':'DT|huevo','revuelto-calabacin':'CD|huevo','muffins-salados':'CT|masas','queso-fresco-fruta':'DT|lacteo',
  'overnight-avena':'D|masas','tortitas-boniato':'CT|masas','croquetas-pollo':'C|carne','naranja':'T|fruta','kiwi':'T|fruta',
  'ensalada-zanahoria-manzana':'C|verdura','ensalada-tomate-aguacate':'CT|verdura','pan-tomate':'DT|masas','judias-patata-huevo':'C|verdura','boniato-relleno':'C|legumbre',
  'pure-rustico':'C|cremas'
};

// ============ RECETAS NUEVAS: introducir alérgenos, hierro, 12-24 meses y familiares ============
r('yogur-cacahuete', 'Yogur con crema de cacahuete muy fina', '🥜', 6, 5, 'frutos,leche', 0,
  ['yogur|1 yogur natural sin azúcar', 'cacahuete|½ cucharadita de crema de cacahuete 100 % cacahuete, sin sal ni azúcar'],
  ['Diluye la crema de cacahuete con una cucharada de yogur hasta que quede muy líquida.', 'Mézclala con el resto del yogur.', 'Sirve con cuchara precargada.'],
  'Cuchara precargada. Nunca crema espesa ni cacahuetes enteros.',
  'Para introducir el cacahuete: poca cantidad, por la mañana y sin otros alimentos nuevos ese día. Si tu bebé tiene eccema grave o alergia al huevo, habla antes con tu pediatra.');
r('semola-pera', 'Sémola de trigo con pera', '🍐', 6, 10, 'gluten', 0,
  ['sémola|3 cucharadas de sémola de trigo fina', 'pera|1 pera madura', 'agua|Agua o leche materna o de fórmula'],
  ['Cuece la pera pelada y tritúrala.', 'Cuece la sémola en agua unos 5 minutos, removiendo, hasta que espese.', 'Mezcla con la pera.'],
  'Cuchara precargada o espeso para mojar bastones de pera.',
  'Una forma sencilla de introducir el gluten en poca cantidad.');
r('tortilla-espinacas', 'Tortilla de espinacas', '🥬', 12, 15, 'huevo', 0,
  ['espinacas|Un puñado de espinacas frescas', 'huevo|2 huevos', 'aceite|Unas gotas de aceite de oliva'],
  ['Escalda las espinacas 1 minuto, escúrrelas y pícalas.', 'Mézclalas con los huevos batidos.', 'Cuaja en una sartén antiadherente por ambos lados.'],
  'Tiras anchas o triángulos.',
  'Las espinacas, las acelgas y la borraja tienen muchos nitratos: la AESAN recomienda no darlas antes de los 12 meses y no abusar después.');
r('crema-espinacas-patata', 'Crema de espinacas y patata', '🥣', 12, 25, '', 0,
  ['espinacas|Un puñado grande de espinacas', 'patata|2 patatas', 'cebolla|¼ de cebolla', 'aceite|1 cucharadita de aceite de oliva', 'agua|Agua'],
  ['Cuece la patata y la cebolla en poca agua 15 minutos.', 'Añade las espinacas los últimos 3 minutos.', 'Tritura con poca agua para que quede espesa.'],
  'Textura espesa, en cuchara precargada o para mojar.',
  'Espinacas solo a partir de los 12 meses y en pequeña cantidad (AESAN).');
r('acelgas-patata', 'Acelgas con patata aplastada', '🥬', 12, 25, '', 0,
  ['acelgas|Un manojo de acelgas', 'patata|2 patatas', 'aceite|1 cucharadita de aceite de oliva'],
  ['Cuece las patatas en trozos 15 minutos.', 'Añade las acelgas picadas los últimos 5 minutos.', 'Escurre y aplasta todo con un tenedor con el aceite.'],
  'Aplastado, en cuchara o en bolitas.',
  'Acelgas solo a partir de los 12 meses y sin abusar (AESAN).');
r('macarrones-ternera', 'Macarrones con carne y tomate', '🍝', 12, 30, 'gluten', 1,
  ['pasta|80 g de macarrones', 'ternera|150 g de ternera picada', 'tomate|2 tomates maduros pelados', 'cebolla|¼ de cebolla', 'aceite|1 cucharadita de aceite de oliva'],
  ['Cuece la pasta sin sal hasta que esté blanda.', 'Sofríe la cebolla, añade la carne y el tomate triturado y cocina 15 minutos.', 'Mezcla con la pasta.'],
  'Pasta grande con salsa espesa.', 'Buena fuente de hierro.');
r('espaguetis-albondigas', 'Espaguetis con albóndigas en tomate', '🍝', 18, 40, 'gluten,huevo', 1,
  ['pasta|80 g de espaguetis', 'ternera|150 g de ternera picada', 'huevo|1 huevo', 'avena|2 cucharadas de avena molida', 'tomate|2 tomates triturados'],
  ['Mezcla la carne, el huevo y la avena y forma albóndigas pequeñas.', 'Cocínalas 10 minutos en el tomate triturado.', 'Cuece los espaguetis sin sal, córtalos y sirve juntos.'],
  'Espaguetis cortados y albóndigas partidas por la mitad.', '');
r('paella-bebe', 'Paella suave de pollo y verduras', '🥘', 12, 45, '', 0,
  ['arroz|½ taza de arroz', 'pollo|1 pechuga de pollo en dados pequeños', 'judías verdes|Un puñado de judías verdes', 'pimiento|½ pimiento rojo', 'tomate|1 tomate', 'aceite|1 cucharadita de aceite de oliva', 'agua|Agua sin sal'],
  ['Sofríe el pollo con el pimiento y el tomate.', 'Añade el arroz y el agua y cuece 18 minutos con las judías muy picadas.', 'Deja reposar.'],
  'Cuchara o bolitas pegajosas.', 'Limita el arroz a pocas veces por semana (AESAN).');
r('lasana-pollo-verduras', 'Lasaña de pollo y verduras', '🧀', 18, 60, 'gluten,leche', 0,
  ['pasta|6 láminas de lasaña', 'pollo|200 g de pollo picado', 'calabacín|1 calabacín', 'tomate|2 tomates triturados', 'queso mozzarella|Queso mozzarella pasteurizado'],
  ['Sofríe el pollo con el calabacín picado y el tomate.', 'Alterna capas de pasta y relleno.', 'Cubre con queso y hornea 25 minutos a 180 °C.'],
  'Cuadrados pequeños y blandos.', '');
r('pizza-casera', 'Pizza casera con verduras', '🍕', 18, 60, 'gluten,leche', 0,
  ['harina|200 g de harina', 'levadura|½ cucharadita de levadura de panadería', 'tomate|3 cucharadas de tomate casero', 'queso mozzarella|Queso mozzarella pasteurizado', 'champiñón|Unos champiñones laminados', 'aceite|1 cucharada de aceite de oliva', 'agua|Agua tibia'],
  ['Mezcla la harina, la levadura, el aceite y el agua, y amasa 10 minutos.', 'Deja reposar 30 minutos, extiende y cubre con tomate, queso y champiñones.', 'Hornea 12 minutos a 220 °C.'],
  'Triángulos pequeños.', 'Masa sin sal.');
r('empanadillas-verduras', 'Empanadillas de verduras al horno', '🥟', 18, 50, 'gluten,leche,huevo', 0,
  ['harina|150 g de harina', 'calabacín|½ calabacín', 'zanahoria|1 zanahoria', 'queso fresco|2 cucharadas de queso fresco', 'huevo|1 huevo', 'aceite|2 cucharadas de aceite de oliva', 'agua|Agua'],
  ['Mezcla harina, aceite y agua y estira la masa.', 'Cuece las verduras picadas y mézclalas con el queso.', 'Rellena, cierra y pinta con huevo.', 'Hornea 20 minutos a 190 °C.'],
  'Mitades pequeñas y blandas.', '');
r('sandwich-pavo-queso', 'Sándwich de pavo y queso fresco', '🥪', 12, 10, 'gluten,leche', 0,
  ['pan|2 rebanadas de pan sin sal', 'pavo|2 lonchas de pechuga de pavo cocida en casa', 'queso fresco|1 cucharada de queso fresco'],
  ['Unta el queso en el pan.', 'Añade el pavo en tiras finas.', 'Cierra y corta en bastones.'],
  'Bastones blandos, sin corteza dura.', 'Evita los fiambres comprados: llevan mucha sal.');
r('crepes-platano', 'Crepes de plátano', '🥞', 12, 20, 'gluten,huevo,leche', 0,
  ['harina|4 cucharadas de harina', 'huevo|1 huevo', 'leche|100 ml de leche entera', 'plátano|1 plátano maduro', 'aceite|Unas gotas de aceite'],
  ['Bate harina, huevo y leche.', 'Cocina crepes finas en sartén antiadherente.', 'Rellena con el plátano chafado y enrolla.'],
  'Rollitos cortados en trozos.', 'La leche de vaca como bebida, a partir de los 12 meses.');
r('arroz-con-leche', 'Arroz con leche sin azúcar', '🍚', 12, 35, 'leche', 0,
  ['arroz|½ taza de arroz', 'leche|500 ml de leche entera', 'canela|Un trozo de canela', 'limón|Piel de ½ limón'],
  ['Cuece el arroz en poca agua 10 minutos.', 'Añade la leche, la canela y el limón y cuece 20 minutos removiendo.', 'Retira la canela y el limón.'],
  'Cuchara precargada.', 'Sin azúcar. Limita el arroz (AESAN).');
r('gachas-avena-leche', 'Gachas de avena con leche y manzana', '🥣', 12, 10, 'gluten,leche', 0,
  ['avena|4 cucharadas de copos de avena', 'leche|200 ml de leche entera', 'manzana|½ manzana rallada', 'canela|Una pizca de canela'],
  ['Cuece la avena con la leche 5 minutos.', 'Añade la manzana rallada y la canela.'],
  'Cuchara precargada.', '');
r('batido-platano-leche', 'Batido de plátano y leche', '🥛', 12, 5, 'leche', 0,
  ['leche|150 ml de leche entera', 'plátano|1 plátano maduro'],
  ['Tritura el plátano con la leche.', 'Sírvelo en vaso o biberón de aprendizaje.'],
  'En vaso abierto o con pajita.', 'Sin azúcar.');
r('galletas-yogur-avena', 'Galletas de yogur y avena', '🍪', 12, 25, 'gluten,leche', 0,
  ['avena|100 g de copos de avena', 'yogur|1 yogur natural', 'plátano|1 plátano maduro'],
  ['Chafa el plátano y mézclalo con el yogur y la avena.', 'Forma galletas planas.', 'Hornea 15 minutos a 180 °C.'],
  'Galletas blandas y pequeñas.', 'Sin azúcar añadido.');
r('pollo-limon-patatas', 'Pollo al limón con patatas', '🍋', 12, 45, '', 0,
  ['pollo|2 muslos de pollo sin piel', 'patata|2 patatas', 'limón|Zumo de ½ limón', 'ajo|1 diente de ajo', 'aceite|1 cucharada de aceite de oliva'],
  ['Pon el pollo y las patatas en una bandeja con el limón, el ajo y el aceite.', 'Hornea 35 minutos a 190 °C.', 'Desmenuza el pollo sin huesos.'],
  'Pollo desmenuzado y patatas en trozos.', 'Revisa que no queden huesecillos.');
r('pollo-champinones', 'Pollo con champiñones', '🍄', 12, 30, '', 0,
  ['pollo|1 pechuga de pollo', 'champiñón|100 g de champiñones', 'cebolla|¼ de cebolla', 'aceite|1 cucharadita de aceite de oliva', 'agua|Un chorrito de agua'],
  ['Sofríe la cebolla y los champiñones laminados.', 'Añade el pollo en tiras y el agua.', 'Cocina 15 minutos hasta que esté tierno.'],
  'Tiras tiernas con la salsa.', '');
r('ternera-verduras-horno', 'Ternera asada con verduras', '🥩', 12, 60, '', 1,
  ['ternera|300 g de ternera tierna en trozos', 'zanahoria|1 zanahoria', 'patata|1 patata', 'pimiento|½ pimiento', 'cebolla|¼ de cebolla', 'aceite|1 cucharada de aceite de oliva'],
  ['Pon todo en una bandeja con el aceite y un poco de agua.', 'Tapa con papel de aluminio y hornea 50 minutos a 170 °C.', 'Desmenuza la carne.'],
  'Carne desmenuzada y verduras blandas.', 'Fuente de hierro.');
r('merluza-salsa-verde', 'Merluza en salsa verde', '🐟', 12, 25, 'pescado', 0,
  ['merluza|1 lomo de merluza sin espinas', 'patata|1 patata', 'guisantes|Un puñado de guisantes', 'perejil|Perejil', 'ajo|1 diente de ajo', 'aceite|1 cucharadita de aceite de oliva'],
  ['Cuece la patata en rodajas.', 'Añade la merluza, los guisantes y el perejil triturado con el ajo y un poco de agua.', 'Cocina 8 minutos.'],
  'Lascas grandes de merluza y patata aplastada.', 'Revisa las espinas.');
r('papillote-pescadilla', 'Pescadilla en papillote con verduras', '🐟', 12, 25, 'pescado', 0,
  ['pescadilla|1 lomo de pescadilla sin espinas', 'calabacín|½ calabacín', 'zanahoria|½ zanahoria', 'limón|Unas gotas de limón', 'aceite|1 cucharadita de aceite de oliva'],
  ['Corta las verduras en tiras finas.', 'Envuélvelo todo en papel de horno.', 'Hornea 18 minutos a 180 °C.'],
  'Lascas de pescado y verdura blanda.', 'Revisa las espinas.');
r('bacalao-pisto', 'Bacalao fresco con pisto', '🍅', 12, 35, 'pescado', 0,
  ['bacalao|1 lomo de bacalao fresco sin espinas', 'tomate|2 tomates', 'pimiento|½ pimiento', 'calabacín|½ calabacín', 'cebolla|¼ de cebolla', 'aceite|1 cucharadita de aceite de oliva'],
  ['Cocina el pisto 15 minutos hasta que esté blando.', 'Añade el bacalao y cocina 8 minutos.', 'Desmenúzalo con cuidado.'],
  'Lascas con pisto aplastado.', 'Bacalao fresco o muy bien desalado: el salado lleva demasiada sal.');
r('lentejas-verduras-hierro', 'Lentejas estofadas con verduras', '🍲', 12, 45, '', 1,
  ['lentejas|½ taza de lentejas', 'zanahoria|1 zanahoria', 'patata|1 patata', 'pimiento|¼ de pimiento rojo', 'cebolla|¼ de cebolla', 'aceite|1 cucharadita de aceite de oliva', 'agua|Agua sin sal'],
  ['Cuece todo en agua sin sal 35 minutos.', 'Aplasta ligeramente.'],
  'Cuchara precargada o espeso para mojar.', 'Ofrécelo con algo con vitamina C (naranja, tomate) para absorber mejor el hierro.');
r('garbanzos-espinacas', 'Garbanzos con espinacas', '🫘', 12, 40, '', 1,
  ['garbanzos|1 taza de garbanzos cocidos', 'espinacas|Un puñado de espinacas', 'patata|1 patata', 'comino|Una pizca de comino', 'aceite|1 cucharadita de aceite de oliva'],
  ['Cuece la patata en trozos 12 minutos.', 'Añade garbanzos y espinacas 5 minutos.', 'Aplasta ligeramente con un tenedor.'],
  'Garbanzos aplastados y verduras blandas.', 'Espinacas solo a partir de los 12 meses.');
r('alubias-verduras', 'Alubias blancas con verduras', '🫘', 12, 45, '', 1,
  ['alubias|1 taza de alubias cocidas', 'zanahoria|1 zanahoria', 'puerro|1 puerro', 'patata|1 patata', 'aceite|1 cucharadita de aceite de oliva'],
  ['Cuece las verduras 15 minutos.', 'Añade las alubias 10 minutos más.', 'Aplasta ligeramente.'],
  'Alubias aplastadas, nunca enteras.', '');
r('fajitas-pollo', 'Fajitas de pollo y pimiento', '🌯', 18, 30, 'gluten', 0,
  ['tortilla de trigo|2 tortillas de trigo pequeñas', 'pollo|1 pechuga de pollo en tiras', 'pimiento|½ pimiento', 'cebolla|¼ de cebolla', 'aguacate|½ aguacate', 'aceite|1 cucharadita de aceite de oliva'],
  ['Saltea el pollo con el pimiento y la cebolla hasta que estén tiernos.', 'Calienta las tortillas.', 'Rellena con el pollo y el aguacate chafado y enrolla.'],
  'Rollitos cortados en trozos.', '');
r('tortilla-calabacin-queso', 'Tortilla de calabacín y queso', '🍳', 12, 20, 'huevo,leche', 0,
  ['huevo|2 huevos', 'calabacín|½ calabacín rallado', 'queso fresco|2 cucharadas de queso fresco', 'aceite|Unas gotas de aceite'],
  ['Mezcla huevos, calabacín y queso.', 'Cuaja en sartén antiadherente por ambos lados.'],
  'Cuñas o tiras gruesas.', '');
r('revuelto-champinones', 'Revuelto de champiñones', '🍄', 12, 15, 'huevo', 0,
  ['huevo|2 huevos', 'champiñón|100 g de champiñones', 'ajo|½ diente de ajo', 'aceite|1 cucharadita de aceite de oliva'],
  ['Saltea los champiñones picados con el ajo.', 'Añade los huevos batidos y cuaja sin dejar nada líquido.'],
  'Cuchara o sobre tostada.', 'Bien cuajado.');
r('croquetas-espinacas', 'Croquetas de espinacas al horno', '🟢', 18, 60, 'gluten,leche', 0,
  ['harina|3 cucharadas de harina', 'leche|300 ml de leche entera', 'espinacas|Un puñado de espinacas', 'cebolla|¼ de cebolla', 'aceite|2 cucharadas de aceite de oliva'],
  ['Sofríe la cebolla, añade la harina y la leche poco a poco hasta tener una bechamel espesa.', 'Mezcla con las espinacas cocidas y picadas.', 'Deja enfriar, forma croquetas y hornea 20 minutos a 200 °C.'],
  'Croquetas pequeñas y blandas.', 'Sin sal.');
r('albondigas-tomate', 'Albóndigas de ternera en salsa de tomate', '🍅', 12, 40, 'huevo,gluten', 1,
  ['ternera|200 g de ternera picada', 'huevo|1 huevo', 'avena|2 cucharadas de avena molida', 'tomate|2 tomates triturados', 'cebolla|¼ de cebolla'],
  ['Mezcla la carne, el huevo y la avena y forma bolitas.', 'Cocina la cebolla y el tomate 10 minutos.', 'Añade las albóndigas y cocina 15 minutos.'],
  'Albóndigas partidas por la mitad.', 'Fuente de hierro.');
r('pastel-carne-verduras', 'Pastel de carne y verduras', '🥩', 18, 55, 'huevo,gluten', 1,
  ['ternera|300 g de ternera picada', 'zanahoria|1 zanahoria rallada', 'huevo|1 huevo', 'avena|3 cucharadas de avena', 'cebolla|¼ de cebolla', 'tomate|2 cucharadas de tomate'],
  ['Mezcla todos los ingredientes.', 'Pon la mezcla en un molde.', 'Hornea 40 minutos a 180 °C y corta en porciones.'],
  'Porciones pequeñas y jugosas.', '');
r('sopa-fideos-pollo', 'Sopa de fideos con pollo', '🍜', 12, 30, 'gluten', 0,
  ['pasta|30 g de fideos finos', 'pollo|1 muslo de pollo sin piel', 'zanahoria|1 zanahoria', 'puerro|1 puerro', 'agua|Agua sin sal'],
  ['Cuece el pollo con las verduras 25 minutos.', 'Quita el pollo, desmenúzalo y devuélvelo.', 'Añade los fideos 5 minutos.'],
  'Sopa espesa con cuchara.', 'Sin sal ni cubitos de caldo.');
r('crema-verduras-queso', 'Crema de calabacín y queso', '🥣', 12, 25, 'leche', 0,
  ['calabacín|2 calabacines', 'patata|1 patata', 'queso fresco|2 cucharadas de queso fresco', 'cebolla|¼ de cebolla', 'aceite|1 cucharadita de aceite de oliva'],
  ['Cuece todas las verduras en poca agua.', 'Tritura con el queso.'],
  'Espesa, en cuchara o para mojar.', '');
r('salsa-yogur-pepino', 'Salsa de yogur y pepino', '🥒', 12, 5, 'leche', 0,
  ['yogur|1 yogur natural sin azúcar', 'pepino|¼ de pepino pelado y rallado', 'limón|Unas gotas de limón', 'perejil|Perejil picado'],
  ['Mezcla todo.', 'Sirve para mojar bastones de verdura cocida o de pollo.'],
  'Para mojar o en cuchara.', 'Sin sal.');
r('hamburguesa-pollo-manzana', 'Hamburguesas de pollo y manzana', '🍔', 12, 25, 'huevo,gluten', 0,
  ['pollo|200 g de pollo picado', 'manzana|½ manzana rallada', 'huevo|1 huevo', 'avena|2 cucharadas de avena'],
  ['Mezcla todo.', 'Forma hamburguesas pequeñas y cocínalas a la plancha 5 minutos por lado.'],
  'Hamburguesa pequeña, jugosa y bien hecha.', '');
r('bastones-calabacin-rebozado', 'Bastones de calabacín rebozados al horno', '🥒', 18, 30, 'huevo,gluten', 0,
  ['calabacín|1 calabacín', 'huevo|1 huevo', 'pan rallado|3 cucharadas de pan rallado sin sal', 'aceite|Un chorrito de aceite'],
  ['Corta el calabacín en bastones gruesos.', 'Pásalos por huevo y pan rallado.', 'Hornea 20 minutos a 200 °C.'],
  'Bastones gruesos y blandos.', '');
r('tortitas-garbanzo-espinacas', 'Tortitas de garbanzo y espinacas', '🟢', 12, 20, '', 1,
  ['harina de garbanzo|4 cucharadas de harina de garbanzo', 'espinacas|Un puñado de espinacas picadas', 'agua|Agua', 'aceite|Unas gotas de aceite'],
  ['Mezcla la harina con agua hasta tener una masa fluida.', 'Añade las espinacas.', 'Cocina cucharadas en sartén antiadherente 2 minutos por lado.'],
  'Tortitas pequeñas o en tiras.', 'Espinacas solo a partir de los 12 meses.');
r('ternera-guisantes', 'Ternera con guisantes y patata', '🥩', 12, 45, '', 1,
  ['ternera|250 g de ternera en trozos pequeños', 'guisantes|Un puñado de guisantes', 'patata|1 patata', 'cebolla|¼ de cebolla', 'agua|Agua sin sal'],
  ['Cuece la carne con la cebolla en agua 25 minutos.', 'Añade la patata y los guisantes 15 minutos.', 'Desmenuza la carne y aplasta los guisantes.'],
  'Carne desmenuzada y verduras aplastadas.', 'Fuente de hierro.');
r('salmon-arroz-brocoli', 'Salmón con arroz y brócoli', '🍣', 12, 30, 'pescado', 0,
  ['salmón|1 lomo de salmón sin espinas', 'arroz|½ taza de arroz cocido', 'brócoli|Unos ramitos de brócoli', 'limón|Unas gotas de limón', 'aceite|1 cucharadita de aceite de oliva'],
  ['Hornea el salmón 15 minutos a 180 °C.', 'Cuece el brócoli y pícalo.', 'Mezcla con el arroz y el salmón desmenuzado.'],
  'Bolitas o cuchara.', 'Limita el arroz a pocas veces por semana (AESAN).');

Object.assign(CAT, {
  'yogur-cacahuete':'DT|lacteo','semola-pera':'D|masas','tortilla-espinacas':'CD|huevo','crema-espinacas-patata':'C|cremas','acelgas-patata':'C|verdura',
  'macarrones-ternera':'C|masas','espaguetis-albondigas':'C|masas','paella-bebe':'C|masas','lasana-pollo-verduras':'C|masas','pizza-casera':'C|masas',
  'empanadillas-verduras':'CT|masas','sandwich-pavo-queso':'DC|masas','crepes-platano':'D|masas','arroz-con-leche':'DT|lacteo','gachas-avena-leche':'D|masas',
  'batido-platano-leche':'DT|lacteo','galletas-yogur-avena':'DT|masas','pollo-limon-patatas':'C|carne','pollo-champinones':'C|carne','ternera-verduras-horno':'C|carne',
  'merluza-salsa-verde':'C|pescado','papillote-pescadilla':'C|pescado','bacalao-pisto':'C|pescado','lentejas-verduras-hierro':'C|legumbre','garbanzos-espinacas':'C|legumbre',
  'alubias-verduras':'C|legumbre','fajitas-pollo':'C|carne','tortilla-calabacin-queso':'CD|huevo','revuelto-champinones':'DC|huevo','croquetas-espinacas':'CT|masas',
  'albondigas-tomate':'C|carne','pastel-carne-verduras':'C|carne','sopa-fideos-pollo':'C|cremas','crema-verduras-queso':'C|cremas','salsa-yogur-pepino':'T|cremas',
  'hamburguesa-pollo-manzana':'C|carne','bastones-calabacin-rebozado':'CT|verdura','tortitas-garbanzo-espinacas':'CT|legumbre','ternera-guisantes':'C|carne','salmon-arroz-brocoli':'C|pescado'
});
