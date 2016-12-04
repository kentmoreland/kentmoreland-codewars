const createDict = (keys, values) => {
  return keys.reduce((store, key, index) => {
    values[index] === undefined ? values[index] = null : values[index];
    store[key] = values[index];
    return store;
  }, {});
};

let test1 = { keys: ['a', 'b', 'c', 'd'], values: [1, 2, 3]};
console.log(createDict(test1.keys, test1.values))
