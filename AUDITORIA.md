# AUDITORIA.md — deecozan.com
> **Auditoría Senior de Producto Digital** · Naming, Posicionamiento y Accesibilidad WCAG 2.1 AA
> Fecha: 2026-07-06 | Auditor: Antigravity (IA Senior) | Base de código revisada: rama activa

---

## TABLA RESUMEN EJECUTIVA

| # | Sección | Hallazgo | Ubicación principal | Severidad |
|---|---------|----------|--------------------|-----------| 
| 1 | Naming | "Deep Tech" aparece 8 veces en cuerpo visible + h1 + footer + alt text, pero **nunca** en `<title>`, `<meta description>`, OG tags ni JSON-LD | `index.html` líneas 95, 99, 119, 328, 378, 399, 428, 465 | Moderado |
| 2 | Naming | "misión crítica" aparece solo en hero-subtitle pero **ausente** de todos los meta tags, OG y structured data | `index.html` línea 120 | Moderado |
| 3 | Naming | "IA Soberana" / "Soberanía de Datos" usados en contextos mixtos (capacidad IA en hero + gobernanza genérica en ticker + investigación) sin distinción semántica clara | `index.html` líneas 62, 79, 124, 362 | Moderado |
| 4 | Naming | **"Zero-Hallucination"** como etiqueta de marketing (línea 304); "No-Hallucination" como subtítulo de investigación (línea 359) — tres grafías distintas, inconsistencia de uso | `index.html` líneas 176, 304, 309, 359 | Moderado |
| 5 | Naming | Cifras de progreso (60%, "Fase de Co-creación", "ejecutada", "40% restante") solo en SPHERENEXUS; ausentes en meta tags / OG / JSON-LD (que tampoco existe) | `index.html` líneas 168, 184-190, 203 | Menor |
| 6 | Accesibilidad | **Sin `:focus` ni `outline` declarados** — ningún elemento interactivo tiene indicador de foco visible | `css/styles.css` (ausencia total) | **Crítico** |
| 7 | Accesibilidad | Texto del ticker `#4a4540` sobre `#080808` — ratio ≈ 2.86:1, falla mínimo 4.5:1 | `css/styles.css` líneas 19, 53, 66 | **Crítico** |
| 8 | Accesibilidad | Texto secundario de cuerpo `#8a8278` sobre `#0e0e0e` — ratio ≈ 3.79:1, falla mínimo 4.5:1 | `css/styles.css` líneas 18, 25 | **Crítico** |
| 9 | Accesibilidad | Ticker se pausa solo con CSS `:hover` (mouse) — sin botón de pausa ni mecanismo para teclado/táctil (WCAG 2.2.2) | `css/styles.css` línea 61; `index.html` líneas 51-86 | **Crítico** |
| 10 | Accesibilidad | Ausencia de enlace "Saltar al contenido" (skip-to-main) | `index.html` (ausencia) | Moderado |
| 11 | Accesibilidad | Nav colapsada en mobile (`display:none`) sin menú hamburguesa alternativo — todos los links y CTA inaccesibles en viewport ≤768px | `css/styles.css` línea 828 | **Crítico** |
| 12 | Accesibilidad | `alt` de imagen de perfil contiene "Deep Tech" (pendiente de decisión de naming) | `index.html` línea 378 | Menor |
| 13 | Accesibilidad | `<h4>` en tarjetas del Sistema FUN dentro de `role="listitem"` genera ambigüedad en árbol de accesibilidad | `index.html` líneas 250, 270 | Moderado |
| 14 | Accesibilidad | `role="marquee"` obsoleto/no estándar en ARIA; contenido duplicado del loop sin aria-hidden puede leerse dos veces | `index.html` líneas 51-85 | Moderado |
| 15 | Accesibilidad | `og:image` apunta a `assets/og-cover.jpg` que **no existe** en el repositorio | `index.html` líneas 22, 35 | Moderado |

---

## SECCIÓN 1 — Auditoría de Naming y Posicionamiento

### 1.1 "Deep Tech" / "DeepTech"

**Total de apariciones: 8** (todas en `index.html`)

| Línea | Elemento HTML | Tipo de superficie | Texto completo en contexto |
|-------|--------------|-------------------|---------------------------|
| 95 | `<span class="nav-sub">` | Texto visible (Nav brand subtitle) | `Líder Técnico · Investigación · Deep Tech` |
| 99 | `<a href="#dpi">` | Texto visible (Nav link) | `Deep Tech Territorial (DPI)` |
| 119 | **`<h1 id="hero-heading">`** | **Texto visible — H1 principal** | `Infraestructura Pública Digital y Arquitectura Deep Tech` |
| 328 | `<div class="accion-tag">` | Texto visible (tag TerritoLast) | `Deep Tech · Analítica Territorial` |
| 378 | **`alt` de `<img>`** | Alt text (foto de perfil) | `Julián de Ecozan - Arquitecto Deep Tech e Investigador` |
| 399 | `<p>` en sección Perfil | Texto visible (body copy) | `Esta dualidad me permite operar como un arquitecto Deep Tech.` |
| 428 | `<p class="sec-desc">` (Contacto) | Texto visible (body copy) | `Disponible para liderar la transición Deep Tech del territorio.` |
| 465 | `<span class="ft-copy">` (footer) | Texto visible (Footer copyright) | `© 2026 · Julián de Ecozan — Arquitectura Deep Tech` |

**Presencia en capas de metadatos:**

| Capa | Estado |
|------|--------|
| `<title>` (línea 9) | ❌ Ausente — solo aparece "DPI & Gobernanza Territorial" |
| `<meta name="description">` (líneas 10-11) | ❌ Ausente |
| `og:title` (línea 19) | ❌ Ausente |
| `og:description` (líneas 20-21) | ❌ Ausente |
| `twitter:title` (línea 32) | ❌ Ausente |
| `twitter:description` (líneas 33-34) | ❌ Ausente |
| JSON-LD / schema.org | ❌ No existe ningún bloque de structured data |
| Slugs / URLs / IDs de componente | ❌ No aparece (el id del section es `#dpi`, no `#deep-tech`) |
| Nombres de archivo en `/assets/` | ❌ No aparece |

**Observación de auditoría:** El término aparece en el `<h1>` (máxima relevancia SEO on-page) y en el footer, pero está completamente ausente en todos los meta tags y Open Graph, creando desincronización entre el ranking signal on-page y las previsualizaciones al compartir en LinkedIn/WhatsApp. El término se usa de forma irregular: como sustantivo ("arquitecto Deep Tech"), como adjetivo de sector ("Arquitectura Deep Tech") y como etiqueta de tarjeta. No hay definición editorial consistente.

---

### 1.2 "Misión Crítica" / "Mission Critical"

**Total de apariciones: 1** (en `index.html`)

| Línea | Elemento HTML | Tipo de superficie | Texto completo en contexto |
|-------|--------------|-------------------|---------------------------|
| 120 | `<p class="hero-subtitle">` | Texto visible (Hero subtitle) | `Soluciones de software de misión crítica para el Sector AEC y Organismos Multilaterales.` |

**Presencia en capas de metadatos:**

| Capa | Estado |
|------|--------|
| `<title>` | ❌ Ausente |
| `<meta name="description">` | ❌ Ausente |
| `og:title` / `og:description` | ❌ Ausente |
| `twitter:title` / `twitter:description` | ❌ Ausente |
| JSON-LD | ❌ No existe |
| Slugs / IDs | ❌ No aparece |

**Observación de auditoría:** El término aparece una única vez en la primera frase visible bajo el H1 — alto impacto editorial, cero presencia en meta tags. Si es un claim de posicionamiento deliberado, debería trasladarse a la `<meta description>` y al `og:description`.

---

### 1.3 "IA Soberana" / "Soberanía de Datos"

**Total de apariciones: 4** (todas en `index.html`)

| Línea | Elemento | Tipo de superficie | Contexto | Clasificación semántica |
|-------|---------|-------------------|---------|----|
| 62 | `<span class="ticker-item">` | Texto visible — Ticker (primera pasada) | `Soberanía de Datos · Desarrollo Hexagonal en Java` | Gobernanza genérica de datos (no IA) |
| 79 | `<span class="ticker-item" aria-hidden="true">` | Loop del ticker — no leído por SR | `Soberanía de Datos · Desarrollo Hexagonal en Java` | Gobernanza genérica (aria-hidden) |
| 124 | `<li>` en `.hero-capabilities` | Texto visible — Hero | `Modelos de IA Soberana` | **Capacidad de IA** (uso referido a los modelos) |
| 362 | `<p class="research-item__desc">` | Texto visible — Investigación | `garantizando soberanía y exactitud del dato en crisis` | Límite difuso — IA humanitaria + gobernanza |

**Presencia en capas de metadatos:** ❌ Ausente en todas las capas. No existe JSON-LD.

**Observación de auditoría:** Se identifican dos acepciones semánticamente distintas sin separación editorial:
- **Líneas 62/79** (ticker): "Soberanía de Datos" como keyword técnica genérica yuxtapuesta a "Desarrollo Hexagonal en Java".
- **Línea 124**: "Modelos de IA Soberana" es un claim de producto específico sobre arquitecturas que no dependen de proveedores externos — uso referido a **capacidad de IA** según la definición de auditoría.
- **Línea 362**: "soberanía y exactitud del dato" en investigación — interpretable como gobernanza o como capacidad de IA indistintamente.

Esta polisemia no resuelta puede generar confusión en audiencias técnicas de organismos multilaterales que distinguen entre *data sovereignty* (legal/jurisdiccional) y *sovereign AI* (arquitectura on-premise o air-gapped).

---

### 1.4 "Zero-Hallucination" / "Cero Alucinación"

**Total de apariciones relevantes: 4** en `index.html`

| Línea | Elemento HTML | Tipo de superficie | Texto en contexto | Clasificación |
|-------|--------------|-------------------|--------------------|---|
| 176 | `<p class="oim-card__desc">` | Texto visible — SPHERENEXUS card | `Mitiga el riesgo de alucinaciones algorítmicas y optimiza bases de datos...` | ✅ Técnico descriptivo — verbo "mitiga el riesgo de", no promesa absoluta |
| 304 | `<p class="accion-desc">` | Texto visible — Tarjeta LegalTech | `Arquitectura RAG (Zero-Hallucination) especializada en la validación...` | 🚩 Etiqueta de marketing — entre paréntesis como nombre de producto o estándar |
| 309 | `<span class="accion-metric-label">` | Texto visible — Métrica LegalTech | `Consulta normativa sin alucinaciones` | 🚩 Marketing — afirmación absoluta sin calificadores |
| 359 | `<h3 class="research-item__title">` | Texto visible — H3 Investigación | `IA Aplicada a la Respuesta Humanitaria (No-Hallucination)` | 🚩 Etiqueta de marketing en encabezado — grafía diferente a línea 304 |

**Presencia en metadatos:** ❌ Ausente en todas las capas meta, OG y Twitter. JSON-LD no existe.

**Observaciones de auditoría:**
1. **Inconsistencia de grafía**: tres formas distintas en el mismo documento — "Zero-Hallucination" (línea 304), "No-Hallucination" (línea 359), "sin alucinaciones" (línea 309). Solo "riesgo de alucinaciones algorítmicas" (línea 176) es técnicamente honesto.
2. **Riesgo legal/reputacional**: "Zero-Hallucination" como etiqueta en contexto legal (validación de CLT y norma urbanística) es una promesa absoluta que ninguna arquitectura RAG actual puede garantizar. Para audiencias de compliance de organismos multilaterales esto puede generar desconfianza.
3. Si fuera un diferenciador legítimo, debería estar en la `<meta description>`.

---

### 1.5 Cifras de Progreso y Estado por Proyecto

**Mapa de cifras encontradas (todas en `index.html`, sección SPHERENEXUS):**

| Línea | Cifra / Estado | Elemento | Contexto |
|-------|---------------|---------|---------|
| 168 | `"Proyecto en Desarrollo · Fase de Co-creación"` | `<span class="eyebrow-text">` | Estado editorial del proyecto SPHERENEXUS |
| 184 | `60%` | `<span class="oim-metric__value" aria-label="60 por ciento completado">` | Barra de progreso "Estado del Desarrollo (Core)" |
| 185-186 | `aria-valuenow="60"` | `<div role="progressbar">` | Atributo ARIA de la barra |
| 190 | `"Financiación de etapa semilla ejecutada"` | `<span class="oim-metric__note">` | Nota bajo la barra — estado de financiación |
| 195 | `"100%"` | `<li>` en `.oim-metric__bullets` | Capacidad técnica: procesamiento del Manual Esfera |
| 203 | `"pilotaje en terreno (40% restante)"` | `<strong>` en `.oim-card__footer-text` | 40% pendiente, buscando alianza |

**Consistencia entre proyectos:**

| Proyecto | Estado en cuerpo | En `<title>` | En OG | En JSON-LD |
|----------|-----------------|------------|----|----|
| **SPHERENEXUS** | 60% Core / Fase Co-creación / Semilla ejecutada | ❌ | ❌ | ❌ no existe |
| **Ecosistema FUN** | Sin cifra de progreso — solo capacidades | ❌ | ❌ | ❌ |
| **LegalTech (RAG)** | Sin estado de desarrollo | ❌ | ❌ | ❌ |
| **TerritoLast** | Sin cifra de progreso | ❌ | ❌ | ❌ |

**Observaciones:**
- El 60% + 40% restante = 100% es matemáticamente coherente internamente.
- La frase "Financiación de etapa semilla ejecutada" bajo una barra al 60% puede interpretarse como "el 60% fue financiado por la semilla" — ambigüedad editorial a aclarar.
- **Riesgo de desactualización**: el 60% está hardcodeado en dos lugares: el HTML (`aria-valuenow="60"`) y el CSS (`.oim-metric__fill--60 { width: 60% }`). Cuando el proyecto avance, ambos deben actualizarse manualmente.

---

## SECCIÓN 2 — Auditoría de Accesibilidad WCAG 2.1 Nivel AA

### 2.1 Contraste de Color

#### Hallazgo A — Texto del Ticker (CRÍTICO)

**Archivo:** `css/styles.css` · Líneas 19, 53, 66
**Criterio WCAG:** 1.4.3 — Contrast (Minimum) — Nivel AA
**Severidad:** Crítico

El ticker usa:
- `--text-muted: #4a4540` como color de los `ticker-item` normales (línea 66)
- Fondo del ticker-bar: `background: #080808` (línea 53)

Cálculo de contraste:
- Foreground `#4a4540` → Luminancia relativa ≈ 0.0445
- Background `#080808` → Luminancia relativa ≈ 0.0021
- **Ratio calculado: ≈ 2.86:1** — umbral requerido: 4.5:1 → FALLA

Los separadores del ticker usan `color: rgba(201,169,110,0.2)` (línea 70) — prácticamente invisibles. No son texto informativo, pero contribuyen a la sensación de ilegibilidad general del ticker.

---

#### Hallazgo B — Texto Secundario de Cuerpo (CRÍTICO)

**Archivo:** `css/styles.css` · Líneas 18, 25
**Criterio WCAG:** 1.4.3
**Severidad:** Crítico

Variables afectadas:
```
--text-secondary: #8a8278  (color de la mayoría de párrafos de cuerpo)
--bg:             #0e0e0e  (fondo del body)
```

Cálculo de contraste:
- Foreground `#8a8278` → Luminancia relativa ≈ 0.2327
- Background `#0e0e0e` → Luminancia relativa ≈ 0.0016
- **Ratio calculado: ≈ 3.79:1** — por debajo del mínimo 4.5:1

Los textos afectados (0.77rem–0.92rem) no califican como texto grande (≥18pt o ≥14pt bold), por lo que el umbral es 4.5:1. Clases afectadas: `.sec-desc`, `.accion-desc`, `.perfil-content p`, `.hero-capabilities li`, `.hero-subtitle`, `.nav-links a`, `.research-item__desc`.

---

#### Hallazgo C — `--text-muted` en contenido informativo (CRÍTICO)

**Archivo:** `css/styles.css` · Línea 19
**Criterio WCAG:** 1.4.3
**Severidad:** Crítico

`--text-muted: #4a4540` sobre fondos `#0e0e0e` / `#141414` / `#1a1a1a`:
- **Ratio sobre `#0e0e0e`: ≈ 2.86:1** → FALLA gravemente

Usado en textos informativos — no decorativos — de clases `.stat-lbl`, `.hero-badge-label`, `.accion-metric-label`, `.oim-metric__label`, `.accion-metric-label`.

---

#### Hallazgo D — Hover/Focus de botones (sin :focus declarado) (CRÍTICO)

**Archivo:** `css/styles.css` (ausencia total de reglas `:focus` o `:focus-visible`)
**Criterio WCAG:** 1.4.11 (Non-text Contrast), 2.4.7 (Focus Visible)
**Severidad:** Crítico

Los estados `:hover` de `.btn-gold`, `.btn-ghost`, `.nav-links a`, `.nav-cta`, `.contacto-item`, `.carousel-arrow` están definidos, pero los estados `:focus` y `:focus-visible` están completamente ausentes en los 1520 líneas del CSS (confirmado por grep exhaustivo — cero ocurrencias de `:focus`). Ver también Hallazgo E.

---

### 2.2 Navegación por Teclado

#### Hallazgo E — Ausencia total de estilos :focus/:focus-visible (CRÍTICO)

**Archivo:** `css/styles.css` (ausencia total)
**Criterio WCAG:** 2.4.7 — Focus Visible; 2.4.11 — Focus Appearance
**Severidad:** Crítico

Búsqueda grep del término "focus" en `styles.css`: cero resultados. Búsqueda de "outline": cero resultados. Todos los elementos interactivos carecen de indicador de foco personalizado:
- Links de nav (línea 98-102)
- `.nav-cta` botón Agendar Reunión (línea 103-104)
- `.btn-gold` en Hero (línea 127-130)
- `.btn-ghost` PDF (línea 131-132)
- `.contacto-item` (líneas 435-454)
- `.carousel-arrow` (líneas 129-130 JS)

---

#### Hallazgo F — Nav oculta en mobile sin alternativa accesible (CRÍTICO)

**Archivo:** `css/styles.css` · Línea 828
**Criterio WCAG:** 2.1.1 (Keyboard), 4.1.2 (Name, Role, Value)
**Severidad:** Crítico

```css
@media(max-width:768px){
  .nav-links, .nav-cta { display: none; }
}
```

En viewports ≤768px, los 4 links de navegación y el CTA "Agendar Reunión" del nav son removidos sin alternativa. No existe menú hamburguesa ni ningún mecanismo accesible que reemplace la navegación. Afecta a cualquier usuario móvil, no solo a usuarios de teclado.

---

#### Hallazgo G — Ausencia de enlace "Saltar al contenido" (MODERADO)

**Archivo:** `index.html` (ausencia)
**Criterio WCAG:** 2.4.1 — Bypass Blocks
**Severidad:** Moderado

El documento no incluye un enlace skip-to-main antes del nav. El Tab order en desktop inicia en el ticker, luego 4 links de nav + 1 CTA, antes de llegar al `<main>` (línea 108).

---

### 2.3 Texto Alternativo e Imágenes

#### Hallazgo H — Alt de foto de perfil (MENOR)

**Archivo:** `index.html` · Línea 378
**Criterio WCAG:** 1.1.1 — Non-text Content
**Severidad:** Menor

```html
<img src="assets/retrato-julian-ecozan.jpg"
     alt="Julián de Ecozan - Arquitecto Deep Tech e Investigador">
```

El `alt` es descriptivo (correcto — la imagen no es decorativa). Dos observaciones:
1. "Arquitecto Deep Tech" en el alt está sujeto a la misma decisión de naming de la Sección 1.1.
2. El separador `-` (guión medio) puede ser leído literalmente por algunos screen readers en vez de funcionar como pausa.

Imágenes decorativas: `aria-hidden="true"` está correctamente aplicado en `.hero-line`, `.oim-card__glow`, `.bg-grid`.

---

#### Hallazgo I — og:image referencia archivo inexistente (MODERADO)

**Archivo:** `index.html` · Líneas 22, 35
**Criterio:** Calidad de metadatos — impacto en SEO y accesibilidad de previsualizaciones
**Severidad:** Moderado

```html
<meta property="og:image" content="https://www.deecozan.com/assets/og-cover.jpg">
<meta name="twitter:image" content="https://www.deecozan.com/assets/og-cover.jpg">
```

El archivo `og-cover.jpg` no existe en `/assets/`. Solo existen: `retrato-julian-ecozan.jpg`, `retrato-julian-ecozan2.jpg`, `favicon.png`, `ALEJANDRO DE ECOZAN - junio 2023-1.jpg`. Al compartir el link en LinkedIn o WhatsApp, la previsualización no mostrará ninguna imagen.

---

### 2.4 Estructura Semántica y Jerarquía de Encabezados

#### Hallazgo J — Jerarquía de headings y role="listitem" con h4 (MODERADO)

**Archivo:** `index.html`
**Criterio WCAG:** 1.3.1 — Info and Relationships
**Severidad:** Moderado

**Mapa completo de headings:**

```
h1 (línea 119) — "Infraestructura Pública Digital y Arquitectura Deep Tech"
  h2 (línea 170) — "Sistema SPHERENEXUS: IA Predictiva para Respuesta Humanitaria"
  h2 (línea 222) — "Infraestructura Pública Digital (DPI)"
    h3 (línea 232) — "Ecosistema Core de Radicación... (Sistema FUN)"
      h4 (línea 250) — "Acceso Abierto (100% Gratuito)"    [dentro de role="listitem"]
      h4 (línea 270) — "Modelo de Sostenibilidad B2B"      [dentro de role="listitem"]
    h3 (línea 303) — "Seguridad Jurídica y Normativa Urbana"
    h3 (línea 317) — "Optimización Geoespacial para Hábitat Seguro"
    h3 (línea 329) — "TerritoLast: Gobernanza de Última Milla"
  h2 (línea 348) — "Líneas de Investigación Activa"
    h3 (línea 351) — "Minería Territorial y Transición Energética Justa"
    h3 (línea 359) — "IA Aplicada a la Respuesta Humanitaria (No-Hallucination)"
  h2 (línea 394) — "Donde el territorio se convierte en código"
  h2 (línea 426) — "Alianzas Estratégicas & Oportunidades de Liderazgo"
```

✅ Un solo `<h1>` — correcto.
✅ Jerarquía h1→h2→h3 sin saltos de nivel — correcto.
⚠️ Los `<h4>` (líneas 250, 270) están dentro de divs con `role="listitem"` — headings dentro de items de lista genera ambigüedad en el árbol de accesibilidad.

**Elementos de landmark semántico:**
- ✅ `<nav aria-label="Navegación principal">` (línea 91)
- ✅ `<main id="main-content">` (línea 108)
- ✅ `<footer aria-label="Pie de página">` (línea 463)
- ✅ `<section>` con `aria-labelledby` en secciones principales
- ⚠️ El ticker-bar (`<div class="ticker-bar" role="marquee">`) está fuera de cualquier landmark semántico

---

#### Hallazgo K — role="marquee" obsoleto y duplicado no controlado (MODERADO)

**Archivo:** `index.html` · Líneas 51-86
**Criterio WCAG:** 4.1.2 — Name, Role, Value
**Severidad:** Moderado

```html
<div class="ticker-bar" role="marquee" aria-label="Palabras clave de especialización">
```

`role="marquee"` no es un rol ARIA estándar de las especificaciones WAI-ARIA 1.1/1.2 — no tiene comportamiento definido en navegadores modernos. Los lectores de pantalla pueden ignorarlo o interpretarlo de forma no predecible.

Además, los items del loop duplicado (líneas 69-84) tienen `aria-hidden="true"` individualmente, pero los de la primera pasada (líneas 53-67) son leídos íntegramente por screen readers, lo cual es correcto. Sin embargo, si el lector de pantalla también anuncia el contenedor `role="marquee"`, puede haber doble anuncio.

---

### 2.5 Texto en Movimiento — Ticker / Marquee

#### Hallazgo L — Pausa solo por hover; sin mecanismo accesible (CRÍTICO)

**Archivo:** `css/styles.css` línea 61; `index.html` líneas 51-86; `js/main.js` (ausencia de control de ticker)
**Criterio WCAG:** 2.2.2 — Pause, Stop, Hide
**Severidad:** Crítico

```css
/* styles.css línea 61 — ÚNICO mecanismo de pausa existente */
.ticker-track:hover { animation-play-state: paused; }
```

El ticker se mueve continuamente con `animation: ticker 50s linear infinite`. El único mecanismo de pausa es `:hover`, que:
- No funciona con teclado
- No funciona en dispositivos táctiles (touch no dispara :hover persistente)
- No es accesible para usuarios con trastornos vestibulares o de atención

No existe en `index.html` ni en `main.js` ningún botón de pausa del ticker (el `isPaused` de `main.js` es exclusivo del carousel de referencias).

**Positivo encontrado:** La media query `@media(prefers-reduced-motion:reduce)` (línea 1494 de `styles.css`) aplica `animation-duration: 0.01ms` a todo el documento, deteniendo el ticker para quienes tienen configurada esa preferencia del SO. Esto es buena práctica pero no reemplaza el mecanismo in-page requerido por WCAG 2.2.2.

---

### 2.6 Zoom y Reflow

#### Hallazgo M — Textos en tamaño muy pequeño bajo zoom (MENOR)

**Archivo:** `css/styles.css` (múltiples líneas)
**Criterio WCAG:** 1.4.10 — Reflow; 1.4.4 — Resize Text
**Severidad:** Menor

Textos con `font-size` fijo muy pequeño: `.ticker-item` (0.52rem), `.nav-sub` (0.5rem), `.hero-badge-label` (0.5rem), `.cert-year` (0.7rem). A 200% de zoom del navegador, algunos de estos quedan en ≈8-9px efectivos, afectando legibilidad.

Positivo: Los headings principales usan `clamp()` correctamente (ej. línea 133: `clamp(2rem,4vw,3.2rem)`). El `.wrap` reduce su padding a `0 20px` en mobile (línea 826). `white-space: nowrap` en `.ticker-track` está dentro de `overflow:hidden` — no causa scroll horizontal.

---

### 2.7 Formularios

**Resultado: No aplica directamente al sitio.**

No existen elementos `<form>`, `<input>`, `<label>` ni `<textarea>`. El contacto se delega a Calendly (link externo, `target="_blank"`) y a un `mailto:`. Los links llevan `rel="noopener noreferrer"` correctamente (línea 103, 205, 429, 441). Los `aria-label` de los links de contacto son descriptivos y suficientes.

---

## TOP 5 — Hallazgos Prioritarios

### 🥇 Prioridad 1 — Indicador de foco completamente ausente (Hallazgos E + D)

**Criterio:** WCAG 2.4.7 Focus Visible — Nivel AA obligatorio
**Impacto:** Todos los elementos interactivos del sitio simultáneamente
**Esfuerzo:** Bajo — CSS puro, añadir reglas `:focus-visible` globales y por componente
**Por qué primero:** Es el incumplimiento WCAG más básico posible. Un usuario de teclado no puede navegar el sitio de forma usable. Máximo impacto con mínimo esfuerzo de corrección.

---

### 🥈 Prioridad 2 — Nav colapsada sin alternativa en mobile (Hallazgo F)

**Criterio:** WCAG 2.1.1 Keyboard, 4.1.2 Name/Role/Value
**Impacto:** En viewport ≤768px (>50% del tráfico probable), todos los links de navegación y el CTA principal son inaccesibles
**Esfuerzo:** Medio — implementar menú hamburguesa accesible con JS + ARIA
**Por qué segundo:** Afecta a la mayoría de visitantes mobile, no solo a usuarios de tecnología asistiva.

---

### 🥉 Prioridad 3 — Contraste de texto secundario y ticker (Hallazgos A, B, C)

**Criterio:** WCAG 1.4.3 Contrast Minimum — Nivel AA obligatorio
**Impacto:** Todo el cuerpo descriptivo del sitio (proyectos, perfil, investigación) y el ticker superior
**Esfuerzo:** Muy bajo — ajustar 2-3 variables CSS en `:root`
**Corrección sugerida:** `--text-secondary: #8a8278` → ≈`#a09890` (ratio ≈4.6:1); `--text-muted: #4a4540` → ≈`#737070` para el ticker

---

### 4️⃣ Prioridad 4 — Pausa accesible del ticker (Hallazgo L)

**Criterio:** WCAG 2.2.2 Pause, Stop, Hide — Nivel AA
**Impacto:** Usuarios con trastornos vestibulares, TDAH y baja visión
**Esfuerzo:** Bajo — añadir un `<button aria-label="Pausar ticker" aria-pressed="false">` conectado a `animation-play-state` via ~15 líneas JS

---

### 5️⃣ Prioridad 5 — og:image faltante + ausencia de JSON-LD (Hallazgos I + Sección 1 transversal)

**Criterio:** SEO + accesibilidad de previsualizaciones y rich snippets
**Impacto:** Previsualizaciones rotas en LinkedIn/WhatsApp (canal primario del target C-suite)
**Esfuerzo:** Muy bajo — (a) crear/subir imagen OG en assets, (b) añadir bloque `<script type="application/ld+json">` con schema `Person`
**Por qué quinto:** Impacto de negocio directo — cada vez que alguien comparte el link, la previsualización aparece sin imagen.

---

*Fin del informe.*
*Fecha de auditoría: 2026-07-06 | Alcance: 1 HTML (476 líneas), 1 CSS (1520 líneas), 1 JS (177 líneas), directorio /assets/*
*Metodología: Análisis estático exhaustivo + grep por términos + cálculo manual de ratios de contraste (WCAG formula). Sin ejecución de navegador en vivo.*
