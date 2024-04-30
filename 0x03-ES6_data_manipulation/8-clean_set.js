export default function cleanSet(set, startString) {
  return new Set([...set].filter((element) => element.startsWith(startString)));
}
