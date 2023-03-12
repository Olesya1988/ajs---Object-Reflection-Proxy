export default function getSpecials(obj) {
  const result = [];
  const { special } = obj;
  for (let i = 0; i < special.length; i + 1) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = special[i];
    result.push({
      id, name, icon, description,
    });
  }
  return (result);
}
