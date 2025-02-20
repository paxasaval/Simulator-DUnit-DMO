import type { DigimonEvolution } from "../types/digimon"

interface EvolutionGridProps {
  cards: DigimonEvolution[]
}

export function EvolutionGrid({ cards }: EvolutionGridProps) {
  // Creamos un array de 8 slots, rellenando los vacíos con cards bloqueadas
  const allCards = [
    ...cards,
    ...Array(8 - cards.length)
      .fill(null)
      .map((_, index) => ({
        id: `empty-${cards.length + index}`, // Generamos IDs únicos para las cards vacías
        isLocked: true,
        rarity: "normal" as const,
        level:0
        
      })),
  ]

  return (
    <div className="grid grid-cols-4 gap-4 p-6">
      {allCards.map((card) => (
        <div
          key={card.id} // Usamos el ID único de cada card
          className={`relative aspect-[3/4] rounded-xl border-2 ${
            card.isLocked ? "bg-blue-950/20 border-blue-900/30" : "bg-gradient-to-b from-fuchsia-500 to-fuchsia-900"
          } ${
            !card.isLocked &&
            (card.rarity === "special"
              ? "border-yellow-400 shadow-lg shadow-yellow-400/20"
              : "border-blue-400 shadow-lg shadow-blue-400/20")
          }`}
        >
          {!card.isLocked && card.level && (
            <div className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-0.5 text-xs text-white">
              Lv. {card.level}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

