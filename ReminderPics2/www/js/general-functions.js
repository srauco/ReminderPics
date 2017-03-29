var cSort = function(a, b) {
  aName = a.name;
  bName = b.name;
  return aName < bName ? -1 : (aName == bName ? 0 : 1);
};
