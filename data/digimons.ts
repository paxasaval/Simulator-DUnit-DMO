import { DigimonItem } from "@/types/digimon"

const digimonsTest:DigimonItem[] = [
    {
      id: "dorumon",
      name: "Dorumon [Raptordramon]",
      stars: 1,
      evolutions: [
        { id: 1, level: 170, imageUrl: "/placeholder.svg", rarity: "normal" },
        { id: 2, level: 170, imageUrl: "/placeholder.svg", rarity: "normal" },
        { id: 3, level: 170, imageUrl: "/placeholder.svg", rarity: "normal" },
      ],
      effects: [
        {
          id: "effect1",
          condition: "Al poseer 3 Digimon",
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
    },
    {
      id: "Agumon",
      name: "Agumon [Classic]",
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
    },
  ]
  export default digimonsTest