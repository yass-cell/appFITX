/* ================= iconos ================= */
const S=(p)=>`<svg viewBox="0 0 48 48" fill="none" stroke="#EEF4F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const A='#FF6B35',W='#2FC2D6',V='#7B5CFF';
/* Leyenda de los esquemas: blanco = cuerpo y aparato · naranja/violeta = la carga y la parte que se mueve · flecha = direccion del movimiento */
const DIA={
pull:S(`<line x1="6" y1="8" x2="42" y2="8"/><line x1="14" y1="8" x2="20" y2="15"/><line x1="34" y1="8" x2="28" y2="15"/><circle cx="24" cy="12" r="3.5"/><line x1="24" y1="15.5" x2="24" y2="28"/><line x1="24" y1="28" x2="21" y2="38"/><line x1="24" y1="28" x2="27" y2="38"/><line x1="24" y1="24" x2="29" y2="30" stroke="${A}"/><circle cx="30" cy="33" r="3" fill="${A}" stroke="${A}"/><line x1="9" y1="34" x2="9" y2="21" stroke="${A}"/><path d="M6 25 L9 20 L12 25" stroke="${A}"/>`),
dip:S(`<line x1="4" y1="17" x2="15" y2="17"/><line x1="33" y1="17" x2="44" y2="17"/><circle cx="24" cy="10" r="3.5"/><line x1="24" y1="13.5" x2="24" y2="27"/><line x1="22" y1="15" x2="13" y2="17"/><line x1="26" y1="15" x2="35" y2="17"/><line x1="24" y1="27" x2="20" y2="34"/><line x1="20" y1="34" x2="24" y2="40"/><line x1="24" y1="25" x2="29" y2="30" stroke="${A}"/><circle cx="30" cy="33" r="3" fill="${A}" stroke="${A}"/><line x1="9" y1="24" x2="9" y2="36" stroke="${A}"/><path d="M6 32 L9 37 L12 32" stroke="${A}"/>`),
bench:S(`<line x1="6" y1="38" x2="40" y2="38"/><line x1="10" y1="38" x2="10" y2="44"/><line x1="34" y1="38" x2="34" y2="44"/><circle cx="10" cy="32" r="3"/><line x1="13" y1="33" x2="27" y2="33"/><line x1="27" y1="33" x2="32" y2="38"/><line x1="19" y1="33" x2="19" y2="20"/><line x1="9" y1="19" x2="29" y2="19"/><circle cx="10" cy="19" r="3" fill="${A}" stroke="${A}"/><circle cx="28" cy="19" r="3" fill="${A}" stroke="${A}"/><line x1="39" y1="28" x2="39" y2="14" stroke="${A}"/><path d="M36 18 L39 13 L42 18" stroke="${A}"/>`),
incl:S(`<line x1="6" y1="42" x2="30" y2="24"/><line x1="6" y1="42" x2="6" y2="46"/><line x1="26" y1="27" x2="26" y2="37"/><circle cx="28" cy="20" r="3"/><line x1="26" y1="23" x2="14" y2="33"/><line x1="14" y1="33" x2="17" y2="41"/><line x1="22" y1="26" x2="22" y2="12"/><line x1="12" y1="11" x2="32" y2="11"/><circle cx="13" cy="11" r="3" fill="${A}" stroke="${A}"/><circle cx="31" cy="11" r="3" fill="${A}" stroke="${A}"/><line x1="41" y1="24" x2="41" y2="10" stroke="${A}"/><path d="M38 14 L41 9 L44 14" stroke="${A}"/>`),
fly:S(`<circle cx="24" cy="10" r="3.5"/><line x1="24" y1="13.5" x2="24" y2="30"/><line x1="24" y1="30" x2="20" y2="42"/><line x1="24" y1="30" x2="28" y2="42"/><path d="M24 17 Q15 15 8 22"/><path d="M24 17 Q33 15 40 22"/><circle cx="7" cy="24" r="3" fill="${A}" stroke="${A}"/><circle cx="41" cy="24" r="3" fill="${A}" stroke="${A}"/><path d="M9 15 Q16 6 22 6" stroke="${A}" stroke-dasharray="2 3"/><path d="M39 15 Q32 6 26 6" stroke="${A}" stroke-dasharray="2 3"/>`),
row:S(`<circle cx="36" cy="14" r="3"/><line x1="33" y1="16" x2="18" y2="24"/><line x1="18" y1="24" x2="15" y2="42"/><line x1="18" y1="24" x2="21" y2="41"/><line x1="30" y1="18" x2="29" y2="33"/><line x1="21" y1="33" x2="37" y2="33"/><circle cx="22" cy="33" r="3" fill="${A}" stroke="${A}"/><circle cx="36" cy="33" r="3" fill="${A}" stroke="${A}"/><line x1="43" y1="31" x2="43" y2="22" stroke="${A}"/><path d="M40.5 25 L43 21 L45.5 25" stroke="${A}"/>`),
lat:S(`<line x1="8" y1="6" x2="40" y2="6"/><line x1="24" y1="19" x2="13" y2="7"/><line x1="24" y1="19" x2="35" y2="7"/><circle cx="24" cy="16" r="3.5"/><line x1="24" y1="19.5" x2="24" y2="32"/><line x1="24" y1="32" x2="31" y2="34"/><line x1="31" y1="34" x2="31" y2="42"/><line x1="15" y1="37" x2="29" y2="37"/><line x1="17" y1="37" x2="17" y2="43"/><line x1="43" y1="14" x2="43" y2="26" stroke="${A}"/><path d="M40.5 22 L43 27 L45.5 22" stroke="${A}"/>`),
press:S(`<line x1="12" y1="8" x2="36" y2="8"/><circle cx="13" cy="8" r="3" fill="${A}" stroke="${A}"/><circle cx="35" cy="8" r="3" fill="${A}" stroke="${A}"/><line x1="24" y1="20" x2="17" y2="9"/><line x1="24" y1="20" x2="31" y2="9"/><circle cx="24" cy="16" r="3.5"/><line x1="24" y1="19.5" x2="24" y2="32"/><line x1="24" y1="32" x2="19" y2="43"/><line x1="24" y1="32" x2="29" y2="43"/><line x1="43" y1="22" x2="43" y2="10" stroke="${A}"/><path d="M40.5 14 L43 9 L45.5 14" stroke="${A}"/>`),
lateral:S(`<circle cx="24" cy="10" r="3.5"/><line x1="24" y1="13.5" x2="24" y2="30"/><line x1="24" y1="30" x2="20" y2="42"/><line x1="24" y1="30" x2="28" y2="42"/><line x1="24" y1="17" x2="9" y2="19" stroke="${V}" stroke-width="2.4"/><line x1="24" y1="17" x2="39" y2="19" stroke="${V}" stroke-width="2.4"/><circle cx="7" cy="19" r="3" fill="${V}" stroke="${V}"/><circle cx="41" cy="19" r="3" fill="${V}" stroke="${V}"/><path d="M8 13 Q9 8 14 7" stroke="${V}" stroke-dasharray="2 3"/><path d="M40 13 Q39 8 34 7" stroke="${V}" stroke-dasharray="2 3"/>`),
rear:S(`<circle cx="33" cy="12" r="3"/><line x1="30" y1="14" x2="17" y2="21"/><line x1="17" y1="21" x2="15" y2="42"/><line x1="26" y1="16" x2="14" y2="28" stroke="${V}" stroke-width="2.4"/><line x1="26" y1="16" x2="38" y2="28" stroke="${V}" stroke-width="2.4"/><circle cx="12" cy="30" r="3" fill="${V}" stroke="${V}"/><circle cx="40" cy="30" r="3" fill="${V}" stroke="${V}"/><path d="M41 24 Q45 18 42 12" stroke="${V}" stroke-dasharray="2 3"/>`),
curl:S(`<circle cx="18" cy="9" r="3.5"/><line x1="18" y1="12.5" x2="18" y2="30"/><line x1="18" y1="30" x2="15" y2="42"/><line x1="18" y1="30" x2="22" y2="42"/><line x1="18" y1="16" x2="24" y2="24"/><line x1="24" y1="24" x2="31" y2="15" stroke="${A}"/><circle cx="32" cy="13" r="3" fill="${A}" stroke="${A}"/><path d="M35 28 Q40 21 34 15" stroke="${A}" stroke-dasharray="2 3"/><path d="M33 19 L34 14 L38 16" stroke="${A}"/>`),
tri:S(`<line x1="31" y1="4" x2="31" y2="13" stroke-dasharray="2 3"/><circle cx="16" cy="9" r="3.5"/><line x1="16" y1="12.5" x2="16" y2="30"/><line x1="16" y1="30" x2="13" y2="42"/><line x1="16" y1="30" x2="20" y2="42"/><line x1="16" y1="16" x2="25" y2="19"/><line x1="25" y1="19" x2="31" y2="28" stroke="${A}"/><line x1="28" y1="30" x2="35" y2="27" stroke="${A}"/><path d="M38 16 Q41 22 39 28" stroke="${A}" stroke-dasharray="2 3"/><path d="M36 25 L39 29 L42 25" stroke="${A}"/>`),
leg:S(`<line x1="32" y1="32" x2="44" y2="32"/><line x1="34" y1="32" x2="34" y2="39"/><line x1="42" y1="32" x2="42" y2="39"/><circle cx="15" cy="9" r="3.5"/><line x1="15" y1="12.5" x2="17" y2="26"/><line x1="15" y1="16" x2="12" y2="24"/><circle cx="12" cy="26.5" r="2.5" fill="${A}" stroke="${A}"/><line x1="17" y1="26" x2="11" y2="32" stroke="${A}"/><line x1="11" y1="32" x2="11" y2="42" stroke="${A}"/><line x1="17" y1="26" x2="27" y2="29"/><line x1="27" y1="29" x2="34" y2="31"/>`),
hinge:S(`<circle cx="31" cy="9" r="3.5"/><line x1="28" y1="11" x2="17" y2="21"/><line x1="17" y1="21" x2="16" y2="42"/><line x1="27" y1="13" x2="21" y2="31"/><line x1="9" y1="32" x2="31" y2="32"/><circle cx="11" cy="32" r="3" fill="${A}" stroke="${A}"/><circle cx="29" cy="32" r="3" fill="${A}" stroke="${A}"/><path d="M38 28 Q43 20 38 13" stroke="${A}" stroke-dasharray="2 3"/><path d="M36 16 L38 12 L41 15" stroke="${A}"/>`),
core:S(`<circle cx="9" cy="22" r="3.5"/><line x1="12.5" y1="23" x2="34" y2="25"/><line x1="15" y1="24" x2="15" y2="33"/><line x1="12" y1="33" x2="19" y2="33"/><line x1="34" y1="25" x2="40" y2="33"/><line x1="6" y1="37" x2="42" y2="37" stroke-dasharray="2 4"/><line x1="20" y1="24" x2="30" y2="24.8" stroke="${A}"/>`),
lsit:S(`<line x1="11" y1="29" x2="11" y2="37"/><line x1="7" y1="37" x2="15" y2="37"/><circle cx="15" cy="10" r="3.5"/><line x1="15" y1="13.5" x2="15" y2="28"/><line x1="15" y1="19" x2="11" y2="28"/><line x1="15" y1="28" x2="40" y2="28" stroke="${A}"/><line x1="34" y1="34" x2="34" y2="37" stroke-dasharray="2 3"/>`),
mu:S(`<line x1="6" y1="20" x2="42" y2="20"/><circle cx="27" cy="8" r="3.5"/><line x1="27" y1="11.5" x2="27" y2="19"/><line x1="27" y1="13" x2="21" y2="20"/><line x1="27" y1="13" x2="33" y2="20"/><line x1="27" y1="19" x2="25" y2="30"/><line x1="25" y1="30" x2="28" y2="37"/><path d="M12 38 Q8 18 22 7" stroke="${A}" stroke-dasharray="3 3"/><path d="M17 7 L23 6 L21 12" stroke="${A}"/>`),
trap:S(`<circle cx="24" cy="9" r="3.5"/><line x1="24" y1="12.5" x2="24" y2="30"/><line x1="24" y1="30" x2="20" y2="42"/><line x1="24" y1="30" x2="28" y2="42"/><line x1="21" y1="14" x2="16" y2="29"/><line x1="27" y1="14" x2="32" y2="29"/><circle cx="15" cy="31.5" r="3" fill="${A}" stroke="${A}"/><circle cx="33" cy="31.5" r="3" fill="${A}" stroke="${A}"/><line x1="10" y1="18" x2="10" y2="12" stroke="${A}"/><path d="M8 14 L10 11 L12 14" stroke="${A}"/><line x1="38" y1="18" x2="38" y2="12" stroke="${A}"/><path d="M36 14 L38 11 L40 14" stroke="${A}"/>`),
swim:S(`<path d="M4 31 Q10 26 16 31 T28 31 T40 31" stroke="${W}"/><path d="M4 39 Q10 34 16 39 T28 39 T40 39" stroke="${W}"/><circle cx="18" cy="17" r="3.5"/><path d="M21 19 Q29 10 36 17"/>`),
heat:S(`<line x1="6" y1="33" x2="42" y2="33"/><line x1="10" y1="33" x2="10" y2="41"/><line x1="38" y1="33" x2="38" y2="41"/><circle cx="19" cy="16" r="3.5"/><line x1="19" y1="19.5" x2="19" y2="29"/><line x1="19" y1="29" x2="27" y2="29"/><line x1="27" y1="29" x2="27" y2="33"/><path d="M33 8 q3 4 0 9" stroke="${A}"/><path d="M39 6 q3 4 0 9" stroke="${A}"/>`)};

/* ================= programa ================= */
const PH={1:'Acumulación',2:'Acumulación',3:'Acumulación',4:'Descarga',5:'Intensificación',6:'Intensificación',7:'Intensificación',8:'Test de marcas'};
const F={1:.90,2:.95,3:1.00,4:.80,5:.975,6:1.025,7:1.05,8:1.075};
const SR={1:'4 × 5',2:'4 × 5',3:'5 × 5',4:'3 × 5',5:'5 × 4',6:'5 × 3',7:'4 × 3',8:'Buscar 5RM'};
const r125=v=>Math.round(v/1.25)*1.25,r1=v=>Math.round(v);
const G={dl:'Hombro',dpo:'Hombro',da:'Hombro',tra:'Hombro',pec:'Pecho',esp:'Espalda',
 bi:'Brazo',tri:'Brazo',ant:'Brazo',pie:'Pierna',core:'Core y skills'};

const DAYS=[
{id:'d1',n:'Día 1',s:'Pecho, hombro y brazo',tag:'Pesado',short:'Pecho',delt:true,
 note:'Press banca y fondos fuertes, un pecho accesorio, laterales y un par de brazo. Nada sobra.',
 blocks:[
  {t:'Fuerza',ex:[
   {base:'bp',round:r125,d:'bench',name:'Press banca',m:'pec',cue:'Escápulas retraídas, pies clavados. Barra al esternón sin rebote. 3 min entre series.'},
   {base:'dp',round:r1,mult:.95,d:'dip',name:'Fondos lastrados',m:'pec',cue:'Torso algo inclinado. Hombro por debajo del codo y ni un grado más.'}]},
  {t:'Pecho',tone:'pump',ex:[
   {d:'incl',name:'Press inclinado con mancuernas',sets:'3 × 8-10',m:'pec',cue:'Banco a 30°. La zona alta del pecho, que el plano no cubre.'}]},
  {t:'Ancho · lateral',tone:'wide',ex:[
   {d:'lateral',name:'Elevación lateral en polea',sets:'4 × 12-15',m:'dl',cue:'Un brazo. Tensión constante en todo el recorrido, cosa que la mancuerna no da.'}]},
  {t:'Brazo',tone:'pump',ex:[
   {d:'tri',name:'Press francés con barra',sets:'3 × 10-12',m:'tri',cue:'Codos quietos apuntando al techo. Tríceps en estiramiento: el estímulo que más crece.'},
   {d:'curl',name:'Curl con barra Z',sets:'3 × 10-12',m:'bi',cue:'Codos pegados al costado. Sin impulso de cadera.'}]},
  {t:'Core',tone:'calm',ex:[
   {d:'core',name:'Rueda abdominal',sets:'3 × 8-10',m:'core',cue:'Lumbar neutra. En cuanto se arquee, ahí acaba tu rango.'}]}]},
{id:'d2',n:'Día 2',s:'Espalda, brazo y pierna',tag:'Pesado',short:'Espalda',
 note:'Dominada lastrada y remo pesado, un vertical más, y el resto en una pasada.',
 blocks:[
  {t:'Fuerza',ex:[
   {base:'pu',round:r1,d:'pull',name:'Dominada lastrada',m:'esp',cue:'Brazos extendidos abajo, barbilla clara arriba. Sin balanceo. 3 min entre series.'},
   {d:'row',name:'Remo con barra',sets:'4 × 6-8',m:'esp',cue:'Torso a 45°, tira al ombligo. La espalda quieta.'}]},
  {t:'Espalda',tone:'pump',ex:[
   {d:'lat',name:'Jalón al pecho agarre ancho',sets:'3 × 10-12',m:'esp',cue:'Pecho arriba, barra a la clavícula. Volumen vertical sin castigar más el codo.'}]},
  {t:'Ancho · posterior',tone:'wide',ex:[
   {d:'rear',name:'Face pull',sets:'3 × 15',m:'dpo',cue:'Cuerda a la cara, codos altos. Barato, obligatorio y protege el hombro.'}]},
  {t:'Brazo',tone:'pump',ex:[
   {d:'curl',name:'Curl inclinado',sets:'3 × 10-12',m:'bi',cue:'Banco a 45°: bíceps en máximo estiramiento. El otro estímulo clave.'},
   {d:'tri',name:'Extensión en polea con cuerda',sets:'3 × 12-15',m:'tri',cue:'Abre la cuerda al final y cierra el codo del todo.'}]},
  {t:'Core',tone:'calm',ex:[
   {d:'core',name:'Elevación de piernas colgado',sets:'4 × 10-12',m:'core',cue:'Sin balanceo. Transferencia directa al L-sit.'}]},
  {t:'Pierna suave',tone:'calm',ex:[
   {d:'leg',name:'Sentadilla búlgara',sets:'3 × 8 por pierna',m:'pie',cue:'Mancuernas ligeras. Torso vertical.'},
   {d:'leg',name:'Elevación de gemelo',sets:'3 × 15',m:'pie',cue:'Pausa arriba, estiramiento completo abajo.'}]}]},
{id:'d3',n:'Día 3',s:'Hombro pesado y brazo',tag:'Pesado',short:'Hombro',delt:true,
 note:'El día grande de hombro: único press pesado sobre la cabeza, laterales con carga y posterior a saco.',
 blocks:[
  {t:'Fuerza',ex:[
   {d:'press',name:'Press militar de pie',sets:'4 × 6',m:'da',cue:'Glúteo y abdomen apretados. Sin arquear la lumbar. 3 min entre series.'}]},
  {t:'Ancho · lateral y posterior',tone:'wide',ex:[
   {d:'lateral',name:'Elevación lateral con mancuernas',sets:'4 × 10-12',m:'dl',cue:'La serie más pesada de la semana. Un punto de impulso en las dos últimas, no más.'},
   {d:'rear',name:'Pájaro en máquina',sets:'4 × 15',m:'dpo',cue:'El que más se descuida y el que más falta hace.'},
   {d:'trap',name:'Encogimiento de trapecio',sets:'3 × 12-15',m:'tra',cue:'Sube y aguanta un segundo. Nada de rotar el hombro.'}]},
  {t:'Brazo',tone:'pump',ex:[
   {d:'tri',name:'Press cerrado en banca',sets:'3 × 8-10',m:'tri',cue:'Manos a la anchura de hombros. El básico de tríceps, con carga.'},
   {d:'curl',name:'Curl martillo',sets:'3 × 10-12',m:'bi',cue:'Braquial y antebrazo: lo que engrosa el brazo de perfil y mejora el agarre.'}]},
  {t:'Core',tone:'calm',ex:[
   {d:'lsit',name:'Hollow hold',sets:'3 × 30 s',m:'core',cue:'Lumbar pegada al suelo. Base directa del L-sit.'}]}]},
{id:'d4',n:'Día 4',s:'Pecho, tríceps y pierna',tag:'Volumen',short:'Pecho 2',
 note:'Segunda pasada de pecho con lo que no salió el día 1: fondos limpios y el único trabajo de aperturas de la semana.',
 blocks:[
  {t:'Pecho',tone:'pump',ex:[
   {d:'dip',name:'Fondos a peso corporal',sets:'3 × 12-15',m:'pec',cue:'Sin lastre hoy. Rango completo, control en la bajada.'},
   {d:'fly',name:'Aperturas en polea',sets:'3 × 12-15',m:'pec',cue:'Codo semiflexionado fijo. El único estiramiento puro de pecho de la semana: aprovéchalo.'}]},
  {t:'Brazo',tone:'pump',ex:[
   {d:'tri',name:'Extensión sobre la cabeza',sets:'3 × 12-15',m:'tri',cue:'Cabeza larga del tríceps, en estiramiento. Distinto de la cuerda del día 2.'}]},
  {t:'Core',tone:'calm',ex:[
   {d:'core',name:'Pallof press',sets:'3 × 12 por lado',m:'core',cue:'Antirrotación. Protege la lumbar en todo lo demás.'}]},
  {t:'Pierna suave',tone:'calm',ex:[
   {d:'hinge',name:'Peso muerto rumano',sets:'3 × 8-10',m:'pie',cue:'Cadera atrás, barra pegada a la pierna. Isquios, no lumbar.'},
   {d:'leg',name:'Pistol squat',sets:'3 × 3-5 por pierna',m:'pie',cue:'Empieza en caja alta y baja la altura cada semana.'}]}]},
{id:'d5',n:'Día 5',s:'Espalda, skills y brazo',tag:'Volumen',short:'Espalda 2',
 note:'Técnica en fresco al principio, espalda a repeticiones y un solo bíceps de cierre.',
 blocks:[
  {t:'Skills',ex:[
   {d:'mu',name:'Muscle-up',sets:'6 × 2-3 intentos',m:'esp',cue:'Dominada explosiva al esternón primero. Después, transición con banda.'},
   {d:'lsit',name:'L-sit',sets:'6 × 10-20 s',m:'core',cue:'Rodillas dobladas si hace falta. Extiende una pierna cada vez.'}]},
  {t:'Espalda',tone:'pump',ex:[
   {d:'pull',name:'Dominada a peso corporal',sets:'3 × 8-10',m:'esp',cue:'Rápido arriba, controlado abajo. Deja 2 en el depósito.'},
   {d:'row',name:'Remo con mancuerna',sets:'3 × 10-12 por lado',m:'esp',cue:'Recorrido largo. Corrige descompensaciones entre lados.'}]},
  {t:'Ancho · posterior',tone:'wide',ex:[
   {d:'rear',name:'Pájaro tumbado en banco',sets:'3 × 15',m:'dpo',cue:'Boca abajo a 30°: elimina el impulso. Puro deltoides posterior.'}]},
  {t:'Brazo',tone:'pump',ex:[
   {d:'curl',name:'Curl en polea baja',sets:'3 × 12-15',m:'bi',cue:'Tensión constante: el perfil de resistencia que la barra no da.'}]},
  {t:'Core',tone:'calm',ex:[
   {d:'core',name:'Plancha lateral',sets:'3 × 40 s por lado',m:'core',cue:'Cadera alta. El oblicuo sostiene el L-sit.'}]}]},
{id:'d6',n:'Día 6',s:'Hombro metabólico y agua',tag:'Volumen',short:'Hombro 2',delt:true,
 note:'Tercera ración de hombro en rangos altos, agarre, y a la piscina. Corto y con propósito.',
 blocks:[
  {t:'Ancho · lateral y posterior',tone:'wide',ex:[
   {d:'lateral',name:'Elevación lateral descendente',sets:'3 × 12 + desc.',m:'dl',cue:'Última serie: baja el peso dos veces sin descanso hasta que no puedas separar el brazo.'},
   {d:'rear',name:'Face pull alto',sets:'3 × 15',m:'dpo',cue:'Polea por encima de la cabeza, rota los pulgares hacia atrás. Ángulo distinto al del día 2.'}]},
  {t:'Agarre',tone:'pump',ex:[
   {d:'press',name:'Curl de muñeca',sets:'3 × 15-20',m:'ant',cue:'El agarre es tu límite en las dominadas lastradas. Trabájalo.'}]},
  {t:'Core',tone:'calm',ex:[
   {d:'core',name:'Circuito abdominal',sets:'3 vueltas',m:'core',cue:'Hollow 30 s + plancha 30 s + elevaciones 12.'}]},
  {t:'Pierna suave',tone:'calm',ex:[
   {d:'hinge',name:'Curl femoral',sets:'3 × 12',m:'pie',cue:'Compensa el trabajo de cuádriceps de la semana.'}]},
  {t:'Agua',tone:'wet',ex:[
   {d:'swim',name:'Piscina 15-20 min',sets:'Vaso de enseñanza',m:'',cue:'Técnica de respiración y flotación.'},
   {d:'heat',name:'Sauna',sets:'1 × 12 min',m:'',cue:'Rehidrata antes. Sal si te mareas.'}]}]},
{id:'d7',n:'Día 7',s:'Agua y calor',tag:'Recuperación',short:'Agua',wet:true,
 note:'Vas igual al centro, pero sin tocar una barra. Es parte del plan.',
 blocks:[
  {t:'Recuperación',tone:'wet',ex:[
   {d:'swim',name:'Piscina 25-30 min',sets:'Vaso de enseñanza + calles',m:'',cue:'El día de soltarte nadando. Empieza donde hagas pie.'},
   {d:'heat',name:'Sauna',sets:'2 × 10-12 min',m:'',cue:'Rehidrata antes. Sal en cuanto notes mareo.'},
   {d:'heat',name:'Baño turco',sets:'1 × 10 min',m:'',cue:'Menos temperatura, más tolerable. Buen cierre.'}]},
  {t:'Core',tone:'calm',ex:[
   {d:'core',name:'Core suave',sets:'2 × 30 s de cada',m:'core',cue:'Hollow y plancha sin buscar el límite.'},
   {d:'lsit',name:'Movilidad',sets:'10 min',m:'',cue:'Hombro, cadera y tobillo. Lo que te deja seguir lastrando en la semana 8.'}]}]}
];
