const validateName = (name) => {
  const minLength = 11;
  return (name.length > minLength);
};

export default validateName;
