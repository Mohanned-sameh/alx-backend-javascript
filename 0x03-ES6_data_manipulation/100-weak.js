const weakMap = new WeakMap();
let count = 0;
function queryAPI(endpoint) {
  if (weakMap.get(endpoint) >= 5) {
    throw Error('Endpoint load is high');
  }
  if (weakMap.get(endpoint)) {
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
  count += 1;
  return weakMap;
}

export { weakMap, queryAPI };
