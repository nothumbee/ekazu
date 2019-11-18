const immutablySwapItems = (items, firstIndex, secondIndex) => {
  const itemsLength = items.length;
  if (firstIndex < 0 || secondIndex < 0 || firstIndex >= itemsLength || secondIndex >= itemsLength) return false;
  return items.map(
    (element, index) => (index === firstIndex
      ? items[secondIndex]
      : index === secondIndex
        ? items[firstIndex]
        : element),
  );
};

export default immutablySwapItems;
