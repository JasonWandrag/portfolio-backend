function fixArrayId(arr) {
  return arr.forEach((item, idx) => {
    item.id = idx + 1;
  });
}

module.exports = fixArrayId;
