const isAN = (value) => {
  //check weird cases
  const edgeCases =
  (!value && value !== 0 || typeof value === 'string' || Array.isArray(value));
  if (edgeCases){ return false; }
  //number check
  value.toString();
  return /[0-9]/.test(value);
};
