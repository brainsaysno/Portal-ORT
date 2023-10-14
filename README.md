<div id="top"></div>

<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

</div>

<br />
<div align="center">
  <a href="https://github.com/brainsaysno/Portal-ORT">
    <img src="assets/banner.png" alt="Banner">
  </a>

<!-- <h1 align="center">Portal ORT</h1> -->

  <p align="center">
    <a href="https://github.com/brainsaysno/Portal-ORT"><strong>Explorar la documentación »</strong></a>
    <br />
    <br />
    <a href="https://portalort.vercel.app/">Ir al sitio</a>
    ·
    <a href="https://github.com/brainsaysno/Portal-ORT/issues/new?labels=enhancement">Proponer mejora</a>
    ·
    <a href="https://github.com/brainsaysno/Portal-ORT/issues/new?labels=bug">Reportar un error</a>
    
  </p>
</div>

<details>
  <summary>Tabla de contenidos</summary>
  <ol>
    <li>
      <a href="#sobre-el-proyecto">Sobre el proyecto</a>
      <ul>
        <li><a href="#situacion-actual-del-servicio-oficial">Situación del servicio oficial</a></li>
        <li><a href="#portal-ort">Portal ORT</a></li>
        <li><a href="#tecnologías">Tecnologías</a></li>
      </ul>
    </li>
    <li>
      <a href="#construir-localmente">Construir localmente</a>
      <ul>
        <li><a href="#requisitos">Requisitos</a></li>
        <li><a href="#instalación">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#funcionalidades">Funcionalidades</a>
      <ul>
      <li><a href="#inspeccionar-materias">Insepeccionar materias</a></li>
      <li><a href="#ver-previas-de-materias">Ver previas de materias</a></li>
      </ul>
    </li>
    <li><a href="#vision-del-producto">Visión del producto</a></li>
    <li><a href="#contribuir">Contribuir</a>
      <ul>
      <li><a href="#presentarse-como-colaborador">Presentarse como colaborador</a></li>
      <li><a href="#proponer-mejoras-o-reportar-errores">Proponer mejoras o reportar errores</a></li>
      <li><a href="#resolver-issues">Resolver issues</a></li>
      <li><a href="#apoyo-economico">Apoyo económico</a></li>
      </ul>
    </li>
    <li><a href="#licencia">Licencia</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>

## Sobre el proyecto

### Situación actual del servicio oficial

La [pagina de gestión](https://gestion.ort.edu.uy/) actual es antigua, lenta, está llena de problemas y carece de algunas funcionalidades e informaciones que resultan escenciales para los alumnos.

Además está interferida por un _login-wall_ que no permite un acceso a la información equitativo para futuros alumnos y/o exalumnos que no posean credenciales de acceso.

Esto abre espacio a una solución de código abierto (OSS), con tantos desarrolladores capacitados en la misma facultad de Ingeniería resulta fácil e inevitable la creación de un sistema nuevo. Teniendo en cuenta todos los desafíos que implica mantener la información vigente a pesar de no tener acceso a las bases de datos oficiales de la Universidad.

**Este proyecto fue creado de forma independiente, no es ni forma parte de ningun proyecto asociado con la Universidad, tampoco fue creado como un proyecto para esta. Nace del tiempo libre y la necesidad de este servicio por parte de un alumno frustrado con los servicios oficiales.**

### Portal ORT

Portal ORT propone ser una pagina complementaria a la [pagina de gestión](https://gestion.ort.edu.uy/) de la Universidad ORT del Uruguay con mejoras propuestas (e implementadas) por los alumnos de la universidad.

### Tecnologías

#### Desarrollo

- [Typescript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org)
- [Prisma](https://prisma.io)
- [tRPC](https://trpc.io)
- [Zod](https://zod.dev/)
- [Tailwind CSS](https://tailwindcss.com)
- [Headless UI](https://headlessui.com/)
- [Vitest](https://vitest.dev/)
- [PlanetScale](https://planetscale.com/)
- [Vercel](https://vercel.com/home)

#### Diseño y prototipado

- [Figma](https://www.figma.com)

## Construir localmente

### Requisitos

- [pnpm](https://pnpm.io/)
  ```sh
  npm install -g pnpm
  ```

### Instalación

1. Clonar el repositorio:

   ```sh
   git clone https://github.com/brainsaysno/Portal-ORT.git
   ```

2. Instalar las dependencias:

   ```sh
   cd Portal-ORT
   pnpm i
   ```

3. Crea un archivo ".env" con tu url de la base de datos (con el formato de [.env.example](.env.example)):

   ```sh
   cp .env.example .env
   ```

4. Levantar la base de datos local:

   ```sh
   docker compose up -d
   ```

5. Correr migraciones y seed de la base de datos

   ```sh
   pnpx prisma db push
   pnpx prisma db seed
   ```

6. Levantar el servidor de desarrollo:

   ```sh
   pnpm run dev
   ```

## Funcionalidades

### [Inspeccionar materias](https://portalort.vercel.app/materias)

La pagina permite inspeccionar las materias de la universidad, filtrando por carrera y por un término de búsqueda.

### [Ver previas de materias](https://portalort.vercel.app/materias)

Desde esta página al seleccionar una materia se permite ver las previas y las siguientes (materias de las que esta es previa) de esta.

## Visión del producto

- [x] Consultar previas y siguientes de una materia
- [x] Filtrar materias por título
- [ ] Cargar carreras de todas las facultades
- [ ] PWA
- [ ] Aplicación nativa para Android y iOS

## Contribuir

Las contribuciones son lo que hace a la comunidad de codigo abierto tan buena para aprender, inspirarse y crear. Cualquier contribución que hagas será **enormemente apreciada**.

Además de darle una estrella al proyecto, **hay 4 formas principales de contribuir**:

### Presentarse como colaborador

Estamos buscando colaboradores de distintas carreras para recuperar diversos datos sobre materias y cursos de la facultad y así seguir ampliando las funcionalidades del portal. Si te interesa colaborar puedes mandar un [mail](mailto:nicolas.russo.ortiz@gmail.com?subject=Colaborador%20Portal%20ORT%20-%20NOMBRE_DE_CARRERA) con el asunto "Colaborador Portal ORT - NOMBRE_DE_CARRERA" incluyendo el nombre de la carrera que estás cursando.

### Proponer mejoras o reportar errores

- Para **proponer una mejora** debes crear un [_issue_](https://github.com/brainsaysno/Portal-ORT/issues/new?labels=enhancement) que incluya la etiqueta "enhancement" con el nombre de la propuesta como título y una breve descripción de esta o porque deberíamos implementarla.

- Para **reportar un error** debes crear un [_issue_](https://github.com/brainsaysno/Portal-ORT/issues/new?labels=bug) que incluya la etiqueta "bug" con el una descripción del error como título y un breve comentario de como lo detectaste.

### Resolver issues

Si encontrás un [issue](https://github.com/brainsaysno/Portal-ORT/issues) que querés resolver podés agregar una PR con tu código. Para esto:

1. Hacé un [_fork_](https://github.com/brainsaysno/Portal-ORT/fork) del proyecto
2. Cloná el proyecto a tu computadora (`git clone https://www.github.com/TU-USUARIO/Portal-ORT.git`)
3. Creá una rama para tu propuesta (`git checkout -b feature/NOMBRE-DE-LA-PROPUESTA`)
4. Hacé cambios en el código
5. Hacé un _commit_ de tu cambios (`git commit -m 'Agregar NOMBRE-DE-LA-PROPUESTA'`)
6. Hacé un _push_ a tu rama (`git push origin feature/NOMBRE-DE-LA-PROPUESTA`)
7. Abrí una nueva [_pull request_](https://github.com/brainsaysno/Portal-ORT/compare) explicando tu propuesta y mencionando el issue correspondiente.

### Apoyo económico

Si en cambio deseas apoyar económicamente a los desarrolladores de Portal ORT puedes hacerlo a través de [PayPal](https://paypal.me/brainsaysno).

## Licencia

Distribuido bajo la licencia GPL-3.0. Ver [licencia](LICENSE) para más información.

## Contacto

Nicolás Russo - [@nicoo_182](https://instagram.com/nicoo_182) - nicolas.russo.ortiz@gmail.com

Link del proyecto: [https://github.com/brainsaysno/Portal-ORT](https://github.com/brainsaysno/Portal-ORT)

[contributors-shield]: https://img.shields.io/github/contributors/brainsaysno/Portal-ORT.svg?style=for-the-badge
[contributors-url]: https://github.com/brainsaysno/Portal-ORT/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/brainsaysno/Portal-ORT.svg?style=for-the-badge
[forks-url]: https://github.com/brainsaysno/Portal-ORT/network/members
[stars-shield]: https://img.shields.io/github/stars/brainsaysno/Portal-ORT.svg?style=for-the-badge
[stars-url]: https://github.com/brainsaysno/Portal-ORT/stargazers
[issues-shield]: https://img.shields.io/github/issues/brainsaysno/Portal-ORT.svg?style=for-the-badge
[issues-url]: https://github.com/brainsaysno/Portal-ORT/issues
[license-shield]: https://img.shields.io/github/license/brainsaysno/Portal-ORT.svg?style=for-the-badge
[license-url]: https://github.com/brainsaysno/Portal-ORT/blob/main/LICENSE
