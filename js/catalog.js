/* Catálogo para cambiar o añadir ejercicios desde la app.
   Los ejercicios de la rutina actual se suman solos; aquí van las alternativas.
   top: recomendados para el objetivo (masa arriba, brazo grueso, hombro ancho, pierna con máquinas).
   big: básico que puede ocupar el hueco de una serie top + back-off. */
const CATALOG=(()=>{
 const x=(name,d,m,sets,cue,why,extra={})=>({name,d,m,sets,cue,why,...extra});
 const DB_={inc:2},CB={inc:1.25};
 return [
 // Pecho
 x('Press inclinado con barra','inclbar','pec','4 × 6-10','Banco a 30°, barra al pecho alto y codos algo por debajo de los hombros. Sube sin despegar los glúteos; 2-3 min.','Pecho alto con carga pesada: el básico que más masa da arriba.',{top:true,big:true}),
 x('Press plano con mancuernas','benchdb','pec','3 × 8-12','Banco plano, mancuernas a los lados del pecho y codos a 45°. Baja hasta notar el estiramiento; 2 min.','Más recorrido que la barra y cada lado trabaja por su cuenta.',DB_),
 x('Contractora (pec deck)','fly','pec','3 × 12-15','Espalda apoyada, codos algo flexionados y a la altura del pecho. Cierra con 1 s de pausa y abre despacio; 90 s.','Aislamiento de pecho con tensión constante; buen bombeo al final.',{top:true,...CB}),
 x('Cruce de poleas alto','fly','pec','3 × 12-15','Un paso al frente, tronco algo inclinado. Lleva las manos abajo y al centro en arco; 60-90 s.','Pecho bajo y línea inferior del pectoral.',CB),
 x('Cruce de poleas bajo','flylow','pec','3 × 12-15','Poleas abajo, sube las manos en arco hasta la altura del pecho y júntalas; 60-90 s.','Pecho alto con tensión arriba del recorrido.',CB),
 x('Flexiones lastradas','pushup','pec','3 × 8-15','Disco en la espalda o chaleco. Cuerpo en bloque, baja hasta casi tocar el suelo; 90 s.','Calistenia de empuje con progresión de carga.'),
 // Espalda
 x('Remo en T','rowbar','esp','4 × 6-10','Pecho alto y espalda neutra; tira hacia el ombligo sin dar tirones. 2 min.','Espesor de espalda media con mucha carga.',{top:true,big:true}),
 x('Remo Pendlay','rowbar','esp','4 × 5-8','Barra desde el suelo en cada repetición, tronco paralelo. Tira explosivo y apoya; 2-3 min.','Fuerza de remo sin rebote: cada repetición empieza parada.',{big:true}),
 x('Remo sentado en polea','rowc','esp','3 × 10-12','Pecho alto, deja que los hombros se adelanten al estirar y tira hacia el ombligo; 90 s.','Espalda media y dorsal con tensión constante.',{top:true}),
 x('Remo en máquina con pecho apoyado','rowm','esp','3 × 8-12','Pecho contra el apoyo, codos hacia atrás y pausa de 1 s; 2 min.','Espesor sin cargar la zona lumbar.'),
 x('Jalón con agarre neutro estrecho','latp','esp','3 × 10-12','Agarre en V, tira hacia el esternón con los codos pegados y el torso casi quieto; 90 s.','Dorsal bajo con mucho recorrido: espalda más ancha.',{top:true}),
 x('Pullover en polea','straightarm','esp','3 × 12-15','Brazos casi rectos, lleva la cuerda desde arriba hasta los muslos sin mover el tronco; 60-90 s.','Dorsal aislado: aprende a tirar con la espalda y no con los brazos.',CB),
 x('Dominada neutra lastrada','pull','esp','3 × 6-10','Agarre paralelo, sube hasta pasar la barbilla y baja hasta casi extender. Deja 1-2 reps; 2 min.','La dominada más amable con el hombro y la que más carga admite.',{top:true,big:true}),
 x('Dominada explosiva','pull','esp','5 × 3','Tira lo más rápido posible hasta llevar la barra al pecho. Baja controlado; 2 min.','Potencia de tirón: el camino hacia el muscle-up.'),
 x('Encogimientos con mancuernas','farmer','esp','3 × 10-15','Brazos estirados, sube los hombros hacia las orejas con 1 s arriba. Sin girarlos; 60-90 s.','Trapecio alto: cuello y espalda más gruesos de frente.',DB_),
 // Hombro
 x('Press de hombro en máquina','pressm','da','3 × 8-12','Asiento para que las asas queden a la altura de las orejas. Empuja vertical sin arquear la lumbar; 2 min.','Press vertical estable: fácil de progresar y de apurar sin riesgo.',{top:true,big:true}),
 x('Press militar con mancuernas sentado','pressdb','da','3 × 8-12','Respaldo casi vertical, mancuernas a la altura de las orejas. Empuja hasta casi juntarlas; 2 min.','Hombro anterior y lateral con más recorrido que la barra.',{top:true,big:true,...DB_}),
 x('Press Arnold','pressdb','da','3 × 8-12','Empieza con las palmas hacia ti y gíralas mientras empujas arriba. Baja deshaciendo el giro; 90 s.','Más tiempo bajo tensión en el deltoide anterior y lateral.',DB_),
 x('Elevación lateral con mancuernas','latdb','dl','3 × 12-20','Codos suaves, sube hasta la línea del hombro y baja en 2 s; 60-90 s.','Lateral sin máquina: sirve en cualquier gimnasio.',DB_),
 x('Press de pecho sentado en máquina','chestpress','pec','3 × 8-12','Asas a la altura del pecho, espalda apoyada y codos algo por debajo de los hombros; 2 min.','Empuje estable para acumular volumen de pecho.'),
 x('Elevación lateral en polea · inclinado','lateral','dl','4 × 12-20','Sujétate al poste e inclínate alejándote de la polea. Al fallar, 8-10 medias repeticiones desde abajo; 60-90 s.','Tensión desde abajo del recorrido; las parciales suman cuando el completo ya no sale.',CB),
 x('Elevación lateral en polea por detrás','lateral','dl','3 × 12-20','Polea a la altura de la cadera y cable por detrás del cuerpo. Abre hasta la línea del hombro; 60 s.','Tensión desde abajo del recorrido, donde las mancuernas no cargan.',{top:true,...CB}),
 x('Lu raise','yraise','dl','3 × 10-15','Discos o mancuernas ligeras, brazos rectos. Sube por los lados hasta arriba de la cabeza sin encoger; 60-90 s.','Deltoide lateral y trapecio bajo en todo el recorrido.',CB),
 x('Pájaro con mancuernas','rear','dpo','3 × 15-20','Pecho apoyado en un banco inclinado, abre los brazos con los codos suaves; 60 s.','Deltoide posterior sin máquina.',DB_),
 x('Pájaro en polea cruzada','rear','dpo','3 × 15-20','Cables cruzados a la altura del hombro, abre hacia atrás con los brazos casi rectos; 60 s.','Deltoide posterior con tensión constante.',CB),
 // Bíceps
 x('Curl con barra EZ','curlez','bi','3 × 8-12','Codos quietos, sube sin balanceo y baja en 2 s; 90 s.','El curl con más carga: masa general del bíceps.',{top:true}),
 x('Curl bayesiano en polea','curlc','bi','3 × 10-15','De espaldas a la polea baja, brazo por detrás del cuerpo. Flexiona sin adelantar el codo; 60-90 s.','Bíceps estirado bajo tensión: de los curls que más crecen.',{top:true,...CB}),
 x('Curl concentrado','preacher','bi','3 × 10-12','Codo apoyado en el muslo, sube girando el meñique hacia arriba; 60 s.','Pico del bíceps y conexión mente-músculo.',DB_),
 x('Curl martillo en polea con cuerda','hammer','bi','3 × 10-15','Agarre neutro con cuerda, codos pegados y pausa arriba; 60-90 s.','Braquial y braquiorradial con tensión constante.',CB),
 // Tríceps
 x('Press de banca agarre cerrado','bench','tri','4 × 6-10','Manos a la anchura de los hombros, codos pegados al cuerpo; baja al esternón. 2-3 min.','El básico del tríceps: mucha carga para un brazo grueso.',{top:true,big:true}),
 x('Press JM','skull','tri','3 × 8-12','Mezcla de press cerrado y press francés: baja la barra hacia la barbilla con los codos al frente; 2 min.','Tríceps pesado sin castigar tanto el codo.'),
 x('Extensión con mancuerna sobre la cabeza','trioh','tri','3 × 10-15','Una mancuerna con las dos manos, codos al techo. Baja detrás de la cabeza y extiende; 90 s.','Cabeza larga del tríceps en estiramiento.',DB_),
 x('Extensión cruzada en polea','trioh','tri','3 × 12-15','Dos poleas altas cruzadas, codos fijos a la altura de la cara; extiende hacia los lados; 60 s.','Cabeza lateral y larga con tensión en todo el recorrido.',CB),
 x('Extensión con barra en polea','tripd','tri','3 × 10-15','Barra recta o en V, codos pegados; extiende y aprieta 1 s abajo; 60 s.','Más carga que con cuerda: tríceps lateral.',CB),
 // Antebrazo
 x('Paseo del granjero','farmer','ant','3 × 30-40 m','Mancuernas o asas pesadas, hombros abajo y pasos cortos. Anota kg por mano y segundos en reps; 2 min.','Agarre, antebrazo y trapecio a la vez; core firme de regalo.',{top:true,...DB_}),
 x('Curl Zottman','hammer','ant','3 × 10-12','Sube en supino, gira arriba a prono y baja en 3 s; 60-90 s.','Bíceps al subir y braquiorradial al bajar.',DB_),
 x('Rodillo de muñeca','wrist','ant','3 × 2 subidas','Brazos al frente, enrolla la cuerda hasta arriba y desenrolla despacio; 60 s.','Flexores y extensores del antebrazo con mucho bombeo.'),
 // Pierna
 x('Sentadilla hack en máquina','hack','pie','4 × 8-12','Espalda pegada al respaldo, pies a la anchura de la cadera. Baja profundo con las rodillas siguiendo los pies; 2-3 min.','Cuádriceps con mucha carga y la espalda protegida.',{top:true,big:true}),
 x('Sentadilla péndulo','hack','pie','3 × 8-12','Hombros bajo las almohadillas, baja hasta el fondo y sube sin bloquear; 2 min.','Cuádriceps en rango largo con poca carga en la espalda.',{top:true}),
 x('Sentadilla con barra','squat','pie','4 × 5-8','Barra en los trapecios, pecho alto y rodillas siguiendo los pies. Baja hasta romper el paralelo; 3 min.','El básico de pierna: fuerza total y core.',{big:true}),
 x('Sentadilla goblet','goblet','pie','3 × 10-15','Mancuerna pegada al pecho, codos entre las rodillas. Baja profundo y sube sin perder el pecho; 90 s.','Técnica de sentadilla y movilidad de cadera con carga.',DB_),
 x('Prensa a una pierna','legpress','pie','3 × 10-12 por pierna','Pie en el centro de la plataforma, baja hasta 90° sin despegar la pelvis; 90 s.','Corrige diferencias entre piernas sin carga en la espalda.'),
 x('Zancadas caminando con mancuernas','lungeiso','pie','3 × 10 por pierna','Paso largo, rodilla trasera cerca del suelo y empuja con la pierna delantera; 2 min.','Pierna ágil y glúteo: equilibrio y coordinación.',DB_),
 // Isquios y glúteo
 x('Hip thrust con barra','hipthrust','ham','4 × 8-12','Espalda alta en el banco, barra en la cadera con almohadilla. Sube hasta alinear tronco y muslos con 1 s arriba; 2 min.','Glúteo con mucha carga: pierna más potente y definida.',{top:true,big:true}),
 x('Curl femoral tumbado','legcurl','ham','3 × 10-15','Cadera pegada al banco, flexiona y baja en 3 s; 90 s.','Isquios en la parte corta del recorrido; complementa al sentado.'),
 x('Peso muerto rumano con barra','rdl','ham','3 × 6-10','Rodillas suaves, cadera atrás y barra pegada a las piernas. Baja con la espalda neutra; 2-3 min.','Isquios y glúteo estirados con carga pesada.',{top:true,big:true}),
 x('Hiperextensión a 45°','backext','ere','3 × 12-15','Cadera en el apoyo, baja con la espalda neutra y sube hasta alinear el cuerpo; 90 s.','Erectores y glúteo: espalda baja fuerte y sana.'),
 // Gemelo
 x('Gemelo en prensa','calf','cal','3 × 12-20','Puntas en el borde de la plataforma, rodillas casi rectas. Pausa de 2 s abajo; 60 s.','Mucha carga para el gemelo sin cargar los hombros.'),
 x('Gemelo a una pierna con mancuerna','calf','cal','3 × 10-15 por pierna','En un escalón, una mano en la pared y la mancuerna en la otra. Pausa abajo; 60 s.','Más rango y más carga por pierna con poco peso.',DB_),
 // Core
 x('Crunch en polea','crunch','core','3 × 10-15','De rodillas, cuerda junto a la cabeza. Enrolla las costillas hacia la pelvis sin tirar con los brazos; 60-90 s.','Abdomen con carga progresiva: se marca más.',{top:true,...CB}),
 x('Elevación de piernas rectas colgado','hangraise','core','3 × 6-12','Piernas rectas hasta la horizontal o más, sin balanceo. Baja en 2 s; 90 s.','La progresión siguiente a las rodillas: core fuerte y camino al L-sit.',{top:true}),
 x('Dragon flag','dragon','core','3 × 3-6','Agarra el banco detrás de la cabeza, cuerpo rígido. Baja despacio sin doblar la cadera; 2 min.','Antiextensión de nivel alto: core de calistenia.'),
 x('Plancha de Copenhague','sideplank','core','2 × 20-30 s por lado','Pierna de arriba sobre el banco, cadera alta y cuerpo en línea. Anota segundos en reps; 60 s.','Aductores y oblicuos: cadera estable para piernas ágiles.'),
 ];
})();
