# Fuerza · rutina y marcas

App publicada: https://yass-cell.github.io/appFITX/ · repositorio:
https://github.com/yass-cell/appFITX (`main`, GitHub Pages desde la raíz).
El procedimiento y las reglas de conservación de datos están en `AGENTS.md`.

PWA de rutina de gimnasio (8 semanas, 5 sesiones de fuerza, 2 descansos y 3 dosis progresivas de cardio) con registro de marcas,
calendario de entrenamientos, PR, medidas corporales, fotos de progreso, gráficos y copia de seguridad JSON. **100% offline**: fuentes
autoalojadas, sin CDN, sin backend. Los datos viven en el `localStorage` del
dispositivo (claves `gym-app-v1` y `gym-done-v1`; fotos en IndexedDB `gym-media-v1`).

## Estructura

```
index.html            página única (3 pestañas: Rutina / Progreso / Datos)
css/styles.css        estilos + @font-face locales
js/data.js            rutina anterior y catálogo histórico
js/program-history.js instantánea del programa 5 + 2 anterior para el calendario
js/program.js         programa V-shape, recuperación activa, cardio y descarga
js/exercise-art.js    dibujos SVG con dos posiciones por movimiento
js/app.js             lógica, render y registro del service worker
sw.js                 service worker cache-first (caché versionada)
manifest.webmanifest  manifest de instalación
fonts/                Anton, Space Grotesk (400/500/700), JetBrains Mono (400/700) en .woff2
icons/                iconos PNG 192, 512 y 512 maskable
```

## Programa V7 · Fuerza + hipertrofia · 5 + 2

Lunes: pecho + tríceps + hombro (banca con serie top, fondos lastrados, press inclinado con mancuernas,
superserie Y-raise en polea + extensión sobre cabeza, L-sit); martes: espalda + bíceps (dominada lastrada con
serie top, remo a una mano, remo alto con pecho apoyado, face pull, superserie curl inclinado + curl martillo,
curl de muñeca); miércoles: pierna + brazo + core (saltos al cajón, prensa con serie top, búlgara, rumano,
curl femoral sentado, gemelo, superserie curl en polea + extensión con cuerda, elevación de rodillas colgado);
jueves y domingo: movilidad de cadera + core (90/90, sentadilla cosaca, flexor de cadera, L-sit, práctica
opcional de dominadas y caminata); viernes: hombro + pecho + tríceps (press militar con barra con serie top,
fondos lastrados de volumen, superserie press sentado + aperturas con mancuernas, lateral con parciales,
superserie press francés + rueda abdominal); sábado: espalda + bíceps + hombro (remo con barra con serie top,
dominada supina lastrada, jalón al pecho, superserie pájaro + lateral, superserie curl predicador + curl inverso,
extensión de muñeca y caminata corta).

Series directas por semana: pecho 18, espalda 20, deltoide lateral 10, anterior 4, posterior 6,
bíceps 12, tríceps 9, antebrazo 8, core 9, cuádriceps 10, isquios 6 y gemelo 3.
Dominadas y fondos lastrados van dos días por semana. Los bloques con "opcional" en el título no cuentan
para completar el día ni en el volumen.

Progresión: semanas alternas (`WEEK_FOCUS` en `js/program.js`): 1 reps, 2 kg, 3 reps, 4 descarga, 5 kg,
6 reps, 7 kg, 8 test. En semanas de reps se mantiene la carga y se suma una repetición; en las de kg se sube
un salto (`inc`: 2,5 por defecto, 2 en mancuernas, 1,25 en poleas ligeras) al mínimo del rango. Cada tarjeta
muestra el objetivo de hoy y, en los cinco básicos, el back-off. Las superseries se marcan A1/A2… y el botón
de descanso aparece en el segundo ejercicio del par.
Banca: carga total de barra y discos; mancuernas: kg por mano.

La movilidad no contiene casillas obligatorias: una semana completa son 5 sesiones de pesas.
Las sesiones V7 tienen identificadores propios (v7-d1…d7); la semana V5 publicada y las rutinas anteriores
se conservan en `js/program-history.js` para interpretar el calendario y copias antiguas.

Progreso: con KG y REPES activos, cada ejercicio tiene su panel con kg en línea (eje izquierdo) y
repeticiones en barras (eje derecho); 1RM EST. dibuja el máximo estimado (Epley).

Empezar de cero: al abrir la nueva versión por primera vez con datos guardados aparece un aviso para exportar una copia
y borrar todo con dos toques (marcas, casillas, medidas, fotos y especialización de ese dispositivo).
El mismo botón está en Datos. No hay borrado automático.

Cada tarjeta muestra la última marca, el siguiente objetivo (doble progresión) y un botón de descanso
con el tiempo indicado en la técnica (cuenta atrás, vibración y pitido). Progreso incluye 1RM estimado
(Epley). Especialización 30 días (opcional): un músculo, 5 min al día durante 30 días y 10 días sin
trabajo directo; se guarda en `gym-app-v1.spec` y viaja en la copia JSON.

Pulsa el dibujo de un ejercicio para ver dos posiciones ampliadas y su indicación técnica. Los dibujos
usan huesos de longitud fija (cinemática inversa) y el color de la subcategoría para el músculo principal.
Las marcas guardan una serie de referencia por ejercicio y fecha. Un nuevo guardado
la sustituye. Para dominadas/fondos: 0 = peso corporal, positivo = lastre,
negativo = asistencia en kg; en mancuernas se anotan kg por mano.

## Actualizar y conservar los datos

1. En la app que contiene tus registros, abre **Datos → Exportar JSON**. Incluye
   marcas, casillas, medidas y fotos. Si la descarga no funciona, usa **Ver / copiar
   JSON** y guarda todo el texto en un archivo `.json`.
2. Actualiza el código con `git pull --ff-only` y ejecuta
   `node scripts/build-portable.cjs` para regenerar el HTML independiente.
3. En la PWA, acepta **Actualizar** cuando aparezca. En la misma dirección y
   navegador se conservan `localStorage` e IndexedDB; no borres los datos del sitio.
   La publicación se realiza con commit y push a `origin main`; la app instalada
   recibe los nuevos recursos de GitHub Pages cuando se completa el despliegue.
4. Si cambias de navegador, dispositivo o dirección (por ejemplo, de localhost a
   GitHub Pages), abre **Datos → Importar JSON** en el destino. Los registros se
   fusionan por ejercicio/fecha; las entradas de la copia prevalecen en coincidencias.

Git publica el código, no sincroniza tus entrenamientos entre dispositivos.
`backups-private/` y `fuerza-completa-*.json` están excluidos de Git para conservar
las copias personales en local. Mantén también una copia en un lugar privado fuera
de esta carpeta. Una exportación solo incluye los datos del navegador y dirección
desde los que la realizas.

## HTML independiente y comprobaciones

`node scripts/build-portable.cjs` genera `fuerza-app.html` con fuentes, estilos y
JavaScript integrados. Se puede abrir directamente sin instalar dependencias.
El HTML independiente no registra service worker. El almacenamiento pertenece
al navegador y al origen: exporta/importa una copia al cambiar de URL o dispositivo.

`node scripts/serve.cjs` sirve la app en `http://127.0.0.1:8123`.

`node --test tests/routine-compat.test.js tests/program.test.cjs tests/backup.test.cjs` verifica
compatibilidad histórica, cinco sesiones, descansos, progresión, dibujos y restauración de copias.

## Probar en local

El service worker no funciona abriendo `index.html` con doble clic (`file://`);
hace falta un servidor estático:

```bash
python -m http.server 8123
```

o, si tienes Node:

```bash
npx http-server -p 8123 -c-1
```

Abre <http://localhost:8123>. Para probar el modo offline: carga la página una
vez, para el servidor (o marca *Offline* en DevTools → Network) y recarga: la
app debe seguir funcionando con su tipografía intacta.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub y sube el contenido:

   ```bash
   git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
   git push -u origin main
   ```

2. En GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)` → Save**.
3. En un par de minutos la app queda en `https://TU-USUARIO.github.io/TU-REPO/`.

Todas las rutas del proyecto son relativas (`./...`), así que funciona igual en
la raíz de un dominio que bajo `/nombre-repo/`. El archivo `.nojekyll` evita que
GitHub Pages procese el sitio con Jekyll.

## Instalar en Android

1. Abre la URL de Pages en **Chrome**.
2. Pestaña **Datos** → botón **Instalar app** (o Menú ⋮ → *Añadir a pantalla de inicio*).
3. Queda con icono propio, a pantalla completa y funcionando sin conexión.

## Publicar una actualización

1. Haz tus cambios y **sube la versión del caché** en `sw.js`:
   `const CACHE='fuerza-v1'` → `'fuerza-v2'`.
2. `git push`. Al abrir la app aparecerá el aviso *"Hay una versión nueva"* con
   el botón **Actualizar**.

## Copias de seguridad

Pestaña **Datos** → *Exportar JSON* descarga `fuerza-completa-AAAA-MM-DD.json`
con marcas, casillas, medidas y fotos (formato `version: 2`). *Importar JSON*
fusiona por fecha sin borrar lo existente y sigue aceptando las copias antiguas.
Exporta de vez en cuando: si limpias los datos de Chrome, el historial local se pierde.
