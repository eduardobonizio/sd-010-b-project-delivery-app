const loginService = async ({ email, password }) => {
  const getToken = await User.findOne({ where: { email, password } });
  if (!getToken) return { status: 404, message: "User not found" };
  return { status: 201, message: getToken };
};
