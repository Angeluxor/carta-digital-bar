# Sentidos restaurante-bar · Carta digital

Carta digital interactiva (SPA) en **React + Tailwind CSS + Vite**, pensada primero para celular.
Los datos salen de una hoja de Google Sheets, así que el personal actualiza precios y disponibilidad sin tocar código.

## Características

- **Pantalla dividida** Comidas / Bebidas con divisor redimensionable (arrastre, flechas ^ v y teclado).
- **Carrusel infinito** por sección, con tarjetas centradas y chips de categoría.
- **Modo noche / día** (noche por defecto).
- **Tarjetas tipográficas** con insignia "Recomendado" y sello "Agotado".
- **Opciones por producto** (salsa, presentación, sabor) con botones dentro de la tarjeta; cada opción puede tener su propio precio.
- **Pedido para mostrar al mesero:** botones `+ / −` en cada tarjeta, botón central **Listo** y hoja "Tu pedido" con cantidades y total.
  El pedido vive en el dispositivo y no se envía a ningún lado.
- **Datos de respaldo** (`INITIAL_DATA`) si la hoja no responde.

## Hoja de Google Sheets

Primera pestaña de la hoja, con estas columnas en la fila 1:

| id | tipo | categoria | nombre | descripcion | precio | disponible | destacado | opciones | extras |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| pf-01 | comida | Platos Fuertes | Res | 250 g de res | 28000 | TRUE | TRUE | `Al vino: en reducción de hogao… \| Chimichurri` | |
| co-01 | bebida | Coctelería | Caipirinha | Cachaza, limón y azúcar | 18000 | TRUE | FALSE | | |

- `tipo`: `comida` o `bebida`.
- `disponible`: `FALSE` muestra el sello "Agotado" y quita el botón para agregar.
- `destacado`: `TRUE` muestra la insignia "Recomendado".
- `precio` en `0` (o vacío) se muestra como "Consultar".
  Si la celda tiene texto (por ejemplo `Según marca`), se muestra ese texto en lugar de "Consultar".
- `opciones` (columna opcional, puede ir al final): opciones para elegir dentro de la tarjeta, separadas por `|`.
  Cada opción es `Etiqueta[=precio][: descripción]`. El precio y la descripción son opcionales.

  | nombre | descripcion | opciones |
  |:---|:---|:---|
  | Cerdo | 250 g de cerdo asado | `BBQ: con queso mozzarella y salsa BBQ \| Chimichurri \| Criolla` |
  | Club Colombia | Cerveza nacional | `Dorada \| Roja \| Negra` |
  | Aguardiente | Tapa roja, azul o verde | `Trago=8000 \| Media=45000 \| Botella=85000: 750 ml` |

  - Sin precio propio, la opción toma el `precio` del producto.
  - La descripción de la opción elegida se agrega al final de la descripción del producto.
  - En "Tu pedido" cada combinación sale en su propia línea (por ejemplo, "Cerdo · Criolla").
  - Celda vacía: la tarjeta funciona igual que siempre, sin opciones.
- `extras` (columna opcional): un segundo grupo de botones cuyo precio se **suma** al del producto o de la opción elegida.
  Misma sintaxis que `opciones`. La primera entrada sin precio es la elección por defecto (si no hay ninguna, se agrega "Sin extra").

  | nombre | opciones | extras |
  |:---|:---|:---|
  | Club Colombia | `Trigo=7000 \| Dorada \| Roja` | `Sola \| Michelada=1000 \| Michelada Tabasco=2000` |

  - En "Tu pedido" sale como "Club Colombia · Trigo · Michelada Tabasco".
  - Si el producto no tiene precio ("Consultar"), el extra no suma nada.
  - Si ningún extra tiene precio, funcionan como **variedad** (`Tapa Roja | Tapa Azul | Tapa Verde`) y su nombre siempre sale en el pedido.
- `vista` (columna opcional): `tabla` muestra las opciones como una lista de precios en vez de botones
  (licores: `Trago=8000 | Media=45000 | Botella=85000`). Se toca una fila para elegirla y el `+` la agrega. Vacío = botones.

La carta vuelve a leer la hoja cada minuto y cada vez que se vuelve a ella desde otra app, así que los cambios aparecen sin recargar
(OpenSheet puede tardar unos segundos extra por su caché).

La hoja debe estar compartida como **"Cualquier persona con el enlace puede ver"**.
Se lee con [OpenSheet](https://github.com/benborgers/opensheet) usando la **primera pestaña** (`/1`), sin importar su nombre.
Los cambios pueden tardar un par de minutos en verse por el caché de OpenSheet.

Para usar otra hoja, define la variable de entorno `VITE_SHEET_URL`
(por ejemplo `https://opensheet.elk.sh/<ID_HOJA>/1`) o cambia el valor por defecto en `src/MenuSentidos.jsx`.

## Desarrollo local

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # genera dist/
npm run preview   # sirve dist/ para probarlo
```

## Despliegue en Vercel

Importa este repositorio en Vercel. Detecta Vite automáticamente:

- **Build command:** `npm run build`
- **Output directory:** `dist`

Cada push a `main` despliega de nuevo. Funciona igual en Netlify o Cloudflare Pages.

## Estructura

```
src/MenuSentidos.jsx   componente único (datos de respaldo, tarjetas, carrusel, divisor, pedido)
src/index.css          temas noche / día y animaciones
public/                hojas decorativas de la marca
ROADMAP.md             estado y evolutivos (WhatsApp, imágenes en tarjetas)
```

## Hoja de ruta

Ver [ROADMAP.md](./ROADMAP.md).
