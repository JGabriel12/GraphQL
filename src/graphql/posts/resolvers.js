const users = async () => {
  return [
    {
      id: 'sswmdiwneqsldkqiwdn',
      userName: 'Gabriel',
    },
    {
      id: 'pwrpqoweolaç',
      userName: 'Maria',
    },
  ];
};

const user = async () => {
  return {
    id: 'sswmdiwneqsldkqiwdn',
    userName: 'Gabriel',
  };
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
