import { useToc } from "@/contexts/toc-context"

const toc = [
  { id: "requisitos", title: "Requisitos previos" },
  { id: "configurar-registro", title: "1. Configurar el Registro" },
  { id: "instalar-componentes", title: "2. Instalar Componentes" },
  { id: "opcion-directa", title: "Instalación Directa (Sin Alias)" },
  { id: "estructura-sugerida", title: "Estructura del Proyecto" },
  { id: "siguientes-pasos", title: "Siguientes pasos" },
]


export default function InstallationPage() {
  useToc(toc)

  return (
    <>
      {/* Hero */}
      <section className="border-b pb-12 mb-12">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">
            Instalación
          </h1>

          <p className="text-lg leading-8 text-muted-foreground">
            Aprende a conectar <span className="font-semibold text-foreground">uiWave</span> a
            tu proyecto para comenzar a agregar componentes de forma rápida, limpia y flexible.
          </p>

          <p className="leading-7 text-muted-foreground">
            No necesitas instalar dependencias pesadas ni configurar librerías cerradas.
            Únicamente vinculas nuestro registro a tu CLI existente y comienzas a copiar
            código nativo a tu aplicación.
          </p>
        </div>
      </section>

      {/* Requisitos Previos */}
      <section id="requisitos" className="max-w-3xl space-y-5 mb-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Requisitos previos
        </h2>

        <p className="leading-7 text-muted-foreground">
          Antes de comenzar, asegúrate de que tu proyecto cumpla con el siguiente entorno de desarrollo básico:
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border p-5">
            <div className="font-semibold text-foreground">Framework de React</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Compatible con Vite, Next.js, React Router v7 o Remix.
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <div className="font-semibold text-foreground">Tailwind CSS v3 o v4</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Configurado en tu proyecto para procesar las clases de utilidad.
            </p>
          </div>
        </div>
      </section>

      {/* Paso 1: Registrar el Alias */}
      <section id="configurar-registro" className="max-w-3xl space-y-6 mb-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          1. Configurar el Registro uiWave
        </h2>

        <p className="leading-7 text-muted-foreground">
          Para poder instalar componentes utilizando la sintaxis corta <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">@wave/componente</code>,
          agrega la plantilla de nuestro registro a tu proyecto mediante tu gestor de paquetes preferido:
        </p>

        {/* Bloque de Comandos CLI */}
        <div className="rounded-xl border bg-muted/50 p-4 font-mono text-sm space-y-3">
          <div className="text-xs text-muted-foreground font-sans font-medium border-b pb-2">
            Ejecuta esto en la raíz de tu proyecto:
          </div>
          <div className="space-y-2 overflow-x-auto">
            <p><span className="text-muted-foreground"># pnpm</span><br />pnpm dlx shadcn@latest registry add @uiwave=https://ui-wave.vercel.app/components/&#123;name&#125;.json</p>
          </div>
        </div>

        <div className="rounded-xl border bg-muted/30 p-5">
          <p className="text-sm leading-6 text-muted-foreground">
            💡 <strong className="text-foreground">¿Qué hace este comando?</strong> Agrega una entrada en el archivo <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">components.json</code> de tu proyecto, permitiéndole a la CLI saber dónde encontrar el código fuente de cada componente que solicites.
          </p>
        </div>
      </section>

      {/* Paso 2: Instalar Componentes */}
      <section id="instalar-componentes" className="max-w-3xl space-y-6 mb-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          2. Instalar tus primeros componentes
        </h2>

        <p className="leading-7 text-muted-foreground">
          Una vez configurado el espacio de nombres <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">@wave</code>,
          puedes instalar cualquier componente disponible directamente con el comando <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">add</code>:
        </p>

        <div className="rounded-xl border bg-muted/50 p-4 font-mono text-sm space-y-2">
          <div className="text-xs text-muted-foreground font-sans font-medium border-b pb-2">
            Ejemplo: Instalar un botón de uiWave
          </div>
          <p className="pt-1">npx shadcn@latest add @wave/custom-button</p>
        </div>

        <p className="leading-7 text-muted-foreground">
          El código fuente del componente se copiará automáticamente dentro de tu carpeta de componentes (usualmente <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">components/ui/</code>), junto con todas las dependencias necesarias.
        </p>
      </section>

      {/* Opción alternativa: URL Directa */}
      <section id="opcion-directa" className="max-w-3xl space-y-6 mb-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Instalación Directa (Sin configurar Alias)
        </h2>

        <p className="leading-7 text-muted-foreground">
          Si no deseas vincular el alias global o solo estás realizando una prueba rápida, puedes instalar cualquier componente pasando la URL directa del recurso:
        </p>

        <div className="rounded-xl border bg-muted/50 p-4 font-mono text-sm">
          <p>npx shadcn@latest add https://ui-wave.criseral.com/components/custom-button.json</p>
        </div>
      </section>

      {/* Estructura Recomendada */}
      <section id="estructura-sugerida" className="max-w-3xl space-y-6 mb-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Estructura del Proyecto
        </h2>

        <p className="leading-7 text-muted-foreground">
          Al instalar componentes de uiWave, tu árbol de archivos se mantendrá limpio y predecible:
        </p>

        <div className="rounded-xl border bg-muted/20 p-5 font-mono text-sm leading-relaxed text-muted-foreground">
          <p className="text-foreground font-semibold mb-2">mi-proyecto/</p>
          <p>├── src/</p>
          <p>│   ├── components/</p>
          <p>│   │   └── ui/</p>
          <p className="text-foreground font-medium">│   │       ├── custom-button.tsx  ← Componente descargado</p>
          <p>│   │       └── ...</p>

          <p>│   ├── lib/</p>
          <p>│   │   └── utils.ts</p>
          <p>├── components.json                ← Registros configurados</p>
          <p>└── package.json</p>
        </div>
      </section>

      {/* Siguientes pasos */}
      <section id="siguientes-pasos" className="max-w-3xl border-t pt-12 pb-8 space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          ¡Todo listo! 🚀
        </h2>

        <div className="rounded-xl border bg-muted/40 p-6">
          <h3 className="font-semibold text-lg text-foreground">
            Empieza a construir tu interfaz
          </h3>

          <p className="mt-2 text-muted-foreground leading-7">
            Ahora que tienes uiWave configurado en tu entorno, explora nuestro catálogo
            de componentes, copia lo que necesites y adaptalo libremente a las necesidades de tu producto.
          </p>
        </div>
      </section>
    </>
  )
}