const UM = 1;
const DOIS = 2;
const TRES = 3;

const formatId = (id) => {
  if (id.toString().length === UM) return `000${id}`;
  if (id.toString().length === DOIS) return `00${id}`;
  if (id.toString().length === TRES) return `0${id}`;
  return id;
};

export default formatId;
