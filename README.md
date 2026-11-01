# Sentidos restaurante-bar · Carta digital

Carta digital interactiva (SPA) en **React + Tailwind CSS + Vite**, pensada primero para celular.
Los datos salen de una hoja de Google Sheets, así que el personal actualiza precios y disponibilidad sin tocar código.

## Características

- **Pantalla dividida** Comidas / Bebidas con divisor redimensionable (arrastre, flechas ^ v y teclado).
- **Carrusel infinito** por sección, con tarjetas centradas y chips de categoría.
- **Modo noche / día** (noche por defecto).
- **Tarjetas tipográficas** con insignia "Recomendado" y sello "Agotado".
- **Pedido para mostrar al mesero:** botones `+ / −` en cada tarjeta, botón central **Listo** y hoja "Tu pedido" con cantidades y total.
  El pedido vive en el dispositivo y no se envía a ningún lado.
- **Datos de respaldo** (`INITIAL_DATA`) si la hoja no responde.

## Hoja de Google Sheets

Primera pestaña de la hoja, con estas columnas en la fila 1:

| id | tipo | categoria | nombre | descripcion | precio | disponible | destacado |
|:---|:---|:---|:---|:---|:---|:---|:---|
| pf-01 | comida | Platos Fuertes | Res al vino | 250 gr de res… | 28000 | TRUE | TRUE |
| co-01 | bebida | Coctelería | Caipiriña | Cachaza, limón y azúcar | 18000 | TRUE | FALSE |

- `tipo`: `comida` o `bebida`.
- `disponible`: `FALSE` muestra el sello "Agotado" y quita el botón para agregar.
- `destacado`: `TRUE` muestra la insignia "Recomendado".
- `precio` en `0` (o vacío) se muestra como "Consultar".

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
