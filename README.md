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

## Programa V-shape · 5 + 2

Lunes: pecho pesado, lateral, tríceps y abs; martes: espalda pesada, posterior y bíceps;
miércoles: recuperación activa; jueves: pierna completa, lateral y brazos ligeros;
viernes: pecho de volumen, hombro, tríceps, abs y caminata; sábado: espalda de volumen,
posterior, bíceps y abs; domingo: recuperación activa.

Prioridades semanales de partida: pecho 15 series (incluye 2 de pullover), espalda 17, lateral 9, posterior 6,
bíceps 8, tríceps 8 y abdomen 8. Se cuentan las series directas por músculo principal.
Pecho V5: lunes banca 3 × 4-6, inclinado 2 × 6-10 y aperturas 2 × 10-15; viernes
press sentado 2 × 8-12, inclinado 2 × 10-15, fondos 2 × 6-10 y pullover 2 × 10-15.
Banca: carga total de barra y discos; press sentado: misma máquina y ajuste.
Una sola sesión de pierna es el compromiso de esta etapa con prioridad de torso.
Dominadas y jalón se separan entre días; los remos distinguen dorsal y espalda alta.
El cardio pasa de 70 a 105 minutos semanales, con descarga en semana 4.
Miércoles y domingo incluyen caminata, movilidad, estiramientos cómodos y carga
ligera opcional de muñeca/gemelo, sin pretender tratar una lesión tendinosa.

La recuperación activa no contiene casillas obligatorias: una semana completa son 5 sesiones de pesas.
Las nuevas sesiones tienen identificadores propios; las casillas históricas conservan
su rutina original en el calendario (incluidas V2, V3 y los días de pecho de V4) y las marcas siguen usando las mismas claves.
En descarga se reducen tanto las series mostradas como las del gráfico de volumen.

Pulsa el dibujo de un ejercicio para ver dos posiciones ampliadas y su indicación técnica.
Las marcas guardan una serie de referencia por ejercicio y fecha. Un nuevo guardado
la sustituye. Para dominadas/fondos: 0 = peso corporal, positivo = lastre,
negativo = asistencia en kg; en mancuernas se anotan kg por mano, excepto en pullover,
donde se registra el peso total de la única mancuerna.

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
