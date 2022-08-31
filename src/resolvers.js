const { GraphQLScalarType } = require("graphql");

const resolvers = {
  Query: {
    getUsaData: async (_, {data}, {dataSources}) => {
      try{
        const getUsaData =
            await dataSources.USADataApi.getUsaData(data);
          
          return{
            code: 200,
            succes: true,
            message: `Successfully pulled data from Usa API ${data}`,
            getUsaData,
          };
      } catch (err) {
          return {
            code: err.extensions.response.status,
            success: false,
            message: err.extensions.response.body,
            getUsaData: null,
        }
      }
    },
    liveCarbonIntensity: async (_, { zone }, { dataSources }) => {
      try {
        const carbonIntensity =
          await dataSources.electricityMapAPI.getLiveCarbonIntensity(zone);

        return {
          code: 200,
          success: true,
          message: `Successfully pulled live carbon intensity for zone ${zone}`,
          carbonIntensity,
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          carbonIntensity: null,
        };
      }
    },
    carbonIntensityHistory: async (_, { zone }, { dataSources }) => {
      try {
        const carbonIntensityHistory =
          await dataSources.electricityMapAPI.getCarbonIntensityHistory(zone);

        return {
          code: 200,
          success: true,
          message: `Successfully pulled carbon intensity history for zone ${zone}`,
          carbonIntensityHistory,
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          carbonIntensityHistory: null,
        };
      }
    },
  },
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    serialize(value) {
      return new Date(value);
    },
    parseValue(value) {
      return value;
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(parseInt(ast.value, 10));
      }
      return null;
    },
  }),
};

module.exports = resolvers;