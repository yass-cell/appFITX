# Fuerza / appFITX — memoria del proyecto

## Proyecto y publicación

- Proyecto local: `C:\Users\dell\Desktop\_PROJ\__appFITX_opus`.
- Repositorio establecido: `https://github.com/yass-cell/appFITX`.
- Rama de publicación: `main`; GitHub Pages desde la raíz de esa rama.
- App del móvil: `https://yass-cell.github.io/appFITX/`.
- Procedimiento recuperado del chat **app_Fuerza** y su contexto inicial aportado
  por el usuario; último despliegue de aquel chat: `42b7bb4`.
- Cuando se solicite publicar, revisar el diff, ejecutar las comprobaciones,
  incrementar la caché de `sw.js` si cambia código/recursos, commit y push a
  `origin main`. Comprobar sincronización y, cuando sea posible, despliegue.
- En el móvil: abrir la app habitual con conexión y pulsar **Actualizar**.
  El despliegue puede tardar; no afirmar que está publicado sin comprobarlo.

## Datos personales: preservar antes de modificar

- GitHub almacena código; NO contiene ni sincroniza automáticamente las marcas,
  medidas, fotos o sesiones del móvil.
- Los registros pertenecen al navegador/dispositivo y origen web. La app local,
  GitHub Pages, un HTML abierto como archivo y otro navegador tienen almacenes
  distintos. No presentar una copia de localhost como copia del móvil.
- Mantener las claves: `gym-app-v1` (marcas/bases/medidas/preferencias),
  `gym-done-v1` (casillas), IndexedDB `gym-media-v1`, almacén `photos`.
- No borrar almacenamiento ni recomendar borrar datos del sitio/desinstalar para
  actualizar. Conservar el origen habitual de la app instalada.
- Copias: **Datos → Exportar JSON**; alternativa **Ver / copiar JSON**. Incluyen
  marcas, casillas, medidas y fotos. **Importar JSON** fusiona por fecha; las
  entradas importadas prevalecen cuando coinciden ejercicio/fecha.
- Exportar desde CADA app/origen donde existan registros. Los datos del móvil
  necesitan una exportación en ese móvil; no se pueden recuperar del repo.
- `backups-private/` y `fuerza-completa-*.json` están ignorados por Git. No incluir
  copias personales, fotos, credenciales ni valores reales de registros en commits.
- Los slugs de nombres identifican las marcas. Mantener nombres estables o
  conservar las marcas antiguas en Archivo. Al cambiar ejercicios obligatorios,
  conservar la definición histórica del día para no invalidar sesiones completas.

## Estructura vigente

- HTML/CSS/JS nativos; sin framework, backend ni CDN. Fuentes locales y uso offline.
- `index.html`: entrada publicada. `js/data.js`: datos y rutina histórica inicial.
- `js/program-history.js`: definiciones históricas; `js/program.js`: rutina actual.
- `js/exercise-art.js`: SVG locales de dos posiciones; `js/app.js`: interfaz y datos.
- `sw.js`: caché versionada y todos los recursos necesarios en `ASSETS`.
- Rutas relativas `./…` para funcionar bajo `/appFITX/` en Pages.
- `node scripts/build-portable.cjs` genera `fuerza-app.html`, excluido de Git.
- `node scripts/serve.cjs` sirve la app en `http://127.0.0.1:8123`.
- Si no está activo el servidor, el service worker puede mostrar una copia antigua;
  verificar el servidor y versión antes de interpretar lo que aparece en pantalla.

## Comprobaciones y alcance

```text
node scripts/build-portable.cjs
node --test tests/routine-compat.test.js tests/program.test.cjs tests/backup.test.cjs
git diff --check
```

- Revisar visualmente los cambios de interfaz y conservar los registros originales
  al probar botones. Usar datos ficticios en pruebas de importación/restauración.
- Los archivos `research-*`, `js/movement-atlas.js` y `tools/*research*` son borradores
  locales de otra exploración; no forman parte del despliegue actual.
- Preferencias actuales: interfaz oscura, colores por subcategoría, tarjetas
  pendientes tenues/translúcidas y completadas con color/brillo; selector de días
  fijo al desplazarse. Tarjetas compactas con una frase; pulsar dibujo o texto abre
  la descripción completa, series, descansos y recomendaciones.
  En móvil, acciones a la derecha: Hacer arriba y Marca debajo. Los ejercicios de
  descanso también se pueden marcar; siguen siendo opcionales y no suman a las
  cinco sesiones de pesas semanales.
  Las indicaciones nuevas del usuario prevalecen sobre diseños
  y repartos de rutina antiguos.
