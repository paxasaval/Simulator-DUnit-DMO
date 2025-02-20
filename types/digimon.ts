// Creamos un archivo de tipos centralizado
export interface DigimonEvolution {
    id: number
    level: number
    imageUrl: string
    rarity: "normal" | "special"
    isLocked?: boolean

  }
  
  export interface DigimonEffect {
    id: string
    condition: string
    effect: string
    value: string
    numericValue: number
    statType: string
  }
  
  export interface DigimonItem {
    id: string
    name: string
    stars: number
    evolutions: DigimonEvolution[]
    effects: DigimonEffect[]
  }
  
  