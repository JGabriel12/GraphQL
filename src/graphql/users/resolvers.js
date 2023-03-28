const users = async (_, __, { getUsers }) => {
  const response = await getUsers();
  return response.json();
};

const user = async (_, { id }, { getUsers }) => {
  const response = await getUsers('/' + id);
  return response.json();
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};

/*
Em GraphQL, um resolver pode ter até quatro parâmetros, que são:

parent: representa o objeto pai que contém o campo que está sendo resolvido. No caso de uma consulta aninhada, onde há campos que se relacionam com outros campos, o parent representa o objeto pai imediatamente superior. Caso contrário, ele será null.

args: representa os argumentos passados pelo cliente na consulta GraphQL. Eles são definidos na declaração do campo no esquema GraphQL.

context: representa o contexto global da consulta GraphQL. Ele é comum a todos os resolvers e é definido pelo servidor. É usado para compartilhar informações entre resolvers, como dados do usuário autenticado, configurações do servidor, etc.

info: representa informações sobre a consulta GraphQL, como o esquema GraphQL, o nome do campo, a seleção de campos, entre outros. Ele é usado principalmente para otimização e pode ser ignorado na maioria dos casos.
*/
