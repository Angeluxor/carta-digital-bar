# Roadmap · Carta digital Sentidos restaurante-bar

Estado del producto y evolutivos acordados. Este documento es la fuente de verdad de lo que sigue.

## MVP (hecho)

- SPA React + Tailwind (`src/MenuSentidos.jsx`), mobile-first, lista para Vercel/Netlify.
- Datos desde Google Sheets vía OpenSheet (`/<ID_HOJA>/1`, primera pestaña), con respaldo local `INITIAL_DATA`.
  Columnas: `id, tipo, categoria, nombre, descripcion, precio, disponible, destacado`.
- Pantalla dividida Comidas / Bebidas con divisor redimensionable (arrastre, flechas ^ v y teclado).
- Carrusel infinito por sección, tarjetas centradas, chips de categoría, buscador en tiempo real.
- Modo noche / día (el modo día aún no está verificado visualmente en un navegador sin oscurecimiento forzado).
- Tarjetas tipográficas: insignia "Recomendado", sello "Agotado", precio con línea punteada.
- **Pedido "solo mostrar"**: botones `+ / −` en cada tarjeta, botón central **"Listo · n · total"** sobre el divisor
  y hoja "Tu pedido" (resumen con cantidades, total y hora) para mostrarla al mesero. Se guarda en el dispositivo (localStorage).
  No se envía a ningún lado.

## Evolutivo 1 · Enviar el pedido por WhatsApp

**Objetivo:** que el cliente envíe el pedido al restaurante sin intermediarios, a partir de la hoja "Tu pedido".

- Botón **"Enviar por WhatsApp"** en la hoja que abre `https://wa.me/<numero>?text=<pedido>` con el mensaje ya escrito
  (platos, cantidades, total, mesa, hora). Sin servidor ni API de pago.
- Datos que se necesitan del restaurante:
  - Número de WhatsApp (formato internacional, sin `+`), configurable con `VITE_WHATSAPP`.
  - Cómo identificar la mesa: campo "Mesa" en la hoja, o parámetro en la URL del QR (`?mesa=7`).
- Mensaje de ejemplo:
  ```
  Pedido · Mesa 7 · 9:01 p. m.
  2 × Res al vino o en chimichurri
  1 × Agua Tonic
  Total: $ 40.000
  ```
- Consideraciones:
  - Un QR por mesa con `?mesa=N` evita que el cliente escriba nada.
  - Para ítems sin precio, indicar "por consultar" en el mensaje.
  - Límite de largo de URL: pedidos muy grandes pueden requerir acortar el texto.
- Fase posterior (opcional): un pequeño backend o WhatsApp Business API para recibir pedidos estructurados
  y dar estado ("recibido", "en preparación"). Solo si el volumen lo justifica.

## Evolutivo 2 · Imágenes en las tarjetas

**Objetivo:** que las tarjetas no se vean tan vacías y el plato se reconozca de un vistazo.

- Nueva columna **`imagen`** en la hoja (URL). Si está vacía, la tarjeta sigue siendo tipográfica como hoy.
- Almacenamiento de las fotos (decidir una):
  - Carpeta `public/img/` en el repo: simple y rápido, pero hay que redesplegar para cambiar una foto.
  - Cloudinary / ImageKit (plan gratuito): URLs estables, redimensionado y WebP automático.
  - Google Drive: evitar, los enlaces son inestables para `<img>`.
- Diseño sugerido en móvil: miniatura **arriba** de la tarjeta (relación 16:10, ~40 % de la altura) o miniatura redonda a la derecha del título, para no consumir demasiado alto.
  Probar ambas con fotos reales antes de decidir.
- Requisitos técnicos: `loading="lazy"`, `width/height` fijos (evita saltos de layout), formato WebP, máx. ~800 px de ancho (~60 KB por foto),
  imagen de respaldo y degradado inferior para que el texto siga legible.
- Impacto a revisar: el carrusel infinito repite las tarjetas 3–7 veces; las copias deben compartir la misma imagen en caché.
  Con fotos, el alto de cada sección crece: revisar la posición por defecto del divisor.

## Ideas menores (sin priorizar)

- Recordar la posición del divisor entre visitas.
- Degradado en el borde derecho de los chips de categoría para sugerir que se pueden deslizar.
- Ocultar "Consultar" mientras no haya precios.
- PWA / uso sin conexión: instalar la carta en el teléfono y abrirla sin red (la hoja seguiría siendo la fuente cuando haya conexión).
- Versión en inglés para turistas (columnas `nombre_en`, `descripcion_en`).
- Etiquetas de alérgenos o picante en la hoja y en las tarjetas.
- Página por QR por mesa con saludo ("Mesa 7").

## Decisiones tomadas

| Tema | Decisión | Motivo |
| --- | --- | --- |
| Edición en la app | Eliminada | Los cambios no se sincronizaban; la hoja de Google es la única fuente de edición. |
| Pedido | Solo mostrar (MVP) | No requiere servidor ni cuentas; el envío por WhatsApp queda como evolutivo. |
| Captura de pantalla desde la web | Descartada | No es fiable en navegadores; el resumen en pantalla y la captura nativa del teléfono cubren el caso. |
| Categorías | Chips en todos los tamaños | Ocupan menos alto que un menú desplegable y se ven mejor en celular. |
| Pestaña de la hoja | `/1` en lugar de `Sheet1` | No depende del nombre de la pestaña. |
