"use client"

import { Checkbox } from "@/components/ui/checkbox"
import type { DigimonEffect, DigimonItem } from "../types/digimon"

interface CollectionEffectsProps {
  effects: DigimonEffect[]
  activeEffects: string[]
  collection: DigimonItem
  onEffectToggle: (effectId: string, checked: boolean) => void
}

export function CollectionEffects({ collection ,effects, activeEffects, onEffectToggle }: CollectionEffectsProps) {
  return (
    <div className="space-y-2 rounded-lg bg-blue-950/40 p-6">
      <h3 className="mb-4 text-center text-sm font-medium text-emerald-400">Efecto de Colección</h3>
      <div className="space-y-3">
        {effects.map((effect) => (
          <div key={effect.id} className="flex items-center gap-3 text-sm">
            <Checkbox
              id={`${collection.id}-effect-${effect.id}`} // ID único para cada checkbox
              checked={activeEffects.includes(effect.id)}
              onCheckedChange={(checked) => onEffectToggle(effect.id, checked as boolean)}
              className="border-emerald-400 data-[state=checked]:bg-emerald-400 data-[state=checked]:text-emerald-950"
            />
            <div className="flex flex-1 items-center justify-between">
              <label htmlFor={`effect-${effect.id}`} className="text-emerald-400 hover:cursor-pointer">
                {effect.condition},
              </label>
              <span className="text-emerald-400">
                {effect.effect} {effect.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

