let words : string[] = [
  'COMPUTADORA',
  'PALTA',
  'CHIRIMOYA',
  'VEHICULO',
  'VETERINARIO',
  'CELULAR'
]

export function getRandomWord() {

  const randomIndex = Math.floor(Math.random() * words.length);

  return words[randomIndex];
}