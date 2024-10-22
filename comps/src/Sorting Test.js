const data = [
  { name: 'Tomato', cost: 10, weight: 5 },
  { name: 'Carrot', cost: 8, weight: 4 },
  { name: 'Onion', cost: 5, weight: 7 },
];

function getSortValue(vegetable) {
  return vegetable.name;
}
const sortOrder = 'dsc';
data.sort((a, b) => {
  const valueA = getSortValue(a);
  const valueB = getSortValue(b);
  const reverseOrder = sortOrder === 'asc' ? 1 : -1;
  if (typeof valueA === 'number') {
    return (valueA - valueB) * reverseOrder;
  }
  if (typeof valueA === 'string') {
    return valueA.localeCompare(valueB) * reverseOrder;
  }
});
