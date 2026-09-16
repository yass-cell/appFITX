/* V5 · banca y press sentado, abdomen progresivo y recuperación activa. */
const LEGACY_DAYS=DAYS.slice();
const strengthSets={1:'3 × 4-6',2:'3 × 4-6',3:'3 × 4-6',4:'2 × 4-5',5:'3 × 4-6',6:'3 × 4-6',7:'3 × 4-6',8:'3 × 4-6'};
// Miércoles / viernes / domingo. Repite semana si empeora la recuperación.
const cardioMinutes={1:[25,15,30],2:[30,15,30],3:[35,15,35],4:[25,10,25],5:[35,15,35],6:[35,20,40],7:[40,20,40],8:[40,20,45]};
const exercise=(name,d,sets,m,cue,why,extra={})=>({name,d,sets,m,cue,why,...extra});
const block=(t,tone,ex)=>({t,tone,ex});
const upperWarmup=block('Preparación · 6-8 min','calm',[
 exercise('Movilidad de hombro y dorsal','mob','1 ronda · sin fatiga','','2 min suaves, 6 rotaciones torácicas por lado y 8 deslizamientos de brazos en pared. Después 2-3 aproximaciones al primer básico.','Prepara el recorrido sin cansarte antes de las series efectivas.')]);
const lowerWarmup=block('Preparación · 6-8 min','calm',[
 exercise('Movilidad de cadera y tobillo','hip90','1 ronda · sin fatiga','','6 transiciones 90/90 por lado, 8 avances de rodilla sobre el tobillo y 8 sentadillas sin peso. Después 2-3 aproximaciones a la prensa.','Amplía el recorrido gradualmente, sin forzar.')]);
const lateral=(sets,light=false)=>exercise('Elevación lateral en polea','lateral',sets,'dl',light?'Deja 3-4 reps en reserva. Movimiento limpio y sin encoger hombros; 60-90 s.':'Deja 1-2 reps en reserva. Codo suave, abre sin balanceo; 60-90 s.','Tres dosis semanales para desarrollar anchura visual; no hacen falta tres días de press.');
const rear=()=>exercise('Pájaro en máquina','rear','3 × 12-20','dpo','Pecho apoyado, codos suaves y pausa al abrir. Deja 1-2 reps en reserva; 60-90 s.','Deltoide posterior: complementa los remos de espalda alta.');
const crunch=()=>exercise('Crunch en polea o máquina abdominal','crunch','3 × 8-15','core','Acerca costillas a pelvis, sin tirar con los brazos ni hacer una bisagra de cadera. Deja 1-2 reps; 90 s.','Al completar 3 × 15 con el mismo control, añade el incremento mínimo.');
const walk=slot=>block('Cardio · caminar','wet',[
 exercise(slot===1?'Caminata · final suave':'Caminata · base aeróbica','walk','','','Esfuerzo 3-4/10: puedes hablar en frases completas. Primeros y últimos 3 min suaves. Terreno llano o pendiente tolerable.','Aumenta minutos antes que intensidad. Si estás muy cansado, reduce duración o camina más suave.',{cardio:slot})]);
const recovery=(id,n,slot)=>({id,n,s:'Recuperación activa',short:'Recupera',tag:'Sin pesas duras',rest:true,wet:true,duration:'Según energía',focus:'MOVILIDAD / TOLERANCIA / PASOS',note:'Hoy no hay sesión de hipertrofia. Camina y recupera rangos cómodos. Ajusta o acorta estos bloques si no te recuperan; no cuentan como una sexta sesión de pesas.',blocks:[
 walk(slot),
 block('Movilidad · 8-10 min','calm',[
 exercise('Transiciones 90/90 de cadera','hip90','2 × 6 por lado','','Rota despacio y apóyate con las manos si hace falta; sin pinzamiento.','Movimiento suave para cadera, no un estiramiento forzado.'),
 exercise('Movilidad de hombro y dorsal','mob','1 ronda · 4 min','','6 rotaciones torácicas por lado y 8 deslizamientos en pared. Respira, sin arquear la lumbar.','Conserva rangos para presses, dominadas y remos.')]),
 block('Estiramientos · 4-6 min','calm',[
 exercise('Estiramiento de flexor de cadera','hipstretch','2 × 20-30 s por lado','','Media rodilla en el suelo, glúteo apretado y pelvis ligeramente recogida. Avanza muy poco; tensión cómoda.','Sin rebotes ni dolor. Completa si te apetece con gemelo y pectoral, 20-30 s suaves cada uno.')]),
 block('Tolerancia a la carga · opcional','calm',[
 exercise('Extensión de muñeca ligera','wrist','1-2 × 12-15 · opcional','','Antebrazo apoyado y palma hacia abajo. Carga muy ligera, subida y bajada de 2 s; esfuerzo máximo 3/10.','Trabajo general de antebrazo, no tratamiento de una lesión. Omite si provoca dolor o empeora molestias al día siguiente.'),
 exercise('Elevación de gemelo suave','calf','1 × 12 · opcional','','A dos piernas, con apoyo de manos y sin peso añadido. Sube y baja en 2 s sin buscar fatiga.','Los tendones ya reciben carga en las pesas. Un tendón doloroso necesita una pauta individual.')]) ]});
const NEW_DAYS=[
 {id:'v5-d1',n:'Lunes',s:'Pecho · tensión',short:'Pecho H',tag:'Heavy',duration:'65-80 min',focus:'BANCA / PECTORAL SUPERIOR / LATERAL / ABS',delt:true,note:'Banca primero para progresar en fuerza, inclinado para la porción superior y aperturas para completar el pecho. Siete series de pecho; los fondos pasan al viernes.',blocks:[upperWarmup,
 block('Pecho · fuerza y rango','',[
 exercise('Press banca','bench','3 × 4-6','pec','Pies firmes, glúteos apoyados y escápulas estables. Baja hacia el pecho sin rebote, con antebrazos casi verticales. Deja 2 reps; descansa 3 min. Usa soportes de seguridad o ayuda.','Cuando completes 3 × 6 con el mismo recorrido y RIR 2, sube el incremento mínimo. Registra el peso total de barra y discos; en descarga haz 2 × 4-5 con margen.',{strength:true}),
 exercise('Press inclinado con mancuernas','incl','2 × 6-10','pec','Banco a 25-35°, baja con control y deja 2 reps. Descansa 2-3 min.','Dos series hoy y dos el viernes para mantener el trabajo de pecho superior.'),
 exercise('Aperturas en máquina · pec deck','fly','2 × 10-15','pec','Espalda apoyada, codos suaves y recorrido cómodo. Acerca los brazos sin despegar el tronco; RIR 2-3, 90 s.','Añade aducción del hombro sin otro press. No fuerces el estiramiento detrás del cuerpo.')]),
 block('Hombro y tríceps · dosis 1','pump',[
 lateral('3 × 12-20'),
 exercise('Extensión sobre cabeza en polea','trioh','3 × 10-15','tri','Codos estables y rango cómodo por encima de la cabeza. Deja 1-2 reps; 90 s.','Una extensión de codo complementa los presses sin otro empuje pesado.')]),
 block('Abdomen · carga progresiva','wide',[crunch()])]},
 {id:'v4-d2',n:'Martes',s:'Espalda · anchura y fuerza',short:'Espalda H',tag:'Heavy',duration:'70-85 min',focus:'DOMINADAS / REMO LIBRE / DORSAL / BÍCEPS',note:'Dominadas, remo con barra hacia el abdomen alto y remo unilateral hacia la cadera. Son 7 series de espalda: una más que antes, repartidas entre tres ejercicios.',blocks:[upperWarmup,
 block('Espalda · tirón vertical y unilateral','',[
 exercise('Dominada lastrada','pull','3 × 4-6','esp','Sube sin balanceo desde un rango cómodo hasta superar la barra con la barbilla. Deja 2 reps y descansa 3 min.','Registra lastre o asistencia y tu peso corporal en Progreso para interpretar la fuerza relativa.',{strength:true}),
 exercise('Remo inclinado con barra','rowbar','2 × 8-10','esp','Bisagra de cadera, rodillas suaves y tronco inmóvil. Lleva la barra al abdomen alto con codos a 45-60°; RIR 3, 2 min.','No levantes el torso en cada repetición. Si la zona lumbar limita, sustituye estas mismas series por remo con pecho apoyado.'),
 exercise('Remo con mancuerna a una mano','rowdb','2 × 8-12 por lado','esp','Mano y rodilla apoyadas, tronco estable. Lleva el codo hacia la cadera sin girar el torso; 90-120 s entre rondas.','Sesgo hacia dorsal. Bajamos a dos series por lado para dar espacio al remo con barra; cuentan como dos, no cuatro.')]),
 block('Posterior y bíceps · dosis 1','pump',[
 rear(),
 exercise('Curl inclinado con mancuernas','curlinc','3 × 8-12','bi','Brazo quieto detrás del tronco, sin adelantar hombros. Deja 1-2 reps y descansa 90 s.','Trabajo directo de bíceps después del tirón, con repeticiones controladas.')])]},
 recovery('v4-d3','Miércoles',0),
 {id:'v4-d4',n:'Jueves',s:'Pierna · base completa',short:'Pierna',tag:'Build',duration:'75-90 min',focus:'CUÁDRICEPS / ISQUIOS / GLÚTEOS / BRAZOS',delt:true,note:'Una sesión completa de pierna para esta etapa de prioridad torso. Los accesorios de brazos son breves y suaves: mañana vuelve el empuje.',blocks:[lowerWarmup,
 block('Pierna · rodilla y cadera','',[
 exercise('Prensa de pierna horizontal','legpress','3 × 6-10','pie','Pelvis apoyada, rodillas siguiendo los pies y 2 reps en reserva. Baja sin redondear la lumbar; 2-3 min.','Tu principal referencia de cuádriceps.'),
 exercise('Peso muerto rumano con mancuernas','rdl','2 × 8-12','ham','Rodillas ligeramente flexionadas, cadera atrás y pesos cerca de las piernas. Para donde mantengas la espalda neutra; RIR 2-3, 2 min.','Bisagra de cadera para isquios y glúteos. Practica ligero antes de subir carga.'),
 exercise('Curl femoral','legcurl','2 × 10-15','ham','Cadera fija y regreso lento. Deja 1-2 reps; 90 s.','Flexión de rodilla: función distinta al rumano.'),
 exercise('Extensión de cuádriceps','legext','2 × 12-15','pie','Pausa breve arriba y descenso controlado. Deja 1-2 reps; 90 s.','Completa el cuádriceps con poca demanda lumbar.'),
 exercise('Elevación de gemelo','calf','3 × 10-15','cal','Recorrido cómodo y sin rebote; 1-2 reps en reserva, 60-90 s.','Carga progresiva para pantorrilla.')]),
 block('Hombro y brazos · dosis breve','pump',[
 lateral('3 × 15-20',true),
 exercise('Curl martillo','hammer','2 × 12-15','bi','Agarre neutro, sin balanceo. Deja 3 reps en reserva; 60-90 s.','Segunda dosis de flexores del codo: ligera, sin buscar agujetas.'),
 exercise('Extensión en polea con cuerda · ligera','tripd','2 × 12-15','tri','Codos quietos y carga cómoda; deja 3-4 reps, 60-90 s.','Segunda dosis corta. Si resta rendimiento al viernes, omite estas dos series.')])]},
 {id:'v5-d5',n:'Viernes',s:'Pecho · volumen y hombro',short:'Pecho P',tag:'Pump',duration:'85-100 min',focus:'PRESS SENTADO / INCLINADO / FONDOS / ABS',delt:true,note:'Press sentado primero para dar prioridad al empuje horizontal que prefieres, después inclinado, fondos y pullover. Ocho series repartidas entre cuatro ejercicios; no hace falta llevarlas al fallo.',blocks:[upperWarmup,
 block('Pecho · segunda exposición','wide',[
 exercise('Press de pecho sentado en máquina','chestpress','2 × 8-12','pec','Ajusta el asiento para que las asas queden a la altura del pecho. Espalda apoyada, muñecas alineadas y codos algo por debajo de los hombros. Empuja al frente sin despegar el tronco; RIR 2, 2 min.','Empuje horizontal para el pectoral, con énfasis esternocostal. Al lograr 2 × 12 controladas, sube la mínima placa. Compara cargas solo en la misma máquina y ajuste.'),
 exercise('Press inclinado con mancuernas · pump','incl','2 × 10-15','pec','Misma técnica del lunes con menos peso. Deja 1-2 reps; 2 min.','Segunda exposición semanal de pecho superior; dos series para dejar espacio al press sentado.'),
 exercise('Fondos lastrados','dip','2 × 6-10','pec','Mantén un recorrido cómodo, sin rebote. Usa tu peso, asistencia o lastre para dejar 2 reps; descansa 2-3 min.','Conserva fuerza en fondos. Al completar 2 × 10 limpias, añade el mínimo lastre o reduce asistencia. Registra 0 para peso corporal, positivo para lastre y negativo para asistencia.'),
 exercise('Pullover con mancuerna','pullover','2 × 10-15','pec','Túmbate a lo largo del banco, cabeza y espalda apoyadas, pies firmes. Sujeta una mancuerna con ambas manos, codos algo flexionados. Baja detrás de la cabeza solo sin arquear la lumbar; RIR 3, 90 s.','Pecho y dorsal participan. Se contabiliza aquí en pecho, sin duplicar series en espalda; no promete expansión de costillas. Registra el peso total de la única mancuerna.')]),
 block('Hombro y tríceps · dosis 3','pump',[
 exercise('Press de hombro en máquina inclinada','pressm','2 × 8-12','da','Espalda apoyada, rango cómodo y 2 reps en reserva; 2 min.','Solo dos series: el deltoide anterior ya trabaja con el pecho.'),
 lateral('3 × 12-20'),
 exercise('Extensión en polea con cuerda','tripd','3 × 10-15','tri','Codos quietos, sin mover el tronco. Deja 1-2 reps; 90 s.','Tercera dosis directa; progresa sin irritar el codo.')]),
 block('Abdomen · segunda carga','wide',[crunch()]),walk(1)]},
 {id:'v4-d6',n:'Sábado',s:'Espalda · espesor y detalle',short:'Espalda P',tag:'Pump',duration:'75-90 min',focus:'ESPALDA ALTA / DORSAL / POSTERIOR / ABS',note:'Remo alto primero, jalón y remo hacia la cadera. Termina con dos series de brazos rectos: trabajo de dorsal con poca demanda de bíceps. Son 10 series de espalda; no añadas más al terminar.',blocks:[upperWarmup,
 block('Espalda · espesor y dorsal','wide',[
 exercise('Remo alto con pecho apoyado','rowhigh','3 × 8-12','esp','Codos separados unos 45-60°, tira hacia pecho bajo y junta las escápulas sin encoger hombros. Deja 1-2 reps; 2 min.','Prioridad de espesor en espalda alta: trapecio medio, romboides y deltoide posterior.'),
 exercise('Jalón al pecho, agarre neutro','latp','3 × 10-15','esp','Tira hacia la parte alta del pecho, codos abajo y torso casi estable. Deja 1-2 reps; 90-120 s.','Segunda exposición de tirón vertical. El jalón complementa tus dominadas; no necesitas hacer ambos hoy.'),
 exercise('Remo sentado en polea, agarre neutro','rowc','2 × 10-15','esp','Codos cerca del torso hacia la cadera. Estira con control y no balancees; 90 s.','Dorsal con un recorrido distinto al remo alto. Dos series bastan aquí.'),
 exercise('Jalón de brazos rectos en polea','straightarm','2 × 12-20','esp','Codos ligeramente flexionados y fijos. Desde brazos elevados, lleva la barra hacia los muslos sin balancearte ni arquear la espalda; RIR 2-3, 60-90 s.','Extensión de hombro con poca flexión del codo. Si el pullover del viernes deja fatiga que limita el recorrido, omite estas dos series ese día.')]),
 block('Posterior y bíceps · dosis 3','pump',[
 rear(),
 exercise('Curl en polea baja','curlc','3 × 10-15','bi','Codos estables y sin inclinarte hacia atrás. Deja 1-2 reps; 90 s.','Tercera dosis de bíceps con tensión controlable.')]),
 block('Abdomen · pelvis y control','wide',[
 exercise('Elevación de rodillas colgado','hangraise','2 × 8-15','core','Sube las rodillas y termina enrollando la pelvis hacia las costillas, sin balanceo. Deja 2 reps; 90 s.','Si falla antes el agarre, usa silla romana. Progresa el control antes de extender más las piernas.')])]},
 recovery('v4-d7','Domingo',2)
];
DAYS.splice(0,DAYS.length,...NEW_DAYS);
const TRAINING_DAYS=DAYS.filter(d=>!d.rest);
const HISTORY_DAYS=[...LEGACY_DAYS,...PREVIOUS_PROGRAM_DAYS,...PREVIOUS_TORSO_DAYS,...PREVIOUS_CHEST_DAYS,...DAYS];
Object.assign(PH,{1:'Adaptación · técnica y margen',2:'Suma repeticiones',3:'Progresa si recuperas',4:'Descarga · menos series',5:'Retoma con margen',6:'Suma repeticiones',7:'Consolida tus cargas',8:'Compara marcas · sin máximo'});
Object.assign(SR,strengthSets);
function exerciseSets(e,w){
 if(e.cardio!==undefined)return cardioMinutes[w][e.cardio]+' min · conversación cómoda';
 if(e.strength)return strengthSets[w];
 if(w===4&&e.m&&!/opcional/i.test(e.sets||''))return e.sets.replace(/^\d+/,n=>Math.max(1,Math.round(Number(n)*.6)));
 return e.sets;
}
