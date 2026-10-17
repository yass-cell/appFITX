/* Dibujos vectoriales locales: dos posiciones por movimiento.
   Los huesos tienen longitud fija por ejercicio (codo y rodilla se resuelven con
   cinemática inversa), así el cuerpo no cambia de tamaño entre posiciones.
   El músculo principal toma el color de la subcategoría (--art-hot). */
const ExerciseArt=(()=>{
 const pose=(head,shoulder,hip,elbow,hand,knee,foot,elbow2=elbow,hand2=hand,knee2=knee,foot2=foot)=>({head,shoulder,hip,elbow,hand,knee,foot,elbow2,hand2,knee2,foot2});
 const stand=pose([79,25],[79,43],[79,88],[67,66],[66,88],[66,113],[63,143],[91,66],[92,88],[92,113],[96,143]);
 // De pie de perfil, mirando a la derecha.
 const side=pose([84,24],[80,43],[78,89],[82,66],[84,89],[81,116],[79,144],[76,66],[77,89],[75,116],[72,144]);
 const bench='M24 106H111M34 106V145M101 106V145';
 const upright='M57 108H97M91 104V61M65 110V144M91 110V144';
 const rack='M18 146V12H142V146';
 const incline='M44 120 103 62M54 111V145M96 69V145';
 const seated=pose([91,31],[88,49],[82,100],[66,71],[51,84],[55,108],[48,143]);
 const specs={
  pull:{view:'front',L:{torso:44,ua:25,fa:24,thigh:29,shin:27,neck:19},
   a:pose([80,44],[80,62],[80,106],[58,40],[50,17],[72,128],[72,146],[102,40],[110,17],[88,128],[88,146]),
   b:pose([80,14],[80,34],[80,78],[46,40],[50,17],[72,104],[72,130],[114,40],[110,17],[88,104],[88,130]),
   equipment:'M22 150V17H138V150',weight:'bar-front',focus:'back',labels:['Brazos extendidos','Sube sin balanceo'],arrow:'M150 104V52m-6 7 6-7 6 7'},
  dip:{view:'front',a:pose([77,22],[78,41],[81,83],[61,65],[61,86],[68,107],[89,130],[99,65],[99,86],[82,109],[103,130]),b:pose([77,48],[78,67],[83,103],[55,64],[61,86],[69,124],[91,145],[105,64],[99,86],[83,125],[105,145]),equipment:'M38 86H68M91 86H125M43 86V147M119 86V147',focus:'chest',labels:['Apoyo estable','Baja en tu rango cómodo'],arrow:'M142 48V91m-6-7 6 7 6-7'},
  incl:{a:pose([110,43],[101,61],[60,103],[69,73],[68,48],[76,120],[69,146],[128,79],[133,53],[82,122],[80,146]),b:pose([110,43],[101,61],[60,103],[88,36],[80,13],[76,120],[69,146],[115,34],[121,13],[82,122],[80,146]),equipment:incline,weight:'dumbbell',focus:'chest',labels:['Mancuernas cerca del pecho','Empuja hacia arriba'],arrow:'M30 76V32m-6 7 6-7 6 7'},
  rowm:{a:pose([98,34],[95,53],[102,102],[67,66],[42,71],[76,115],[72,145]),b:pose([98,34],[95,53],[102,102],[122,77],[89,83],[76,115],[72,145]),equipment:'M89 54 82 96M84 83V147M72 108H117M109 108V147M24 140 24 33 57 65',weight:'handle',focus:'back',labels:['Deja estirar la espalda','Codos atrás, pecho apoyado'],arrow:'M37 101H73m-7-6 7 6-7 6'},
  lateral:{view:'front',a:{...stand,elbow:[62,70],hand:[52,92],elbow2:[97,68],hand2:[102,92]},b:{...stand,elbow:[62,70],hand:[52,92],elbow2:[112,45],hand2:[137,48]},equipment:'M20 12V149M14 148H36M21 136H34M22 124H34',weight:'cable-lateral',focus:'shoulders',labels:['Agarre junto a la cadera','Abre sin encoger hombros'],arrow:'M119 107Q146 94 147 66m-6 7 6-7 4 8'},
  legpress:{a:pose([44,48],[46,66],[65,107],[50,87],[57,108],[89,64],[123,87]),b:pose([44,48],[46,66],[65,107],[50,87],[57,108],[110,94],[147,82]),equipment:'M28 45 46 111H77M36 117H80M17 147H145M38 114V147M91 140 150 98M118 57 136 108',focus:'quads',labels:['Rodillas flexionadas','Empuja sin bloquear rodillas'],arrow:'M85 40H126m-7-6 7 6-7 6'},
  legcurl:{L:{thigh:33,shin:33},a:{...seated,knee:[115,105],foot:[148,105]},b:{...seated,knee:[115,105],foot:[106,137]},equipment:upright+'M117 107V145M98 145H135M76 99H100',focus:'hamstrings',labels:['Piernas extendidas','Flexiona con cadera apoyada'],arrow:'M150 119Q148 145 125 148m5-7-5 7 8 1'},
  legext:{L:{thigh:33,shin:33},a:{...seated,knee:[115,105],foot:[113,138]},b:{...seated,knee:[115,105],foot:[147,98]},equipment:upright+'M117 107V145',focus:'quads',labels:['Rodillas flexionadas','Extiende con control'],arrow:'M132 139Q153 129 151 109m-6 7 6-7 4 8'},
  backext:{a:pose([125,110],[112,97],[83,84],[102,116],[92,106],[62,113],[40,142]),b:pose([116,36],[105,52],[83,84],[118,68],[104,79],[62,113],[40,142]),equipment:'M34 138 80 87M69 94 88 77M77 92V147M23 147H121M30 130 47 142',focus:'back',labels:['Bisagra desde la cadera','Alinea tronco y piernas'],arrow:'M140 101Q152 64 133 42m0 7 0-7 7 2'},
  calf:{a:{...side,toe:[92,145],toe2:[86,145]},b:{...side,head:[84,12],shoulder:[80,31],hip:[78,77],elbow:[82,54],hand:[84,77],elbow2:[76,54],hand2:[77,77],knee:[81,104],foot:[80,131],knee2:[75,104],foot2:[74,131],toe:[92,145],toe2:[86,145]},equipment:'M60 146H104V152H60Z',weight:'dumbbell-side',focus:'calves',labels:['Talones abajo, pausa 2 s','Sube sobre las puntas'],arrow:'M122 138V100m-6 7 6-7 6 7'},
  crunch:{L:{torso:42,ua:22,fa:20,thigh:31,shin:30,neck:18},
   a:pose([88,38],[84,56],[84,98],[102,62],[96,40],[88,130],[58,144]),
   b:pose([124,90],[112,72],[80,102],[122,108],[120,92],[86,133],[57,145]),
   equipment:'M22 150V10H34M16 150H40M23 120H34M23 110H34M23 100H34',weight:'cable-top-left',focus:'core',labels:['Tronco erguido, sin arquear','Acerca costillas a pelvis'],arrow:'M138 40Q156 58 148 84m-5-7 5 7 6-6'},
  pressm:{view:'front',a:pose([79,35],[79,53],[79,105],[50,62],[50,36],[55,120],[55,146],[108,62],[108,36],[103,120],[103,146]),b:pose([79,35],[79,53],[79,105],[60,28],[62,6],[55,120],[55,146],[98,28],[96,6],[103,120],[103,146]),equipment:'M65 64H93V111H64ZM78 112V147M49 147H108M31 147V13M127 147V13',weight:'press-handles',focus:'shoulders',labels:['Manos a los lados','Empuja sin arquear la espalda'],arrow:'M145 58V18m-6 7 6-7 6 7'},
  tripd:{a:{...side,elbow:[84,66],hand:[102,51],elbow2:[79,66],hand2:[97,51]},b:{...side,elbow:[84,66],hand:[100,86],elbow2:[79,66],hand2:[95,86]},equipment:'M134 8V150M124 150H146M135 118H146M135 108H146M135 98H146',weight:'cable-top-right',focus:'arms',labels:['Codos junto al cuerpo','Extiende el codo'],arrow:'M114 50V90m-6-7 6 7 6-7'},
  rowc:{a:pose([111,44],[105,62],[102,106],[73,73],[45,77],[69,111],[43,139]),b:pose([111,44],[105,62],[102,106],[129,86],[95,90],[69,111],[43,139]),equipment:'M18 147V29M16 82 46 77M88 111H126M97 111V147M35 129 48 145',weight:'handle',focus:'back',labels:['Brazos extendidos','Tira hacia la cadera'],arrow:'M48 52H85m-7-6 7 6-7 6'},
  rear:{view:'front',fore:true,a:{...stand,elbow:[67,59],hand:[69,80],elbow2:[91,59],hand2:[89,80]},b:{...stand,elbow:[45,51],hand:[19,54],elbow2:[113,51],hand2:[139,54]},equipment:'M65 64H92V103H65ZM78 103V147M47 147H111',weight:'handle',focus:'shoulders',labels:['Pecho apoyado, brazos delante','Abre los brazos'],arrow:'M36 30H10m7-6-7 6 7 6M122 30H148m-7-6 7 6-7 6'},
  curlinc:{a:pose([102,37],[95,55],[72,109],[104,82],[104,111],[48,122],[48,146],[75,82],[67,111],[90,125],[104,146]),b:pose([102,37],[95,55],[72,109],[104,82],[122,58],[48,122],[48,146],[75,82],[63,54],[90,125],[104,146]),equipment:incline,weight:'dumbbell',focus:'arms',labels:['Deja bajar la mancuerna','Flexiona sin mover el hombro'],arrow:'M138 110Q153 87 136 63m0 8 0-8 8 2'},
  walk:{a:pose([83,25],[81,43],[78,87],[62,64],[76,76],[55,107],[38,139],[100,59],[111,43],[96,109],[111,139]),b:pose([80,23],[78,41],[81,85],[60,50],[47,36],[99,105],[122,134],[97,63],[83,78],[66,112],[65,143]),facing:1,equipment:'M18 150 145 137',focus:'legs',labels:['Paso cómodo','Ritmo de conversación'],arrow:'M14 99H41m-7-6 7 6-7 6'},
  hip90:{view:'front',a:pose([80,26],[80,45],[80,93],[58,65],[43,105],[51,108],[48,141],[103,65],[121,105],[110,108],[141,92]),b:pose([80,26],[80,45],[80,93],[58,65],[43,105],[49,108],[18,93],[103,65],[121,105],[110,108],[114,141]),equipment:'M13 148H147',focus:'hips',labels:['Caderas en 90/90','Rota al otro lado'],arrow:'M44 20Q78 2 115 20m-7-6 7 6-9 2'},
  mob:{view:'front',a:stand,b:{...stand,elbow:[55,36],hand:[55,12],elbow2:[103,36],hand2:[103,12]},equipment:'M140 8V148',focus:'shoulders',labels:['Respira y alarga la espalda','Desliza brazos sin forzar'],arrow:'M27 73V28m-6 7 6-7 6 7'},
  dragon:{a:pose([34,124],[50,122],[91,90],[39,109],[22,106],[95,58],[116,79]),b:pose([34,124],[50,122],[94,114],[39,109],[22,106],[121,95],[134,119]),equipment:bench,focus:'core',labels:['Rodillas recogidas','Baja sin arquear la lumbar'],arrow:'M132 49Q151 72 145 92m-4-6 4 6 5-5'}
 };
 specs.crunchdecline={a:pose([129,128],[113,117],[79,88],[98,98],[92,105],[55,105],[40,79]),b:pose([113,69],[96,80],[79,88],[104,94],[93,100],[55,105],[40,79]),equipment:'M29 71 145 146M46 84V147M134 140V147M28 75 44 87',focus:'core',labels:['Desenrolla con control','Acerca costillas a pelvis'],arrow:'M148 114Q154 90 137 67m0 7 0-7 7 2'};
 specs.trioh={a:{...side,head:[86,25],elbow:[90,21],hand:[72,34],elbow2:[85,21],hand2:[67,34]},b:{...side,head:[86,25],elbow:[90,21],hand:[106,4],elbow2:[85,21],hand2:[101,4]},equipment:'M18 10V150M12 150H30',weight:'cable-low-left',focus:'arms',labels:['Codos arriba, costillas controladas','Extiende sin mover el hombro'],arrow:'M128 44V10m-6 7 6-7 6 7'};
 specs.rowdb={a:pose([112,47],[96,62],[58,82],[96,91],[93,120],[49,113],[49,145],[105,88],[113,106],[75,105],[63,111]),b:pose([112,47],[96,62],[58,82],[71,48],[83,77],[49,113],[49,145],[105,88],[113,106],[75,105],[63,111]),equipment:'M59 109H135M68 109V148M128 109V148',weight:'single-dumbbell',focus:'back',labels:['Apoyo estable, brazo abajo','Codo hacia la cadera'],arrow:'M23 113V71m-6 7 6-7 6 7'};
 specs.rowhigh={view:'front',fore:true,a:pose([80,30],[80,49],[80,100],[62,65],[68,87],[61,122],[58,146],[98,65],[92,87],[100,122],[103,146]),b:pose([80,30],[80,49],[80,100],[38,60],[60,73],[61,122],[58,146],[122,60],[100,73],[100,122],[103,146]),equipment:'M65 64H95V104H65ZM80 105V148M47 148H113',weight:'handle',focus:'back',labels:['Pecho apoyado, brazos delante','Codos abiertos, escápulas atrás'],arrow:'M43 36H16m7-6-7 6 7 6M117 36H144m-7-6 7 6-7 6'};
 specs.rdl={a:{...side,hand:[84,94],hand2:[78,94]},b:pose([119,57],[105,73],[64,88],[103,95],[99,120],[76,113],[76,146],[98,95],[93,120],[70,114],[70,146]),facing:1,equipment:'',weight:'dumbbell-side',focus:'hamstrings',labels:['De pie, rodillas suaves','Cadera atrás, pesos cerca'],arrow:'M44 70H16m7-6-7 6 7 6'};
 specs.hammer={a:{...side,hand:[84,90],hand2:[78,90]},b:{...side,hand:[102,52],hand2:[96,52]},equipment:'',weight:'hammer',focus:'arms',labels:['Agarre neutro','Flexiona sin balanceo'],arrow:'M122 96Q134 72 114 50m1 8-1-8 8 1'};
 specs.latp={view:'front',a:pose([80,57],[80,75],[80,114],[55,45],[38,17],[51,122],[48,147],[105,45],[122,17],[108,122],[111,147]),b:pose([80,57],[80,75],[80,114],[44,87],[39,59],[51,122],[48,147],[117,87],[121,59],[108,122],[111,147]),equipment:'M20 148V8H140V148M62 118H98M80 118V149',weight:'pulldown',focus:'back',labels:['Brazos arriba, tronco estable','Lleva codos hacia abajo'],arrow:'M150 30V78m-6-7 6 7 6-7'};
 specs.curlc={a:{...side,hand:[88,90],hand2:[82,90]},b:{...side,hand:[104,50],hand2:[98,50]},equipment:'M136 10V150M126 150H148',weight:'cable-low-right',focus:'arms',labels:['Codos quietos junto al cuerpo','Flexiona manteniendo tensión'],arrow:'M44 98Q24 74 46 50m-8 1 8-1-1 8'};
 specs.hangraise={L:{torso:40,ua:24,fa:22,thigh:26,shin:24,neck:18},
  a:pose([80,50],[80,64],[80,104],[82,40],[80,16],[81,130],[80,150],[78,40],[80,16],[77,130],[76,150]),
  b:pose([80,50],[80,64],[84,102],[82,40],[80,16],[110,90],[112,114],[78,40],[80,16],[106,92],[106,116]),
  equipment:'M40 152V16H120V152',weight:'bar-side',focus:'core',labels:['Cuelga sin balancearte','Sube rodillas y enrolla la pelvis'],arrow:'M142 140Q158 116 138 94m1 8-1-8 8 2'};
 specs.hipstretch={a:pose([73,26],[73,44],[73,91],[88,64],[105,94],[104,101],[105,143],[56,64],[60,88],[55,138],[25,139]),b:pose([82,26],[82,44],[82,91],[93,64],[105,94],[108,101],[108,143],[64,65],[65,88],[55,138],[25,139]),equipment:'M17 149H142',focus:'hips',labels:['Media rodilla y pelvis recogida','Avanza suave sin arquear'],arrow:'M99 18H131m-7-6 7 6-7 6'};
 specs.wrist={a:pose([63,29],[64,48],[67,106],[83,87],[125,94],[96,115],[93,148]),b:pose([63,29],[64,48],[67,106],[83,87],[125,75],[96,115],[93,148]),equipment:'M76 94H114M85 95V148M53 111H75M62 113V148',weight:'single-dumbbell',focus:'forearm',labels:['Antebrazo apoyado, muñeca baja','Eleva solo la muñeca'],arrow:'M146 105V71m-6 7 6-7 6 7'};
 specs.fly={view:'front',fore:true,a:{...stand,hip:[79,104],elbow:[41,55],hand:[24,39],elbow2:[117,55],hand2:[134,39],knee:[56,121],foot:[53,147],knee2:[102,121],foot2:[106,147]},b:{...stand,hip:[79,104],elbow:[64,59],hand:[74,69],elbow2:[94,59],hand2:[84,69],knee:[56,121],foot:[53,147],knee2:[102,121],foot2:[106,147]},equipment:'M64 43H94V105H64ZM53 109H106M79 109V148M14 85V13H144V85',weight:'handle',focus:'chest',labels:['Abre en un rango cómodo','Acerca los brazos al frente'],arrow:'M18 92H56m-7-6 7 6-7 6M140 92H102m7-6-7 6 7 6'};
 specs.flylow={view:'front',fore:true,a:{...stand,elbow:[52,86],hand:[40,108],elbow2:[106,86],hand2:[118,108]},b:{...stand,elbow:[62,56],hand:[72,48],elbow2:[96,56],hand2:[86,48]},equipment:'M14 10V150M146 10V150M8 150H152',weight:'cable-low-both',focus:'chest',labels:['Poleas bajas, brazos abiertos','Sube y junta a la altura del pecho'],arrow:'M9 124Q10 84 30 60m-8 2 8-2 0 8M151 124Q150 84 130 60m8 2-8-2 0 8'};
 specs.rowbar={a:pose([119,47],[105,63],[63,84],[101,87],[100,112],[77,114],[73,146],[116,87],[117,112],[93,116],[99,146]),b:pose([119,47],[105,63],[63,84],[77,46],[88,77],[77,114],[73,146],[93,45],[105,77],[93,116],[99,146]),equipment:'',weight:'barbell-side',focus:'back',labels:['Tronco inclinado y estable','Barra hacia el abdomen alto'],arrow:'M140 118V78m-6 7 6-7 6 7'};
 specs.pullover={a:pose([46,92],[63,95],[112,95],[72,68],[63,39],[137,116],[141,147],[69,69],[63,39],[131,117],[132,147]),b:pose([46,92],[63,95],[112,95],[39,75],[15,76],[137,116],[141,147],[38,79],[15,76],[131,117],[132,147]),equipment:'M34 106H120M42 106V147M111 106V147',weight:'single-dumbbell',focus:'chest',labels:['Peso sobre el pecho, apoyo largo','Baja detrás sin arquear la espalda'],arrow:'M83 25Q29 19 13 52m-2-8 2 8 7-4'};
 specs.straightarm={a:pose([91,35],[83,53],[77,96],[59,41],[34,29],[89,120],[90,147],[62,44],[37,32],[104,119],[112,147]),b:pose([91,35],[83,53],[77,96],[64,77],[56,105],[89,120],[90,147],[67,80],[59,108],[104,119],[112,147]),equipment:'M15 148V12H43M10 147H39',weight:'high-cable',focus:'back',labels:['Brazos elevados, codos suaves','Lleva las manos hacia los muslos'],arrow:'M44 57Q24 85 38 112m-8-3 8 3 1-8'};
 specs.bench={L:{torso:48,ua:26,fa:24,thigh:34,shin:32,neck:17},
  a:pose([39,97],[55,100],[103,100],[78,112],[78,88],[136,108],[139,140],[82,110],[82,86],[130,109],[128,140]),
  b:pose([39,97],[55,100],[103,100],[56,74],[56,50],[136,108],[139,140],[60,72],[60,48],[130,109],[128,140]),
  equipment:'M28 110H120M36 110V148M112 110V148M24 150V28H38M20 60H32',weight:'barbell-side',focus:'chest',labels:['Barra al pecho bajo, apoyos firmes','Empuja arriba y un poco atrás'],arrow:'M150 96V44m-6 7 6-7 6 7',path:true};
 specs.chestpress={a:pose([49,29],[51,48],[53,104],[34,77],[74,61],[85,115],[87,147],[45,79],[78,64],[93,116],[99,147]),b:pose([49,29],[51,48],[53,104],[84,54],[116,59],[85,115],[87,147],[86,58],[120,63],[93,116],[99,147]),equipment:'M34 38V109H72M39 109V148M70 110V148M22 148H145M137 148V18H107',weight:'handle',focus:'chest',labels:['Asas a la altura del pecho','Empuja al frente, espalda apoyada'],arrow:'M78 29H120m-7-6 7 6-7 6'};
 specs.bss={L:{torso:44,ua:24,fa:23,thigh:34,shin:33,neck:18},
  a:pose([78,18],[76,36],[72,80],[78,58],[78,82],[97,109],[99,144],[72,58],[72,82],[55,112],[30,102]),
  b:pose([80,40],[76,58],[70,102],[79,80],[79,104],[103,108],[100,144],[73,80],[73,104],[57,137],[30,102]),
  equipment:'M14 106H46M20 106V150M40 106V150',weight:'dumbbell-side',focus:'quads',labels:['Pie trasero en el banco, tronco firme','Baja con la rodilla delantera estable'],arrow:'M132 56V100m-6-7 6 7 6-7'};

 specs.latdb={view:'front',a:{...stand,elbow:[58,68],hand:[50,90],elbow2:[100,68],hand2:[108,90]},b:{...stand,elbow:[46,48],hand:[24,52],elbow2:[112,48],hand2:[134,52]},equipment:'',weight:'dumbbell',focus:'shoulders',labels:['Mancuernas a los lados','Abre hasta la línea del hombro'],arrow:'M30 96Q12 78 16 58m-6 7 6-7 5 8M128 96Q146 78 142 58m6 7-6-7-5 8'};
 specs.preacher={L:{torso:46,ua:26,fa:25,thigh:32,shin:34,neck:18},
  a:pose([80,40],[76,58],[70,104],[98,80],[116,98],[101,112],[101,146],[94,80],[112,98],[96,112],[96,146]),
  b:pose([80,40],[76,58],[70,104],[98,80],[96,56],[101,112],[101,146],[94,80],[92,56],[96,112],[96,146]),
  equipment:'M82 66 112 94M104 88V150M54 110H86M68 110V150M90 150H118',weight:'single-dumbbell',focus:'arms',labels:['Brazo apoyado, casi extendido','Sube sin despegar el codo'],arrow:'M138 104Q150 76 126 58m2 8-2-8 8 0'};
 specs.pressdb={view:'front',a:pose([79,35],[79,53],[79,105],[50,62],[50,36],[55,120],[55,146],[108,62],[108,36],[103,120],[103,146]),b:pose([79,35],[79,53],[79,105],[60,28],[62,6],[55,120],[55,146],[98,28],[96,6],[103,120],[103,146]),equipment:'M64 40H94V111H64ZM79 112V147M49 147H109',weight:'dumbbell',focus:'shoulders',labels:['Mancuernas a la altura de las orejas','Empuja sin arquear la espalda'],arrow:'M145 58V18m-6 7 6-7 6 7'};
 specs.cossack={view:'front',a:pose([79,25],[79,43],[79,88],[70,62],[79,74],[56,114],[40,144],[88,62],[79,74],[102,114],[118,144]),b:pose([62,56],[62,74],[58,114],[54,92],[66,104],[40,118],[40,144],[72,92],[66,104],[94,128],[126,140]),equipment:'',focus:'hips',labels:['Pies muy abiertos','Baja sobre una pierna, la otra estirada'],arrow:'M106 14Q82 2 58 14m8-5-8 5 9 2'};
 specs.lsit={L:{torso:42,ua:22,fa:22,thigh:32,shin:30,neck:17},a:pose([72,58],[70,76],[72,118],[80,98],[86,121],[98,104],[96,126],[76,98],[82,121],[94,106],[92,128]),b:pose([72,58],[70,76],[72,118],[80,98],[86,121],[104,116],[136,116],[76,98],[82,121],[102,118],[134,118]),equipment:'M86 128V151M76 151H96M80 122a6 6 0 1 0 12 0a6 6 0 1 0-12 0',focus:'core',labels:['Rodillas recogidas, hombros abajo','Piernas estiradas en L'],arrow:'M112 142Q140 140 150 122m-8 2 8-2 1 8'};
 specs.boxjump={L:{torso:42,ua:24,fa:22,thigh:32,shin:31,neck:17},facing:1,a:pose([84,50],[76,66],[60,104],[66,86],[50,98],[82,118],[74,148],[62,86],[46,98],[78,120],[68,148]),b:pose([118,30],[112,46],[102,86],[124,52],[136,62],[126,96],[118,111],[120,54],[132,64],[122,98],[112,111]),equipment:'M94 112H144V150H94Z',focus:'legs',labels:['Cadera atrás, brazos atrás','Aterriza suave sobre el cajón'],arrow:'M44 24Q84 0 122 14m-9-6 9 6-8 5'};
 specs.abwheel={L:{torso:44,ua:24,fa:22,thigh:30,shin:26,neck:16},facing:1,a:pose([108,80],[96,92],[66,112],[98,116],[100,140],[64,142],[38,146]),b:pose([132,110],[118,120],[74,126],[134,128],[146,140],[64,142],[38,146]),equipment:'',weight:'wheel',focus:'core',labels:['De rodillas, rueda bajo los hombros','Rueda sin arquear la lumbar'],arrow:'M100 64H144m-7-6 7 6-7 6'};
 specs.pushup={L:{torso:44,ua:22,fa:21,thigh:22,shin:22,neck:15},facing:1,a:pose([118,96],[104,104],[62,118],[104,124],[104,145],[42,130],[22,145]),b:pose([122,124],[106,130],[62,134],[92,128],[104,146],[42,140],[22,146]),equipment:'',focus:'chest',labels:['Brazos extendidos, cuerpo en bloque','Baja el pecho cerca del suelo'],arrow:'M138 88V124m-6-7 6 7 6-7'};
 specs.yraise={view:'front',a:{...stand,elbow:[72,72],hand:[90,98],elbow2:[86,72],hand2:[68,98]},b:{...stand,elbow:[52,24],hand:[38,4],elbow2:[106,24],hand2:[120,4]},equipment:'M12 18V150M148 18V150',weight:'cable-low-both',focus:'shoulders',labels:['Manos cruzadas delante de la cadera','Sube en Y, pulgares arriba'],arrow:'M26 96Q18 64 26 34m-5 8 5-8 5 8M134 96Q142 64 134 34m-5 8 5-8 5 8'};
 specs.ohp={view:'front',a:{...stand,elbow:[56,64],hand:[58,48],elbow2:[102,64],hand2:[100,48]},b:{...stand,elbow:[60,22],hand:[62,2],elbow2:[98,22],hand2:[96,2]},equipment:'',weight:'barbell-front',focus:'shoulders',labels:['Barra en la clavícula, glúteo y abdomen firmes','Bloquea sobre la cabeza sin arquear'],arrow:'M148 78V30m-6 7 6-7 6 7'};
 specs.flydb={view:'front',fore:true,a:{...stand,elbow:[44,52],hand:[20,48],elbow2:[114,52],hand2:[138,48]},b:{...stand,elbow:[64,56],hand:[74,60],elbow2:[94,56],hand2:[84,60]},equipment:'M62 30H96V146H62Z',weight:'dumbbell',focus:'chest',rot:-90,labels:['Tumbado: brazos abiertos, codos suaves','Cierra en arco sobre el pecho'],arrow:'M12 78Q30 96 54 82m-8 1 8-1-4-7M148 78Q130 96 106 82m8 1-8-1 4-7'};
 specs.skull={L:{torso:48,ua:26,fa:24,thigh:34,shin:32,neck:17},
  a:pose([39,97],[55,100],[103,100],[50,75],[30,90],[136,108],[139,140],[54,74],[34,89],[130,109],[128,140]),
  b:pose([39,97],[55,100],[103,100],[50,75],[52,51],[136,108],[139,140],[54,74],[56,50],[130,109],[128,140]),
  equipment:'M28 110H120M36 110V148M112 110V148',weight:'ez-side',focus:'arms',labels:['Barra detrás de la frente, codos arriba','Extiende sin abrir los codos'],arrow:'M18 84Q18 56 42 44m-8-1 8 1-4 7'};
 specs.revcurl={a:{...side,hand:[84,90],hand2:[78,90]},b:{...side,hand:[102,52],hand2:[96,52]},equipment:'',weight:'ez-side',focus:'forearm',labels:['Agarre prono, codos pegados','Sube sin balanceo, baja en 2 s'],arrow:'M122 96Q134 72 114 50m1 8-1-8 8 1'};
 /* ---------- geometría ---------- */
 const sub=(a,b)=>[a[0]-b[0],a[1]-b[1]],add=(a,b)=>[a[0]+b[0],a[1]+b[1]],mul=(a,k)=>[a[0]*k,a[1]*k];
 const len=v=>Math.hypot(v[0],v[1]),dist=(a,b)=>len(sub(a,b)),unit=v=>{const l=len(v)||1;return[v[0]/l,v[1]/l]};
 const perp=v=>[-v[1],v[0]],cross=(a,b)=>a[0]*b[1]-a[1]*b[0],lerp=(a,b,t)=>[a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t];
 const r1=n=>Math.round(n*10)/10,P=p=>r1(p[0])+' '+r1(p[1]);
 // Dos huesos de longitud fija desde root hacia target; la articulación queda del lado de ref.
 function ik(root,target,l1,l2,ref){
  const d=Math.min(Math.max(dist(root,target),Math.abs(l1-l2)+.5),l1+l2-.05),u=unit(sub(target,root)),end=add(root,mul(u,d));
  const a=(l1*l1+d*d-l2*l2)/(2*d),h=Math.sqrt(Math.max(0,l1*l1-a*a)),n=perp(u),s=cross(u,sub(ref,root))>=0?1:-1;
  return [add(add(root,mul(u,a)),mul(n,h*s)),end];
 }
 const maxOf=(sp,pairs)=>Math.max(...['a','b'].flatMap(k=>pairs.map(([x,y])=>dist(sp[k][x],sp[k][y]))));
 function lengths(sp){
  const L=sp.L||{};
  return {torso:L.torso||maxOf(sp,[['shoulder','hip']]),neck:L.neck||maxOf(sp,[['shoulder','head']]),
   ua:L.ua||maxOf(sp,[['shoulder','elbow'],['shoulder','elbow2']]),fa:L.fa||maxOf(sp,[['elbow','hand'],['elbow2','hand2']]),
   thigh:L.thigh||maxOf(sp,[['hip','knee'],['hip','knee2']]),shin:L.shin||maxOf(sp,[['knee','foot'],['knee2','foot2']])};
 }
 // Posición resuelta: tronco, hombros (en vista frontal salen de las esquinas del torso) y extremidades.
 function solve(sp,raw,L){
  const front=sp.view==='front',hip=raw.hip,axis=unit(sub(raw.shoulder,hip)),S=add(hip,mul(axis,L.torso)),n=perp(axis);
  const head=add(S,mul(unit(sub(raw.head,raw.shoulder)),L.neck));
  const sw=front?14:0,hw=front?7:0;
  const corner=(target,w)=>w?add(S,mul(n,cross(axis,sub(target,S))>=0?w:-w)):S;
  const hipCorner=(target,w)=>w?add(hip,mul(n,cross(axis,sub(target,hip))>=0?w:-w)):hip;
  const sh1=corner(raw.hand,sw),sh2=corner(raw.hand2,sw),hp1=hipCorner(raw.foot,hw),hp2=hipCorner(raw.foot2,hw);
  const shift=sub(S,raw.shoulder);
  const arm=(sh,el,hd)=>sp.fore?[add(el,shift),add(hd,shift)]:ik(sh,hd,L.ua,L.fa,add(el,shift));
  const leg=(hp,kn,ft)=>ik(hp,ft,L.thigh,L.shin,kn);
  const [elbow,hand]=arm(sh1,raw.elbow,raw.hand),[elbow2,hand2]=arm(sh2,raw.elbow2,raw.hand2);
  const [knee,foot]=leg(hp1,raw.knee,raw.foot),[knee2,foot2]=leg(hp2,raw.knee2,raw.foot2);
  return {front,axis,n,S,hip,head,sh1,sh2,hp1,hp2,elbow,hand,elbow2,hand2,knee,foot,knee2,foot2,toe:raw.toe,toe2:raw.toe2};
 }

 /* ---------- dibujo ---------- */
 const K=1.32,INK='#C4C4D8',BODY='#46465C',FAR='#2B2B3A',FARINK='#64647C',METAL='#D6D6E2',EQUIP='#5E5E78',HOT='var(--art-hot,#FF5148)';
 const poly=pts=>pts.map(P).join(' ');
 // Segmento cónico: más ancho en el origen, con remates facetados.
 function limb(a,b,wa,wb){
  wa*=K;wb*=K;
  const u=unit(sub(b,a)),n=perp(u),ca=add(a,mul(u,-wa*.35)),cb=add(b,mul(u,wb*.35));
  return [add(a,mul(n,wa/2)),add(b,mul(n,wb/2)),cb,add(b,mul(n,-wb/2)),add(a,mul(n,-wa/2)),ca];
 }
 function torso(f){
  const {S,hip,n,axis,front}=f,T=dist(S,hip),at=t=>add(hip,mul(axis,T*t));
  if(front)return [add(S,mul(n,K*13)),add(at(.72),mul(n,K*14)),add(hip,mul(n,K*7.5)),add(hip,mul(n,K*-7.5)),add(at(.72),mul(n,K*-14)),add(S,mul(n,K*-13)),add(S,mul(axis,3))];
  const side=frontSide(f);
  return [add(S,mul(n,K*6*side)),add(at(.72),mul(n,K*9.5*side)),add(at(.28),mul(n,K*6.5*side)),add(hip,mul(n,K*6*side)),add(hip,mul(n,K*-7*side)),add(at(.55),mul(n,K*-8.5*side)),add(S,mul(n,K*-7*side)),add(S,mul(axis,3))];
 }
 // En perfil, el pecho mira hacia donde están las manos (salvo indicación).
 function frontSide(f){
  if(f.fs)return f.fs;
  const mid=lerp(f.hand,f.hand2,.5),c=cross(f.axis,sub(mid,f.hip));
  return f.fs=(Math.abs(c)<4?(f.face||1):(c>=0?1:-1));
 }
 function hexHead(c,r=10){return Array.from({length:6},(_,i)=>{const a=Math.PI/6+i*Math.PI/3;return[c[0]+Math.cos(a)*r,c[1]+Math.sin(a)*r]})}
 function footShape(ankle,toe){return limb(ankle,toe,6,3.5)}
 function autoToe(f,foot,knee,facing){
  if(foot[1]<134)return null;
  const dx=foot[0]-(f.hip[0]);const dir=Math.abs(dx)>8?Math.sign(dx):facing;
  return dir?[foot[0]+dir*11,foot[1]+4]:null;
 }
 function shapes(f,sp){
  const far=[],near=[],facing=sp.facing||(sp.view==='front'?0:1);
  const toe2=f.toe2||(sp.view!=='front'&&autoToe(f,f.foot2,f.knee2,facing)),toe=f.toe||(sp.view!=='front'&&autoToe(f,f.foot,f.knee,facing));
  const farArm=[limb(f.sh2,f.elbow2,8,6.5),limb(f.elbow2,f.hand2,6.5,4.5)],farLeg=[limb(f.hp2,f.knee2,10.5,7.5),limb(f.knee2,f.foot2,7.5,5)];
  const nearArm=[limb(f.sh1,f.elbow,9,7),limb(f.elbow,f.hand,7,5)],nearLeg=[limb(f.hp1,f.knee,11.5,8),limb(f.knee,f.foot,8,5.5)];
  if(toe2)farLeg.push(footShape(f.foot2,toe2));if(toe)nearLeg.push(footShape(f.foot,toe));
  if(f.front){near.push(...farArm,...farLeg)}else far.push(...farArm,...farLeg);
  near.push(torso(f),...nearLeg,...nearArm,hexHead(f.head));
  return {far,near,parts:{farArm,farLeg,nearArm,nearLeg}};
 }
 const fillPoly=(pts,fill,extra='')=>`<polygon points="${poly(pts)}" fill="${fill}"${extra}/>`;
 function hot(f,sp,parts){
  const T=dist(f.S,f.hip),at=t=>add(f.hip,mul(f.axis,T*t)),n=f.n,glow=` style="fill:${HOT};filter:drop-shadow(0 0 3px ${HOT})"`,dim=` style="fill:${HOT};opacity:.5"`;
  const seg=(s,t0,t1,grow=1.5)=>{const [a,b]=[lerp(s[0],s[4],.5),lerp(s[1],s[3],.5)],u=lerp(a,b,t0),v=lerp(a,b,t1),wa=dist(s[0],s[4])+grow,wb=dist(s[1],s[3])+grow;return limb(u,v,wa*(1-t0)+wb*t0,wa*(1-t1)+wb*t1)};
  let h='';
  switch(sp.focus){
   case 'chest':
    if(f.front){for(const s of[1,-1])h+=fillPoly([add(at(.97),mul(n,K*1.5*s)),add(at(.97),mul(n,K*12*s)),add(at(.72),mul(n,K*12.5*s)),add(at(.64),mul(n,K*2*s))],'',glow)}
    else{const s=frontSide(f);h+=fillPoly([add(at(.96),mul(n,K*5*s)),add(at(.72),mul(n,K*9.8*s)),add(at(.5),mul(n,K*7.6*s)),add(at(.56),mul(n,K*1*s)),add(at(.92),mul(n,.5*s))],'',glow)}
    break;
   case 'back':
    if(f.front){for(const s of[1,-1])h+=fillPoly([add(at(.9),mul(n,K*12*s)),add(at(.7),mul(n,K*14.5*s)),add(at(.2),mul(n,K*8.5*s)),add(at(.42),mul(n,K*3*s)),add(at(.78),mul(n,K*5*s))],'',glow)}
    else{const s=-frontSide(f);h+=fillPoly([add(at(.97),mul(n,K*6*s)),add(at(.55),mul(n,K*9*s)),add(at(.22),mul(n,K*7*s)),add(at(.3),mul(n,K*1*s)),add(at(.9),mul(n,K*1*s))],'',glow)}
    break;
   case 'core':{
    const s=f.front?0:frontSide(f),w=K*(f.front?5.5:3.2),c=t=>add(at(t),mul(n,f.front?0:5.6*s));
    h+=fillPoly([add(c(.62),mul(n,w)),add(c(.1),mul(n,w)),add(c(.1),mul(n,-w)),add(c(.62),mul(n,-w))],'',glow);
    for(const t of[.24,.37,.5])h+=`<path d="M${P(add(c(t),mul(n,w)))}L${P(add(c(t),mul(n,-w)))}" stroke="${BODY}" stroke-width="1.3"/>`;
    break;}
   case 'shoulders':
    h+=fillPoly(seg(parts.farArm[0],0,.5,3),'',dim)+fillPoly(seg(parts.nearArm[0],0,.5,3),'',glow);break;
   case 'arms':
    h+=fillPoly(seg(parts.farArm[0],.12,1,1),'',dim)+fillPoly(seg(parts.nearArm[0],.12,1,1),'',glow);break;
   case 'forearm':
    h+=fillPoly(seg(parts.nearArm[1],0,.9,1),'',glow);break;
   case 'quads':case 'hamstrings':
    h+=fillPoly(seg(parts.farLeg[0],.08,.95,1),'',dim)+fillPoly(seg(parts.nearLeg[0],.08,.95,1),'',glow);break;
   case 'calves':
    h+=fillPoly(seg(parts.farLeg[1],.05,.8,1),'',dim)+fillPoly(seg(parts.nearLeg[1],.05,.8,1),'',glow);break;
   case 'legs':
    h+=fillPoly(seg(parts.nearLeg[0],.08,.95,1),'',glow)+fillPoly(seg(parts.nearLeg[1],.05,.8,1),'',glow);break;
   case 'hips':
    h+=`<circle cx="${r1(f.hip[0])}" cy="${r1(f.hip[1])}" r="7.5"${glow}/>`;break;
  }
  return h;
 }
 function figure(f,sp){
  const {far,near,parts}=shapes(f,sp);
  const outline=list=>list.map(p=>fillPoly(p,INK,` stroke="${INK}" stroke-width="2.4" stroke-linejoin="round"`)).join('');
  let h=far.map(p=>fillPoly(p,FAR,` stroke="${FARINK}" stroke-width="1.6" stroke-linejoin="round"`)).join('');
  h+=outline(near)+near.map(p=>fillPoly(p,BODY)).join('');
  if(f.front)h+=`<path d="M${P(add(f.S,mul(f.axis,-6)))}L${P(add(f.hip,mul(f.axis,6)))}" stroke="#5C5C74" stroke-width="1.2"/>`;
  h+=hot(f,sp,parts);
  const eye=f.front?add(f.head,[0,-1]):add(f.head,mul(f.n,frontSide(f)*3.5));
  h+=`<circle cx="${r1(eye[0])}" cy="${r1(eye[1])}" r="1.3" fill="${METAL}"/>`;
  for(const j of[f.elbow,f.knee])h+=`<circle cx="${r1(j[0])}" cy="${r1(j[1])}" r="1.6" fill="#17171F"/>`;
  return h;
 }
 // Posición inicial como silueta suave detrás de la final: se lee como movimiento, no como ruido.
 function ghost(f,sp){
  const {far,near}=shapes(f,sp);
  return `<g fill="#9C9CB4" opacity=".2">${[...far,...near].map(p=>`<polygon points="${poly(p)}"/>`).join('')}</g>`;
 }
 const cable=(from,to)=>`<path d="M${P(from)}L${P(to)}" stroke="#7A7A92" stroke-width="1.3"/>`;
 const grip=(p,q)=>`<path d="M${P(p)}L${P(q)}" stroke="${METAL}" stroke-width="3.6" stroke-linecap="round"/>`;
 function dumbbell(p,rot=0){return `<g transform="translate(${P(p)}) rotate(${rot})"><path d="M-9 0H9" stroke="${METAL}" stroke-width="2.6"/><path d="M-13-6.5h5v13h-5zM8-6.5h5v13h-5z" fill="#26263A" stroke="${METAL}" stroke-width="1.4" stroke-linejoin="round"/></g>`}
 function weights(sp,f){
  const w=sp.weight;let h='';
  if(w==='dumbbell'||w==='hammer')for(const p of[f.hand2,f.hand])h+=dumbbell(p,w==='hammer'?90:0);
  if(w==='single-dumbbell')h+=dumbbell(f.hand);
  if(w==='dumbbell-side'){for(const p of[f.hand2,f.hand])h+=`<g transform="translate(${P(p)})"><path d="M-5-7h10v14h-10z" fill="#26263A" stroke="${METAL}" stroke-width="1.4"/></g>`}
  if(w==='barbell-side'){
   const c=lerp(f.hand,f.hand2,.5);
   h+=`<g transform="translate(${P(c)})"><path d="M-4-15h8v30h-8z" fill="#26263A" stroke="${METAL}" stroke-width="1.6"/><path d="M-2-10h4v20h-4z" fill="${METAL}" opacity=".35"/><circle r="2.2" fill="${METAL}"/></g>`;
  }
  if(w==='bar-front')h+=`<path d="M26 17H134" stroke="${METAL}" stroke-width="3.2" stroke-linecap="round"/>`;
  if(w==='bar-side')h+=`<circle cx="80" cy="16" r="4" fill="#26263A" stroke="${METAL}" stroke-width="2"/>`;
  if(w==='high-cable')h+=cable([40,14],f.hand)+grip(add(f.hand,[-6,3]),add(f.hand2,[6,-3]));
  if(w==='pulldown')h+=cable([80,8],lerp(f.hand,f.hand2,.5))+grip(add(f.hand,[-4,0]),add(f.hand2,[4,0]));
  if(w==='cable-low-right')h+=cable([133,144],f.hand)+grip(add(f.hand,[-4,0]),add(f.hand,[4,0]));
  if(w==='cable-top-right')h+=cable([131,12],f.hand)+grip(add(f.hand,[-3,-3]),add(f.hand,[3,3]));
  if(w==='cable-top-left')h+=cable([26,12],f.hand)+grip(add(f.hand,[-3,-3]),add(f.hand,[3,3]));
  if(w==='cable-low-left')h+=cable([22,120],f.hand)+grip(add(f.hand,[-3,-3]),add(f.hand,[3,3]));
  if(w==='cable-low-both')h+=cable([17,140],f.hand)+cable([143,140],f.hand2)+grip(add(f.hand,[-3,0]),add(f.hand,[3,0]))+grip(add(f.hand2,[-3,0]),add(f.hand2,[3,0]));
  if(w==='wheel'){const c=lerp(f.hand,f.hand2,.5);h+=`<circle cx="${r1(c[0])}" cy="${r1(c[1]+2)}" r="7" fill="#26263A" stroke="${METAL}" stroke-width="2"/><circle cx="${r1(c[0])}" cy="${r1(c[1]+2)}" r="2" fill="${METAL}"/>`}
  if(w==='barbell-front'){const y=(f.hand[1]+f.hand2[1])/2,x0=Math.min(f.hand[0],f.hand2[0])-30,x1=Math.max(f.hand[0],f.hand2[0])+30;h+=`<path d="M${r1(x0)} ${r1(y)}H${r1(x1)}" stroke="${METAL}" stroke-width="3" stroke-linecap="round"/><path d="M${r1(x0+4)} ${r1(y-11)}v22M${r1(x1-4)} ${r1(y-11)}v22" stroke="${METAL}" stroke-width="6"/>`}
  if(w==='ez-side'){const c=lerp(f.hand,f.hand2,.5);h+=`<g transform="translate(${P(c)})"><path d="M-3-9h6v18h-6z" fill="#26263A" stroke="${METAL}" stroke-width="1.5"/><circle r="1.8" fill="${METAL}"/></g>`}
  if(w==='handle')h+=grip(add(f.hand,[-4,2]),add(f.hand,[4,-2]));
  if(w==='cable-lateral')h+=cable([23,139],f.hand2)+grip(add(f.hand2,[-3,-3]),add(f.hand2,[3,3]));
  if(w==='press-handles')h+=`<path d="M31 13L${P(f.hand)}M127 13L${P(f.hand2)}" stroke="#5E5E76" stroke-width="3"/>`+grip(add(f.hand,[-5,0]),add(f.hand,[5,0]))+grip(add(f.hand2,[-5,0]),add(f.hand2,[5,0]));
  return h;
 }
 const cache={};
 function frames(key){
  if(cache[key])return cache[key];
  const sp=specs[key]||specs.mob,L=lengths(sp);
  return cache[key]={sp,A:solve(sp,sp.a,L),B:solve(sp,sp.b,L)};
 }
 function pathPoints(d){
  const out=[],tok=String(d).match(/[a-zA-Z]|-?\d*\.?\d+(?:e-?\d+)?/g)||[];let i=0,cmd='',x=0,y=0,sx=0,sy=0;
  const num=()=>parseFloat(tok[i++]);
  while(i<tok.length){
   if(/[a-zA-Z]/.test(tok[i]))cmd=tok[i++];
   const rel=cmd===cmd.toLowerCase(),C=cmd.toUpperCase();
   if(C==='Z'){x=sx;y=sy;continue}
   if(C==='H'){const v=num();x=rel?x+v:v}
   else if(C==='V'){const v=num();y=rel?y+v:v}
   else if(C==='A'){i+=5;const nx=num(),ny=num();x=rel?x+nx:nx;y=rel?y+ny:ny}
   else{const n=C==='C'?3:C==='Q'||C==='S'?2:1;let px=x,py=y;for(let k=0;k<n;k++){const a=num(),b=num();px=rel?x+a:a;py=rel?y+b:b;if(k<n-1)out.push([px,py])}x=px;y=py;if(C==='M'){sx=x;sy=y;cmd=rel?'l':'L'}}
   out.push([x,y]);
  }
  return out.filter(p=>Number.isFinite(p[0])&&Number.isFinite(p[1]));
 }
 const fitCache={};
 function fitBox(key){
  if(fitCache[key])return fitCache[key];
  const {sp,A,B}=frames(key),pts=[];
  for(const f of[A,B])for(const k of['head','S','hip','sh1','sh2','hp1','hp2','elbow','hand','elbow2','hand2','knee','foot','knee2','foot2','toe','toe2'])if(f[k])pts.push(f[k]);
  const rot=sp.rot?sp.rot*Math.PI/180:0,R=p=>rot?[80+(p[0]-80)*Math.cos(rot)-(p[1]-80)*Math.sin(rot),80+(p[0]-80)*Math.sin(rot)+(p[1]-80)*Math.cos(rot)]:p;
  for(let i=0;i<pts.length;i++)pts[i]=R(pts[i]);
  let x0=Math.min(...pts.map(p=>p[0]))-13,x1=Math.max(...pts.map(p=>p[0]))+13,y0=Math.min(...pts.map(p=>p[1]))-13,y1=Math.max(...pts.map(p=>p[1]))+13;
  const grow=p=>{x0=Math.min(x0,p[0]);x1=Math.max(x1,p[0]);y0=Math.min(y0,p[1]);y1=Math.max(y1,p[1])};
  for(const q of pathPoints(sp.arrow)){const p=R(q);grow([p[0]-4,p[1]-4]);grow([p[0]+4,p[1]+4])}
  // Equipo cercano (banco, asiento, cajón) entra en el encuadre; postes lejanos pueden quedar cortados.
  const near=[x0-26,x1+26,y0-26,y1+26];
  for(const q of pathPoints(sp.equipment)){const p=R(q);if(p[0]>=near[0]&&p[0]<=near[1]&&p[1]>=near[2]&&p[1]<=near[3])grow(p)}
  if(y1>=140&&!rot)y1=Math.max(y1,156);
  const size=Math.max(x1-x0,y1-y0,96),cx=(x0+x1)/2,cy=(y0+y1)/2;
  return fitCache[key]=[cx-size/2,cy-size/2,size,size].map(r1).join(' ');
 }
 const GRID='<path d="M-40 0H200M-40 40H200M-40 80H200M-40 120H200M0 -40V200M40 -40V200M80 -40V200M120 -40V200M160 -40V200" stroke="#FFFFFF" stroke-opacity=".035" stroke-width="1"/>';
 const FLOOR_LINE='<path d="M-40 151H200" stroke="#3A3A4C" stroke-width="2"/>',FLOOR='<path d="M-40 151H200" stroke="#3A3A4C" stroke-width="2"/><path d="M14 155l4-4M30 155l4-4M46 155l4-4M62 155l4-4M78 155l4-4M94 155l4-4M110 155l4-4M126 155l4-4M142 155l4-4" stroke="#24242F" stroke-width="1.4"/>';
 /* phase: 0 = inicio, 1 = final con la posición inicial como sombra, 'combo' = miniatura. */
 function svg(key,phase=0){
  const {sp,A,B}=frames(key),end=phase===0?A:B,withGhost=phase!==0;
  let path='';
  if(sp.path&&withGhost){let d='';for(let i=0;i<=12;i++){const t=i/12,p=lerp(A.hand,B.hand,t),bow=Math.sin(t*Math.PI)*-6;d+=(i?'L':'M')+P([p[0]+bow*.6,p[1]])}path=`<path d="${d}" stroke="${HOT}" stroke-opacity=".7" stroke-width="1.4" stroke-dasharray="2 2.5" fill="none"/>`}
  const thumb=phase==='combo';
  const arrow=`<path d="${sp.arrow}" stroke="${HOT}" stroke-width="${thumb?4:3.4}" fill="none" stroke-linecap="square" stroke-linejoin="miter" style="filter:drop-shadow(0 0 2px ${HOT})"/>`;
  return `<svg viewBox="${fitBox(key)}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">${sp.rot?(thumb?"":GRID):(thumb?FLOOR_LINE:GRID+FLOOR)}<g${sp.rot?` transform="rotate(${sp.rot} 80 80)"`:""}><path d="${sp.equipment}" stroke="${EQUIP}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round" fill="none"/>${withGhost?ghost(A,sp):''}${path}${figure(end,sp)}${weights(sp,end)}${arrow}</g></svg>`;
 }
 return {svg,specs,frames};
})();
