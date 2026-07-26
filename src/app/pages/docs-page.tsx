import { useToc } from "@/contexts/toc-context"

const toc = [
  { id: "que-es", title: "¿Qué es uiWave?" },
  { id: "por-que-elegir", title: "¿Por qué elegir uiWave?" },
  { id: "filosofia", title: "Filosofía" },
  { id: "tecnologias", title: "Tecnologías" },
  { id: "como-funciona", title: "Cómo funciona" },
  { id: "principios", title: "Principios de diseño" },
  { id: "mision", title: "Misión" },
]

export default function DocsPage() {
  useToc(toc)
  return (
    <>
      {/* Hero */}
      <section className="border-b pb-12 mb-12" >
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">
            Introducción
          </h1>

          <p className="text-lg leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">uiWave</span> es una
            plataforma moderna de componentes para React diseñada para ayudarte
            a crear interfaces elegantes, accesibles y altamente
            personalizables, sin sacrificar el control sobre tu código.
          </p>

          <p className="leading-7 text-muted-foreground">
            Más que una simple biblioteca de componentes, uiWave es una
            plataforma de distribución de código impulsada por una potente CLI.
            En lugar de instalar un paquete con componentes cerrados, cada
            componente se genera directamente dentro de tu proyecto,
            permitiéndote inspeccionar, modificar y extender cada línea de
            código según las necesidades de tu aplicación.
          </p>

          <p className="leading-7 text-muted-foreground">
            Nuestra filosofía es sencilla:
            <span className="font-semibold text-foreground">
              {" "}
              Tu proyecto. Tu código. Tus reglas.
            </span>
            . Una vez agregado un componente, el código es completamente tuyo.
            No existen cajas negras ni limitaciones para personalizar su
            comportamiento o apariencia.
          </p>

          <p className="leading-7 text-muted-foreground">
            uiWave combina una experiencia de desarrollo rápida con componentes
            cuidadosamente diseñados para producción, ofreciendo una base sólida
            para crear desde pequeños proyectos personales hasta aplicaciones
            empresariales de gran escala.
          </p>
        </div>
      </section>

      {/* ¿Qué es? */}
      <section id="que-es" className="max-w-3xl space-y-5 mb-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          ¿Qué es uiWave?
        </h2>

        <p className="leading-7 text-muted-foreground">
          uiWave nace con un objetivo claro: ofrecer una forma moderna de
          construir interfaces sin perder flexibilidad.
        </p>

        <p className="leading-7 text-muted-foreground">
          Las bibliotecas tradicionales suelen ocultar la implementación de sus
          componentes detrás de paquetes externos. Aunque esto facilita la
          instalación, también limita la personalización y aumenta la
          dependencia del proveedor.
        </p>

        <p className="leading-7 text-muted-foreground">
          uiWave adopta un enfoque diferente. Cada componente se copia
          directamente dentro de tu proyecto mediante nuestra CLI,
          permitiéndote modificar cualquier parte del código, integrarlo con tu
          sistema de diseño y mantener siempre el control absoluto de la
          implementación.
        </p>
      </section>

      {/* Características */}
      <section id="por-que-elegir" className="space-y-8 mb-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            ¿Por qué elegir uiWave?
          </h2>

          <p className="mt-3 leading-7 text-muted-foreground">
            Desarrollar interfaces modernas debería ser una experiencia rápida,
            flexible y agradable. uiWave fue creado para resolver los problemas
            más comunes que enfrentan los desarrolladores al utilizar
            bibliotecas tradicionales de componentes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">Código completamente tuyo</h3>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Los componentes se generan directamente dentro de tu proyecto para
              que puedas modificarlos, reorganizarlos o adaptarlos sin ninguna
              restricción.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">CLI rápida y sencilla</h3>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Agrega únicamente los componentes que necesitas mediante un solo
              comando, manteniendo tu proyecto limpio y optimizado.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">Componentes listos para producción</h3>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Componentes cuidadosamente diseñados para ofrecer rendimiento,
              accesibilidad y una excelente experiencia de usuario.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">Personalización ilimitada</h3>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Cambia estilos, colores, animaciones, estructura y comportamiento
              sin depender de APIs limitadas.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">Tecnologías modernas</h3>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Construido para React, TypeScript y Tailwind CSS, siguiendo las
              mejores prácticas del ecosistema moderno.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">Open Source</h3>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Todo el código es abierto, transparente y diseñado para que tengas
              el control absoluto sobre tu aplicación.
            </p>
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section id="filosofia" className="max-w-3xl space-y-5 mb-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Nuestra filosofía
        </h2>

        <p className="leading-7 text-muted-foreground">
          En uiWave creemos que las mejores herramientas son aquellas que
          desaparecen mientras desarrollas. Los componentes no deberían imponer
          una forma de trabajar; deben adaptarse a la arquitectura de cada
          proyecto.
        </p>

        <p className="leading-7 text-muted-foreground">
          No queremos que dependas de uiWave. Queremos que uiWave acelere tu
          desarrollo y te proporcione una base sólida sobre la cual puedas crear
          exactamente la experiencia que imaginas.
        </p>
      </section>

      {/* Tecnologías */}
      <section id="tecnologias" className="max-w-3xl mb-16">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">
          Tecnologías compatibles
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Vite",
            "Next.js",
            "React Router",
            "Radix UI",
            "Lucide React",
            "Framer Motion",
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border px-4 py-3 text-sm font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Flujo */}
      <section id="como-funciona" className="max-w-3xl space-y-6 mb-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          ¿Cómo funciona?
        </h2>

        <p className="leading-7 text-muted-foreground">
          El flujo de trabajo de uiWave es extremadamente sencillo.
        </p>

        <div className="rounded-xl border bg-muted/40 p-6">
          <ol className="space-y-4 list-decimal pl-5">
            <li>Instala uiWave en tu proyecto.</li>
            <li>Inicializa la configuración mediante la CLI.</li>
            <li>Agrega únicamente los componentes que necesites.</li>
            <li>El código se copiará directamente a tu proyecto.</li>
            <li>Personaliza cada componente libremente.</li>
            <li>Construye interfaces modernas sin limitaciones.</li>
          </ol>
        </div>
      </section>

      {/* Principios */}
      <section id="principios" className="space-y-8 mb-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            Principios de diseño
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Simplicidad",
              text: "APIs intuitivas y fáciles de aprender.",
            },
            {
              title: "Flexibilidad",
              text: "Personaliza cualquier parte del componente.",
            },
            {
              title: "Accesibilidad",
              text: "Buenas prácticas desde el primer día.",
            },
            {
              title: "Rendimiento",
              text: "Componentes ligeros y optimizados.",
            },
            {
              title: "Escalabilidad",
              text: "Preparado para proyectos de cualquier tamaño.",
            },
            {
              title: "Consistencia",
              text: "Diseño uniforme en toda la plataforma.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border p-6">
              <h3 className="font-semibold">{item.title}</h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Misión */}
      <section id="mision" className="max-w-3xl border-t pt-12 pb-8 space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Nuestra misión
        </h2>

        <p className="leading-7 text-muted-foreground">
          Queremos ayudar a los desarrolladores a crear interfaces de alta
          calidad sin desperdiciar tiempo reinventando componentes básicos.
        </p>

        <p className="leading-7 text-muted-foreground">
          uiWave nace para convertirse en una plataforma moderna donde el
          diseño, el rendimiento y la experiencia del desarrollador conviven en
          perfecta armonía, permitiéndote construir aplicaciones más rápido y
          con total libertad.
        </p>

        <div className="rounded-xl border bg-muted/40 p-6">
          <h3 className="font-semibold text-lg">
            Bienvenido a uiWave 👋
          </h3>

          <p className="mt-2 text-muted-foreground leading-7">
            Ya conoces nuestra filosofía y la forma en la que trabajamos. En la
            siguiente sección aprenderás a instalar la CLI y agregar tu primer
            componente en cuestión de minutos.
          </p>
        </div>
      </section>
    </>
  );
}