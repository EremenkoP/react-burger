const makeUniq = (arr) => {
  const uniqSet = new Set(arr);
  return [...uniqSet];
}

export {makeUniq}
