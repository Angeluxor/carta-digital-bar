// Datos de respaldo (de menu_sentidos.csv; precio 0 = "Consultar").
// "opciones" y "extras" usan la misma sintaxis que las columnas de la hoja (ver parseOptions y parseExtras).
const INITIAL_DATA = [
  {"id":"pf-01","tipo":"comida","categoria":"Platos Fuertes","nombre":"Res","descripcion":"250 g de res","opciones":"Al vino: en reducción de hogao, crema de leche y vino tinto | Chimichurri: en salsa de chimichurri","precio":0,"disponible":true,"destacado":true},
  {"id":"pf-02","tipo":"comida","categoria":"Platos Fuertes","nombre":"Cerdo","descripcion":"250 g de cerdo asado","opciones":"BBQ: con queso mozzarella y salsa BBQ | Chimichurri: en salsa de chimichurri | Criolla: en salsa criolla","precio":0,"disponible":true,"destacado":false},
  {"id":"pf-03","tipo":"comida","categoria":"Platos Fuertes","nombre":"Pollo","descripcion":"250 g de pollo asado","opciones":"BBQ: con queso mozzarella y salsa BBQ | Chimichurri: en salsa de chimichurri | Criolla: en salsa criolla","precio":0,"disponible":true,"destacado":false},
  {"id":"pf-04","tipo":"comida","categoria":"Platos Fuertes","nombre":"Pechuga Rellena Maracuyá","descripcion":"250gr de pechuga de pollo rellena de jamón y queso en salsa de maracuyá","precio":0,"disponible":true,"destacado":true},
  {"id":"pf-05","tipo":"comida","categoria":"Platos Fuertes","nombre":"Cerdo y Pollo Mozzarella","descripcion":"250gr de cerdo y pollo intercalados con queso mozzarella","precio":0,"disponible":true,"destacado":false},
  {"id":"pa-01","tipo":"comida","categoria":"Pa' Picar","nombre":"Nachos con Guacamole","descripcion":"Nachos con salsa guacamole hogao de la casa y suero costeño","precio":0,"disponible":true,"destacado":true},
  {"id":"pa-02","tipo":"comida","categoria":"Pa' Picar","nombre":"Chorizos","descripcion":"2 o 3 chorizos de ternera en trozos, con julianas de cebolla y papas a la francesa","opciones":"Acaramelados: en reducción de jugo de naranja con caramelo | Endiablados: en reducción de BBQ y tabasco","precio":0,"disponible":true,"destacado":false},
  {"id":"pa-04","tipo":"comida","categoria":"Pa' Picar","nombre":"Picada Sentidos","descripcion":"Longanizas butifarras y chorizos en salsa BBQ dulce acompañados de papas a la francesa","precio":0,"disponible":true,"destacado":true},
  {"id":"pa-05","tipo":"comida","categoria":"Pa' Picar","nombre":"Trozos de Cerdo Chimichurri","descripcion":"300 gr trozos de cerdo en chimichurri con papas a la francesa","precio":0,"disponible":true,"destacado":false},
  {"id":"ot-01","tipo":"comida","categoria":"Otros","nombre":"Crepes Stroganoff","descripcion":"200gr de julianas de pollo o res con tocineta y cebolla con finas hierbas en reducción de crema de leche salsa soya mostaza acompañado de pan tostado","precio":0,"disponible":true,"destacado":false},
  {"id":"ot-02","tipo":"comida","categoria":"Otros","nombre":"Paquete de Platanitos o Papitas","descripcion":"Paquete individual de platanitos o papitas","precio":0,"disponible":true,"destacado":false},
  {"id":"co-01","tipo":"bebida","categoria":"Coctelería","nombre":"Caipiriña","descripcion":"Cachaza (aguardiente de Brasil) trozos de limón y azúcar","precio":0,"disponible":true,"destacado":false},
  {"id":"co-02","tipo":"bebida","categoria":"Coctelería","nombre":"Coffee Martini","descripcion":"Ginebra y licor de café","precio":0,"disponible":true,"destacado":true},
  {"id":"co-03","tipo":"bebida","categoria":"Coctelería","nombre":"Gin Blue","descripcion":"Ginebra Curazao y almíbar","precio":0,"disponible":true,"destacado":false},
  {"id":"co-04","tipo":"bebida","categoria":"Coctelería","nombre":"Gin Tonic","descripcion":"Ginebra Agua tónica y gajos de limón","precio":0,"disponible":true,"destacado":true},
  {"id":"co-05","tipo":"bebida","categoria":"Coctelería","nombre":"Highball Manzana","descripcion":"Whisky Sprite y trozos de manzana","precio":0,"disponible":true,"destacado":false},
  {"id":"co-06","tipo":"bebida","categoria":"Coctelería","nombre":"Margarita","descripcion":"Tequila Triple sec y limón","precio":0,"disponible":true,"destacado":true},
  {"id":"co-07","tipo":"bebida","categoria":"Coctelería","nombre":"Ruso Negro","descripcion":"Vodka Licor de café y gotas de limón","precio":0,"disponible":true,"destacado":false},
  {"id":"co-08","tipo":"bebida","categoria":"Coctelería","nombre":"Orgasmo","descripcion":"Crema de whisky Amaretto Licor de café y crema","precio":0,"disponible":true,"destacado":false},
  {"id":"co-09","tipo":"bebida","categoria":"Coctelería","nombre":"Tequila Sunrise","descripcion":"Tequila Triple sec Jugo de naranja y granadina","precio":0,"disponible":true,"destacado":false},
  {"id":"co-10","tipo":"bebida","categoria":"Coctelería","nombre":"Tinto de Verano","descripcion":"Vino tinto Sprite y zumo de limón","precio":0,"disponible":true,"destacado":false},
  {"id":"co-11","tipo":"bebida","categoria":"Coctelería","nombre":"Vino Caliente","descripcion":"Vino tinto Jugo de naranja y especias","precio":0,"disponible":true,"destacado":false},
  {"id":"ce-01","tipo":"bebida","categoria":"Cervezas","nombre":"Artesanal 3 Cordilleras","descripcion":"Cerveza artesanal 3 Cordilleras","precio":0,"disponible":true,"destacado":false},
  {"id":"ce-02","tipo":"bebida","categoria":"Cervezas","nombre":"Extranjeras","descripcion":"Cervezas importadas (desde)","precio":0,"disponible":true,"destacado":false},
  {"id":"ce-03","tipo":"bebida","categoria":"Cervezas","nombre":"Club Colombia","descripcion":"Cerveza nacional","opciones":"Dorada | Roja | Negra","extras":"Sola | Michelada=1000: preparada con sal y limón | Michelada Tabasco=2000: preparada con sal, limón y picante tabasco","precio":0,"disponible":true,"destacado":false},
  {"id":"ce-04","tipo":"bebida","categoria":"Cervezas","nombre":"Nacionales Tradicionales","descripcion":"Cerveza nacional","opciones":"Pilsen | Costeña | Águila | Póker","extras":"Sola | Michelada=1000: preparada con sal y limón | Michelada Tabasco=2000: preparada con sal, limón y picante tabasco","precio":0,"disponible":true,"destacado":false},
  {"id":"ce-05","tipo":"bebida","categoria":"Cervezas","nombre":"Tecate","descripcion":"Cerveza Tecate","precio":0,"disponible":true,"destacado":false},
  {"id":"ce-06","tipo":"bebida","categoria":"Cervezas","nombre":"Michelada","descripcion":"Michelada tradicional (Según la cerveza)","precio":0,"disponible":true,"destacado":false},
  {"id":"ce-07","tipo":"bebida","categoria":"Cervezas","nombre":"Michelada Envenenada","descripcion":"Michelada con preparación especial de la casa","precio":0,"disponible":true,"destacado":false},
  {"id":"ce-08","tipo":"bebida","categoria":"Cervezas","nombre":"Michelada Tabasco","descripcion":"Michelada con picante tabasco","precio":0,"disponible":true,"destacado":false},
  {"id":"ro-01","tipo":"bebida","categoria":"Carta de Rones","nombre":"Zacapa 23 años","descripcion":"Trago doble de Ron Zacapa 23 años","precio":0,"disponible":true,"destacado":true},
  {"id":"ro-02","tipo":"bebida","categoria":"Carta de Rones","nombre":"Hechicera","descripcion":"Trago doble de Ron La Hechicera","precio":0,"disponible":true,"destacado":false},
  {"id":"ro-03","tipo":"bebida","categoria":"Carta de Rones","nombre":"Santa Teresa Reserva","descripcion":"Trago doble de Ron Santa Teresa Reserva","precio":0,"disponible":true,"destacado":false},
  {"id":"ro-04","tipo":"bebida","categoria":"Carta de Rones","nombre":"Barceló Imperial","descripcion":"Trago doble de Ron Barceló Imperial","precio":0,"disponible":true,"destacado":false},
  {"id":"ro-05","tipo":"bebida","categoria":"Carta de Rones","nombre":"Diplomático","descripcion":"Trago doble de Ron Diplomático","precio":0,"disponible":true,"destacado":false},
  {"id":"ro-06","tipo":"bebida","categoria":"Carta de Rones","nombre":"Botran 15 años","descripcion":"Trago doble de Ron Botran 15 años","precio":0,"disponible":true,"destacado":false},
  {"id":"ro-07","tipo":"bebida","categoria":"Carta de Rones","nombre":"Sailor Jerry","descripcion":"Trago doble de Ron Sailor Jerry","precio":0,"disponible":true,"destacado":false},
  {"id":"ro-08","tipo":"bebida","categoria":"Carta de Rones","nombre":"Gran Solera 19 años","descripcion":"Trago doble de Ron Gran Solera 19 años","precio":0,"disponible":true,"destacado":false},
  {"id":"ro-09","tipo":"bebida","categoria":"Carta de Rones","nombre":"Medellín 12 años","descripcion":"Trago doble de Ron Medellín 12 años","precio":0,"disponible":true,"destacado":false},
  {"id":"ro-10","tipo":"bebida","categoria":"Carta de Rones","nombre":"Caldas 15 años Reserva","descripcion":"Trago doble de Ron Caldas 15 años Reserva","precio":0,"disponible":true,"destacado":false},
  {"id":"ro-11","tipo":"bebida","categoria":"Carta de Rones","nombre":"Caldas 8 años Carta de oro","descripcion":"Trago doble de Ron Caldas 8 años Carta de oro","precio":0,"disponible":true,"destacado":false},
  {"id":"li-01","tipo":"bebida","categoria":"Licores","nombre":"Aguardiente Antioqueño","descripcion":"Tapa Roja / Azul / Verde (Trago - Cuarto - Media - Litro)","precio":0,"disponible":true,"destacado":false},
  {"id":"li-02","tipo":"bebida","categoria":"Licores","nombre":"Whisky B&W","descripcion":"Trago y botella Whisky Black & White","precio":0,"disponible":true,"destacado":false},
  {"id":"li-03","tipo":"bebida","categoria":"Licores","nombre":"Whisky Red Label","descripcion":"Trago y botella Whisky Johnnie Walker Red Label","precio":0,"disponible":true,"destacado":false},
  {"id":"li-04","tipo":"bebida","categoria":"Licores","nombre":"Whisky Something Special","descripcion":"Trago y botella Whisky Something Special","precio":0,"disponible":true,"destacado":false},
  {"id":"li-05","tipo":"bebida","categoria":"Licores","nombre":"Ron Caldas / Medellín / Esencial","descripcion":"Trago - Cuarto - Media - Litro","precio":0,"disponible":true,"destacado":false},
  {"id":"li-06","tipo":"bebida","categoria":"Licores","nombre":"Tequila","descripcion":"Trago - Media - Botella","precio":0,"disponible":true,"destacado":false},
  {"id":"li-07","tipo":"bebida","categoria":"Licores","nombre":"Ginebra","descripcion":"Trago individual","precio":0,"disponible":true,"destacado":false},
  {"id":"li-08","tipo":"bebida","categoria":"Licores","nombre":"Cachaza","descripcion":"Trago individual","precio":0,"disponible":true,"destacado":false},
  {"id":"li-09","tipo":"bebida","categoria":"Licores","nombre":"Molendero","descripcion":"Trago individual","precio":0,"disponible":true,"destacado":false},
  {"id":"li-10","tipo":"bebida","categoria":"Licores","nombre":"Crema de Whisky o Ron","descripcion":"Trago doble y botella","precio":0,"disponible":true,"destacado":false},
  {"id":"li-11","tipo":"bebida","categoria":"Licores","nombre":"Vodka Tradicional / Absolut","descripcion":"Trago individual","precio":0,"disponible":true,"destacado":false},
  {"id":"li-12","tipo":"bebida","categoria":"Licores","nombre":"Vino Tinto","descripcion":"Copa y botella","precio":0,"disponible":true,"destacado":false},
  {"id":"be-01","tipo":"bebida","categoria":"Bebidas Sin Alcohol","nombre":"Gaseosa","descripcion":"Gaseosas varias marcas","precio":0,"disponible":true,"destacado":false},
  {"id":"be-02","tipo":"bebida","categoria":"Bebidas Sin Alcohol","nombre":"Jugo Natural","descripcion":"Pregunta por los sabores del día","opciones":"En agua | En leche","precio":0,"disponible":true,"destacado":false},
  {"id":"be-03","tipo":"bebida","categoria":"Bebidas Sin Alcohol","nombre":"Limonada Natural","descripcion":"Limonada recién preparada","precio":0,"disponible":true,"destacado":false},
  {"id":"be-04","tipo":"bebida","categoria":"Bebidas Sin Alcohol","nombre":"Limonada de Coco","descripcion":"Limonada cremosa de coco","precio":0,"disponible":true,"destacado":true},
  {"id":"be-05","tipo":"bebida","categoria":"Bebidas Sin Alcohol","nombre":"Soda Michelada","descripcion":"Soda michelada con sal y limón","precio":0,"disponible":true,"destacado":false},
  {"id":"be-06","tipo":"bebida","categoria":"Bebidas Sin Alcohol","nombre":"Gatorade","descripcion":"Bebida hidratante Gatorade","precio":0,"disponible":true,"destacado":false},
  {"id":"be-07","tipo":"bebida","categoria":"Bebidas Sin Alcohol","nombre":"Té Hatsu","descripcion":"Té Hatsu variedad de sabores","precio":0,"disponible":true,"destacado":false},
  {"id":"be-08","tipo":"bebida","categoria":"Bebidas Sin Alcohol","nombre":"Soda Hatsu","descripcion":"Soda saborizada Hatsu","precio":0,"disponible":true,"destacado":false},
  {"id":"be-09","tipo":"bebida","categoria":"Bebidas Sin Alcohol","nombre":"Jugos Hit","descripcion":"Jugo embotellado Hit","precio":0,"disponible":true,"destacado":false},
  {"id":"be-10","tipo":"bebida","categoria":"Bebidas Sin Alcohol","nombre":"Canada Dry","descripcion":"Ginger ale Canada Dry","precio":0,"disponible":true,"destacado":false},
  {"id":"be-11","tipo":"bebida","categoria":"Bebidas Sin Alcohol","nombre":"Agua Tonic","descripcion":"Agua tónica para mezclas","precio":0,"disponible":true,"destacado":false}
];

import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

/* ------------------------------------------------------------------ */
/*  Configuración                                                      */
/* ------------------------------------------------------------------ */
// Google Sheets vía OpenSheet (/1 = primera pestaña, sin depender de su nombre)
const SHEET_URL = import.meta.env?.VITE_SHEET_URL || 'https://opensheet.elk.sh/1wwvCs-8EAWvOMZ_8r2Fpy_k5T40YCTq59Ob2MHDwJRs/1';
const SHEET_REFRESH = 60_000; // recarga automática de la hoja (ms)
const SHEET_MIN_GAP = 10_000; // al volver a la pestaña, no recargar si se leyó hace menos de esto
const LEAVES = '/hojas_laterales.webp';
const LS_THEME = 'sentidos:theme';
const LS_TEXT = 'sentidos:text';
const LS_ORDER = 'sentidos:order';
const MAX_QTY = 20;

const SECTIONS = [
  { titulo: 'Comidas', accent: 'var(--gold)', accentText: 'var(--gold)' },
  { titulo: 'Bebidas', accent: 'var(--leaf)', accentText: 'var(--leaf-text)' },
];

/* ------------------------------------------------------------------ */
/*  Utilidades                                                         */
/* ------------------------------------------------------------------ */
const norm = (s) =>
  String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

const toBool = (v, def = true) => {
  if (typeof v === 'boolean') return v;
  if (v === undefined || v === null || v === '') return def;
  return ['true', '1', 'si', 'yes', 'x'].includes(norm(v));
};

const toPrice = (v) => {
  if (typeof v === 'number') return v;
  const n = Number(String(v ?? '').replace(/[^\d.,-]/g, '').replace(/\.(?=\d{3}\b)/g, '').replace(',', '.'));
  return Number.isFinite(n) ? n : 0;
};

/*
 * Columna "opciones": opciones separadas por "|". Cada una admite un precio propio
 * y una descripción corta, ambos opcionales:
 *   Etiqueta[=precio][: descripción]
 * Ejemplos:
 *   BBQ | Chimichurri | Criolla
 *   Al vino: en reducción de hogao, crema de leche y vino tinto | Chimichurri
 *   Trago=8000 | Media=45000 | Botella=85000: 750 ml
 * Sin precio propio, la opción toma el precio del producto.
 */
const parseEntries = (v) => {
  const seen = new Set();
  return String(v ?? '').split('|').map((raw) => {
    const s = raw.trim();
    const c = s.indexOf(':');
    const head = (c >= 0 ? s.slice(0, c) : s).trim();
    const desc = c >= 0 ? s.slice(c + 1).trim() : '';
    const e = head.indexOf('=');
    const label = (e >= 0 ? head.slice(0, e) : head).trim();
    const own = e >= 0 ? toPrice(head.slice(e + 1)) : 0;
    return { label, desc, own: own > 0 ? own : 0 };
  }).filter((o) => o.label && !seen.has(o.label) && seen.add(o.label));
};

const parseOptions = (v, basePrice) =>
  parseEntries(v).map(({ label, desc, own }) => ({ label, desc, precio: own || basePrice }));

/*
 * Columna "extras": un segundo grupo de botones cuyo precio se SUMA al del producto
 * (o al de la opción elegida). Misma sintaxis que "opciones". La primera entrada sin
 * precio es la elección por defecto; si no hay ninguna, se agrega "Sin extra".
 *   Sola | Michelada=1000: preparada con sal y limón | Michelada Tabasco=2000
 */
const parseExtras = (v) => {
  const xs = parseEntries(v).map(({ label, desc, own }) => ({ label, desc, precio: own }));
  if (!xs.length) return xs;
  let d = xs.findIndex((x) => x.precio === 0);
  if (d < 0) { xs.unshift({ label: 'Sin extra', desc: '', precio: 0 }); d = 0; }
  // Si ningún extra tiene precio es una variedad (Tapa Roja | Tapa Azul…): su nombre siempre va en el pedido
  const variant = xs.every((x) => x.precio === 0);
  return xs.map((x, i) => ({ ...x, isDefault: i === d, show: variant }));
};

// Clave de una línea del pedido: el id, "id::opción" si tiene opciones,
// y "…::+extra" si se eligió un extra distinto del de por defecto
const OPT_SEP = '::';
const lineKey = (id, label, extra) =>
  `${label ? `${id}${OPT_SEP}${label}` : id}${extra && !extra.isDefault ? `${OPT_SEP}+${extra.label}` : ''}`;

// Precio de una combinación: el extra solo suma si el producto tiene precio
const comboPrice = (base, extra) => (base > 0 ? base + (extra?.precio || 0) : base);
const comboLabel = (opt, extra) =>
  [opt?.label, extra && (!extra.isDefault || extra.show) ? extra.label : ''].filter(Boolean).join(' · ');

const normalizeRow = (r, i) => {
  const precio = toPrice(r.precio);
  return {
    id: String(r.id || `row-${i}`),
    tipo: norm(r.tipo) === 'bebida' ? 'bebida' : 'comida',
    categoria: String(r.categoria || 'Otros').trim(),
    nombre: String(r.nombre || '').trim(),
    descripcion: String(r.descripcion || '').trim(),
    precio,
    // Texto en la celda de precio ("Según marca") se muestra tal cual en lugar de "Consultar"
    precioTexto: precio > 0 || /\d/.test(String(r.precio ?? '')) ? '' : String(r.precio ?? '').trim(),
    opciones: parseOptions(r.opciones ?? r.Opciones, precio),
    extras: parseExtras(r.extras ?? r.Extras),
    // "tabla": las opciones se muestran como lista de precios (licores: trago, media, botella…)
    vista: norm(r.vista ?? r.Vista) === 'tabla' ? 'tabla' : 'botones',
    disponible: toBool(r.disponible, true),
    destacado: toBool(r.destacado, false),
  };
};

const formatPrice = (p) =>
  p > 0
    ? new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(p)
    : 'Consultar';

const readLS = (k, fallback) => {
  try { const v = localStorage.getItem(k); return v === null ? fallback : v; } catch { return fallback; }
};
const writeLS = (k, v) => { try { localStorage.setItem(k, v); } catch { /* modo privado */ } };

/* ------------------------------------------------------------------ */
/*  Iconos (SVG inline, sin dependencias)                              */
/* ------------------------------------------------------------------ */
const Icon = ({ children, className = 'h-5 w-5', fill = 'none' }) => (
  <svg viewBox="0 0 24 24" className={className} fill={fill} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);
const I = {
  left: <Icon><path d="m15 5-7 7 7 7" /></Icon>,
  right: <Icon><path d="m9 5 7 7-7 7" /></Icon>,
  up: <Icon><path d="m6 15 6-6 6 6" /></Icon>,
  down: <Icon><path d="m6 9 6 6 6-6" /></Icon>,
  sun: <Icon className="h-4 w-4"><circle cx="12" cy="12" r="4" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" /></Icon>,
  moon: <Icon className="h-4 w-4"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" /></Icon>,
  star: <Icon className="h-3 w-3" fill="currentColor"><path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6-5.4-3-5.4 3 1.1-6L3.2 9.4l6.1-.8Z" /></Icon>,
  plus: <Icon className="h-4 w-4"><path d="M12 5v14M5 12h14" /></Icon>,
  minus: <Icon className="h-4 w-4"><path d="M5 12h14" /></Icon>,
  close: <Icon className="h-5 w-5"><path d="m6 6 12 12M18 6 6 18" /></Icon>,
};

/* ------------------------------------------------------------------ */
/*  Selector de cantidad: "+" cuando no hay nada, "− n +" cuando sí     */
/* ------------------------------------------------------------------ */
function Stepper({ qty, onChange, accent, textColor, label, tabIndex = 0 }) {
  const btn = 'flex h-8 w-8 items-center justify-center rounded-full transition active:scale-90';
  if (qty === 0) {
    return (
      <button type="button" tabIndex={tabIndex} onClick={() => onChange(1)} aria-label={`Agregar ${label}`}
        className={`${btn} border-2`} style={{ borderColor: accent, color: textColor }}>{I.plus}</button>
    );
  }
  return (
    <div className="flex items-center rounded-full border-2" style={{ borderColor: accent, color: textColor }}>
      <button type="button" tabIndex={tabIndex} onClick={() => onChange(-1)} aria-label={`Quitar ${label}`} className={btn}>{I.minus}</button>
      <span className="min-w-[1.25rem] text-center text-sm font-semibold text-ink" aria-live="polite">{qty}</span>
      <button type="button" tabIndex={tabIndex} onClick={() => onChange(1)} disabled={qty >= MAX_QTY} aria-label={`Agregar ${label}`} className={`${btn} disabled:opacity-30`}>{I.plus}</button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hoja "Tu pedido": resumen para mostrar al mesero                   */
/* ------------------------------------------------------------------ */
function OrderSheet({ lines, total, unpriced, time, onQty, onClear, onClose }) {
  const [confirmClear, setConfirmClear] = useState(false);
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const groups = [
    { titulo: 'Comidas', tipo: 'comida', accent: 'var(--gold)', text: 'var(--gold)' },
    { titulo: 'Bebidas', tipo: 'bebida', accent: 'var(--leaf)', text: 'var(--leaf-text)' },
  ];

  return (
    <div className="fade-up fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-label="Tu pedido" onClick={(e) => e.stopPropagation()}
        className="flex max-h-[88dvh] w-full max-w-md flex-col rounded-t-2xl border-2 border-gold bg-surface shadow-2xl sm:rounded-2xl">
        <div className="flex items-start justify-between gap-3 border-b border-line px-4 pb-3 pt-4">
          <div>
            <h2 className="font-display text-3xl font-bold leading-none text-gold">Tu pedido</h2>
            <p className="mt-1 text-xs text-muted">Muestra esta pantalla a tu mesero · {time}</p>
          </div>
          <button onClick={onClose} aria-label="Cerrar" className="rounded-full p-1 text-muted hover:text-ink">{I.close}</button>
        </div>

        <div className="no-scrollbar flex-1 overflow-y-auto px-4 py-3">
          {groups.map((g) => {
            const rows = lines.filter((l) => l.tipo === g.tipo);
            if (!rows.length) return null;
            return (
              <section key={g.tipo} className="mb-4 last:mb-0">
                <h3 className="font-display text-xl font-bold" style={{ color: g.text }}>{g.titulo}</h3>
                <ul className="mt-1 divide-y divide-line/40">
                  {rows.map((l) => (
                    <li key={l.key} className="flex items-center gap-3 py-2">
                      <div className="min-w-0 flex-1">
                        <p className="font-display text-lg font-semibold leading-tight text-ink">
                          {l.nombre}
                          {l.opcion && <span style={{ color: g.text }}> · {l.opcion}</span>}
                        </p>
                        <p className="text-xs text-muted">{l.precio > 0 ? `${formatPrice(l.precio)} c/u` : `Precio: ${(l.precioTexto || 'por consultar').toLowerCase()}`}</p>
                      </div>
                      <Stepper qty={l.qty} onChange={(d) => onQty(l.key, d)} accent={g.accent} textColor={g.text} label={l.opcion ? `${l.nombre} ${l.opcion}` : l.nombre} />
                      <p className="w-24 text-right font-display text-lg font-bold" style={{ color: g.text }}>
                        {l.precio > 0 ? formatPrice(l.precio * l.qty) : '—'}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <div className="border-t border-line px-4 pb-4 pt-3">
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-medium uppercase tracking-widest text-muted">Total</span>
            <span className="font-display text-3xl font-bold text-gold">{formatPrice(total)}</span>
          </div>
          {unpriced > 0 && <p className="mt-1 text-right text-xs text-muted">+ {unpriced} {unpriced === 1 ? 'ítem' : 'ítems'} por consultar</p>}
          <div className="mt-3 flex gap-2">
            <button onClick={() => (confirmClear ? onClear() : setConfirmClear(true))} onBlur={() => setConfirmClear(false)}
              className={`rounded-lg border px-3 py-2 text-sm ${confirmClear ? 'border-red-500 text-red-500' : 'border-line text-muted hover:text-ink'}`}>
              {confirmClear ? '¿Vaciar todo?' : 'Vaciar'}
            </button>
            <button onClick={onClose} className="flex-1 rounded-lg bg-gold py-2 text-sm font-bold text-black">Seguir pidiendo</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Tarjeta tipográfica (sin foto)                                     */
/* ------------------------------------------------------------------ */
function Card({ item, accent, accentText, index, hidden, loop, qtys, onQty, sel, selX, onSel }) {
  const opts = item.opciones;
  const xs = item.extras;
  const cur = opts.length ? (opts.find((o) => o.label === sel) || opts[0]) : null;
  const curX = xs.length ? (xs.find((x) => x.label === selX) || xs.find((x) => x.isDefault)) : null;
  const key = lineKey(item.id, cur?.label, curX);
  const qty = qtys[key] || 0;
  const base = cur ? cur.precio : item.precio;
  const precio = comboPrice(base, curX);
  const combo = comboLabel(cur, curX);
  const label = combo ? `${item.nombre} ${combo}` : item.nombre;
  // Unidades de una opción sumando todos sus extras (para el contador del botón)
  const countOpt = (o) => (xs.length ? xs : [null]).reduce((n, x) => n + (qtys[lineKey(item.id, o?.label, x)] || 0), 0);
  const descs = [cur?.desc, curX?.desc].filter(Boolean).join(', ');
  return (
    <article
      aria-hidden={hidden || undefined}
      style={{ borderColor: accent, animationDelay: `${Math.min(index, 8) * 45}ms` }}
      className={`fade-up no-scrollbar touch-pan-x relative flex h-full w-[72vw] max-w-[17rem] shrink-0 flex-col overflow-y-auto rounded-xl border-2 bg-surface p-4 transition-transform duration-300 hover:-translate-y-0.5 sm:w-64 ${loop ? 'snap-center' : 'snap-start'}`}
    >
      <span className="pointer-events-none absolute left-1.5 top-1.5 h-3 w-3 border-l border-t" style={{ borderColor: accent }} />
      <span className="pointer-events-none absolute bottom-1.5 right-1.5 h-3 w-3 border-b border-r" style={{ borderColor: accent }} />

      {/* El contenido se atenúa si está agotado; el sello queda a plena opacidad */}
      <div className={`flex flex-1 flex-col transition-opacity ${item.disponible ? '' : 'opacity-40'}`}>
        <div className="flex min-h-[1.25rem] items-center gap-2">
          {item.destacado && (
            <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-black" style={{ background: accent }}>
              {I.star} Recomendado
            </span>
          )}
        </div>
        <h3 className={`mt-2 font-display font-bold leading-[1.05] tracking-tight text-ink ${item.nombre.length > 22 ? 'text-[1.7rem]' : 'text-[2rem]'}`}>{item.nombre}</h3>
        <div className="my-2.5 h-0.5 w-12 rounded-full" style={{ background: accent }} />
        <div className="flex-1">
          {(item.descripcion || descs) && (
            <p className="desc text-body">
              {item.descripcion}
              {/* El detalle de la opción (y del extra) elegidos continúa la descripción, resaltado */}
              {descs && <span className="italic" style={{ color: accentText }}>{item.descripcion ? ' ' : ''}{descs}</span>}
            </p>
          )}
          {item.vista === 'tabla' ? (<>
          {/* Extras (michelada…): suman al precio; el de por defecto no cambia nada */}
          {curX && (
            <div role="radiogroup" aria-label={`Extras de ${item.nombre}`} className="mt-1.5 flex flex-wrap gap-1.5">
              {xs.map((x) => {
                const on = x.label === curX.label;
                const n = qtys[lineKey(item.id, cur?.label, x)] || 0;
                return (
                  <button key={x.label} type="button" role="radio" aria-checked={on} tabIndex={hidden ? -1 : 0}
                    disabled={!item.disponible} onClick={() => onSel(`${item.id}#x`, x.label)}
                    className={`opt rounded-full border border-dashed px-2.5 py-1 text-xs font-semibold leading-none transition active:scale-95 ${on ? 'text-black' : 'text-ink'}`}
                    style={on ? { background: accent, borderColor: accent, borderStyle: 'solid' } : { borderColor: accent }}>
                    {x.label}
                    {x.precio > 0 && base > 0 && <span className={on ? '' : 'opacity-70'}> +{formatPrice(x.precio)}</span>}
                    {n > 0 && <span className={on ? '' : 'opacity-70'}> · {n}</span>}
                  </button>
                );
              })}
            </div>
          )}
          {/* Vista "tabla": cada presentación es una fila con su precio; se toca para elegirla */}
          {cur && item.vista === 'tabla' && (
            <div role="radiogroup" aria-label={`Presentaciones de ${item.nombre}`} className="mt-2.5 flex flex-col gap-0.5">
              {opts.map((o) => {
                const on = o.label === cur.label;
                const n = countOpt(o);
                return (
                  <button key={o.label} type="button" role="radio" aria-checked={on} tabIndex={hidden ? -1 : 0}
                    disabled={!item.disponible} onClick={() => onSel(item.id, o.label)}
                    className={`opt flex items-baseline gap-2 rounded-md px-2 py-1 text-left text-sm transition active:scale-[.98] ${on ? 'font-semibold text-black' : 'text-ink'}`}
                    style={on ? { background: accent } : undefined}>
                    <span>{o.label}{n > 0 && <span className={on ? '' : 'opacity-70'}> · {n}</span>}</span>
                    <span className={`mb-1 flex-1 border-b border-dotted ${on ? 'border-black/40' : 'opacity-40'}`} style={on ? undefined : { borderColor: accent }} />
                    <span className="font-display font-bold" style={on ? undefined : { color: accentText }}>{formatPrice(comboPrice(o.precio, curX))}</span>
                  </button>
                );
              })}
            </div>
          )}
          </>) : (<>
          {/* Opciones (salsa, presentación…): se elige una y el "+" agrega esa combinación */}
          {cur && item.vista !== 'tabla' && (
            <div className="mt-2.5">
              <div role="radiogroup" aria-label={`Opciones de ${item.nombre}`} className="flex flex-wrap gap-1.5">
                {opts.map((o) => {
                  const on = o.label === cur.label;
                  const n = countOpt(o);
                  return (
                    <button key={o.label} type="button" role="radio" aria-checked={on} tabIndex={hidden ? -1 : 0}
                      disabled={!item.disponible} onClick={() => onSel(item.id, o.label)}
                      className={`opt rounded-full border px-2.5 py-1 text-xs font-semibold leading-none transition active:scale-95 ${on ? 'text-black' : 'text-ink'}`}
                      style={on ? { background: accent, borderColor: accent } : { borderColor: accent }}>
                      {o.label}{n > 0 && <span className={on ? '' : 'opacity-70'}> · {n}</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
          {/* Extras (michelada…): suman al precio; el de por defecto no cambia nada */}
          {curX && (
            <div role="radiogroup" aria-label={`Extras de ${item.nombre}`} className="mt-1.5 flex flex-wrap gap-1.5">
              {xs.map((x) => {
                const on = x.label === curX.label;
                const n = qtys[lineKey(item.id, cur?.label, x)] || 0;
                return (
                  <button key={x.label} type="button" role="radio" aria-checked={on} tabIndex={hidden ? -1 : 0}
                    disabled={!item.disponible} onClick={() => onSel(`${item.id}#x`, x.label)}
                    className={`opt rounded-full border border-dashed px-2.5 py-1 text-xs font-semibold leading-none transition active:scale-95 ${on ? 'text-black' : 'text-ink'}`}
                    style={on ? { background: accent, borderColor: accent, borderStyle: 'solid' } : { borderColor: accent }}>
                    {x.label}
                    {x.precio > 0 && base > 0 && <span className={on ? '' : 'opacity-70'}> +{formatPrice(x.precio)}</span>}
                    {n > 0 && <span className={on ? '' : 'opacity-70'}> · {n}</span>}
                  </button>
                );
              })}
            </div>
          )}
          </>)}
        </div>
        {/* Precio a la derecha, con línea punteada guía como en las cartas impresas */}
        <div className="mt-3 flex items-end gap-2">
          {item.disponible && (
            <Stepper qty={qty} onChange={(d) => onQty(key, d)} accent={accent} textColor={accentText} label={label} tabIndex={hidden ? -1 : 0} />
          )}
          <span className="mb-1.5 flex-1 border-b border-dotted opacity-50" style={{ borderColor: accent }} />
          <p className="price font-display text-xl font-bold" style={{ color: accentText }}>{precio > 0 ? formatPrice(precio) : (item.precioTexto || formatPrice(precio))}</p>
        </div>
      </div>
      {!item.disponible && (
        <span aria-label="Agotado" className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 rounded-md border-2 border-red-500 bg-bg/70 px-3 py-1 font-sans text-sm font-bold uppercase tracking-[0.25em] text-red-500">Agotado</span>
      )}
    </article>
  );
}

/* ------------------------------------------------------------------ */
/*  Sección con pills, dropdown y carrusel                             */
/* ------------------------------------------------------------------ */
function Section({ titulo, accent, accentText, items, qtys, onQty, sel, onSel }) {
  const categorias = useMemo(() => ['Todas', ...new Set(items.map((i) => i.categoria))], [items]);
  const [cat, setCat] = useState('Todas');
  const scroller = useRef(null);
  const [boxW, setBoxW] = useState(0);

  const visible = useMemo(() => (cat === 'Todas' ? items : items.filter((i) => i.categoria === cat)), [items, cat]);
  const n = visible.length;

  // Ancho aproximado de tarjeta + separación, para decidir si hay que repetir
  const slot = boxW && boxW < 640 ? Math.min(boxW * 0.72, 272) + 12 : 256 + 12;
  const loop = n > 1 && n * slot > boxW * 1.05;
  const copies = !loop ? 1 : n >= 6 ? 3 : n >= 3 ? 5 : 7;
  const mid = Math.floor(copies / 2);

  useEffect(() => {
    const el = scroller.current; if (!el) return undefined;
    const ro = new ResizeObserver(() => setBoxW(el.clientWidth));
    ro.observe(el); setBoxW(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  // Ancho real de un "juego" completo de tarjetas
  const setWidth = () => {
    const cards = scroller.current?.children;
    if (!cards || cards.length < n * 2) return 0;
    return cards[n].offsetLeft - cards[0].offsetLeft;
  };

  // Al cambiar categoría/búsqueda/repeticiones: centrar la primera tarjeta de la copia central
  useLayoutEffect(() => {
    const el = scroller.current; if (!el || n === 0) return;
    const first = el.children[mid * n];
    if (!first) return;
    el.style.scrollBehavior = 'auto';
    el.scrollLeft = loop ? first.offsetLeft - (el.clientWidth - first.offsetWidth) / 2 : 0;
    el.style.scrollBehavior = '';
  }, [cat, n, loop, mid]);

  // Al quedar quieto, volver a la copia central (mismo punto visual => salto invisible)
  const idle = useRef(null);
  const onScroll = () => {
    if (!loop) return;
    clearTimeout(idle.current);
    idle.current = setTimeout(() => {
      const el = scroller.current; const w = setWidth();
      if (!el || !w) return;
      const s = el.scrollLeft;
      const target = (((s % w) + w) % w) + mid * w;
      if (Math.abs(target - s) > 1) {
        el.style.scrollBehavior = 'auto';
        el.scrollLeft = target;
        el.style.scrollBehavior = '';
      }
    }, 140);
  };
  useEffect(() => () => clearTimeout(idle.current), []);

  const go = (dir) => {
    const el = scroller.current; if (!el) return;
    const step = el.children[0] ? el.children[0].offsetWidth + 12 : 240;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const pill = (active) =>
    `pill-cat shrink-0 whitespace-nowrap rounded-full border px-3 py-0.5 text-xs font-medium transition-colors duration-200 ${active ? 'text-black' : 'border-line text-muted hover:text-ink'}`;

  return (
    <section className="flex h-full min-h-0 flex-col px-3 pb-2 pt-2 sm:px-6" aria-label={titulo}>
      <div className="flex items-center gap-3">
        <h2 className="font-display text-2xl font-bold tracking-wide sm:text-3xl" style={{ color: accentText }}>{titulo}</h2>
        <span className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />
      </div>

      {/* Chips de categoría: una fila con scroll horizontal, también en celular */}
      <div className="no-scrollbar touch-pan-x -mx-3 mt-1.5 flex gap-1.5 overflow-x-auto px-3 sm:-mx-6 sm:px-6" role="tablist">
        {categorias.map((c) => (
          <button key={c} role="tab" aria-selected={cat === c}
            onClick={(e) => { setCat(c); e.currentTarget.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' }); }}
            className={pill(cat === c)} style={cat === c ? { background: accent, borderColor: accent } : undefined}>{c}</button>
        ))}
      </div>

      <div className="relative mt-2 min-h-0 flex-1">
        {n === 0 && <p className="absolute inset-0 flex items-center justify-center text-sm text-muted">Sin resultados en {titulo.toLowerCase()}.</p>}
        <div ref={scroller} onScroll={onScroll}
          className={`no-scrollbar touch-pan-x flex h-full gap-3 overflow-x-auto scroll-smooth pb-1 ${loop ? 'snap-x snap-mandatory' : 'snap-x snap-proximity'} ${n === 0 ? 'invisible' : ''}`}>
          {Array.from({ length: copies }).flatMap((_, c) =>
            visible.map((it, i) => (
              <Card key={`${it.id}-${c}`} item={it} index={i} accent={accent} accentText={accentText} hidden={c !== mid} loop={loop} qtys={qtys} onQty={onQty} sel={sel[it.id]} selX={sel[`${it.id}#x`]} onSel={onSel} />
            )))}
        </div>
        {loop && (
          <>
            <button onClick={() => go(-1)} aria-label="Anterior"
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-bg/90 p-1.5 backdrop-blur transition hover:scale-110 [@media(hover:none)]:hidden" style={{ color: accentText, borderColor: accent }}>{I.left}</button>
            <button onClick={() => go(1)} aria-label="Siguiente"
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-bg/90 p-1.5 backdrop-blur transition hover:scale-110 [@media(hover:none)]:hidden" style={{ color: accentText, borderColor: accent }}>{I.right}</button>
          </>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Componente principal                                               */
/* ------------------------------------------------------------------ */
export default function MenuSentidos() {
  const [base, setBase] = useState(() => INITIAL_DATA.map(normalizeRow));
  const [theme, setTheme] = useState(() => readLS(LS_THEME, 'night'));
  const [bigText, setBigText] = useState(() => readLS(LS_TEXT, 'normal') === 'lg');
  useEffect(() => { writeLS(LS_TEXT, bigText ? 'lg' : 'normal'); }, [bigText]);
  const [ratio, setRatio] = useState(0.5);
  const [dragging, setDragging] = useState(false);
  const split = useRef(null);

  // Petición dinámica a Google Sheets (OpenSheet); si falla, queda INITIAL_DATA
  // Lee la hoja al abrir, cada minuto mientras la carta está visible y al volver a la pestaña.
  // Solo actualiza si algo cambió, para no reiniciar carruseles ni selecciones sin motivo.
  useEffect(() => {
    if (!SHEET_URL) return undefined;
    let ctrl = null;
    let last = '';
    let lastAt = 0;
    const load = () => {
      if (document.hidden) return;
      ctrl?.abort();
      ctrl = new AbortController();
      lastAt = Date.now();
      fetch(SHEET_URL, { signal: ctrl.signal, cache: 'no-store' })
        .then((r) => { if (!r.ok) throw new Error(r.status); return r.text(); })
        .then((txt) => {
          if (txt === last) return;
          const parsed = JSON.parse(txt).map(normalizeRow).filter((r) => r.nombre);
          if (parsed.length) { last = txt; setBase(parsed); }
        })
        .catch(() => { /* se queda con los últimos datos (o el respaldo local) */ });
    };
    // Al volver a la carta (otra app, pantalla bloqueada) recarga si pasaron más de 10 s
    const onVisible = () => { if (!document.hidden && Date.now() - lastAt > SHEET_MIN_GAP) load(); };
    load();
    const t = setInterval(load, SHEET_REFRESH);
    document.addEventListener('visibilitychange', onVisible);
    window.addEventListener('focus', onVisible);
    return () => {
      ctrl?.abort();
      clearInterval(t);
      document.removeEventListener('visibilitychange', onVisible);
      window.removeEventListener('focus', onVisible);
    };
  }, []);

  useEffect(() => {
    writeLS(LS_THEME, theme);
    // color-scheme en <html>: evita que el navegador fuerce oscurecer el modo día
    document.documentElement.style.colorScheme = theme === 'day' ? 'light' : 'dark';
    document.documentElement.style.backgroundColor = theme === 'day' ? '#F7F2E6' : '#050806';
    document.querySelector('meta[name=theme-color]')?.setAttribute('content', theme === 'day' ? '#F7F2E6' : '#050806');
  }, [theme]);

  const data = base;

  /* Pedido (solo para mostrar al mesero; se guarda en este dispositivo) */
  const [order, setOrder] = useState(() => {
    try { return JSON.parse(readLS(LS_ORDER, '{}')) || {}; } catch { return {}; }
  });
  const [sheetOpen, setSheetOpen] = useState(false);
  const [orderTime, setOrderTime] = useState('');
  useEffect(() => { writeLS(LS_ORDER, JSON.stringify(order)); }, [order]);

  const onQty = useCallback((id, delta) => setOrder((o) => {
    const q = Math.max(0, Math.min(MAX_QTY, (o[id] || 0) + delta));
    const next = { ...o };
    if (q) next[id] = q; else delete next[id];
    return next;
  }), []);

  // Opción elegida en cada tarjeta (se guarda aquí porque el carrusel repite las tarjetas)
  const [sel, setSel] = useState({});
  const onSel = useCallback((id, label) => setSel((m) => ({ ...m, [id]: label })), []);

  // Solo cuentan los platos (y combinaciones opción + extra) que siguen existiendo y disponibles en la hoja
  const lines = useMemo(() => data.flatMap((d) => {
    if (!d.disponible) return [];
    const opts = d.opciones.length ? d.opciones : [null];
    const xs = d.extras.length ? d.extras : [null];
    return opts.flatMap((o) => xs.map((x) => {
      const key = lineKey(d.id, o?.label, x);
      return order[key] > 0
        ? { ...d, key, opcion: comboLabel(o, x), precio: comboPrice(o ? o.precio : d.precio, x), qty: order[key] }
        : null;
    })).filter(Boolean);
  }), [data, order]);
  const count = lines.reduce((n, l) => n + l.qty, 0);
  const total = lines.reduce((t, l) => t + l.precio * l.qty, 0);
  const unpriced = lines.filter((l) => l.precio <= 0).length;

  const openSheet = () => {
    setOrderTime(new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' }));
    setSheetOpen(true);
  };
  useEffect(() => { if (count === 0) setSheetOpen(false); }, [count]);

  const comidas = useMemo(() => data.filter((d) => d.tipo === 'comida'), [data]);
  const bebidas = useMemo(() => data.filter((d) => d.tipo === 'bebida'), [data]);

  /* Divisor redimensionable (drag + tap en flechas + teclado) */
  const clamp = (v) => Math.min(0.85, Math.max(0.15, v));
  // El botón "Listo" también arrastra el divisor: si el dedo casi no se movió, cuenta como toque
  const pill = useRef({ down: false, y: 0, moved: 0 });
  const onPointerDown = (e) => {
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch { /* puntero ya liberado */ }
    pill.current = { active: true, down: !!e.target.closest?.("[data-pill]"), y: e.clientY, moved: 0 };
    setDragging(true);
  };
  const onPointerMove = (e) => {
    if (!dragging) return;
    pill.current.moved = Math.max(pill.current.moved, Math.abs(e.clientY - pill.current.y));
    const r = split.current?.getBoundingClientRect();
    if (r) setRatio(clamp((e.clientY - r.top) / r.height));
  };
  const onPointerUp = () => {
    if (pill.current.active && pill.current.down && pill.current.moved < 8) openSheet();
    pill.current.active = false;
    pill.current.down = false;
    setDragging(false);
  };
  /* Gesto vertical sobre los bloques: bloqueo de dirección (horizontal = carrusel, vertical = divisor) */
  const g = useRef(null);
  const gDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    g.current = { id: e.pointerId, x: e.clientX, y: e.clientY, r: ratio, mode: null };
  };
  const gMove = (e) => {
    const s0 = g.current;
    if (!s0 || s0.id !== e.pointerId || s0.mode === 'h') return;
    const dx = e.clientX - s0.x; const dy = e.clientY - s0.y;
    if (!s0.mode) {
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 10) return;
      if (Math.abs(dy) > Math.abs(dx) * 1.2) {
        s0.mode = 'v';
        try { e.currentTarget.setPointerCapture(e.pointerId); } catch { /* ya liberado */ }
        setDragging(true);
      } else { s0.mode = 'h'; return; }
    }
    const h = split.current?.getBoundingClientRect().height;
    if (h) setRatio(clamp(s0.r + dy / h));
  };
  const gEnd = () => { if (g.current?.mode === 'v') setDragging(false); g.current = null; };
  const gProps = { onPointerDown: gDown, onPointerMove: gMove, onPointerUp: gEnd, onPointerCancel: gEnd };
  const onPointerCancel = () => { pill.current.down = false; setDragging(false); };
  const nudge = (d) => setRatio((r) => clamp(r + d));
  const onKey = (e) => {
    if (e.key === 'ArrowUp') { e.preventDefault(); nudge(-0.05); }
    if (e.key === 'ArrowDown') { e.preventDefault(); nudge(0.05); }
  };

  return (
    <div data-theme={theme} data-text={bigText ? 'lg' : undefined} className="relative flex h-full flex-col overflow-hidden bg-bg font-sans text-ink transition-colors duration-500">
      {/* ---------- Cabecera fija ---------- */}
      <header className="relative z-20 shrink-0 border-b border-line">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <img src={LEAVES} alt="" className="sway absolute -top-2 left-0 w-[150%] max-w-none opacity-70 sm:w-2/3" />
          <img src={LEAVES} alt="" className="sway absolute -top-2 right-0 w-[150%] max-w-none -scale-x-100 opacity-70 sm:w-2/3" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(var(--veil),.15), rgba(var(--veil),.92))' }} />
        </div>
        <div className="relative px-3 pb-2 pt-2 sm:px-6">
          <div className="flex items-center gap-2">
            <button onClick={() => setBigText((b) => !b)} aria-pressed={bigText} aria-label={bigText ? 'Texto normal' : 'Aumentar tamaño del texto'}
              className={`flex h-7 w-14 items-center justify-center rounded-full border border-gold font-display font-bold leading-none transition ${bigText ? 'bg-gold text-black' : 'bg-surface/80 text-gold'}`}>
              <span className="text-xs">A</span><span className="text-lg">A</span>
            </button>
            <h1 className="flex-1 text-center font-display text-2xl font-bold leading-none tracking-wide text-gold sm:text-4xl">
              Sentidos
              <span className="block font-sans text-[9px] font-medium uppercase tracking-[0.35em] text-ink sm:text-xs">restaurante-bar</span>
            </h1>
            <button onClick={() => setTheme((t) => (t === 'night' ? 'day' : 'night'))} role="switch" aria-checked={theme === 'night'} aria-label="Alternar modo noche / día"
              className="relative flex h-7 w-14 items-center rounded-full border border-gold bg-surface/80 px-1 transition">
              <span className="absolute left-1.5 text-gold">{I.sun}</span>
              <span className="absolute right-1.5 text-gold">{I.moon}</span>
              <span className={`z-10 h-5 w-5 rounded-full bg-gold shadow transition-transform duration-300 ${theme === 'night' ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
          </div>
        </div>
      </header>

      {/* ---------- Pantalla dividida ---------- */}
      <main ref={split} className="relative flex min-h-0 flex-1 flex-col">
        <div {...gProps} className={`touch-pan-x min-h-0 shrink-0 overflow-hidden ${dragging ? '' : 'transition-[height] duration-300 ease-out'}`} style={{ height: `${ratio * 100}%` }}>
          <Section {...SECTIONS[0]} items={comidas} qtys={order} onQty={onQty} sel={sel} onSel={onSel} />
        </div>

        <div role="separator" aria-orientation="horizontal" aria-valuenow={Math.round(ratio * 100)} aria-valuemin={15} aria-valuemax={85} tabIndex={0}
          onKeyDown={onKey} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerCancel={onPointerCancel}
          className="relative z-10 flex h-9 shrink-0 cursor-row-resize touch-none select-none items-center justify-center border-y border-line bg-surface outline-none focus-visible:border-gold">
          <button onClick={() => nudge(-0.15)} onPointerDown={(e) => e.stopPropagation()} aria-label="Subir divisor" className="px-4 py-2 text-gold transition hover:scale-125">{I.up}</button>
          {count > 0 ? (
            <button key={count} data-pill onClick={(e) => { if (e.detail === 0) openSheet(); }} aria-label={`Ver pedido, ${count} ítems`}
              className="pop h-7 whitespace-nowrap rounded-full bg-gold px-4 text-xs font-bold text-black shadow-[0_0_14px_rgba(223,180,87,.55)] transition active:scale-95">
              Listo · {count}{total > 0 ? ` · ${formatPrice(total)}` : ''}
            </button>
          ) : (
            <span className="h-1.5 w-16 rounded-full bg-gradient-to-r from-gold via-line to-leaf" />
          )}
          <button onClick={() => nudge(0.15)} onPointerDown={(e) => e.stopPropagation()} aria-label="Bajar divisor" className="px-4 py-2 text-leaf transition hover:scale-125">{I.down}</button>
        </div>

        <div {...gProps} className="touch-pan-x min-h-0 flex-1 overflow-hidden">
          <Section {...SECTIONS[1]} items={bebidas} qtys={order} onQty={onQty} sel={sel} onSel={onSel} />
        </div>
      </main>

      {sheetOpen && count > 0 && (
        <OrderSheet lines={lines} total={total} unpriced={unpriced} time={orderTime} onQty={onQty}
          onClear={() => { setOrder({}); setSheetOpen(false); }} onClose={() => setSheetOpen(false)} />
      )}

    </div>
  );
}
