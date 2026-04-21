# SEO & GEO — Reporte completo
**Sitio:** agustinagonzalezvicario.com  
**Abogada:** Agustina Elin González Vicario  
**Ubicación:** Godoy Cruz, Mendoza, Argentina  
**Fecha:** Abril 2026

---

## Estado de implementación por página

| Página | `<title>` | `description` | `keywords` | OG / Twitter | JSON-LD | Canonical |
|--------|-----------|---------------|------------|--------------|---------|-----------|
| `/` (home) | ✅ | ✅ | ✅ 45 keywords | ✅ | ✅ Attorney schema | ✅ |
| `/areas` | ✅ layout | ✅ | ✅ 17 keywords | ✅ | — heredado | ✅ |
| `/sobre_mi` | ✅ layout | ✅ | ✅ 13 keywords | ✅ | — heredado | ✅ |
| `sitemap.xml` | ✅ `/sitemap.ts` | — | — | — | — | — |
| `robots.txt` | ✅ `/robots.ts` | — | — | — | — | — |

> Las páginas `/areas` y `/sobre_mi` usan `"use client"` por lo que el metadata se declara en su propio `layout.tsx` de servidor, patrón correcto en Next.js App Router.

---

## Áreas legales cubiertas y sus keywords

### 1. Derecho Laboral — Despidos
| Keyword | Intención | Prioridad |
|---------|-----------|-----------|
| abogada laboral Mendoza | Transaccional | P0 |
| abogado laboral Mendoza | Transaccional | P0 |
| abogados laborales Mendoza | Transaccional | P0 |
| indemnización por despido Argentina | Comercial | P1 |
| despido sin causa Argentina | Comercial/Info | P1 |
| cuánto me corresponde de indemnización | GEO / AI | P2 |
| qué hacer si me despiden sin causa | GEO / AI | P2 |
| reclamo laboral Argentina | Informacional | P1 |
| abogado despido sin causa Mendoza | Transaccional | P0 |
| indemnización por despido Mendoza | Transaccional | P0 |

### 2. ART — Accidentes Laborales — Enfermedades Profesionales
| Keyword | Intención | Prioridad |
|---------|-----------|-----------|
| reclamo ART Mendoza | Transaccional | P0 |
| enfermedades profesionales ART | Comercial | P1 |
| accidente de trabajo abogado | Comercial | P1 |
| abogado para accidente laboral | GEO / AI | P2 |
| cómo reclamar a la ART | GEO / AI | P2 |
| enfermedades profesionales abogado | Transaccional | P0 |
| accidente de trabajo Mendoza | Transaccional | P0 |

### 3. Daños y Perjuicios — Accidentes de Tránsito
| Keyword | Intención | Prioridad |
|---------|-----------|-----------|
| abogado accidente de tránsito Mendoza | Transaccional | P0 |
| abogados accidentes de tránsito Mendoza | Transaccional | P0 |
| daños y perjuicios accidente de tránsito | Comercial | P1 |
| daños y perjuicios Mendoza | Transaccional | P0 |
| abogada accidentes de tránsito Mendoza | Transaccional | P0 |

### 4. Derecho de Salud — Amparos
| Keyword | Intención | Prioridad |
|---------|-----------|-----------|
| abogado amparo de salud Mendoza | Transaccional | P0 |
| amparo de salud Argentina | Comercial | P1 |
| abogada de salud | Comercial | P1 |
| cómo hacer un amparo de salud | GEO / AI | P2 |
| qué es un amparo de salud | GEO / AI | P2 |
| amparo de salud Mendoza | Transaccional | P0 |

### 5. Derecho Sucesorio
| Keyword | Intención | Prioridad |
|---------|-----------|-----------|
| abogado sucesiones Mendoza | Transaccional | P0 |
| abogados sucesiones Mendoza | Transaccional | P0 |
| derecho sucesorio Mendoza | Informacional | P1 |
| sucesiones Mendoza | Transaccional | P0 |
| cómo iniciar una sucesión | GEO / AI | P2 |
| sucesiones hereditarias Mendoza | Transaccional | P0 |

### 6. Derecho de Familia — Divorcio — Alimentos *(nueva área)*
| Keyword | Intención | Prioridad |
|---------|-----------|-----------|
| abogado derecho de familia Mendoza | Transaccional | P0 |
| abogada derecho de familia Mendoza | Transaccional | P0 |
| abogado divorcio Mendoza | Transaccional | P0 |
| abogada divorcio Mendoza | Transaccional | P0 |
| divorcio express Mendoza | Transaccional | P0 |
| cuota alimentaria Mendoza | Transaccional | P0 |
| alimentos menores Mendoza | Transaccional | P0 |
| fijación cuota alimentaria abogado | Comercial | P1 |
| divorcio vincular Mendoza | Informacional | P1 |
| tenencia hijos Mendoza | Transaccional | P0 |

---

## Keywords generales / branding

| Keyword | Intención | Prioridad |
|---------|-----------|-----------|
| abogada Mendoza | Transaccional | P0 |
| abogados en Mendoza | Transaccional | P0 |
| abogada en Mendoza | Transaccional | P0 |
| abogada Godoy Cruz | Geo-local | P0 |
| estudio jurídico Mendoza | Transaccional | P0 |
| consulta legal Mendoza | Transaccional | P0 |
| mejor abogado Mendoza | Comercial | P1 |
| abogada cerca de mí Mendoza | Geo/mobile | P0 |
| necesito un abogado en Mendoza | GEO / AI | P2 |
| busco abogado en Mendoza | GEO / AI | P2 |
| consulta abogado gratis Mendoza | GEO / AI | P2 |
| Agustina González Vicario abogada | Navegacional | P0 |
| abogada Universidad Champagnat Mendoza | Navegacional | P0 |

---

## Resumen de totales

| Categoría | Keywords |
|-----------|----------|
| P0 — Transaccional (alta conversión) | 30 |
| P1 — Comercial / Informacional | 14 |
| P2 — GEO / AI Overview queries | 11 |
| **Total** | **55** |

---

## JSON-LD Schema (Attorney)

Implementado en `layout.tsx` raíz. Campos cubiertos:

- `@type: Attorney`
- `name`, `url`, `image`, `description`
- `telephone`, `email`, `address` (Loria Oeste 165, Godoy Cruz, Mendoza)
- `geo` (coordenadas -32.93, -68.84)
- `areaServed`: Mendoza + Argentina
- `knowsAbout`: 10 áreas legales
- `openingHoursSpecification`: 7 días / consultas 24h
- `priceRange`: $$

---

## Archivos técnicos

| Archivo | Estado | Descripción |
|---------|--------|-------------|
| `src/app/layout.tsx` | ✅ | Metadata global + JSON-LD |
| `src/app/areas/layout.tsx` | ✅ | Metadata específica de /areas |
| `src/app/sobre_mi/layout.tsx` | ✅ | Metadata específica de /sobre_mi |
| `src/app/sitemap.ts` | ✅ | Sitemap dinámico (/, /areas, /sobre_mi) |
| `src/app/robots.ts` | ✅ | robots.txt con allow + sitemap ref |

---

## Oportunidades pendientes (recomendadas)

1. **Google Search Console** — verificar el sitio una vez deployado en el dominio real
2. **Google Business Profile** — crear/reclamar ficha para el estudio en Godoy Cruz (potencia SEO local enormemente)
3. **Reseñas Google** — agregar schema `Review` o `AggregateRating` una vez que haya reseñas
4. **Contenido blog/FAQ** — artículos sobre "cómo hacer un amparo de salud", "qué hago si me despiden", etc. capturan tráfico GEO/AI de alto volumen
