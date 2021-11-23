const formatDate = (date) => {
  if (date === '' || !date) return '';
  const dateSplited = date.split('-');
  const year = dateSplited[0];
  const month = dateSplited[1];
  const day = dateSplited[2].slice(0, 2);

  return `${day}/${month}/${year}`;
};

export default formatDate;
