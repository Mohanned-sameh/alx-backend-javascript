export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('map is not a Map');
  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
  return map;
}
