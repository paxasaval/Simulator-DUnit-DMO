"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Star } from "lucide-react"
import type { DigimonItem } from "../types/digimon"
import digimons from "../data/digimons"

// Lista de ejemplo de Digimon
const digimonList: DigimonItem[] = digimons

interface LeftSidebarProps {
  onSelectDigimon: (digimon: DigimonItem) => void
  selectedDigimonId: string | null
}

export function LeftSidebar({ onSelectDigimon, selectedDigimonId }: LeftSidebarProps) {
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredDigimon = digimonList.filter((digimon) =>
    digimon.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex h-full w-64 flex-col border-r border-blue-900/50 bg-blue-950/90">
      <div className="border-b border-blue-900/50 p-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-blue-400" />
          <Input
            placeholder="Buscar"
            className="border-blue-900/50 bg-blue-900/20 pl-8 text-blue-100 placeholder:text-blue-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-1 p-2">
          {filteredDigimon.map((digimon) => (
            <button
              key={digimon.id}
              onClick={() => onSelectDigimon(digimon)}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors
                ${
                  digimon.id === selectedDigimonId ? "bg-blue-600 text-blue-50" : "text-blue-100 hover:bg-blue-900/40"
                }`}
            >
              <span>{digimon.name}</span>
              <div className="flex gap-0.5">
                {Array.from({ length: digimon.stars }).map((_, i) => (
                  <Star
                    key={`${digimon.id}-star-${i}`} // Clave única para cada estrella
                    className={`h-4 w-4 ${digimon.id === selectedDigimonId ? "fill-blue-100" : "fill-blue-400"}`}
                    strokeWidth={1}
                  />
                ))}
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

