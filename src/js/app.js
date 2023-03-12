export default function orderByProps(objectToSort, priorityProperties) {
  const keys = [];

  for (const prop in objectToSort) {
    if (!priorityProperties.includes(prop)) {
      keys.push(prop);
    }
  }

  keys.sort();

  const sortKeys = [...priorityProperties, ...keys];
  const result = [];

  for (const item of sortKeys) {
    result.push({ key: item, value: objectToSort[item] });
  }

  return result;
}
