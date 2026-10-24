# LUMIÈRE - Carta Digital Interactiva para Restaurante & Bar

Single Page Application (SPA) ultra ligera, responsiva y de coste cero diseñada para reemplazar cartas en PDF en restaurantes y bares de cócteles.

## 🚀 Características
- **Costo de Infraestructura Cero:** Servida vía CDN estático (Vercel, Cloudflare Pages o Netlify).
- **Sin backend complejo:** Persistencia de datos directa con Google Sheets a través de OpenSheet.
- **Modo Noche Predeterminado:** Diseño elegante con tonos oscuros y toques dorados pensado para el ambiente de bar.
- **Filtros por Categoría & Buscador:** Navegación táctil tipo pills y filtrado en tiempo real.
- **Gestión de Stock:** Soporte para marcar ítems como agotados sin borrarlos.
- **Ficha Desplegable:** Notas de cata y maridaje para cada plato o bebida.

---

## 📊 Estructura de Google Sheets

Crea una hoja de cálculo en Google Drive con una pestaña llamada `Carta` y las siguientes columnas en la fila 1:

| id | categoria | nombre | descripcion | precio | disponible | destacado | maridaje_notas | imagen_url |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| 1 | Cócteles de Autor | Smoked Old Fashioned | Bourbon, bitters, naranja y ahumado de roble. | $14.50 | TRUE | TRUE | Notas ahumadas. Va con carnes curadas. | https://... |
| 2 | Entradas & Tapas | Carpaccio Trufado | Salmón fino con aceite de trufa blanca y alcaparras. | $16.00 | TRUE | FALSE | Marida con vino blanco seco. | https://... |

> **Consejo:** Para la columna `disponible`, usa **Insertar > Casilla de verificación** en Google Sheets para que el personal del bar pueda marcar agotado con un simple toque desde el teléfono.

### Conectar tu Google Sheet:
1. En Google Sheets: **Archivo > Compartir > Compartir con otros** -> *Cualquier persona con el enlace puede leer*.
2. Copia el ID de la hoja desde la URL (`https://docs.google.com/spreadsheets/d/[TU_SHEET_ID]/edit`).
3. Abre `index.html` y asigna tu ID en la variable:
   ```javascript
   const GOOGLE_SHEET_ID = "TU_SHEET_ID_AQUÍ";
   ```

---

## ⚡ Despliegue en Vercel

### Con GitHub:
1. Sube este repositorio a tu cuenta de GitHub.
2. En tu panel de Vercel: **Add New... > Project** y selecciona este repositorio.
3. Vercel detectará automáticamente que es un proyecto estático. Haz clic en **Deploy**.

### Con Vercel CLI (Opcional):
```bash
npx vercel
```
