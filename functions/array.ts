export function randomArray(array: any[]) {
  return array
    .map((id) => ({ id, random: Math.random() }))
    .sort((item1, item2) => item1.random - item2.random)
    .map((item) => item.id);
}
