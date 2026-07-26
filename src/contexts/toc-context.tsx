import { createContext, useContext, useState, useEffect } from "react"

interface TocItem {
  id: string
  title: string
}

interface TocContextValue {
  items: TocItem[]
  setItems: (items: TocItem[]) => void
}

const TocContext = createContext<TocContextValue>({
  items: [],
  setItems: () => { },
})

export { TocContext }

export function TocProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<TocItem[]>([])
  return (
    <TocContext.Provider value={{ items, setItems }}>
      {children}
    </TocContext.Provider>
  )
}

export function useToc(items: TocItem[]) {
  const { setItems } = useContext(TocContext)
  useEffect(() => {
    setItems(items)
    return () => setItems([])
  }, [])
}
