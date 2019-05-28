export const filterNullValues = obj =>
  Object.entries(obj)
    .filter(entry => !(entry[1] === null))
    .reduce((accum, [k, v]) => {
      accum[k] = v;
      return accum;
    }, {});

export const addKeys = generator => ({
  ...generator,
  keys: Array.from(Array(generator.text.length).keys())
});

export const removeProp = (propName, { [propName]: remove, ...rest }) => rest;
export const removeAllProps = (propName, obj) =>
  obj.map(item => removeProp(propName, item));

export const renameProp = (
  oldProp,
  newProp,
  { [oldProp]: old, ...others }
) => ({
  [newProp]: old || false,
  ...others
});

export const renameAllProps = (oldProp, newProp, obj) =>
  obj.map(item => renameProp(oldProp, newProp, item));
