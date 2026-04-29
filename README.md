# 🎓 Mi Perfil Pro — Generador de CV para Martí Codolar

> Herramienta interactiva que ayuda a alumnos de formación técnica a generar un perfil profesional para su CV, usando inteligencia artificial.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222?style=flat&logo=githubpages&logoColor=white)

---

## 🌟 ¿Qué es este proyecto?

**Mi Perfil Pro** es una aplicación web de una sola página (SPA) diseñada para los alumnos de **Martí Codolar** (Barcelona), un centro de formación técnica que trabaja con jóvenes en itinerarios de inserción laboral.

Muchos de estos alumnos son jóvenes con enorme talento y motivación, pero que a menudo carecen de experiencia laboral previa o no saben cómo plasmar sus habilidades en un CV. Esta herramienta **cierra esa brecha digital**: transforma sus conocimientos prácticos de taller en un perfil profesional atractivo, generado con la ayuda de IA.

## 🚀 ¿Cómo funciona?

La aplicación guía al alumno en **4 pasos sencillos** con una interfaz visual e intuitiva:

| Paso | Nombre | Descripción |
|------|--------|-------------|
| 1️⃣ | **Sector** | El alumno escribe su nombre y elige su especialidad (Electricidad, Carpintería, Hostelería, Administración, Logística...) |
| 2️⃣ | **Superpoderes** | Selecciona sus habilidades blandas con botones amigables: "Soy puntual", "Aprendo rápido", "Trabajo bien en equipo"... |
| 3️⃣ | **Técnicas** | Marca las habilidades técnicas aprendidas en el taller (cambian según el sector elegido) |
| 4️⃣ | **Extra** | Añade hobbies, idiomas y si tiene carné de conducir |

### ✦ El Prompt Maestro

Al finalizar, la app genera un **prompt optimizado para Gemini** (o cualquier IA) que:

- Convierte la formación práctica de 6 meses en Martí Codolar en una **ventaja competitiva**
- Enfatiza el trabajo en **entorno real de taller** (no solo teoría)
- Resalta la **actitud positiva** y la **capacidad de aprendizaje** del alumno
- Pide a la IA que **NO mencione la falta de experiencia**, sino que presente la formación como experiencia real
- Genera un perfil de **3 párrafos** con tono profesional pero cercano

## 🎨 Características técnicas

- **SPA** (Single Page Application) — sin frameworks, solo HTML + CSS + JS
- **Mobile-first** — diseñada para usarse desde el móvil
- **Modo claro** con paleta turquesa/menta fresca y moderna
- **Stepper visual** con progreso animado
- **Animación de carga** al generar el prompt
- **Copiar al portapapeles** con un clic
- **Tipografía Poppins** — moderna y limpia
- **Iconos grandes** en círculos de color pastel

## 📁 Estructura del proyecto

```
cv_generator/
├── index.html    ← Estructura y contenido
├── style.css     ← Estilos (modo claro, responsive)
├── script.js     ← Lógica (stepper, datos, generación)
└── README.md     ← Este archivo
```

## 🌐 Ver online (GitHub Pages)

Este proyecto está preparado para funcionar con **GitHub Pages** directamente:

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** → **Pages**
3. En "Source", selecciona la rama `main` y la carpeta `/ (root)`
4. Haz clic en **Save**
5. En unos segundos, tu web estará disponible en:
   ```
   https://lukybrou.github.io/cv_generator/
   ```

## 💻 Instalación local

No necesitas instalar nada. Simplemente abre `index.html` en tu navegador.

Para usar un servidor local (opcional):

```bash
# Con Python
python -m http.server 8080

# Con Node.js
npx serve .
```

## 🤝 Contexto social

Este proyecto nace de la necesidad de **democratizar el acceso a herramientas digitales** para jóvenes en formación técnica. Los alumnos de Martí Codolar adquieren habilidades valiosas en el taller, pero muchas veces no tienen las herramientas ni el vocabulario para comunicar ese valor en un CV.

**Mi Perfil Pro** les da voz, transformando lo que saben hacer en un perfil profesional que les abre puertas.

## 📄 Licencia

MIT © 2026 — Hecho con ❤️ para los alumnos de Martí Codolar
