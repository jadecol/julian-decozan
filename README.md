# Julián de Ecozan — Landing Page

## Estructura del proyecto

```
julian-ecozan/
├── index.html          ← HTML principal
├── css/
│   └── styles.css      ← Todos los estilos
├── js/
│   └── main.js         ← Carrusel, animaciones, interacciones
└── assets/             ← (crear esta carpeta)
    ├── hero-video.mp4  ← Tu video hero (ver instrucciones abajo)
    ├── hero-video.webm ← Versión WebM (opcional, mejor compresión)
    ├── hero-poster.jpg ← Imagen de portada del video (primer frame)
    └── CV_Julian_de_Ecozan.pdf ← Tu CV descargable
```

---

## Despliegue en Cloudflare Pages

1. Sube esta carpeta completa a un repositorio de GitHub
2. En [dash.cloudflare.com](https://dash.cloudflare.com) → Pages → Create a project
3. Conecta tu repositorio de GitHub
4. Configuración de build:
   - **Build command:** (dejar vacío)
   - **Build output directory:** `/` (raíz)
5. Deploy → Tu URL será `tu-proyecto.pages.dev`
6. Puedes añadir dominio propio en Settings → Custom domains

---

## Personalización pendiente

### 1. Video Hero (sección superior derecha)
Abre `index.html` y busca el comentario `OPCIÓN A — VIDEO`.

**Para video propio (recomendado):**
- Coloca tu MP4 en `assets/hero-video.mp4`
- Descomenta el bloque `OPCIÓN A` en el HTML
- Comenta o elimina el `OPCIÓN C — Placeholder`

**Para animación de YouTube/Vimeo:**
- Descomenta el bloque `OPCIÓN B`
- Reemplaza `VIDEO_ID` con el ID de tu video

**Consejos para el video:**
- Duración ideal: 15–45 segundos en loop
- Resolución mínima: 1280×720 px
- Contenido sugerido: tú en obra/proyecto, o animación arquitectónica 3D
- Comprimir con HandBrake antes de subir (target: bajo 15MB)

### 2. Foto de perfil
Reemplaza el placeholder en la sección "Perfil" con tu foto:
```html
<img src="assets/foto-perfil.jpg" alt="Julián de Ecozan" style="width:100%;height:auto;display:block;">
```

### 3. LinkedIn
En `index.html`, busca `https://www.linkedin.com/in/julian-de-ecozan`
y reemplaza con tu URL real de LinkedIn.

### 4. Referencias
Cuando confirmes los nombres, reemplaza `[Nombre · Confirmar]`
con los nombres reales en el carrusel de referencias.

### 5. Universidades y años
Completa los campos en la sección Certificaciones.

---

## Carrusel — cómo funciona

El carrusel de referencias ahora tiene:
- **Barra de progreso** con línea dorada que avanza slide a slide
- **Contador** `01 / 02` estilo editorial
- **Flechas minimalistas** tipo SVG (sin texto, sin borde dominante)
- Pausa automática al hacer hover
- Soporte táctil (swipe en móvil)
- Auto-avance cada 6 segundos

---

## Tonos de texto

Los colores han sido ajustados para mejor lectura sobre fondo oscuro:
- `--text: #e8e4de` → texto principal (ligeramente cálido, no blanco puro)
- `--text-secondary: #8a8278` → texto secundario (más oscuro que antes)
- `--text-muted: #4a4540` → texto de apoyo/labels

Si quieres texto principal más brillante, cambia en `css/styles.css`:
```css
--text: #f0ede8;  /* más claro */
```

---

## LinkedIn desde CV / QR

El flujo recomendado:
1. CV → QR o link → esta landing
2. Botón "Ver perfil profesional" → LinkedIn
3. Botón WhatsApp → contacto directo

Para el QR, genera en [qrcode-monkey.com](https://www.qrcode-monkey.com)
con la URL de tu Cloudflare Pages y color dorado `#c9a96e`.
