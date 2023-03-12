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

export function getSpecials(obj) {
  const result = [];
  const { special } = obj;
  for (const i of special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = i;
    result.push({
      id, name, icon, description,
    });
  }
  return (result);
}
