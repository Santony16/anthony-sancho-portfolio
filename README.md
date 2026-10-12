# Anthony Sancho — Portfolio

Portfolio personal con Next.js 15, React, TypeScript, Lucide React y Simple Icons.

## Estructura

- `app/`: App Router en la raíz del proyecto, fuera de `src/`.
- `src/components/`: componentes de la interfaz.
- `src/data/`: textos en inglés/español y datos del perfil.
- `public/`: fotografía y CVs estáticos.

## Requisitos

- Node.js 20.9 o superior recomendado.
- npm.

## Ejecutar

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Archivos personales que debes conservar/copiar a `public/`

Los archivos personales no estaban incluidos en el paquete de código que se pudo actualizar. Copia tus archivos reales a la carpeta `public/` con estos nombres:

- `me.png` — fotografía del portfolio. Si tu imagen tiene otra extensión, cambia `photo` en `src/data/portfolio.ts` para que coincida con el nombre real.
- `CV_AnthonySancho_EN.pdf` — CV en inglés.
- `CV_AnthonySancho_ES.pdf` — CV en español.

No reemplaces tus archivos personales por documentos de prueba.

## Personalización

- `src/data/translations.ts`: textos del portfolio en inglés y español.
- `src/data/portfolio.ts`: correo, enlaces, fotografía y nombres de CV.
- `app/globals.css`: diseño, animaciones y temas claro/oscuro.

El idioma inicial es inglés. El botón `ES` cambia el contenido a español. El botón de luna/sol cambia entre tema claro y oscuro.
