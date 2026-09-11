# Proyecto San Miguel — Cartelera de Distribución de Lotes

Proyecto Vite + React + Tailwind CSS, reconstruido a partir del artefacto
HTML `Cartelera-Lotes__1_.html` (React empaquetado y minificado en un solo
archivo).

## ¿Qué es?

Una cartelera lista para imprimir en **100 × 70 cm horizontal**, pensada
como documento físico de campo, con dos secciones:

1. **Plano de localización** (60% izquierdo): un diagrama esquemático
   rotado -35° con los 13 lotes del predio en escala gráfica (el lote 1
   es el lote esquinero/grande), orientación N-S, eje vial existente y
   escala gráfica 0-5-10 m.
2. **Registro de propietarios** (40% derecho): una tabla en blanco de
   13 filas (una por lote) para anotar a mano el posible propietario y
   observaciones, más un pie con datos del predio matriz, notas y
   espacio de firma/sello.

## Estructura del proyecto

```
proy_san_miguel/
├── index.html            # Punto de entrada HTML
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx           # Bootstrap de React
    ├── index.css          # Directivas de Tailwind
    └── App.jsx             # Componente CarteleraLotes (la cartelera completa)
```

El componente principal se llama `CarteleraLotes` (originalmente
minificado como `Ju` en el artefacto). Los datos de los 13 lotes viven
en el arreglo `lotes` al inicio de `src/App.jsx`:

```js
const lotes = Array.from({ length: 13 }, (_, n) => ({
  id: n + 1,
  label: `Lote ${n + 1}`,
  isLarge: n === 0, // el lote 1 es el lote grande/esquinero
}));
```

Para cambiar el número de lotes, sus dimensiones o cuál es el lote
grande, edita ese arreglo y las medidas (`12.5×18.0` / `8.0×18.0`) en el
JSX correspondiente.

## Cómo correrlo

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # build de producción -> carpeta dist/
npm run preview   # previsualizar el build
```

## Notas de la reconstrucción

El archivo original era un artefacto de una sola página con React y
ReactDOM empaquetados y minificados (nombres de variables de una sola
letra, todo el JSX convertido a llamadas `createElement` en una sola
línea). Este proyecto fue "descompilado": las llamadas a
`createElement` se reconstruyeron como JSX legible, y el código se
organizó en un proyecto Vite estándar con Tailwind, manteniendo el
diseño, las clases y el comportamiento originales (incluida la regla
de impresión `@media print` para tamaño 100×70 cm).
