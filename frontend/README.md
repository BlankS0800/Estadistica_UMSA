# Web Carrera de Estadística UMSA

Este proyecto es la aplicación web para la Carrera de Estadística de la Universidad Mayor de San Andrés (UMSA). Está construida con React + Vite y utiliza una arquitectura atómica para facilitar la escalabilidad y el mantenimiento.

## Documentación del Proyecto

Para entender la estructura, el mantenimiento y la gestión de contenido, consulta los siguientes documentos:

1. **[DOCUMENTATION.md](DOCUMENTATION.md)**: Documentación técnica completa. Explica la arquitectura (Atomic Design), el sistema de diseño, la guía de componentes y las instrucciones para futuros desarrolladores.
2. **[GUIA_SERVICIOS_DATOS.md](GUIA_SERVICIOS_DATOS.md)**: Guía detallada para la gestión de contenido ("CMS Local"). Explica cómo editar los textos, enlaces e imágenes en los archivos `*Data.js`.


## Guía de Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

### Construcción para Producción

```bash
npm run build
```

## Estado Actual

La web mantiene una arquitectura atómica con contenido desacoplado en `src/services` y navegación por rutas registradas. El menú principal (Header) y el pie de página (Footer) están centralizados en `mockData.js`, mientras que la portada principal se gestiona desde `inicioData.js`.
