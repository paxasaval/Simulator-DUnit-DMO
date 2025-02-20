"use client";

import { useState } from "react";
import { LeftSidebar } from "../components/left-sidebar";
import { EvolutionGrid } from "../components/evolution-grid";
import { CollectionEffects } from "../components/collection-effects";
import { RightSidebar } from "../components/right-sidebar";
import type { DigimonItem } from "../types/digimon";
import { ScrollArea } from "@/components/ui/scroll-area";

// Datos iniciales del primer Digimon
const initialDigimon: DigimonItem = {
  id: "dorumonE",
  name: "Dorumon [Raptordramon]",
  stars: 1,
  evolutions: [
    { id: 1, level: 170, imageUrl: "/placeholder.svg", rarity: "normal" },
    { id: 2, level: 170, imageUrl: "/placeholder.svg", rarity: "normal" },
    { id: 3, level: 170, imageUrl: "/placeholder.svg", rarity: "normal" },
    { id: 4, level: 170, imageUrl: "/placeholder.svg", rarity: "special" },
    { id: 5, level: 170, imageUrl: "/placeholder.svg", rarity: "special" },
    { id: 6, level: 170, imageUrl: "/placeholder.svg", rarity: "special" },
  ],
  effects: [
    {
      id: "effect1",
      condition: "Al poseer 6 Digimon",
      effect: "EV",
      value: "+ 30",
      numericValue: 30,
      statType: "EV",
    },
    {
      id: "effect2",
      condition: "Cuando la suma del Lv. de los Digimon es 720",
      effect: "EV",
      value: "+ 100",
      numericValue: 100,
      statType: "EV",
    },
    {
      id: "effect3",
      condition: "Al poseer 6 Digimon Trascendidos",
      effect: "Daño de Atributo Vacuna",
      value: "+2%",
      numericValue: 2,
      statType: "AT",
    },
    {
      id: "effect4",
      condition: "Cuando la suma del Lv. de los Digimon es 900",
      effect: "Bono de SDC Luz",
      value: "+2%",
      numericValue: 2,
      statType: "MaxDS",
    },
  ],
};

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
