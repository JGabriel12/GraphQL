const user = async (_, { id }, { fetch }) => {
  const response = await fetch('http://localhost:3000/users/' + id);
  return response.json();
};

const users = async (_, __, { fetch }) => {
  const response = await fetch('http://localhost:3000/users');
  return response.json();
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
