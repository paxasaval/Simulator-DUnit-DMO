"use client"

import { useEffect, useState, useMemo } from "react"
import type { DigimonEffect } from "@/types/digimon"

interface Stat {
  name: string
  baseValue: number
  format: string
}

const baseStats: Stat[] = [
  { name: "MaxDS", baseValue: 920, format: "+ %d" },
  { name: "AT", baseValue: 250, format: "+ %d" },
  { name: "CT", baseValue: 140, format: "+ %d" },
  { name: "DE", baseValue: 430, format: "+ %d" },
  { name: "EV", baseValue: 960, format: "+ %d" },
  { name: "HT", baseValue: 210, format: "+ %d" },
  { name: "EXP", baseValue: 90, format: "+ %d%" },
  { name: "BL", baseValue: 180, format: "+ %d" },
  { name: "Fogo SCD", baseValue: 1, format: "+ %d%" },
]

interface RightSidebarProps {
  activeEffects: DigimonEffect[]
}

export function RightSidebar({ activeEffects }: RightSidebarProps) {
  const [updatedStats, setUpdatedStats] = useState<string[]>([])

  // Calcula los stats totales con efectos activos
  const newStats = useMemo(() => {
    return baseStats.map((baseStat) => {
      const additionalValue = activeEffects
        .filter((effect) => effect.statType === baseStat.name)
        .reduce((sum, effect) => sum + effect.numericValue, 0)

      return {
        ...baseStat,
        baseValue: baseStat.baseValue + additionalValue,
      }
    })
  }, [activeEffects])

  useEffect(() => {
    const changedStats = newStats
      .filter((stat, i) => stat.baseValue !== baseStats[i].baseValue)
      .map((stat) => stat.name)

    setUpdatedStats(changedStats)

    const timer = setTimeout(() => {
      setUpdatedStats([])
    }, 300)

    return () => clearTimeout(timer)
  }, [newStats])

  return (
    <div className="flex h-full w-64 flex-col border-l border-blue-900/50 bg-blue-950/90">
      <div className="flex flex-col items-center border-b border-blue-900/50 p-6">
        <div className="relative flex h-32 w-32 items-center justify-center">
          <div className="absolute h-full w-full rounded-full border-4 border-blue-400/20" />
          <div
            className="absolute h-full w-full rounded-full border-4 border-blue-400"
            style={{
              clipPath: "polygon(0 0, 5.3% 0, 5.3% 100%, 0 100%)",
            }}
          />
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-100">5.3%</div>
            <div className="text-sm text-blue-400">Rango</div>
            <div className="text-blue-400">Bronze</div>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-2 p-6">
        {newStats.map((stat) => (
          <div
            key={`stat-${stat.name}`}
            className="flex justify-between text-sm transition-all duration-300"
          >
            <span className="text-blue-100">{stat.name}</span>
            <span
              className={`text-emerald-400 transition-all duration-300 ${
                updatedStats.includes(stat.name) ? "scale-110 font-bold" : "scale-100"
              }`}
            >
              {stat.format.replace("%d", stat.baseValue.toString())}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
