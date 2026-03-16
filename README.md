# VR/AR Arquitectura - Portafolio Web

Portafolio web moderno y minimalista para desarrollador de experiencias VR/AR especializado en el sector arquitectónico.

## 🚀 Tecnologías

- **React 18** - Biblioteca UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **Lucide React** - Iconos
- **React Helmet Async** - SEO y meta tags

## 📁 Estructura del Proyecto

```
vr-portfolio-arq/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes React
│   │   ├── Header.jsx      # Navegación fija
│   │   ├── Hero.jsx        # Sección principal
│   │   ├── Proyectos.jsx   # Galería de proyectos
│   │   ├── Servicios.jsx   # Servicios ofrecidos
│   │   ├── SobreMi.jsx     # Información personal
│   │   ├── Contacto.jsx    # Formulario y contacto
│   │   └── Footer.jsx      # Pie de página
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── index.html           # HTML template
├── package.json         # Dependencias
├── vite.config.js       # Config Vite
├── tailwind.config.js   # Config Tailwind
└── postcss.config.js    # Config PostCSS
```

## 🛠️ Instalación Local

1. **Clonar o descargar el proyecto**
   ```bash
   cd vr-portfolio-arq
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en navegador**
   
   Visita `http://localhost:5173`

## 🚀 Despliegue

### Opción 1: Vercel (Recomendado)

1. **Subir a GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tuusuario/vr-portfolio-arq.git
   git push -u origin main
   ```

2. **Conectar con Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Importa tu repositorio de GitHub
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`
   - Click en **Deploy**

3. **Configurar dominio personalizado** (opcional)
   - En el dashboard de Vercel, ve a Settings > Domains
   - Agrega tu dominio personalizado

### Opción 2: Netlify

1. **Build del proyecto**
   ```bash
   npm run build
   ```

2. **Subir manualmente**
   - Ve a [netlify.com](https://netlify.com)
   - Drag & drop la carpeta `dist/`

3. **O conecta tu repositorio GitHub**
   - New site from Git
   - Selecciona tu repo
   - Build settings automáticos para Vite

### Opción 3: GitHub Pages

1. **Instalar gh-pages**
   ```bash
   npm install -D gh-pages
   ```

2. **Agregar scripts en package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Configurar vite.config.js**
   ```js
   export default defineConfig({
     base: '/nombre-del-repo/',
     // ... resto de config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## 🎨 Personalización

### Cambiar colores principales

Edita `tailwind.config.js`:

```js
colors: {
  accent: {
    DEFAULT: '#6366f1',  // Tu color principal
    hover: '#4f46e5',
  }
}
```

### Cambiar información de contacto

Edita `src/components/Contacto.jsx`:

```js
const WHATSAPP_NUMBER = 'tu-numero';
const WHATSAPP_MESSAGE = 'tu-mensaje';
```

### Agregar proyectos

Edita el array `proyectos` en `src/components/Proyectos.jsx`.

### Cambiar meta tags SEO

Edita `index.html` y `src/App.jsx` con tu información.

## 📱 Responsive

El sitio está optimizado para:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🔍 SEO

- Meta tags configurados
- Open Graph tags
- Twitter Card tags
- Semantic HTML
- Alt tags en imágenes

## 📄 Licencia

MIT - Libre para uso personal y comercial.

---

¿Necesitas ayuda? Abre un issue o contáctame.
