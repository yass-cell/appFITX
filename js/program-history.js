/* Rutina 5 + 2 anterior: solo para interpretar el calendario histórico. */
const PREVIOUS_PROGRAM_DAYS=[
  {
    "id": "v2-d1",
    "n": "Lunes",
    "s": "Torso · fuerza",
    "short": "Torso H",
    "tag": "Fuerza",
    "duration": "60-75 min",
    "note": "Dominadas y fondos primero. Descansa 3 min entre series pesadas y deja 2 repeticiones posibles; hoy importa la calidad.",
    "blocks": [
      {
        "t": "Preparación · 6-8 min",
        "tone": "calm",
        "ex": [
          {
            "name": "Movilidad de hombro y dorsal",
            "d": "mob",
            "sets": "1 ronda · sin fatiga",
            "m": "",
            "cue": "2 min de movimiento suave, 6 rotaciones torácicas por lado y 8 deslizamientos de brazos en pared. Después, 2-3 series de aproximación de los básicos.",
            "why": "Las aproximaciones preparan el movimiento; no son series de trabajo."
          }
        ]
      },
      {
        "t": "Fuerza · tus dos referencias",
        "ex": [
          {
            "name": "Dominada lastrada",
            "d": "pull",
            "sets": "3 × 4-6",
            "m": "esp",
            "cue": "Desde brazos extendidos en un rango cómodo, sube sin balanceo y supera la barra con la barbilla. 3 min de descanso.",
            "why": "Si aún no completas 4 repeticiones limpias, usa asistencia. El lastre solo llega cuando dominas tu peso.",
            "strength": true
          },
          {
            "name": "Fondos lastrados",
            "d": "dip",
            "sets": "3 × 4-6",
            "m": "pec",
            "cue": "Baja hasta donde controles sin dolor de hombro, sin rebote. Antebrazos estables; 3 min de descanso.",
            "why": "Mismo recorrido cada sesión para comparar tu fuerza. Usa asistencia o peso corporal si hace falta.",
            "strength": true
          }
        ]
      },
      {
        "t": "Músculo · básicos complementarios",
        "tone": "wide",
        "ex": [
          {
            "name": "Press inclinado con mancuernas",
            "d": "incl",
            "sets": "3 × 6-10",
            "m": "pec",
            "cue": "Banco a 25-35°, baja con control y deja 2 repeticiones en reserva. Descansa 2 min.",
            "why": "Mantiene tu press favorito sin sumar otro bloque pesado de banca."
          },
          {
            "name": "Remo en máquina pendular, pecho apoyado",
            "d": "rowm",
            "sets": "3 × 6-10",
            "m": "esp",
            "cue": "Pecho apoyado, codos hacia atrás y pausa breve. 2 min entre series.",
            "why": "Tirón horizontal con poca demanda lumbar."
          },
          {
            "name": "Elevación lateral en polea",
            "d": "lateral",
            "sets": "2 × 12-20",
            "m": "dl",
            "cue": "Sin balanceo ni encoger hombros; 60-90 s entre series.",
            "why": "Una primera dosis de deltoides lateral."
          }
        ]
      }
    ]
  },
  {
    "id": "v2-d2",
    "n": "Martes",
    "s": "Pierna · fuerza y core",
    "short": "Pierna H",
    "tag": "Fuerza",
    "duration": "50-65 min",
    "note": "Pierna con cargas controlables. Deja 2 repeticiones en reserva y termina con energía: mañana descansas.",
    "blocks": [
      {
        "t": "Preparación · 6-8 min",
        "tone": "calm",
        "ex": [
          {
            "name": "Movilidad de cadera y tobillo",
            "d": "hip90",
            "sets": "1 ronda · sin fatiga",
            "m": "",
            "cue": "6 transiciones 90/90 por lado, 8 avances de rodilla sobre el tobillo y 8 sentadillas sin peso. Haz después 2-3 aproximaciones a la prensa.",
            "why": "Usa un recorrido cómodo y amplíalo gradualmente, sin forzar."
          }
        ]
      },
      {
        "t": "Fuerza y cadena posterior",
        "ex": [
          {
            "name": "Prensa de pierna horizontal",
            "d": "legpress",
            "sets": "3 × 6-10",
            "m": "pie",
            "cue": "Pelvis apoyada y rodillas siguiendo los pies; baja sin redondear la lumbar. 2-3 min.",
            "why": "Primera exposición de cuádriceps: sube la carga al completar 3 × 10 con margen."
          },
          {
            "name": "Curl femoral",
            "d": "legcurl",
            "sets": "3 × 8-12",
            "m": "ham",
            "cue": "Cadera fija, flexiona la rodilla y vuelve despacio. 90-120 s.",
            "why": "Primera exposición de isquios."
          },
          {
            "name": "Extensión lumbar en banco 45°",
            "d": "backext",
            "sets": "2 × 10-15",
            "m": "ere",
            "cue": "Mueve desde la cadera, columna neutra. Termina al alinear piernas y tronco, sin hiperextender.",
            "why": "Trabajo de cadena posterior. Empieza sin peso y usa solo un rango indoloro."
          }
        ]
      },
      {
        "t": "Gemelo y abdomen",
        "tone": "wide",
        "ex": [
          {
            "name": "Elevación de gemelo",
            "d": "calf",
            "sets": "3 × 10-15",
            "m": "cal",
            "cue": "Pausa arriba y abajo, sin rebote. 60-90 s.",
            "why": "Recorrido y repeticiones antes de añadir carga."
          },
          {
            "name": "Crunch en polea o máquina abdominal",
            "d": "crunch",
            "sets": "3 × 10-15",
            "m": "core",
            "cue": "Acerca costillas a pelvis flexionando el tronco. No tires con los brazos.",
            "why": "Abdomen progresivo: añade carga al completar las series con 2 repeticiones en reserva."
          }
        ]
      }
    ]
  },
  {
    "id": "v2-d3",
    "n": "Miércoles",
    "s": "Descanso de entrenamiento",
    "short": "Descanso",
    "tag": "Recuperar",
    "rest": true,
    "wet": true,
    "duration": "Sin sesión",
    "note": "Hoy no hay fuerza ni cardio programado. El descanso forma parte del plan y no tienes que marcar ninguna casilla.",
    "blocks": [
      {
        "t": "Solo si te apetece · opcional",
        "tone": "calm",
        "ex": [
          {
            "name": "Paseo cómodo o movilidad suave",
            "d": "mob",
            "sets": "5-20 min · opcional",
            "m": "",
            "cue": "Pasea a tu ritmo o mueve suavemente cadera, espalda y hombros. También puedes descansar por completo.",
            "why": "Come con normalidad, mantén tu proteína y prioriza 7-9 horas de sueño. La sauna no es necesaria para recuperarte."
          }
        ]
      }
    ]
  },
  {
    "id": "v2-d4",
    "n": "Jueves",
    "s": "Empuje · músculo y cardio",
    "short": "Empuje P",
    "tag": "Volumen",
    "duration": "65-80 min",
    "delt": true,
    "note": "Segunda práctica de fondos con menos carga. El bombeo también requiere esfuerzo, pero no hace falta llegar al fallo.",
    "blocks": [
      {
        "t": "Preparación · 6-8 min",
        "tone": "calm",
        "ex": [
          {
            "name": "Movilidad de hombro y dorsal",
            "d": "mob",
            "sets": "1 ronda · sin fatiga",
            "m": "",
            "cue": "2 min de movimiento suave, 6 rotaciones torácicas por lado y 8 deslizamientos de brazos en pared. Después, 2-3 series de aproximación de los básicos.",
            "why": "Las aproximaciones preparan el movimiento; no son series de trabajo."
          }
        ]
      },
      {
        "t": "Pecho y práctica de fondos",
        "tone": "wide",
        "ex": [
          {
            "name": "Fondos a peso corporal",
            "d": "dip",
            "sets": "2 × 6-10",
            "m": "pec",
            "cue": "Deja 3 repeticiones en reserva. Usa asistencia si tu peso corporal resulta demasiado exigente. 2 min.",
            "why": "Practica el mismo patrón del lunes con menos fatiga."
          },
          {
            "name": "Press inclinado con mancuernas · pump",
            "d": "incl",
            "sets": "3 × 8-12",
            "m": "pec",
            "cue": "Controla la bajada y deja 2 repeticiones en reserva. Descansa 2 min.",
            "why": "Segunda exposición de pecho con carga moderada."
          }
        ]
      },
      {
        "t": "Hombro y tríceps",
        "tone": "pump",
        "ex": [
          {
            "name": "Press de hombro en máquina inclinada",
            "d": "pressm",
            "sets": "2 × 8-12",
            "m": "da",
            "cue": "Espalda apoyada, recorrido cómodo y 2 repeticiones en reserva. 2 min.",
            "why": "Empuje vertical con volumen contenido."
          },
          {
            "name": "Elevación lateral en polea",
            "d": "lateral",
            "sets": "3 × 12-20",
            "m": "dl",
            "cue": "Codo ligeramente flexionado y hombros lejos de las orejas. 60-90 s.",
            "why": "Segunda dosis para el ancho de hombro."
          },
          {
            "name": "Extensión en polea con cuerda",
            "d": "tripd",
            "sets": "2 × 10-15",
            "m": "tri",
            "cue": "Codos quietos; extiende sin balancear el torso. 60-90 s.",
            "why": "Complementa los presses y fondos sin repetirlos."
          }
        ]
      },
      {
        "t": "Cardio · base aeróbica",
        "tone": "wet",
        "ex": [
          {
            "name": "Caminata inclinada · conversacional",
            "d": "walk",
            "sets": "",
            "m": "",
            "cue": "RPE 3-4 de 10: puedes hablar en frases completas. Primeros y últimos 3 min más suaves. Ajusta velocidad y pendiente; también puedes usar bicicleta.",
            "why": "Alarga el tiempo antes de subir la intensidad. Si baja tu rendimiento o sigues agotado, repite la dosis anterior.",
            "cardio": 0
          }
        ]
      }
    ]
  },
  {
    "id": "v2-d5",
    "n": "Viernes",
    "s": "Tirón · músculo y cardio",
    "short": "Tirón P",
    "tag": "Volumen",
    "duration": "60-75 min",
    "note": "Dominadas con margen para mejorar repeticiones. Cardio al terminar; si puedes separarlo unas horas, también vale.",
    "blocks": [
      {
        "t": "Preparación · 6-8 min",
        "tone": "calm",
        "ex": [
          {
            "name": "Movilidad de hombro y dorsal",
            "d": "mob",
            "sets": "1 ronda · sin fatiga",
            "m": "",
            "cue": "2 min de movimiento suave, 6 rotaciones torácicas por lado y 8 deslizamientos de brazos en pared. Después, 2-3 series de aproximación de los básicos.",
            "why": "Las aproximaciones preparan el movimiento; no son series de trabajo."
          }
        ]
      },
      {
        "t": "Espalda y dominadas",
        "tone": "wide",
        "ex": [
          {
            "name": "Dominadas a peso corporal",
            "d": "pull",
            "sets": "3 × 5-8",
            "m": "esp",
            "cue": "Deja 2-3 repeticiones en reserva, sin kipping. Ajusta asistencia si hace falta; 2-3 min.",
            "why": "Segunda exposición para mantener fuerza relativa mientras baja tu cintura."
          },
          {
            "name": "Remo sentado en polea, agarre neutro",
            "d": "rowc",
            "sets": "3 × 10-15",
            "m": "esp",
            "cue": "Torso estable y codos hacia la cadera. Deja estirar la escápula con control; 90-120 s.",
            "why": "Volumen de espalda con poco cansancio lumbar."
          }
        ]
      },
      {
        "t": "Hombro posterior y bíceps",
        "tone": "pump",
        "ex": [
          {
            "name": "Pájaro en máquina",
            "d": "rear",
            "sets": "3 × 12-20",
            "m": "dpo",
            "cue": "Pecho apoyado y pausa breve al abrir; no eleves los hombros.",
            "why": "Trabajo directo de deltoides posterior."
          },
          {
            "name": "Curl inclinado con mancuernas",
            "d": "curlinc",
            "sets": "3 × 8-12",
            "m": "bi",
            "cue": "Codos estables, sin adelantar el hombro. 90 s.",
            "why": "El trabajo de dominadas y remos se completa con tres series directas."
          }
        ]
      },
      {
        "t": "Cardio · base aeróbica",
        "tone": "wet",
        "ex": [
          {
            "name": "Caminata inclinada · conversacional",
            "d": "walk",
            "sets": "",
            "m": "",
            "cue": "RPE 3-4 de 10: puedes hablar en frases completas. Primeros y últimos 3 min más suaves. Ajusta velocidad y pendiente; también puedes usar bicicleta.",
            "why": "Alarga el tiempo antes de subir la intensidad. Si baja tu rendimiento o sigues agotado, repite la dosis anterior.",
            "cardio": 1
          }
        ]
      }
    ]
  },
  {
    "id": "v2-d6",
    "n": "Sábado",
    "s": "Pierna · volumen y resistencia",
    "short": "Pierna P",
    "tag": "Resistencia",
    "duration": "70-85 min",
    "note": "Segunda dosis de pierna, contenida, y el cardio más largo de la semana. Puedes separar ambos bloques; mañana descansas.",
    "blocks": [
      {
        "t": "Preparación · 6-8 min",
        "tone": "calm",
        "ex": [
          {
            "name": "Movilidad de cadera y tobillo",
            "d": "hip90",
            "sets": "1 ronda · sin fatiga",
            "m": "",
            "cue": "6 transiciones 90/90 por lado, 8 avances de rodilla sobre el tobillo y 8 sentadillas sin peso. Haz después 2-3 aproximaciones a la prensa.",
            "why": "Usa un recorrido cómodo y amplíalo gradualmente, sin forzar."
          }
        ]
      },
      {
        "t": "Pierna · repeticiones controladas",
        "tone": "wide",
        "ex": [
          {
            "name": "Prensa de pierna horizontal · pump",
            "d": "legpress",
            "sets": "2 × 10-15",
            "m": "pie",
            "cue": "Menos carga que el martes; deja 2-3 repeticiones en reserva. 2 min.",
            "why": "Segunda práctica con menos carga."
          },
          {
            "name": "Extensión de cuádriceps",
            "d": "legext",
            "sets": "2 × 12-15",
            "m": "pie",
            "cue": "Pausa breve arriba y baja despacio; 90 s.",
            "why": "Completa el cuádriceps con poco volumen adicional."
          },
          {
            "name": "Curl femoral · pump",
            "d": "legcurl",
            "sets": "3 × 12-15",
            "m": "ham",
            "cue": "Mantén la cadera apoyada y deja 2 repeticiones en reserva.",
            "why": "Segunda exposición de isquios."
          },
          {
            "name": "Elevación de gemelo · pump",
            "d": "calf",
            "sets": "2 × 12-20",
            "m": "cal",
            "cue": "Recorrido completo y sin rebotes.",
            "why": "Segunda exposición de gemelo."
          }
        ]
      },
      {
        "t": "Core",
        "tone": "wide",
        "ex": [
          {
            "name": "Crunch declinado lastrado",
            "d": "crunchdecline",
            "sets": "2 × 10-15",
            "m": "core",
            "cue": "Disco pegado al pecho. Enrolla el tronco, sin subirlo rígido desde la cadera.",
            "why": "Dosifica la carga para conservar el control."
          }
        ]
      },
      {
        "t": "Skill · opcional",
        "tone": "calm",
        "ex": [
          {
            "name": "Dragon flag",
            "d": "dragon",
            "sets": "2 × 3 negativas tuck · opcional",
            "m": "core",
            "cue": "Solo si estás fresco: rodillas recogidas, bajada de 3 s y para antes de arquear la lumbar.",
            "why": "Avanza a una pierna extendida solo cuando todas las repeticiones sean estables, sin dolor."
          }
        ]
      },
      {
        "t": "Cardio · base aeróbica",
        "tone": "wet",
        "ex": [
          {
            "name": "Caminata inclinada · resistencia",
            "d": "walk",
            "sets": "",
            "m": "",
            "cue": "RPE 3-4 de 10: puedes hablar en frases completas. Primeros y últimos 3 min más suaves. Ajusta velocidad y pendiente; también puedes usar bicicleta.",
            "why": "Alarga el tiempo antes de subir la intensidad. Si baja tu rendimiento o sigues agotado, repite la dosis anterior.",
            "cardio": 2
          }
        ]
      }
    ]
  },
  {
    "id": "v2-d7",
    "n": "Domingo",
    "s": "Descanso de entrenamiento",
    "short": "Descanso",
    "tag": "Recuperar",
    "rest": true,
    "wet": true,
    "duration": "Sin sesión",
    "note": "Hoy no hay fuerza ni cardio programado. El descanso forma parte del plan y no tienes que marcar ninguna casilla.",
    "blocks": [
      {
        "t": "Solo si te apetece · opcional",
        "tone": "calm",
        "ex": [
          {
            "name": "Paseo cómodo o movilidad suave",
            "d": "mob",
            "sets": "5-20 min · opcional",
            "m": "",
            "cue": "Pasea a tu ritmo o mueve suavemente cadera, espalda y hombros. También puedes descansar por completo.",
            "why": "Come con normalidad, mantén tu proteína y prioriza 7-9 horas de sueño. La sauna no es necesaria para recuperarte."
          }
        ]
      }
    ]
  }
];

// V3 anterior a la ampliación de pecho y espalda.
const PREVIOUS_TORSO_DAYS=[
  {
    "id": "v3-d1",
    "n": "Lunes",
    "s": "Pecho · tensión",
    "short": "Pecho H",
    "tag": "Heavy",
    "duration": "60-75 min",
    "focus": "PECTORAL SUPERIOR / LATERAL / TRÍCEPS / ABS",
    "delt": true,
    "note": "Dos patrones de pecho que te gustan, sin añadir banca plana ni más presses. Fondos primero para conservar tu referencia de fuerza.",
    "blocks": [
      {
        "t": "Preparación · 6-8 min",
        "tone": "calm",
        "ex": [
          {
            "name": "Movilidad de hombro y dorsal",
            "d": "mob",
            "sets": "1 ronda · sin fatiga",
            "m": "",
            "cue": "2 min suaves, 6 rotaciones torácicas por lado y 8 deslizamientos de brazos en pared. Después 2-3 aproximaciones al primer básico.",
            "why": "Prepara el recorrido sin cansarte antes de las series efectivas."
          }
        ]
      },
      {
        "t": "Pecho · fuerza y rango",
        "tone": "",
        "ex": [
          {
            "name": "Fondos lastrados",
            "d": "dip",
            "sets": "3 × 4-6",
            "m": "pec",
            "cue": "Rango cómodo, sin rebote y con 2 reps en reserva. Descansa 3 min. Usa asistencia o peso corporal si lo necesitas.",
            "why": "Tu referencia de fuerza de empuje; compara siempre el mismo recorrido.",
            "strength": true
          },
          {
            "name": "Press inclinado con mancuernas",
            "d": "incl",
            "sets": "3 × 6-10",
            "m": "pec",
            "cue": "Banco a 25-35°, baja con control y deja 2 reps. Descansa 2-3 min.",
            "why": "Prioridad a la porción superior del pecho para dar más volumen bajo la clavícula."
          }
        ]
      },
      {
        "t": "Hombro y tríceps · dosis 1",
        "tone": "pump",
        "ex": [
          {
            "name": "Elevación lateral en polea",
            "d": "lateral",
            "sets": "3 × 12-20",
            "m": "dl",
            "cue": "Deja 1-2 reps en reserva. Codo suave, abre sin balanceo; 60-90 s.",
            "why": "Tres dosis semanales para desarrollar anchura visual; no hacen falta tres días de press."
          },
          {
            "name": "Extensión sobre cabeza en polea",
            "d": "trioh",
            "sets": "3 × 10-15",
            "m": "tri",
            "cue": "Codos estables y rango cómodo por encima de la cabeza. Deja 1-2 reps; 90 s.",
            "why": "Una extensión de codo complementa fondos y press sin otro empuje pesado."
          }
        ]
      },
      {
        "t": "Abdomen · carga progresiva",
        "tone": "wide",
        "ex": [
          {
            "name": "Crunch en polea o máquina abdominal",
            "d": "crunch",
            "sets": "3 × 8-15",
            "m": "core",
            "cue": "Acerca costillas a pelvis, sin tirar con los brazos ni hacer una bisagra de cadera. Deja 1-2 reps; 90 s.",
            "why": "Al completar 3 × 15 con el mismo control, añade el incremento mínimo."
          }
        ]
      }
    ]
  },
  {
    "id": "v3-d2",
    "n": "Martes",
    "s": "Espalda · anchura y fuerza",
    "short": "Espalda H",
    "tag": "Heavy",
    "duration": "60-75 min",
    "focus": "DOMINADAS / DORSAL / POSTERIOR / BÍCEPS",
    "note": "Un tirón vertical y un remo unilateral. Usa apoyo en el banco para concentrar el esfuerzo en la espalda y limitar la fatiga lumbar.",
    "blocks": [
      {
        "t": "Preparación · 6-8 min",
        "tone": "calm",
        "ex": [
          {
            "name": "Movilidad de hombro y dorsal",
            "d": "mob",
            "sets": "1 ronda · sin fatiga",
            "m": "",
            "cue": "2 min suaves, 6 rotaciones torácicas por lado y 8 deslizamientos de brazos en pared. Después 2-3 aproximaciones al primer básico.",
            "why": "Prepara el recorrido sin cansarte antes de las series efectivas."
          }
        ]
      },
      {
        "t": "Espalda · tirón vertical y unilateral",
        "tone": "",
        "ex": [
          {
            "name": "Dominada lastrada",
            "d": "pull",
            "sets": "3 × 4-6",
            "m": "esp",
            "cue": "Sube sin balanceo desde un rango cómodo hasta superar la barra con la barbilla. Deja 2 reps y descansa 3 min.",
            "why": "Registra lastre o asistencia y tu peso corporal en Progreso para interpretar la fuerza relativa.",
            "strength": true
          },
          {
            "name": "Remo con mancuerna a una mano",
            "d": "rowdb",
            "sets": "3 × 8-12 por lado",
            "m": "esp",
            "cue": "Mano y rodilla apoyadas, tronco estable. Lleva el codo hacia la cadera sin girar el torso; 90-120 s entre rondas.",
            "why": "Sesgo hacia dorsal. Tres series por lado cuentan como tres para cada lado, no seis."
          }
        ]
      },
      {
        "t": "Posterior y bíceps · dosis 1",
        "tone": "pump",
        "ex": [
          {
            "name": "Pájaro en máquina",
            "d": "rear",
            "sets": "3 × 12-20",
            "m": "dpo",
            "cue": "Pecho apoyado, codos suaves y pausa al abrir. Deja 1-2 reps en reserva; 60-90 s.",
            "why": "Deltoide posterior: complementa los remos de espalda alta."
          },
          {
            "name": "Curl inclinado con mancuernas",
            "d": "curlinc",
            "sets": "3 × 8-12",
            "m": "bi",
            "cue": "Brazo quieto detrás del tronco, sin adelantar hombros. Deja 1-2 reps y descansa 90 s.",
            "why": "Trabajo directo de bíceps después del tirón, con repeticiones controladas."
          }
        ]
      }
    ]
  },
  {
    "id": "v3-d3",
    "n": "Miércoles",
    "s": "Recuperación activa",
    "short": "Recupera",
    "tag": "Sin pesas duras",
    "rest": true,
    "wet": true,
    "duration": "Según energía",
    "focus": "MOVILIDAD / TOLERANCIA / PASOS",
    "note": "Hoy no hay sesión de hipertrofia. Camina y recupera rangos cómodos. Ajusta o acorta estos bloques si no te recuperan; no cuentan como una sexta sesión de pesas.",
    "blocks": [
      {
        "t": "Cardio · caminar",
        "tone": "wet",
        "ex": [
          {
            "name": "Caminata · base aeróbica",
            "d": "walk",
            "sets": "",
            "m": "",
            "cue": "Esfuerzo 3-4/10: puedes hablar en frases completas. Primeros y últimos 3 min suaves. Terreno llano o pendiente tolerable.",
            "why": "Aumenta minutos antes que intensidad. Si estás muy cansado, reduce duración o camina más suave.",
            "cardio": 0
          }
        ]
      },
      {
        "t": "Movilidad · 8-10 min",
        "tone": "calm",
        "ex": [
          {
            "name": "Transiciones 90/90 de cadera",
            "d": "hip90",
            "sets": "2 × 6 por lado",
            "m": "",
            "cue": "Rota despacio y apóyate con las manos si hace falta; sin pinzamiento.",
            "why": "Movimiento suave para cadera, no un estiramiento forzado."
          },
          {
            "name": "Movilidad de hombro y dorsal",
            "d": "mob",
            "sets": "1 ronda · 4 min",
            "m": "",
            "cue": "6 rotaciones torácicas por lado y 8 deslizamientos en pared. Respira, sin arquear la lumbar.",
            "why": "Conserva rangos para presses, dominadas y remos."
          }
        ]
      },
      {
        "t": "Estiramientos · 4-6 min",
        "tone": "calm",
        "ex": [
          {
            "name": "Estiramiento de flexor de cadera",
            "d": "hipstretch",
            "sets": "2 × 20-30 s por lado",
            "m": "",
            "cue": "Media rodilla en el suelo, glúteo apretado y pelvis ligeramente recogida. Avanza muy poco; tensión cómoda.",
            "why": "Sin rebotes ni dolor. Completa si te apetece con gemelo y pectoral, 20-30 s suaves cada uno."
          }
        ]
      },
      {
        "t": "Tolerancia a la carga · opcional",
        "tone": "calm",
        "ex": [
          {
            "name": "Extensión de muñeca ligera",
            "d": "wrist",
            "sets": "1-2 × 12-15 · opcional",
            "m": "",
            "cue": "Antebrazo apoyado y palma hacia abajo. Carga muy ligera, subida y bajada de 2 s; esfuerzo máximo 3/10.",
            "why": "Trabajo general de antebrazo, no tratamiento de una lesión. Omite si provoca dolor o empeora molestias al día siguiente."
          },
          {
            "name": "Elevación de gemelo suave",
            "d": "calf",
            "sets": "1 × 12 · opcional",
            "m": "",
            "cue": "A dos piernas, con apoyo de manos y sin peso añadido. Sube y baja en 2 s sin buscar fatiga.",
            "why": "Los tendones ya reciben carga en las pesas. Un tendón doloroso necesita una pauta individual."
          }
        ]
      }
    ]
  },
  {
    "id": "v3-d4",
    "n": "Jueves",
    "s": "Pierna · base completa",
    "short": "Pierna",
    "tag": "Build",
    "duration": "75-90 min",
    "focus": "CUÁDRICEPS / ISQUIOS / GLÚTEOS / BRAZOS",
    "delt": true,
    "note": "Una sesión completa de pierna para esta etapa de prioridad torso. Los accesorios de brazos son breves y suaves: mañana vuelve el empuje.",
    "blocks": [
      {
        "t": "Preparación · 6-8 min",
        "tone": "calm",
        "ex": [
          {
            "name": "Movilidad de cadera y tobillo",
            "d": "hip90",
            "sets": "1 ronda · sin fatiga",
            "m": "",
            "cue": "6 transiciones 90/90 por lado, 8 avances de rodilla sobre el tobillo y 8 sentadillas sin peso. Después 2-3 aproximaciones a la prensa.",
            "why": "Amplía el recorrido gradualmente, sin forzar."
          }
        ]
      },
      {
        "t": "Pierna · rodilla y cadera",
        "tone": "",
        "ex": [
          {
            "name": "Prensa de pierna horizontal",
            "d": "legpress",
            "sets": "3 × 6-10",
            "m": "pie",
            "cue": "Pelvis apoyada, rodillas siguiendo los pies y 2 reps en reserva. Baja sin redondear la lumbar; 2-3 min.",
            "why": "Tu principal referencia de cuádriceps."
          },
          {
            "name": "Peso muerto rumano con mancuernas",
            "d": "rdl",
            "sets": "2 × 8-12",
            "m": "ham",
            "cue": "Rodillas ligeramente flexionadas, cadera atrás y pesos cerca de las piernas. Para donde mantengas la espalda neutra; RIR 2-3, 2 min.",
            "why": "Bisagra de cadera para isquios y glúteos. Practica ligero antes de subir carga."
          },
          {
            "name": "Curl femoral",
            "d": "legcurl",
            "sets": "2 × 10-15",
            "m": "ham",
            "cue": "Cadera fija y regreso lento. Deja 1-2 reps; 90 s.",
            "why": "Flexión de rodilla: función distinta al rumano."
          },
          {
            "name": "Extensión de cuádriceps",
            "d": "legext",
            "sets": "2 × 12-15",
            "m": "pie",
            "cue": "Pausa breve arriba y descenso controlado. Deja 1-2 reps; 90 s.",
            "why": "Completa el cuádriceps con poca demanda lumbar."
          },
          {
            "name": "Elevación de gemelo",
            "d": "calf",
            "sets": "3 × 10-15",
            "m": "cal",
            "cue": "Recorrido cómodo y sin rebote; 1-2 reps en reserva, 60-90 s.",
            "why": "Carga progresiva para pantorrilla."
          }
        ]
      },
      {
        "t": "Hombro y brazos · dosis breve",
        "tone": "pump",
        "ex": [
          {
            "name": "Elevación lateral en polea",
            "d": "lateral",
            "sets": "3 × 15-20",
            "m": "dl",
            "cue": "Deja 3-4 reps en reserva. Movimiento limpio y sin encoger hombros; 60-90 s.",
            "why": "Tres dosis semanales para desarrollar anchura visual; no hacen falta tres días de press."
          },
          {
            "name": "Curl martillo",
            "d": "hammer",
            "sets": "2 × 12-15",
            "m": "bi",
            "cue": "Agarre neutro, sin balanceo. Deja 3 reps en reserva; 60-90 s.",
            "why": "Segunda dosis de flexores del codo: ligera, sin buscar agujetas."
          },
          {
            "name": "Extensión en polea con cuerda · ligera",
            "d": "tripd",
            "sets": "2 × 12-15",
            "m": "tri",
            "cue": "Codos quietos y carga cómoda; deja 3-4 reps, 60-90 s.",
            "why": "Segunda dosis corta. Si resta rendimiento al viernes, omite estas dos series."
          }
        ]
      }
    ]
  },
  {
    "id": "v3-d5",
    "n": "Viernes",
    "s": "Pecho · volumen y hombro",
    "short": "Pecho P",
    "tag": "Pump",
    "duration": "75-90 min",
    "focus": "INCLINADO / FONDOS / DELTOIDES / ABS",
    "delt": true,
    "note": "El pump también es hipertrofia: series que puedas progresar, sin convertir todo en un circuito al fallo. Hoy el press inclinado va primero.",
    "blocks": [
      {
        "t": "Preparación · 6-8 min",
        "tone": "calm",
        "ex": [
          {
            "name": "Movilidad de hombro y dorsal",
            "d": "mob",
            "sets": "1 ronda · sin fatiga",
            "m": "",
            "cue": "2 min suaves, 6 rotaciones torácicas por lado y 8 deslizamientos de brazos en pared. Después 2-3 aproximaciones al primer básico.",
            "why": "Prepara el recorrido sin cansarte antes de las series efectivas."
          }
        ]
      },
      {
        "t": "Pecho · segunda exposición",
        "tone": "wide",
        "ex": [
          {
            "name": "Press inclinado con mancuernas · pump",
            "d": "incl",
            "sets": "3 × 10-15",
            "m": "pec",
            "cue": "Misma técnica del lunes con menos peso. Deja 1-2 reps; 2 min.",
            "why": "Repite tu básico favorito en otro rango de repeticiones."
          },
          {
            "name": "Fondos a peso corporal",
            "d": "dip",
            "sets": "2 × 6-12",
            "m": "pec",
            "cue": "Deja 2-3 reps y usa asistencia si hace falta; 2 min.",
            "why": "Práctica de fondos con menos carga; no es un test de máximas repeticiones."
          }
        ]
      },
      {
        "t": "Hombro y tríceps · dosis 3",
        "tone": "pump",
        "ex": [
          {
            "name": "Press de hombro en máquina inclinada",
            "d": "pressm",
            "sets": "2 × 8-12",
            "m": "da",
            "cue": "Espalda apoyada, rango cómodo y 2 reps en reserva; 2 min.",
            "why": "Solo dos series: el deltoide anterior ya trabaja con el pecho."
          },
          {
            "name": "Elevación lateral en polea",
            "d": "lateral",
            "sets": "3 × 12-20",
            "m": "dl",
            "cue": "Deja 1-2 reps en reserva. Codo suave, abre sin balanceo; 60-90 s.",
            "why": "Tres dosis semanales para desarrollar anchura visual; no hacen falta tres días de press."
          },
          {
            "name": "Extensión en polea con cuerda",
            "d": "tripd",
            "sets": "3 × 10-15",
            "m": "tri",
            "cue": "Codos quietos, sin mover el tronco. Deja 1-2 reps; 90 s.",
            "why": "Tercera dosis directa; progresa sin irritar el codo."
          }
        ]
      },
      {
        "t": "Abdomen · segunda carga",
        "tone": "wide",
        "ex": [
          {
            "name": "Crunch en polea o máquina abdominal",
            "d": "crunch",
            "sets": "3 × 8-15",
            "m": "core",
            "cue": "Acerca costillas a pelvis, sin tirar con los brazos ni hacer una bisagra de cadera. Deja 1-2 reps; 90 s.",
            "why": "Al completar 3 × 15 con el mismo control, añade el incremento mínimo."
          }
        ]
      },
      {
        "t": "Cardio · caminar",
        "tone": "wet",
        "ex": [
          {
            "name": "Caminata · final suave",
            "d": "walk",
            "sets": "",
            "m": "",
            "cue": "Esfuerzo 3-4/10: puedes hablar en frases completas. Primeros y últimos 3 min suaves. Terreno llano o pendiente tolerable.",
            "why": "Aumenta minutos antes que intensidad. Si estás muy cansado, reduce duración o camina más suave.",
            "cardio": 1
          }
        ]
      }
    ]
  },
  {
    "id": "v3-d6",
    "n": "Sábado",
    "s": "Espalda · espesor y detalle",
    "short": "Espalda P",
    "tag": "Pump",
    "duration": "70-85 min",
    "focus": "ESPALDA ALTA / DORSAL / POSTERIOR / ABS",
    "note": "Primero el remo para espalda alta. Después, jalón y un remo hacia la cadera: cada uno tiene una función; no añadas más variantes al terminar.",
    "blocks": [
      {
        "t": "Preparación · 6-8 min",
        "tone": "calm",
        "ex": [
          {
            "name": "Movilidad de hombro y dorsal",
            "d": "mob",
            "sets": "1 ronda · sin fatiga",
            "m": "",
            "cue": "2 min suaves, 6 rotaciones torácicas por lado y 8 deslizamientos de brazos en pared. Después 2-3 aproximaciones al primer básico.",
            "why": "Prepara el recorrido sin cansarte antes de las series efectivas."
          }
        ]
      },
      {
        "t": "Espalda · tres funciones",
        "tone": "wide",
        "ex": [
          {
            "name": "Remo alto con pecho apoyado",
            "d": "rowhigh",
            "sets": "3 × 8-12",
            "m": "esp",
            "cue": "Codos separados unos 45-60°, tira hacia pecho bajo y junta las escápulas sin encoger hombros. Deja 1-2 reps; 2 min.",
            "why": "Prioridad de espesor en espalda alta: trapecio medio, romboides y deltoide posterior."
          },
          {
            "name": "Jalón al pecho, agarre neutro",
            "d": "latp",
            "sets": "3 × 10-15",
            "m": "esp",
            "cue": "Tira hacia la parte alta del pecho, codos abajo y torso casi estable. Deja 1-2 reps; 90-120 s.",
            "why": "Segunda exposición de tirón vertical. El jalón complementa tus dominadas; no necesitas hacer ambos hoy."
          },
          {
            "name": "Remo sentado en polea, agarre neutro",
            "d": "rowc",
            "sets": "2 × 10-15",
            "m": "esp",
            "cue": "Codos cerca del torso hacia la cadera. Estira con control y no balancees; 90 s.",
            "why": "Dorsal con un recorrido distinto al remo alto. Dos series bastan aquí."
          }
        ]
      },
      {
        "t": "Posterior y bíceps · dosis 3",
        "tone": "pump",
        "ex": [
          {
            "name": "Pájaro en máquina",
            "d": "rear",
            "sets": "3 × 12-20",
            "m": "dpo",
            "cue": "Pecho apoyado, codos suaves y pausa al abrir. Deja 1-2 reps en reserva; 60-90 s.",
            "why": "Deltoide posterior: complementa los remos de espalda alta."
          },
          {
            "name": "Curl en polea baja",
            "d": "curlc",
            "sets": "3 × 10-15",
            "m": "bi",
            "cue": "Codos estables y sin inclinarte hacia atrás. Deja 1-2 reps; 90 s.",
            "why": "Tercera dosis de bíceps con tensión controlable."
          }
        ]
      },
      {
        "t": "Abdomen · pelvis y control",
        "tone": "wide",
        "ex": [
          {
            "name": "Elevación de rodillas colgado",
            "d": "hangraise",
            "sets": "2 × 8-15",
            "m": "core",
            "cue": "Sube las rodillas y termina enrollando la pelvis hacia las costillas, sin balanceo. Deja 2 reps; 90 s.",
            "why": "Si falla antes el agarre, usa silla romana. Progresa el control antes de extender más las piernas."
          }
        ]
      }
    ]
  },
  {
    "id": "v3-d7",
    "n": "Domingo",
    "s": "Recuperación activa",
    "short": "Recupera",
    "tag": "Sin pesas duras",
    "rest": true,
    "wet": true,
    "duration": "Según energía",
    "focus": "MOVILIDAD / TOLERANCIA / PASOS",
    "note": "Hoy no hay sesión de hipertrofia. Camina y recupera rangos cómodos. Ajusta o acorta estos bloques si no te recuperan; no cuentan como una sexta sesión de pesas.",
    "blocks": [
      {
        "t": "Cardio · caminar",
        "tone": "wet",
        "ex": [
          {
            "name": "Caminata · base aeróbica",
            "d": "walk",
            "sets": "",
            "m": "",
            "cue": "Esfuerzo 3-4/10: puedes hablar en frases completas. Primeros y últimos 3 min suaves. Terreno llano o pendiente tolerable.",
            "why": "Aumenta minutos antes que intensidad. Si estás muy cansado, reduce duración o camina más suave.",
            "cardio": 2
          }
        ]
      },
      {
        "t": "Movilidad · 8-10 min",
        "tone": "calm",
        "ex": [
          {
            "name": "Transiciones 90/90 de cadera",
            "d": "hip90",
            "sets": "2 × 6 por lado",
            "m": "",
            "cue": "Rota despacio y apóyate con las manos si hace falta; sin pinzamiento.",
            "why": "Movimiento suave para cadera, no un estiramiento forzado."
          },
          {
            "name": "Movilidad de hombro y dorsal",
            "d": "mob",
            "sets": "1 ronda · 4 min",
            "m": "",
            "cue": "6 rotaciones torácicas por lado y 8 deslizamientos en pared. Respira, sin arquear la lumbar.",
            "why": "Conserva rangos para presses, dominadas y remos."
          }
        ]
      },
      {
        "t": "Estiramientos · 4-6 min",
        "tone": "calm",
        "ex": [
          {
            "name": "Estiramiento de flexor de cadera",
            "d": "hipstretch",
            "sets": "2 × 20-30 s por lado",
            "m": "",
            "cue": "Media rodilla en el suelo, glúteo apretado y pelvis ligeramente recogida. Avanza muy poco; tensión cómoda.",
            "why": "Sin rebotes ni dolor. Completa si te apetece con gemelo y pectoral, 20-30 s suaves cada uno."
          }
        ]
      },
      {
        "t": "Tolerancia a la carga · opcional",
        "tone": "calm",
        "ex": [
          {
            "name": "Extensión de muñeca ligera",
            "d": "wrist",
            "sets": "1-2 × 12-15 · opcional",
            "m": "",
            "cue": "Antebrazo apoyado y palma hacia abajo. Carga muy ligera, subida y bajada de 2 s; esfuerzo máximo 3/10.",
            "why": "Trabajo general de antebrazo, no tratamiento de una lesión. Omite si provoca dolor o empeora molestias al día siguiente."
          },
          {
            "name": "Elevación de gemelo suave",
            "d": "calf",
            "sets": "1 × 12 · opcional",
            "m": "",
            "cue": "A dos piernas, con apoyo de manos y sin peso añadido. Sube y baja en 2 s sin buscar fatiga.",
            "why": "Los tendones ya reciben carga en las pesas. Un tendón doloroso necesita una pauta individual."
          }
        ]
      }
    ]
  }
];

// Pecho V4 anterior a la incorporación de banca y press sentado.
const PREVIOUS_CHEST_DAYS=[
  {
    "id": "v4-d1",
    "n": "Lunes",
    "s": "Pecho · tensión",
    "short": "Pecho H",
    "tag": "Heavy",
    "duration": "65-80 min",
    "focus": "PECTORAL SUPERIOR / LATERAL / TRÍCEPS / ABS",
    "delt": true,
    "note": "Fondos primero, inclinado después y aperturas para añadir trabajo de pecho con poca demanda del tríceps. Empieza las nuevas series con 3 reps en reserva.",
    "blocks": [
      {
        "t": "Preparación · 6-8 min",
        "tone": "calm",
        "ex": [
          {
            "name": "Movilidad de hombro y dorsal",
            "d": "mob",
            "sets": "1 ronda · sin fatiga",
            "m": "",
            "cue": "2 min suaves, 6 rotaciones torácicas por lado y 8 deslizamientos de brazos en pared. Después 2-3 aproximaciones al primer básico.",
            "why": "Prepara el recorrido sin cansarte antes de las series efectivas."
          }
        ]
      },
      {
        "t": "Pecho · fuerza y rango",
        "tone": "",
        "ex": [
          {
            "name": "Fondos lastrados",
            "d": "dip",
            "sets": "3 × 4-6",
            "m": "pec",
            "cue": "Rango cómodo, sin rebote y con 2 reps en reserva. Descansa 3 min. Usa asistencia o peso corporal si lo necesitas.",
            "why": "Tu referencia de fuerza de empuje; compara siempre el mismo recorrido.",
            "strength": true
          },
          {
            "name": "Press inclinado con mancuernas",
            "d": "incl",
            "sets": "3 × 6-10",
            "m": "pec",
            "cue": "Banco a 25-35°, baja con control y deja 2 reps. Descansa 2-3 min.",
            "why": "Prioridad a la porción superior del pecho para dar más volumen bajo la clavícula."
          },
          {
            "name": "Aperturas en máquina · pec deck",
            "d": "fly",
            "sets": "2 × 10-15",
            "m": "pec",
            "cue": "Espalda apoyada, codos suaves y recorrido cómodo. Acerca los brazos sin despegar el tronco; RIR 2-3, 90 s.",
            "why": "Añade aducción del hombro sin otro press. No fuerces el estiramiento detrás del cuerpo."
          }
        ]
      },
      {
        "t": "Hombro y tríceps · dosis 1",
        "tone": "pump",
        "ex": [
          {
            "name": "Elevación lateral en polea",
            "d": "lateral",
            "sets": "3 × 12-20",
            "m": "dl",
            "cue": "Deja 1-2 reps en reserva. Codo suave, abre sin balanceo; 60-90 s.",
            "why": "Tres dosis semanales para desarrollar anchura visual; no hacen falta tres días de press."
          },
          {
            "name": "Extensión sobre cabeza en polea",
            "d": "trioh",
            "sets": "3 × 10-15",
            "m": "tri",
            "cue": "Codos estables y rango cómodo por encima de la cabeza. Deja 1-2 reps; 90 s.",
            "why": "Una extensión de codo complementa fondos y press sin otro empuje pesado."
          }
        ]
      },
      {
        "t": "Abdomen · carga progresiva",
        "tone": "wide",
        "ex": [
          {
            "name": "Crunch en polea o máquina abdominal",
            "d": "crunch",
            "sets": "3 × 8-15",
            "m": "core",
            "cue": "Acerca costillas a pelvis, sin tirar con los brazos ni hacer una bisagra de cadera. Deja 1-2 reps; 90 s.",
            "why": "Al completar 3 × 15 con el mismo control, añade el incremento mínimo."
          }
        ]
      }
    ]
  },
  {
    "id": "v4-d5",
    "n": "Viernes",
    "s": "Pecho · volumen y hombro",
    "short": "Pecho P",
    "tag": "Pump",
    "duration": "80-95 min",
    "focus": "INCLINADO / FONDOS / PULLOVER / ABS",
    "delt": true,
    "note": "Inclinado, fondos y pullover controlado. El pullover añade un patrón distinto, pero no expande la caja torácica ósea. Las series nuevas empiezan con margen.",
    "blocks": [
      {
        "t": "Preparación · 6-8 min",
        "tone": "calm",
        "ex": [
          {
            "name": "Movilidad de hombro y dorsal",
            "d": "mob",
            "sets": "1 ronda · sin fatiga",
            "m": "",
            "cue": "2 min suaves, 6 rotaciones torácicas por lado y 8 deslizamientos de brazos en pared. Después 2-3 aproximaciones al primer básico.",
            "why": "Prepara el recorrido sin cansarte antes de las series efectivas."
          }
        ]
      },
      {
        "t": "Pecho · segunda exposición",
        "tone": "wide",
        "ex": [
          {
            "name": "Press inclinado con mancuernas · pump",
            "d": "incl",
            "sets": "3 × 10-15",
            "m": "pec",
            "cue": "Misma técnica del lunes con menos peso. Deja 1-2 reps; 2 min.",
            "why": "Repite tu básico favorito en otro rango de repeticiones."
          },
          {
            "name": "Fondos a peso corporal",
            "d": "dip",
            "sets": "2 × 6-12",
            "m": "pec",
            "cue": "Deja 2-3 reps y usa asistencia si hace falta; 2 min.",
            "why": "Práctica de fondos con menos carga; no es un test de máximas repeticiones."
          },
          {
            "name": "Pullover con mancuerna",
            "d": "pullover",
            "sets": "2 × 10-15",
            "m": "pec",
            "cue": "Túmbate a lo largo del banco, cabeza y espalda apoyadas, pies firmes. Sujeta una mancuerna con ambas manos, codos algo flexionados. Baja detrás de la cabeza solo sin arquear la lumbar; RIR 3, 90 s.",
            "why": "Pecho y dorsal participan. Se contabiliza aquí en pecho, sin duplicar series en espalda; no promete expansión de costillas. Registra el peso total de la única mancuerna."
          }
        ]
      },
      {
        "t": "Hombro y tríceps · dosis 3",
        "tone": "pump",
        "ex": [
          {
            "name": "Press de hombro en máquina inclinada",
            "d": "pressm",
            "sets": "2 × 8-12",
            "m": "da",
            "cue": "Espalda apoyada, rango cómodo y 2 reps en reserva; 2 min.",
            "why": "Solo dos series: el deltoide anterior ya trabaja con el pecho."
          },
          {
            "name": "Elevación lateral en polea",
            "d": "lateral",
            "sets": "3 × 12-20",
            "m": "dl",
            "cue": "Deja 1-2 reps en reserva. Codo suave, abre sin balanceo; 60-90 s.",
            "why": "Tres dosis semanales para desarrollar anchura visual; no hacen falta tres días de press."
          },
          {
            "name": "Extensión en polea con cuerda",
            "d": "tripd",
            "sets": "3 × 10-15",
            "m": "tri",
            "cue": "Codos quietos, sin mover el tronco. Deja 1-2 reps; 90 s.",
            "why": "Tercera dosis directa; progresa sin irritar el codo."
          }
        ]
      },
      {
        "t": "Abdomen · segunda carga",
        "tone": "wide",
        "ex": [
          {
            "name": "Crunch en polea o máquina abdominal",
            "d": "crunch",
            "sets": "3 × 8-15",
            "m": "core",
            "cue": "Acerca costillas a pelvis, sin tirar con los brazos ni hacer una bisagra de cadera. Deja 1-2 reps; 90 s.",
            "why": "Al completar 3 × 15 con el mismo control, añade el incremento mínimo."
          }
        ]
      },
      {
        "t": "Cardio · caminar",
        "tone": "wet",
        "ex": [
          {
            "name": "Caminata · final suave",
            "d": "walk",
            "sets": "",
            "m": "",
            "cue": "Esfuerzo 3-4/10: puedes hablar en frases completas. Primeros y últimos 3 min suaves. Terreno llano o pendiente tolerable.",
            "why": "Aumenta minutos antes que intensidad. Si estás muy cansado, reduce duración o camina más suave.",
            "cardio": 1
          }
        ]
      }
    ]
  }
];
