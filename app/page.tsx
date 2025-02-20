"use client";

import { useState } from "react";
import { LeftSidebar } from "../components/left-sidebar";
import { EvolutionGrid } from "../components/evolution-grid";
import { CollectionEffects } from "../components/collection-effects";
import { RightSidebar } from "../components/right-sidebar";
import type { DigimonItem } from "../types/digimon";
import { ScrollArea } from "@/components/ui/scroll-area";
import digimonsTest from "@/data/digimons";

// Datos iniciales del primer Digimon
const initialDigimon = digimonsTest[0]

export default function DigimonDashboard() {
  const [selectedDigimon, setSelectedDigimon] =
    useState<DigimonItem>(initialDigimon);
  const [activeEffectIds, setActiveEffectIds] = useState<string[]>([]);

  const handleEffectToggle = (effectId: string, checked: boolean) => {
    setActiveEffectIds((prev) =>
      checked ? [...prev, effectId] : prev.filter((id) => id !== effectId)
    );
  };

  // Obtiene los efectos completos basados en los IDs activos
  const activeEffects =
    selectedDigimon?.effects.filter((effect: { id: string }) =>
      activeEffectIds.includes(effect.id)
    ) || [];

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-950 to-black text-white">
      <LeftSidebar
        onSelectDigimon={setSelectedDigimon}
        selectedDigimonId={selectedDigimon.id}
      />
      <main className="flex-1">
        <div className="grid h-full grid-rows-2">
          <ScrollArea className="row-span-1">
            <EvolutionGrid cards={selectedDigimon.evolutions} />
          </ScrollArea>
          <ScrollArea className="row-span-1">
            <CollectionEffects
              collection={selectedDigimon}
              effects={selectedDigimon.effects}
              activeEffects={activeEffectIds}
              onEffectToggle={handleEffectToggle}
            />
          </ScrollArea>
        </div>
      </main>
      <RightSidebar activeEffects={activeEffects} />
    </div>
  );
}
