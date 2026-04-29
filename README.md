# 🎯 CVGen — Generador de Perfil Profesional con IA

> Herramienta para la creación de perfiles profesionales mediante IA, diseñada para facilitar la inserción laboral de perfiles técnicos.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222?style=flat&logo=githubpages&logoColor=white)

---

## 🌟 ¿Qué es CVGen?

**CVGen** es una aplicación web que guía a personas en formación técnica para generar un **perfil profesional optimizado para su CV**, listo para ser procesado por una inteligencia artificial como **Gemini** o **ChatGPT**.

Muchos perfiles técnicos tienen habilidades valiosas pero no saben cómo comunicarlas en un CV. Esta herramienta transforma sus competencias prácticas en un texto profesional que abre puertas.

## 🚀 ¿Cómo funciona?

### Paso 1 → Completa los 4 pasos del formulario

| Paso | Qué haces |
|------|-----------|
| **1. Especialidad** | Escribes tu nombre y eliges tu sector (Electricidad, Hostelería, Administración, etc.) |
| **2. Competencias** | Seleccionas tus habilidades personales de una lista o añades las tuyas propias |
| **3. Técnicas** | Marcas las competencias técnicas que has aprendido (cambian según tu sector) |
| **4. Datos** | Añades hobbies, idiomas y si tienes carné de conducir |

### Paso 2 → Genera tu Prompt Maestro

Al final, pulsas **"Generar Prompt"** y la app crea un bloque de texto optimizado.

### Paso 3 → Copia y pega en la IA

1. Haz clic en **"Copiar al portapapeles"**
2. Abre **[Gemini](https://gemini.google.com)** o **[ChatGPT](https://chat.openai.com)**
3. **Pega el texto** y pulsa Enter
4. La IA redactará un **perfil profesional de 3 párrafos** listo para tu CV

> 💡 El prompt está diseñado para que la IA presente tu formación práctica como experiencia real, no como simple teoría.

## 🎨 Características

- **4 pasos guiados** con stepper visual de progreso
- **9 sectores** con habilidades técnicas específicas
- **12 competencias sugeridas** + opción de añadir las tuyas propias
- **Sistema drag-to-select**: las competencias se mueven entre áreas con animación
- **Diseño SaaS corporativo** con paleta azul profesional
- **Mobile-first**: botones grandes, textos legibles, navegación fija
- **Fuente Inter a 18px** para máxima legibilidad
- **Animación de carga** antes de mostrar el prompt final
- **Copiar con un clic** al portapapeles

## 📁 Estructura

```
cv_generator/
├── index.html    ← Estructura (4 pasos, stepper, modal)
├── style.css     ← Estilos (Inter, azul profesional, responsive)
├── script.js     ← Lógica (sectores, competencias, prompt)
└── README.md     ← Este archivo
```

## 🌐 Ver online

👉 **[lukybrou.github.io/cv_generator](https://lukybrou.github.io/cv_generator/)**

Para activar GitHub Pages en tu propio fork:

1. Ve a **Settings** → **Pages**
2. En Source, selecciona `main` / `/ (root)`
3. Haz clic en **Save**

## 💻 Uso local

No necesitas instalar nada. Abre `index.html` en tu navegador.

```bash
# Opcional: servidor local
npx serve .
```

## 📄 Licencia

MIT © 2026
