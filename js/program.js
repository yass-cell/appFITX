/* V7 · Fuerza + hipertrofia: calistenia lastrada 2×, pecho y espalda 2×, hombro, brazo y core 3×+, pierna 1× y movilidad de cadera. */
const LEGACY_DAYS=DAYS.slice();
/* Semanas alternas: unas suman repeticiones con el mismo peso y otras suben carga. */
const WEEK_FOCUS={1:'reps',2:'kg',3:'reps',4:'deload',5:'kg',6:'reps',7:'kg',8:'test'};
const FOCUS_LABEL={reps:'Suma reps',kg:'Sube kg',deload:'Descarga',test:'Test 1RM'};
// Básicos: 1 serie top + 3 back-off. La top sigue el foco de la semana.
const strengthSets={1:'4 × 6-8 · top RPE 7 + 3 al −10 %',2:'4 × 5-6 · top +1 salto, RPE 8 + 3 al −10 %',3:'4 × 6-8 · misma top, +1 rep + 3 al −10 %',4:'2 × 5 · descarga, RPE 6',5:'4 × 4-5 · top +1 salto, RPE 8 + 3 al −8 %',6:'4 × 5-7 · misma top, +1 rep + 3 al −8 %',7:'4 × 3-4 · top +1 salto, RPE 8-9 + 3 al −8 %',8:'3 × 3-5 · top a RIR 1 para el 1RM + 2 al −10 %'};
// Jueves / sábado (tramo corto) / domingo. Repite semana si empeora la recuperación.
const cardioMinutes={1:[25,15,30],2:[30,15,30],3:[35,15,35],4:[25,10,25],5:[35,15,35],6:[35,20,40],7:[40,20,40],8:[40,20,45]};
const exercise=(name,d,sets,m,cue,why,extra={})=>({name,d,sets,m,cue,why,...extra});
const block=(t,tone,ex)=>({t,tone,ex});
const DUMB={inc:2};   // mancuernas: salto de 2 kg por mano
const SMALL={inc:1.25}; // polea ligera: salto mínimo
const upperWarmup=block('Preparación · 6-8 min','calm',[
 exercise('Movilidad de hombro y dorsal','mob','1 ronda · sin fatiga','','2 min suaves, 6 rotaciones torácicas por lado y 8 deslizamientos de brazos en pared. Después 2-3 aproximaciones al primer ejercicio.','Prepara el recorrido sin cansarte antes de las series efectivas.')]);
const lowerWarmup=block('Preparación · cadera 8 min','calm',[
 exercise('Movilidad de cadera y tobillo','hip90','1 ronda · sin fatiga','','6 transiciones 90/90 por lado, 5 sentadillas cosacas por lado y 8 avances de rodilla sobre el tobillo. Después 3-4 aproximaciones a la prensa.','Abre la cadera antes de cargarla: más rango en la búlgara y en el rumano.')]);
const strengthCue=lift=>`Calienta con 3-4 aproximaciones. Primero la serie top, la más pesada del día; después 3 series con el porcentaje indicado menos de carga. ${lift} Descansa 3 min.`;
const strengthWhy='Semana de reps: misma carga en la top y una repetición más. Semana de kg: sube un salto y mantén las reps. Registra la serie top: el gráfico de 1RM estimado muestra la progresión.';
const walk=slot=>block('Cardio · caminar','wet',[
 exercise(slot===1?'Caminata · final suave':'Caminata · base aeróbica','walk','','','Esfuerzo 3-4/10: puedes hablar en frases completas. Primeros y últimos 3 min suaves. Terreno llano o pendiente tolerable.','Aumenta minutos antes que intensidad. Si estás muy cansado, reduce duración o camina más suave.',{cardio:slot})]);
const mobilityDay=(id,n,slot)=>({id,n,s:'Movilidad de cadera + core',short:'Movilidad',tag:'Sin pesas',rest:true,wet:true,duration:'25-40 min',focus:'CADERA / CORE / DOMINADAS / PASOS',note:'Sin pesas: cadera muy móvil, core sólido y piernas sueltas. Ningún bloque es obligatorio ni cuenta como sesión.',blocks:[
 block('Cadera · 12 min','calm',[
 exercise('Transiciones 90/90 de cadera','hip90','2 × 6 por lado','','Rota despacio sin apoyar las manos si puedes; pausa 2 s en cada lado.','Rotación interna y externa: la base de una cadera móvil.'),
 exercise('Sentadilla cosaca','cossack','2 × 5 por lado','','Pies muy abiertos, baja sobre una pierna con la otra estirada y el talón apoyado. Sube sin prisa.','Aductores y cadera en rango largo; prepara piernas ágiles para cambios de dirección.'),
 exercise('Estiramiento de flexor de cadera','hipstretch','2 × 30 s por lado','','Media rodilla en el suelo, glúteo apretado y pelvis recogida. Avanza muy poco.','Contrarresta las horas sentado y libera la extensión de cadera.')]),
 block('Core · 8 min','calm',[
 exercise('L-sit · práctica','lsit','4 × 10-20 s','','En paralelas o en el suelo con apoyos: hombros abajo, piernas recogidas o estiradas según tu nivel.','Práctica técnica de la skill: suma segundos, no fatiga.')]),
 block('Dominadas · práctica opcional','calm',[
 exercise('Dominadas sin lastre · práctica','pull','4 × 3-5 · opcional','','Repeticiones perfectas y lejos del fallo: para con 3-4 en la recámara. 2 min entre series.','Más frecuencia de dominadas sin fatiga: el patrón mejora y la fuerza del martes y el sábado sube antes.')]),
 walk(slot)]});
const NEW_DAYS=[
 {id:'v7-d1',n:'Lunes',s:'Pecho + tríceps + hombro',short:'Pecho',tag:'Fuerza',duration:'65-75 min',focus:'BANCA / FONDOS / INCLINADO / Y-RAISE / TRÍCEPS + L-SIT',delt:true,note:'Banca con serie top, fondos lastrados e inclinado con mancuernas. Después Y-raise para el hombro, tríceps sobre la cabeza y L-sit.',blocks:[upperWarmup,
 block('Fuerza · banca','',[
 exercise('Press banca','bench','','pec',strengthCue('Pies firmes, glúteos apoyados y escápulas estables; baja al pecho bajo sin rebote. Usa soportes de seguridad o ayuda.'),strengthWhy+' Anota el peso total de barra y discos.',{strength:true})]),
 block('Pecho · calistenia y rango','',[
 exercise('Fondos lastrados','dip','3 × 6-10','pec','Tronco algo inclinado, baja hasta que el hombro quede un poco por debajo del codo y sube sin rebote. Deja 1-2 reps; 2 min.','Calistenia lastrada dos veces por semana: pecho bajo y tríceps. Registra 0 para peso corporal, positivo para lastre y negativo para asistencia.'),
 exercise('Press inclinado con mancuernas','incl','3 × 8-12','pec','Banco a 25-35°, baja hasta notar el estiramiento y empuja sin chocar las mancuernas. Deja 1-2 reps; 2 min.','Pecho alto con más recorrido que la barra. Anota kg por mancuerna.',DUMB)]),
 block('Superserie A · hombro + tríceps','pump',[
 exercise('Y-raise en polea','yraise','3 × 12-15','dl','Dos poleas bajas cruzadas. Sube los brazos en diagonal formando una Y por encima de la cabeza, pulgares arriba y sin encoger hombros. Pasa a A2 sin descanso.','Deltoide lateral y trapecio bajo en un rango que las elevaciones normales no cargan: hombro más ancho y sano.',{...SMALL,pair:'A1'}),
 exercise('Extensión sobre cabeza en polea','trioh','3 × 10-15','tri','De espaldas a la polea, codos arriba y costillas controladas. Extiende sin mover los hombros. Descansa 90 s y repite A1.','La cabeza larga del tríceps crece más con el brazo por encima de la cabeza: brazo más ancho.',{...SMALL,pair:'A2'})]),
 block('Core · skill','wide',[
 exercise('L-sit en paralelas','lsit','3 × 10-20 s','core','Hombros abajo y brazos bloqueados; piernas recogidas, una estirada o las dos según tu nivel. 90 s.','Fuerza de core y la skill que quieres aprender. Al llegar a 3 × 20 s, pasa a la siguiente progresión.')])]},
 {id:'v7-d2',n:'Martes',s:'Espalda + bíceps',short:'Espalda',tag:'Fuerza',duration:'65-75 min',focus:'DOMINADAS LASTRADAS / REMO A UNA MANO / REMO ALTO / FACE PULL / BÍCEPS',note:'Espalda a full: dominada lastrada con serie top, remo a una mano y remo alto para el espesor. Face pull para el hombro y bíceps con martillo para el braquiorradial.',blocks:[upperWarmup,
 block('Fuerza · dominada','',[
 exercise('Dominada lastrada','pull','','esp',strengthCue('Agarre prono algo más ancho que los hombros. Sube sin balanceo hasta superar la barra con la barbilla y baja hasta casi extender. Si aún no haces 4 limpias, usa asistencia.'),strengthWhy+' Registra 0 para peso corporal, positivo para lastre y negativo para asistencia.',{strength:true})]),
 block('Espalda · espesor','wide',[
 exercise('Remo con mancuerna a una mano','rowdb','3 × 8-12 por lado','esp','Mano y rodilla apoyadas, deja que el hombro baje al estirar y lleva el codo hacia la cadera sin girar el torso. 90 s entre rondas.','Dorsal con mucho recorrido. Cuentan como tres series, no seis. Anota kg de la mancuerna.',DUMB),
 exercise('Remo alto con pecho apoyado','rowhigh','3 × 8-12','esp','Codos a 45-60°, tira hacia el pecho bajo y junta las escápulas sin encoger hombros. Deja 1-2 reps; 2 min.','Espesor de espalda alta sin cargar la zona lumbar.'),
 exercise('Face pull en polea','rowhigh','3 × 15-20','dpo','Polea a la altura de la cara, tira de la cuerda hacia la frente separando las manos y con codos altos. Pausa de 1 s; 60 s.','Deltoide posterior y rotadores: hombro completo y sano.',SMALL)]),
 block('Superserie B · bíceps + braquiorradial','pump',[
 exercise('Curl inclinado con mancuernas','curlinc','3 × 8-12','bi','Brazo quieto detrás del tronco, sin adelantar el hombro. Pasa a B2 sin descanso.','Cabeza larga del bíceps en estiramiento: de las variantes que más crecen.',{...DUMB,pair:'B1'}),
 exercise('Curl martillo','hammer','3 × 8-12','bi','Agarre neutro, codos quietos y sin balanceo; baja en 2 s. Descansa 90 s y repite B1.','Braquial y braquiorradial: el brazo se ve más grueso de frente y el antebrazo más ancho.',{...DUMB,pair:'B2'})]),
 block('Antebrazo','wide',[
 exercise('Curl de muñeca con mancuerna','wrist','3 × 12-20','ant','Antebrazo apoyado y palma arriba. Deja rodar la mancuerna hasta los dedos y sube flexionando la muñeca. Deja 1-2 reps; 60 s.','Flexores del antebrazo: volumen directo que los remos no dan.',DUMB)])]},
 {id:'v7-d3',n:'Miércoles',s:'Pierna + brazo + core',short:'Pierna',tag:'Build',duration:'75-85 min',focus:'SALTOS / PRENSA / BÚLGARA / ISQUIOS / BRAZOS / CORE',note:'Pierna una vez, bien hecha: saltos para piernas ágiles, prensa con serie top, búlgara y dos de isquio. Después una superserie corta de brazos y core colgado.',blocks:[lowerWarmup,
 block('Potencia · piernas ágiles','',[
 exercise('Saltos al cajón','boxjump','3 × 5','pie','Salta con los brazos, aterriza suave con las rodillas siguiendo los pies y baja andando del cajón. Cajón a una altura que domines; 90 s.','Velocidad y potencia de pierna. Pocas repeticiones, siempre frescas.')]),
 block('Fuerza · prensa','',[
 exercise('Prensa de pierna horizontal','legpress','','pie',strengthCue('Pelvis apoyada, rodillas siguiendo los pies y bajada sin redondear la lumbar.'),strengthWhy,{strength:true})]),
 block('Pierna · volumen','',[
 exercise('Sentadilla búlgara con mancuernas','bss','3 × 8-12 por pierna','pie','Pie trasero sobre el banco, tronco algo inclinado y rodilla delantera siguiendo el pie. Baja con control; RIR 2, 90-120 s.','Cuádriceps, glúteo y equilibrio a una pierna. Cuentan como tres series, no seis.',DUMB),
 exercise('Peso muerto rumano con mancuernas','rdl','3 × 8-12','ham','Rodillas suaves, cadera atrás y pesos pegados a las piernas. Baja hasta donde mantengas la espalda neutra; RIR 2, 2 min.','Isquios y glúteo estirados bajo carga.',DUMB),
 exercise('Curl femoral sentado','legcurl','3 × 10-15','ham','Cadera flexionada, muslo sujeto y regreso lento. Deja 1-2 reps; 90 s.','Sentado, el isquio trabaja más estirado y crece más que tumbado.'),
 exercise('Elevación de gemelo','calf','3 × 10-15','cal','Pausa de 2 s abajo con el talón estirado y sube sin rebote. Deja 1-2 reps; 60-90 s.','La pausa abajo importa más que la carga.')]),
 block('Superserie C · brazos','wide',[
 exercise('Curl en polea baja','curlc','3 × 10-15','bi','Codos quietos junto al cuerpo y bajada en 2 s. Pasa a C2 sin descanso.','Tensión constante en el bíceps; el único curl en polea de la semana.',{...SMALL,pair:'C1'}),
 exercise('Extensión en polea con cuerda','tripd','3 × 10-15','tri','Codos pegados, abre la cuerda abajo y sube despacio. Descansa 60-90 s y repite C1.','Cabeza lateral del tríceps con tensión constante.',{...SMALL,pair:'C2'})]),
 block('Core · colgado','wide',[
 exercise('Elevación de rodillas colgado','hangraise','3 × 8-15','core','Sube las rodillas y termina enrollando la pelvis hacia las costillas, sin balanceo. Deja 2 reps; 90 s.','Al hacer 3 × 15 limpias, estira una pierna; después las dos.')])]},
 mobilityDay('v7-d4','Jueves',0),
 {id:'v7-d5',n:'Viernes',s:'Hombro + pecho + tríceps',short:'Hombro',tag:'Fuerza',duration:'70-80 min',focus:'PRESS MILITAR / FONDOS / PRESS + APERTURAS / LATERAL / PRESS FRANCÉS',delt:true,note:'Press militar con serie top: el ejercicio de hombro que más fuerza construye. Fondos lastrados, pecho con aperturas, lateral con parciales y press francés para un brazo más ancho.',blocks:[upperWarmup,
 block('Fuerza · press militar','',[
 exercise('Press militar con barra','ohp','','da',strengthCue('De pie, glúteos y abdomen apretados, barra desde la clavícula hasta bloquear sobre la cabeza; la cabeza pasa por debajo de la barra sin arquear la lumbar.'),strengthWhy+' Anota el peso total de barra y discos.',{strength:true})]),
 block('Pecho · calistenia y bombeo','',[
 exercise('Fondos lastrados · volumen','dip','3 × 8-12','pec','Algo más ligeros que el lunes: recorrido completo y controlado, sin rebote. Deja 1-2 reps; 2 min.','Segunda dosis semanal de calistenia lastrada.'),
 exercise('Press de pecho sentado en máquina','chestpress','2 × 8-12','pec','Asas a la altura del pecho, espalda apoyada y codos algo por debajo de los hombros. Pasa a D2 sin descanso.','Empuje estable para acumular volumen. Compara cargas solo en la misma máquina.',{pair:'D1'}),
 exercise('Aperturas con mancuernas','flydb','3 × 10-15','pec','Tumbado en banco plano, codos suaves y fijos. Abre hasta notar el estiramiento del pecho y cierra en arco sin chocar las mancuernas. Descansa 2 min y repite D1.','Pecho en estiramiento con carga: bombeo y crecimiento. Anota kg por mancuerna.',{...DUMB,pair:'D2'})]),
 block('Hombro · lateral','pump',[
 exercise('Elevación lateral en polea · inclinado','lateral','4 × 12-20','dl','Sujétate al poste e inclínate alejándote de la polea. En la última serie, al fallar, 8-10 medias repeticiones desde abajo. 60-90 s.','Las parciales suman tensión cuando el recorrido completo ya no sale.',SMALL)]),
 block('Superserie E · tríceps + core','wide',[
 exercise('Press francés con barra EZ','skull','3 × 8-12','tri','Tumbado, codos hacia el techo y algo inclinados hacia atrás; baja la barra detrás de la frente y extiende sin abrir los codos. Pasa a E2 sin descanso.','Cabeza larga del tríceps con carga pesada: el tríceps es dos tercios del grosor del brazo.',{pair:'E1'}),
 exercise('Rueda abdominal','abwheel','3 × 6-12','core','De rodillas, costillas abajo y glúteo apretado; rueda hasta donde no se arquee la lumbar y vuelve. Descansa 90 s y repite E1.','Antiextensión: el core fuerte que sostiene banca, press militar y dominadas.',{pair:'E2'})])]},
 {id:'v7-d6',n:'Sábado',s:'Espalda + bíceps + hombro',short:'Espalda 2',tag:'Pump',duration:'65-75 min',focus:'REMO CON BARRA / DOMINADAS SUPINAS / JALÓN / HOMBRO / BÍCEPS',delt:true,note:'Segundo día de espalda: remo con barra con serie top para el espesor, dominadas supinas lastradas y jalón al pecho. Hombro posterior y lateral, y curl predicador con curl inverso para el braquiorradial.',blocks:[upperWarmup,
 block('Fuerza · remo','',[
 exercise('Remo con barra','rowbar','','esp',strengthCue('Bisagra de cadera, espalda neutra y barra hacia el ombligo sin dar tirones con el tronco.'),strengthWhy,{strength:true})]),
 block('Espalda · calistenia y anchura','wide',[
 exercise('Dominada supina lastrada','pull','3 × 6-10','esp','Agarre supino a la anchura de los hombros. Sube hasta pasar la barbilla y baja hasta casi extender. Deja 1-2 reps; 2 min.','Segunda dosis semanal de dominadas, con más bíceps. Registra 0 para peso corporal, positivo para lastre y negativo para asistencia.'),
 exercise('Jalón al pecho','latp','3 × 10-12','esp','Agarre algo más ancho que los hombros. Tira hacia la parte alta del pecho con los codos abajo y el torso casi quieto. Deja 1-2 reps; 90 s.','Volumen de dorsal tras las dominadas, con carga fácil de progresar.')]),
 block('Superserie F · hombro','pump',[
 exercise('Pájaro en máquina','rear','3 × 15-20','dpo','Pecho apoyado, codos suaves y pausa al abrir. Pasa a F2 sin descanso.','Deltoide posterior: hombro grande visto de lado y de espaldas.',{...SMALL,pair:'F1'}),
 exercise('Elevación lateral con mancuernas','latdb','3 × 12-20','dl','Codos suaves, sube hasta la línea del hombro y baja en 2 s. Descansa 60-90 s y repite F1.','Tercera dosis de lateral de la semana.',{...DUMB,pair:'F2'})]),
 block('Superserie G · bíceps + braquiorradial','wide',[
 exercise('Curl predicador','preacher','3 × 8-12','bi','Brazo apoyado, baja hasta casi extender sin soltar la tensión y sube sin despegar el codo. Pasa a G2.','Cabeza corta del bíceps; el apoyo impide hacer trampa.',{pair:'G1'}),
 exercise('Curl inverso con barra EZ','revcurl','3 × 10-15','ant','Agarre prono, codos pegados al cuerpo; sube sin balanceo y baja en 2 s. Descansa 90 s y repite G1.','Braquiorradial y braquial: antebrazo grueso y brazo más ancho visto de frente.',{pair:'G2'})]),
 block('Antebrazo','wide',[
 exercise('Extensión de muñeca con mancuerna','wrist','2 × 15-20','ant','Antebrazo apoyado y palma abajo; sube y baja en 2 s. Deja 2 reps; 60 s.','Extensores del antebrazo: equilibran el agarre.',DUMB)]),
 walk(1)]},
 mobilityDay('v7-d7','Domingo',2)
];
DAYS.splice(0,DAYS.length,...NEW_DAYS);
const TRAINING_DAYS=DAYS.filter(d=>!d.rest);
const HISTORY_DAYS=[...LEGACY_DAYS,...PREVIOUS_PROGRAM_DAYS,...PREVIOUS_TORSO_DAYS,...PREVIOUS_CHEST_DAYS,...PREVIOUS_V5_DAYS,...DAYS];
Object.assign(PH,{1:'Suma reps · técnica, RPE 7',2:'Sube kg · +1 salto',3:'Suma reps · +1 rep',4:'Descarga · menos series',5:'Sube kg · top de 4-5',6:'Suma reps · +1 rep',7:'Sube kg · top de 3-4',8:'Test · 1RM estimado'});
Object.assign(SR,strengthSets);
function exerciseSets(e,w){
 if(e.cardio!==undefined)return cardioMinutes[w][e.cardio]+' min · conversación cómoda';
 if(e.strength)return strengthSets[w];
 if(w===4&&e.m&&!/opcional/i.test(e.sets||''))return e.sets.replace(/^\d+/,n=>Math.max(1,Math.round(Number(n)*.6)));
 return e.sets;
}
