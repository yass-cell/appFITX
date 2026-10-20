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

/* V5 · semana completa publicada antes de V6 (solo para interpretar el calendario histórico). */
const PREVIOUS_V5_DAYS=[
  {
    "id": "v5-d1",
    "n": "Lunes",
    "s": "Pecho · tensión",
    "short": "Pecho H",
    "tag": "Heavy",
    "duration": "65-80 min",
    "focus": "BANCA / PECTORAL SUPERIOR / LATERAL / ABS",
    "delt": true,
    "note": "Banca primero para progresar en fuerza, inclinado para la porción superior y aperturas para completar el pecho. Siete series de pecho; los fondos pasan al viernes.",
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
            "name": "Press banca",
            "d": "bench",
            "sets": "3 × 4-6",
            "m": "pec",
            "cue": "Pies firmes, glúteos apoyados y escápulas estables. Baja hacia el pecho sin rebote, con antebrazos casi verticales. Deja 2 reps; descansa 3 min. Usa soportes de seguridad o ayuda.",
            "why": "Cuando completes 3 × 6 con el mismo recorrido y RIR 2, sube el incremento mínimo. Registra el peso total de barra y discos; en descarga haz 2 × 4-5 con margen.",
            "strength": true
          },
          {
            "name": "Press inclinado con mancuernas",
            "d": "incl",
            "sets": "2 × 6-10",
            "m": "pec",
            "cue": "Banco a 25-35°, baja con control y deja 2 reps. Descansa 2-3 min.",
            "why": "Dos series hoy y dos el viernes para mantener el trabajo de pecho superior."
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
            "why": "Una extensión de codo complementa los presses sin otro empuje pesado."
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
    "id": "v4-d2",
    "n": "Martes",
    "s": "Espalda · anchura y fuerza",
    "short": "Espalda H",
    "tag": "Heavy",
    "duration": "70-85 min",
    "focus": "DOMINADAS / REMO LIBRE / DORSAL / BÍCEPS",
    "note": "Dominadas, remo con barra hacia el abdomen alto y remo unilateral hacia la cadera. Son 7 series de espalda: una más que antes, repartidas entre tres ejercicios.",
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
            "name": "Remo inclinado con barra",
            "d": "rowbar",
            "sets": "2 × 8-10",
            "m": "esp",
            "cue": "Bisagra de cadera, rodillas suaves y tronco inmóvil. Lleva la barra al abdomen alto con codos a 45-60°; RIR 3, 2 min.",
            "why": "No levantes el torso en cada repetición. Si la zona lumbar limita, sustituye estas mismas series por remo con pecho apoyado."
          },
          {
            "name": "Remo con mancuerna a una mano",
            "d": "rowdb",
            "sets": "2 × 8-12 por lado",
            "m": "esp",
            "cue": "Mano y rodilla apoyadas, tronco estable. Lleva el codo hacia la cadera sin girar el torso; 90-120 s entre rondas.",
            "why": "Sesgo hacia dorsal. Bajamos a dos series por lado para dar espacio al remo con barra; cuentan como dos, no cuatro."
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
    "id": "v4-d3",
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
    "id": "v4-d4",
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
    "id": "v5-d5",
    "n": "Viernes",
    "s": "Pecho · volumen y hombro",
    "short": "Pecho P",
    "tag": "Pump",
    "duration": "85-100 min",
    "focus": "PRESS SENTADO / INCLINADO / FONDOS / ABS",
    "delt": true,
    "note": "Press sentado primero para dar prioridad al empuje horizontal que prefieres, después inclinado, fondos y pullover. Ocho series repartidas entre cuatro ejercicios; no hace falta llevarlas al fallo.",
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
            "name": "Press de pecho sentado en máquina",
            "d": "chestpress",
            "sets": "2 × 8-12",
            "m": "pec",
            "cue": "Ajusta el asiento para que las asas queden a la altura del pecho. Espalda apoyada, muñecas alineadas y codos algo por debajo de los hombros. Empuja al frente sin despegar el tronco; RIR 2, 2 min.",
            "why": "Empuje horizontal para el pectoral, con énfasis esternocostal. Al lograr 2 × 12 controladas, sube la mínima placa. Compara cargas solo en la misma máquina y ajuste."
          },
          {
            "name": "Press inclinado con mancuernas · pump",
            "d": "incl",
            "sets": "2 × 10-15",
            "m": "pec",
            "cue": "Misma técnica del lunes con menos peso. Deja 1-2 reps; 2 min.",
            "why": "Segunda exposición semanal de pecho superior; dos series para dejar espacio al press sentado."
          },
          {
            "name": "Fondos lastrados",
            "d": "dip",
            "sets": "2 × 6-10",
            "m": "pec",
            "cue": "Mantén un recorrido cómodo, sin rebote. Usa tu peso, asistencia o lastre para dejar 2 reps; descansa 2-3 min.",
            "why": "Conserva fuerza en fondos. Al completar 2 × 10 limpias, añade el mínimo lastre o reduce asistencia. Registra 0 para peso corporal, positivo para lastre y negativo para asistencia."
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
  },
  {
    "id": "v4-d6",
    "n": "Sábado",
    "s": "Espalda · espesor y detalle",
    "short": "Espalda P",
    "tag": "Pump",
    "duration": "75-90 min",
    "focus": "ESPALDA ALTA / DORSAL / POSTERIOR / ABS",
    "note": "Remo alto primero, jalón y remo hacia la cadera. Termina con dos series de brazos rectos: trabajo de dorsal con poca demanda de bíceps. Son 10 series de espalda; no añadas más al terminar.",
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
        "t": "Espalda · espesor y dorsal",
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
          },
          {
            "name": "Jalón de brazos rectos en polea",
            "d": "straightarm",
            "sets": "2 × 12-20",
            "m": "esp",
            "cue": "Codos ligeramente flexionados y fijos. Desde brazos elevados, lleva la barra hacia los muslos sin balancearte ni arquear la espalda; RIR 2-3, 60-90 s.",
            "why": "Extensión de hombro con poca flexión del codo. Si el pullover del viernes deja fatiga que limita el recorrido, omite estas dos series ese día."
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
    "id": "v4-d7",
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

/* V7 · semana completa publicada antes de V8 (solo para interpretar el calendario histórico). */
const PREVIOUS_V7_DAYS=[
  {
    "id": "v7-d1",
    "n": "Lunes",
    "s": "Pecho + tríceps + hombro",
    "short": "Pecho",
    "tag": "Fuerza",
    "duration": "65-75 min",
    "focus": "BANCA / FONDOS / INCLINADO / Y-RAISE / TRÍCEPS + L-SIT",
    "delt": true,
    "note": "Banca con serie top, fondos lastrados e inclinado con mancuernas. Después Y-raise para el hombro, tríceps sobre la cabeza y L-sit.",
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
            "cue": "2 min suaves, 6 rotaciones torácicas por lado y 8 deslizamientos de brazos en pared. Después 2-3 aproximaciones al primer ejercicio.",
            "why": "Prepara el recorrido sin cansarte antes de las series efectivas."
          }
        ]
      },
      {
        "t": "Fuerza · banca",
        "tone": "",
        "ex": [
          {
            "name": "Press banca",
            "d": "bench",
            "sets": "",
            "m": "pec",
            "cue": "Calienta con 3-4 aproximaciones. Primero la serie top, la más pesada del día; después 3 series con el porcentaje indicado menos de carga. Pies firmes, glúteos apoyados y escápulas estables; baja al pecho bajo sin rebote. Usa soportes de seguridad o ayuda. Descansa 3 min.",
            "why": "Semana de reps: misma carga en la top y una repetición más. Semana de kg: sube un salto y mantén las reps. Registra la serie top: el gráfico de 1RM estimado muestra la progresión. Anota el peso total de barra y discos.",
            "strength": true
          }
        ]
      },
      {
        "t": "Pecho · calistenia y rango",
        "tone": "",
        "ex": [
          {
            "name": "Fondos lastrados",
            "d": "dip",
            "sets": "3 × 6-10",
            "m": "pec",
            "cue": "Tronco algo inclinado, baja hasta que el hombro quede un poco por debajo del codo y sube sin rebote. Deja 1-2 reps; 2 min.",
            "why": "Calistenia lastrada dos veces por semana: pecho bajo y tríceps. Registra 0 para peso corporal, positivo para lastre y negativo para asistencia."
          },
          {
            "name": "Press inclinado con mancuernas",
            "d": "incl",
            "sets": "3 × 8-12",
            "m": "pec",
            "cue": "Banco a 25-35°, baja hasta notar el estiramiento y empuja sin chocar las mancuernas. Deja 1-2 reps; 2 min.",
            "why": "Pecho alto con más recorrido que la barra. Anota kg por mancuerna.",
            "inc": 2
          }
        ]
      },
      {
        "t": "Superserie A · hombro + tríceps",
        "tone": "pump",
        "ex": [
          {
            "name": "Y-raise en polea",
            "d": "yraise",
            "sets": "3 × 12-15",
            "m": "dl",
            "cue": "Dos poleas bajas cruzadas. Sube los brazos en diagonal formando una Y por encima de la cabeza, pulgares arriba y sin encoger hombros. Pasa a A2 sin descanso.",
            "why": "Deltoide lateral y trapecio bajo en un rango que las elevaciones normales no cargan: hombro más ancho y sano.",
            "inc": 1.25,
            "pair": "A1"
          },
          {
            "name": "Extensión sobre cabeza en polea",
            "d": "trioh",
            "sets": "3 × 10-15",
            "m": "tri",
            "cue": "De espaldas a la polea, codos arriba y costillas controladas. Extiende sin mover los hombros. Descansa 90 s y repite A1.",
            "why": "La cabeza larga del tríceps crece más con el brazo por encima de la cabeza: brazo más ancho.",
            "inc": 1.25,
            "pair": "A2"
          }
        ]
      },
      {
        "t": "Core · skill",
        "tone": "wide",
        "ex": [
          {
            "name": "L-sit en paralelas",
            "d": "lsit",
            "sets": "3 × 10-20 s",
            "m": "core",
            "cue": "Hombros abajo y brazos bloqueados; piernas recogidas, una estirada o las dos según tu nivel. 90 s.",
            "why": "Fuerza de core y la skill que quieres aprender. Al llegar a 3 × 20 s, pasa a la siguiente progresión."
          }
        ]
      }
    ]
  },
  {
    "id": "v7-d2",
    "n": "Martes",
    "s": "Espalda + bíceps",
    "short": "Espalda",
    "tag": "Fuerza",
    "duration": "65-75 min",
    "focus": "DOMINADAS LASTRADAS / REMO A UNA MANO / REMO ALTO / FACE PULL / BÍCEPS",
    "note": "Espalda a full: dominada lastrada con serie top, remo a una mano y remo alto para el espesor. Face pull para el hombro y bíceps con martillo para el braquiorradial.",
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
            "cue": "2 min suaves, 6 rotaciones torácicas por lado y 8 deslizamientos de brazos en pared. Después 2-3 aproximaciones al primer ejercicio.",
            "why": "Prepara el recorrido sin cansarte antes de las series efectivas."
          }
        ]
      },
      {
        "t": "Fuerza · dominada",
        "tone": "",
        "ex": [
          {
            "name": "Dominada lastrada",
            "d": "pull",
            "sets": "",
            "m": "esp",
            "cue": "Calienta con 3-4 aproximaciones. Primero la serie top, la más pesada del día; después 3 series con el porcentaje indicado menos de carga. Agarre prono algo más ancho que los hombros. Sube sin balanceo hasta superar la barra con la barbilla y baja hasta casi extender. Si aún no haces 4 limpias, usa asistencia. Descansa 3 min.",
            "why": "Semana de reps: misma carga en la top y una repetición más. Semana de kg: sube un salto y mantén las reps. Registra la serie top: el gráfico de 1RM estimado muestra la progresión. Registra 0 para peso corporal, positivo para lastre y negativo para asistencia.",
            "strength": true
          }
        ]
      },
      {
        "t": "Espalda · espesor",
        "tone": "wide",
        "ex": [
          {
            "name": "Remo con mancuerna a una mano",
            "d": "rowdb",
            "sets": "3 × 8-12 por lado",
            "m": "esp",
            "cue": "Mano y rodilla apoyadas, deja que el hombro baje al estirar y lleva el codo hacia la cadera sin girar el torso. 90 s entre rondas.",
            "why": "Dorsal con mucho recorrido. Cuentan como tres series, no seis. Anota kg de la mancuerna.",
            "inc": 2
          },
          {
            "name": "Remo alto con pecho apoyado",
            "d": "rowhigh",
            "sets": "3 × 8-12",
            "m": "esp",
            "cue": "Codos a 45-60°, tira hacia el pecho bajo y junta las escápulas sin encoger hombros. Deja 1-2 reps; 2 min.",
            "why": "Espesor de espalda alta sin cargar la zona lumbar."
          },
          {
            "name": "Face pull en polea",
            "d": "rowhigh",
            "sets": "3 × 15-20",
            "m": "dpo",
            "cue": "Polea a la altura de la cara, tira de la cuerda hacia la frente separando las manos y con codos altos. Pausa de 1 s; 60 s.",
            "why": "Deltoide posterior y rotadores: hombro completo y sano.",
            "inc": 1.25
          }
        ]
      },
      {
        "t": "Superserie B · bíceps + braquiorradial",
        "tone": "pump",
        "ex": [
          {
            "name": "Curl inclinado con mancuernas",
            "d": "curlinc",
            "sets": "3 × 8-12",
            "m": "bi",
            "cue": "Brazo quieto detrás del tronco, sin adelantar el hombro. Pasa a B2 sin descanso.",
            "why": "Cabeza larga del bíceps en estiramiento: de las variantes que más crecen.",
            "inc": 2,
            "pair": "B1"
          },
          {
            "name": "Curl martillo",
            "d": "hammer",
            "sets": "3 × 8-12",
            "m": "bi",
            "cue": "Agarre neutro, codos quietos y sin balanceo; baja en 2 s. Descansa 90 s y repite B1.",
            "why": "Braquial y braquiorradial: el brazo se ve más grueso de frente y el antebrazo más ancho.",
            "inc": 2,
            "pair": "B2"
          }
        ]
      },
      {
        "t": "Antebrazo",
        "tone": "wide",
        "ex": [
          {
            "name": "Curl de muñeca con mancuerna",
            "d": "wrist",
            "sets": "3 × 12-20",
            "m": "ant",
            "cue": "Antebrazo apoyado y palma arriba. Deja rodar la mancuerna hasta los dedos y sube flexionando la muñeca. Deja 1-2 reps; 60 s.",
            "why": "Flexores del antebrazo: volumen directo que los remos no dan.",
            "inc": 2
          }
        ]
      }
    ]
  },
  {
    "id": "v7-d3",
    "n": "Miércoles",
    "s": "Pierna + brazo + core",
    "short": "Pierna",
    "tag": "Build",
    "duration": "75-85 min",
    "focus": "SALTOS / PRENSA / BÚLGARA / ISQUIOS / BRAZOS / CORE",
    "note": "Pierna una vez, bien hecha: saltos para piernas ágiles, prensa con serie top, búlgara y dos de isquio. Después una superserie corta de brazos y core colgado.",
    "blocks": [
      {
        "t": "Preparación · cadera 8 min",
        "tone": "calm",
        "ex": [
          {
            "name": "Movilidad de cadera y tobillo",
            "d": "hip90",
            "sets": "1 ronda · sin fatiga",
            "m": "",
            "cue": "6 transiciones 90/90 por lado, 5 sentadillas cosacas por lado y 8 avances de rodilla sobre el tobillo. Después 3-4 aproximaciones a la prensa.",
            "why": "Abre la cadera antes de cargarla: más rango en la búlgara y en el rumano."
          }
        ]
      },
      {
        "t": "Potencia · piernas ágiles",
        "tone": "",
        "ex": [
          {
            "name": "Saltos al cajón",
            "d": "boxjump",
            "sets": "3 × 5",
            "m": "pie",
            "cue": "Salta con los brazos, aterriza suave con las rodillas siguiendo los pies y baja andando del cajón. Cajón a una altura que domines; 90 s.",
            "why": "Velocidad y potencia de pierna. Pocas repeticiones, siempre frescas."
          }
        ]
      },
      {
        "t": "Fuerza · prensa",
        "tone": "",
        "ex": [
          {
            "name": "Prensa de pierna horizontal",
            "d": "legpress",
            "sets": "",
            "m": "pie",
            "cue": "Calienta con 3-4 aproximaciones. Primero la serie top, la más pesada del día; después 3 series con el porcentaje indicado menos de carga. Pelvis apoyada, rodillas siguiendo los pies y bajada sin redondear la lumbar. Descansa 3 min.",
            "why": "Semana de reps: misma carga en la top y una repetición más. Semana de kg: sube un salto y mantén las reps. Registra la serie top: el gráfico de 1RM estimado muestra la progresión.",
            "strength": true
          }
        ]
      },
      {
        "t": "Pierna · volumen",
        "tone": "",
        "ex": [
          {
            "name": "Sentadilla búlgara con mancuernas",
            "d": "bss",
            "sets": "3 × 8-12 por pierna",
            "m": "pie",
            "cue": "Pie trasero sobre el banco, tronco algo inclinado y rodilla delantera siguiendo el pie. Baja con control; RIR 2, 90-120 s.",
            "why": "Cuádriceps, glúteo y equilibrio a una pierna. Cuentan como tres series, no seis.",
            "inc": 2
          },
          {
            "name": "Peso muerto rumano con mancuernas",
            "d": "rdl",
            "sets": "3 × 8-12",
            "m": "ham",
            "cue": "Rodillas suaves, cadera atrás y pesos pegados a las piernas. Baja hasta donde mantengas la espalda neutra; RIR 2, 2 min.",
            "why": "Isquios y glúteo estirados bajo carga.",
            "inc": 2
          },
          {
            "name": "Curl femoral sentado",
            "d": "legcurl",
            "sets": "3 × 10-15",
            "m": "ham",
            "cue": "Cadera flexionada, muslo sujeto y regreso lento. Deja 1-2 reps; 90 s.",
            "why": "Sentado, el isquio trabaja más estirado y crece más que tumbado."
          },
          {
            "name": "Elevación de gemelo",
            "d": "calf",
            "sets": "3 × 10-15",
            "m": "cal",
            "cue": "Pausa de 2 s abajo con el talón estirado y sube sin rebote. Deja 1-2 reps; 60-90 s.",
            "why": "La pausa abajo importa más que la carga."
          }
        ]
      },
      {
        "t": "Superserie C · brazos",
        "tone": "wide",
        "ex": [
          {
            "name": "Curl en polea baja",
            "d": "curlc",
            "sets": "3 × 10-15",
            "m": "bi",
            "cue": "Codos quietos junto al cuerpo y bajada en 2 s. Pasa a C2 sin descanso.",
            "why": "Tensión constante en el bíceps; el único curl en polea de la semana.",
            "inc": 1.25,
            "pair": "C1"
          },
          {
            "name": "Extensión en polea con cuerda",
            "d": "tripd",
            "sets": "3 × 10-15",
            "m": "tri",
            "cue": "Codos pegados, abre la cuerda abajo y sube despacio. Descansa 60-90 s y repite C1.",
            "why": "Cabeza lateral del tríceps con tensión constante.",
            "inc": 1.25,
            "pair": "C2"
          }
        ]
      },
      {
        "t": "Core · colgado",
        "tone": "wide",
        "ex": [
          {
            "name": "Elevación de rodillas colgado",
            "d": "hangraise",
            "sets": "3 × 8-15",
            "m": "core",
            "cue": "Sube las rodillas y termina enrollando la pelvis hacia las costillas, sin balanceo. Deja 2 reps; 90 s.",
            "why": "Al hacer 3 × 15 limpias, estira una pierna; después las dos."
          }
        ]
      }
    ]
  },
  {
    "id": "v7-d4",
    "n": "Jueves",
    "s": "Movilidad de cadera + core",
    "short": "Movilidad",
    "tag": "Sin pesas",
    "rest": true,
    "wet": true,
    "duration": "25-40 min",
    "focus": "CADERA / CORE / DOMINADAS / PASOS",
    "note": "Sin pesas: cadera muy móvil, core sólido y piernas sueltas. Ningún bloque es obligatorio ni cuenta como sesión.",
    "blocks": [
      {
        "t": "Cadera · 12 min",
        "tone": "calm",
        "ex": [
          {
            "name": "Transiciones 90/90 de cadera",
            "d": "hip90",
            "sets": "2 × 6 por lado",
            "m": "",
            "cue": "Rota despacio sin apoyar las manos si puedes; pausa 2 s en cada lado.",
            "why": "Rotación interna y externa: la base de una cadera móvil."
          },
          {
            "name": "Sentadilla cosaca",
            "d": "cossack",
            "sets": "2 × 5 por lado",
            "m": "",
            "cue": "Pies muy abiertos, baja sobre una pierna con la otra estirada y el talón apoyado. Sube sin prisa.",
            "why": "Aductores y cadera en rango largo; prepara piernas ágiles para cambios de dirección."
          },
          {
            "name": "Estiramiento de flexor de cadera",
            "d": "hipstretch",
            "sets": "2 × 30 s por lado",
            "m": "",
            "cue": "Media rodilla en el suelo, glúteo apretado y pelvis recogida. Avanza muy poco.",
            "why": "Contrarresta las horas sentado y libera la extensión de cadera."
          }
        ]
      },
      {
        "t": "Core · 8 min",
        "tone": "calm",
        "ex": [
          {
            "name": "L-sit · práctica",
            "d": "lsit",
            "sets": "4 × 10-20 s",
            "m": "",
            "cue": "En paralelas o en el suelo con apoyos: hombros abajo, piernas recogidas o estiradas según tu nivel.",
            "why": "Práctica técnica de la skill: suma segundos, no fatiga."
          }
        ]
      },
      {
        "t": "Dominadas · práctica opcional",
        "tone": "calm",
        "ex": [
          {
            "name": "Dominadas sin lastre · práctica",
            "d": "pull",
            "sets": "4 × 3-5 · opcional",
            "m": "",
            "cue": "Repeticiones perfectas y lejos del fallo: para con 3-4 en la recámara. 2 min entre series.",
            "why": "Más frecuencia de dominadas sin fatiga: el patrón mejora y la fuerza del martes y el sábado sube antes."
          }
        ]
      },
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
      }
    ]
  },
  {
    "id": "v7-d5",
    "n": "Viernes",
    "s": "Hombro + pecho + tríceps",
    "short": "Hombro",
    "tag": "Fuerza",
    "duration": "70-80 min",
    "focus": "PRESS MILITAR / FONDOS / PRESS + APERTURAS / LATERAL / PRESS FRANCÉS",
    "delt": true,
    "note": "Press militar con serie top: el ejercicio de hombro que más fuerza construye. Fondos lastrados, pecho con aperturas, lateral con parciales y press francés para un brazo más ancho.",
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
            "cue": "2 min suaves, 6 rotaciones torácicas por lado y 8 deslizamientos de brazos en pared. Después 2-3 aproximaciones al primer ejercicio.",
            "why": "Prepara el recorrido sin cansarte antes de las series efectivas."
          }
        ]
      },
      {
        "t": "Fuerza · press militar",
        "tone": "",
        "ex": [
          {
            "name": "Press militar con barra",
            "d": "ohp",
            "sets": "",
            "m": "da",
            "cue": "Calienta con 3-4 aproximaciones. Primero la serie top, la más pesada del día; después 3 series con el porcentaje indicado menos de carga. De pie, glúteos y abdomen apretados, barra desde la clavícula hasta bloquear sobre la cabeza; la cabeza pasa por debajo de la barra sin arquear la lumbar. Descansa 3 min.",
            "why": "Semana de reps: misma carga en la top y una repetición más. Semana de kg: sube un salto y mantén las reps. Registra la serie top: el gráfico de 1RM estimado muestra la progresión. Anota el peso total de barra y discos.",
            "strength": true
          }
        ]
      },
      {
        "t": "Pecho · calistenia y bombeo",
        "tone": "",
        "ex": [
          {
            "name": "Fondos lastrados · volumen",
            "d": "dip",
            "sets": "3 × 8-12",
            "m": "pec",
            "cue": "Algo más ligeros que el lunes: recorrido completo y controlado, sin rebote. Deja 1-2 reps; 2 min.",
            "why": "Segunda dosis semanal de calistenia lastrada."
          },
          {
            "name": "Press de pecho sentado en máquina",
            "d": "chestpress",
            "sets": "2 × 8-12",
            "m": "pec",
            "cue": "Asas a la altura del pecho, espalda apoyada y codos algo por debajo de los hombros. Pasa a D2 sin descanso.",
            "why": "Empuje estable para acumular volumen. Compara cargas solo en la misma máquina.",
            "pair": "D1"
          },
          {
            "name": "Aperturas con mancuernas",
            "d": "flydb",
            "sets": "3 × 10-15",
            "m": "pec",
            "cue": "Tumbado en banco plano, codos suaves y fijos. Abre hasta notar el estiramiento del pecho y cierra en arco sin chocar las mancuernas. Descansa 2 min y repite D1.",
            "why": "Pecho en estiramiento con carga: bombeo y crecimiento. Anota kg por mancuerna.",
            "inc": 2,
            "pair": "D2"
          }
        ]
      },
      {
        "t": "Hombro · lateral",
        "tone": "pump",
        "ex": [
          {
            "name": "Elevación lateral en polea · inclinado",
            "d": "lateral",
            "sets": "4 × 12-20",
            "m": "dl",
            "cue": "Sujétate al poste e inclínate alejándote de la polea. En la última serie, al fallar, 8-10 medias repeticiones desde abajo. 60-90 s.",
            "why": "Las parciales suman tensión cuando el recorrido completo ya no sale.",
            "inc": 1.25
          }
        ]
      },
      {
        "t": "Superserie E · tríceps + core",
        "tone": "wide",
        "ex": [
          {
            "name": "Press francés con barra EZ",
            "d": "skull",
            "sets": "3 × 8-12",
            "m": "tri",
            "cue": "Tumbado, codos hacia el techo y algo inclinados hacia atrás; baja la barra detrás de la frente y extiende sin abrir los codos. Pasa a E2 sin descanso.",
            "why": "Cabeza larga del tríceps con carga pesada: el tríceps es dos tercios del grosor del brazo.",
            "pair": "E1"
          },
          {
            "name": "Rueda abdominal",
            "d": "abwheel",
            "sets": "3 × 6-12",
            "m": "core",
            "cue": "De rodillas, costillas abajo y glúteo apretado; rueda hasta donde no se arquee la lumbar y vuelve. Descansa 90 s y repite E1.",
            "why": "Antiextensión: el core fuerte que sostiene banca, press militar y dominadas.",
            "pair": "E2"
          }
        ]
      }
    ]
  },
  {
    "id": "v7-d6",
    "n": "Sábado",
    "s": "Espalda + bíceps + hombro",
    "short": "Espalda 2",
    "tag": "Pump",
    "duration": "65-75 min",
    "focus": "REMO CON BARRA / DOMINADAS SUPINAS / JALÓN / HOMBRO / BÍCEPS",
    "delt": true,
    "note": "Segundo día de espalda: remo con barra con serie top para el espesor, dominadas supinas lastradas y jalón al pecho. Hombro posterior y lateral, y curl predicador con curl inverso para el braquiorradial.",
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
            "cue": "2 min suaves, 6 rotaciones torácicas por lado y 8 deslizamientos de brazos en pared. Después 2-3 aproximaciones al primer ejercicio.",
            "why": "Prepara el recorrido sin cansarte antes de las series efectivas."
          }
        ]
      },
      {
        "t": "Fuerza · remo",
        "tone": "",
        "ex": [
          {
            "name": "Remo con barra",
            "d": "rowbar",
            "sets": "",
            "m": "esp",
            "cue": "Calienta con 3-4 aproximaciones. Primero la serie top, la más pesada del día; después 3 series con el porcentaje indicado menos de carga. Bisagra de cadera, espalda neutra y barra hacia el ombligo sin dar tirones con el tronco. Descansa 3 min.",
            "why": "Semana de reps: misma carga en la top y una repetición más. Semana de kg: sube un salto y mantén las reps. Registra la serie top: el gráfico de 1RM estimado muestra la progresión.",
            "strength": true
          }
        ]
      },
      {
        "t": "Espalda · calistenia y anchura",
        "tone": "wide",
        "ex": [
          {
            "name": "Dominada supina lastrada",
            "d": "pull",
            "sets": "3 × 6-10",
            "m": "esp",
            "cue": "Agarre supino a la anchura de los hombros. Sube hasta pasar la barbilla y baja hasta casi extender. Deja 1-2 reps; 2 min.",
            "why": "Segunda dosis semanal de dominadas, con más bíceps. Registra 0 para peso corporal, positivo para lastre y negativo para asistencia."
          },
          {
            "name": "Jalón al pecho",
            "d": "latp",
            "sets": "3 × 10-12",
            "m": "esp",
            "cue": "Agarre algo más ancho que los hombros. Tira hacia la parte alta del pecho con los codos abajo y el torso casi quieto. Deja 1-2 reps; 90 s.",
            "why": "Volumen de dorsal tras las dominadas, con carga fácil de progresar."
          }
        ]
      },
      {
        "t": "Superserie F · hombro",
        "tone": "pump",
        "ex": [
          {
            "name": "Pájaro en máquina",
            "d": "rear",
            "sets": "3 × 15-20",
            "m": "dpo",
            "cue": "Pecho apoyado, codos suaves y pausa al abrir. Pasa a F2 sin descanso.",
            "why": "Deltoide posterior: hombro grande visto de lado y de espaldas.",
            "inc": 1.25,
            "pair": "F1"
          },
          {
            "name": "Elevación lateral con mancuernas",
            "d": "latdb",
            "sets": "3 × 12-20",
            "m": "dl",
            "cue": "Codos suaves, sube hasta la línea del hombro y baja en 2 s. Descansa 60-90 s y repite F1.",
            "why": "Tercera dosis de lateral de la semana.",
            "inc": 2,
            "pair": "F2"
          }
        ]
      },
      {
        "t": "Superserie G · bíceps + braquiorradial",
        "tone": "wide",
        "ex": [
          {
            "name": "Curl predicador",
            "d": "preacher",
            "sets": "3 × 8-12",
            "m": "bi",
            "cue": "Brazo apoyado, baja hasta casi extender sin soltar la tensión y sube sin despegar el codo. Pasa a G2.",
            "why": "Cabeza corta del bíceps; el apoyo impide hacer trampa.",
            "pair": "G1"
          },
          {
            "name": "Curl inverso con barra EZ",
            "d": "revcurl",
            "sets": "3 × 10-15",
            "m": "ant",
            "cue": "Agarre prono, codos pegados al cuerpo; sube sin balanceo y baja en 2 s. Descansa 90 s y repite G1.",
            "why": "Braquiorradial y braquial: antebrazo grueso y brazo más ancho visto de frente.",
            "pair": "G2"
          }
        ]
      },
      {
        "t": "Antebrazo",
        "tone": "wide",
        "ex": [
          {
            "name": "Extensión de muñeca con mancuerna",
            "d": "wrist",
            "sets": "2 × 15-20",
            "m": "ant",
            "cue": "Antebrazo apoyado y palma abajo; sube y baja en 2 s. Deja 2 reps; 60 s.",
            "why": "Extensores del antebrazo: equilibran el agarre.",
            "inc": 2
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
    "id": "v7-d7",
    "n": "Domingo",
    "s": "Movilidad de cadera + core",
    "short": "Movilidad",
    "tag": "Sin pesas",
    "rest": true,
    "wet": true,
    "duration": "25-40 min",
    "focus": "CADERA / CORE / DOMINADAS / PASOS",
    "note": "Sin pesas: cadera muy móvil, core sólido y piernas sueltas. Ningún bloque es obligatorio ni cuenta como sesión.",
    "blocks": [
      {
        "t": "Cadera · 12 min",
        "tone": "calm",
        "ex": [
          {
            "name": "Transiciones 90/90 de cadera",
            "d": "hip90",
            "sets": "2 × 6 por lado",
            "m": "",
            "cue": "Rota despacio sin apoyar las manos si puedes; pausa 2 s en cada lado.",
            "why": "Rotación interna y externa: la base de una cadera móvil."
          },
          {
            "name": "Sentadilla cosaca",
            "d": "cossack",
            "sets": "2 × 5 por lado",
            "m": "",
            "cue": "Pies muy abiertos, baja sobre una pierna con la otra estirada y el talón apoyado. Sube sin prisa.",
            "why": "Aductores y cadera en rango largo; prepara piernas ágiles para cambios de dirección."
          },
          {
            "name": "Estiramiento de flexor de cadera",
            "d": "hipstretch",
            "sets": "2 × 30 s por lado",
            "m": "",
            "cue": "Media rodilla en el suelo, glúteo apretado y pelvis recogida. Avanza muy poco.",
            "why": "Contrarresta las horas sentado y libera la extensión de cadera."
          }
        ]
      },
      {
        "t": "Core · 8 min",
        "tone": "calm",
        "ex": [
          {
            "name": "L-sit · práctica",
            "d": "lsit",
            "sets": "4 × 10-20 s",
            "m": "",
            "cue": "En paralelas o en el suelo con apoyos: hombros abajo, piernas recogidas o estiradas según tu nivel.",
            "why": "Práctica técnica de la skill: suma segundos, no fatiga."
          }
        ]
      },
      {
        "t": "Dominadas · práctica opcional",
        "tone": "calm",
        "ex": [
          {
            "name": "Dominadas sin lastre · práctica",
            "d": "pull",
            "sets": "4 × 3-5 · opcional",
            "m": "",
            "cue": "Repeticiones perfectas y lejos del fallo: para con 3-4 en la recámara. 2 min entre series.",
            "why": "Más frecuencia de dominadas sin fatiga: el patrón mejora y la fuerza del martes y el sábado sube antes."
          }
        ]
      },
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
      }
    ]
  }
];
