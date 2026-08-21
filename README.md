# Fuerza · rutina y marcas

PWA de rutina de gimnasio (8 semanas, 3 días de cardio caminando) con registro de marcas,
calendario de entrenamientos, PR, medidas corporales, fotos de progreso, gráficos y copia de seguridad JSON. **100% offline**: fuentes
autoalojadas, sin CDN, sin backend. Los datos viven en el `localStorage` del
dispositivo (claves `gym-app-v1` y `gym-done-v1`; fotos en IndexedDB `gym-media-v1`).

## Estructura

```
index.html            página única (3 pestañas: Rutina / Progreso / Datos)
css/styles.css        estilos + @font-face locales
js/data.js            programa (DAYS) e iconos SVG
js/app.js             lógica, render y registro del service worker
sw.js                 service worker cache-first (caché versionada)
manifest.webmanifest  manifest de instalación
fonts/                Anton, Space Grotesk (400/500/700), JetBrains Mono (400/700) en .woff2
icons/                iconos PNG 192, 512 y 512 maskable
```

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
