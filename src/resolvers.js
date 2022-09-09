const { GraphQLScalarType } = require("graphql");

const resolvers = {
  Query: {

    getTimeTableFromStationToStation: async(_, {app_id, app_key}, {dataSources}) => {
      try {
        const timeTableFromStationToStation =
        await dataSources.TransportForLondon.getTimeTableFromStationToStation (app_id, app_key);
        return {
          code: 200,
          success: true,
          message: `Successfully fetched data from the Timetable from station to station API.`,
          timeTableFromStationToStation,
        }
      } catch (err) {
          return {
            code: err.extensions.response.status,
            success: false,
            message: err.extensions.response.body,
            timeTableFromStationToStation: null,
          }
      }
    },

    getStatusBySeverity: async (_, {app_id, app_key}, {dataSources}) => {
      try {
        const statusBySeverity = 
        await dataSources.TransportForLondon.getStatusBySeverity (app_id, app_key);
        return {
          code: 200,
          success: true,
          message: `Successfully fetched data from Status By Severity API.`,
          statusBySeverity,
        }
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          statusBySeverity: null
        }
      } 
    },

    getRouteByMode: async (_, {app_id, app_key}, {dataSources}) => {
      try{
        const routeByMode =
        await dataSources.TransportForLondon.getRouteByMode(app_id, app_key);
        return {
          code: 200,
          success: true,
          message: `Successfully fetched data from Route By Mode API.`,
          routeByMode,
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          routeByMode: null
        }
      }
    },

    getStopPointServesRoutes: async (_, {app_id, app_key}, {dataSources}) => {
      try {
        const stopPointsFaresRoutes =
          await dataSources.TransportForLondon.getStopPointServesRoutes(app_id, app_key);
          return {
            code: 200,
            success: true,
            message: `Successfully pulled data from Stop Points Serves Routes`,
            stopPointsFaresRoutes,
          };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          stopPointsFaresRoutes: null,
        }
      }
    },

    getStopPointFares: async (_, { app_id, app_key }, {dataSources}) => {
      try {
        const stopPointFares =
          await dataSources.TransportForLondon.getStopPointFares(app_id, app_key);
            return {
              code: 200,
              success: true,
              message: `Successfully pulled data from Bike Points API`,
              stopPointFares, 
            };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          stopPointFares: null,
        }
      }
    },

    getBikePoints: async (_, { app_id, app_key }, {dataSources}) => {
      try{
        const bikePoints =
          await dataSources.TransportForLondon.getBikePoints(app_id, app_key);
            return{ 
              code: 200,
              success: true,
              message: `Successfully pulled data from Bike Points API`,
              bikePoints,
            };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          bikePoints: null,
        }
      }
    },

    getUsaData: async (_, { drilldowns, measures }, {dataSources}) => {
      try{
        const getUsaData = 
          await dataSources.USADataApi.getUsaData(drilldowns, measures);
          return{
            code: 200,
            success: true,
            message: `Successfully pulled data from Usa API`,
            data: getUsaData.data,
            sources: getUsaData.source,
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
  UsaData: {
    IDNation: ( parent ) => parent ["ID Nation"],
    IDYear: ( parent ) => parent ["ID Year"],
    SlugNation: ( parent ) => parent ["Slug Nation"]
  },

  BikePointsData: {
    type: ( parent ) => parent ["$type"],
  },

  AdditionalProperties: {
    type: ( parent ) => parent ["$type"],
  },

  stopPointFaresData: {
    type: ( parent ) => parent ["$type"],
  },

  Journey: {
    type: ( parent ) => parent ["$type"],
  },

  FromStation: {
    type: ( parent ) => parent ["$type"],
  },

  ToStation: {
    type: ( parent ) => parent ["$type"],
  },

  Rows: {
    type: ( parent ) => parent ["$type"],
  },

  TicketsAvailable: {
    type: ( parent ) => parent ["$type"],
  },

  Messages: {
    type: ( parent ) => parent ["$type"],
  },

  TimeTableFromStationToStationData: {
    type: ( parent ) => parent ["$type"],
  },

  Stations: {
    type: ( parent ) => parent ["$type"],
  },

  AnnotationsDataSet: {
    sourcename: ( parent ) => parent ["source_name"],
    sourcedescription: ( parent ) => parent ["source_description"],
    datasetname: ( parent ) => parent ["dataset_name"],
    datasetlink: ( parent ) => parent ["dataset_link"],
    tableid: ( parent ) => parent ["table_id"],
  },

  stopPointServesRoutesData: {
    type: ( parent ) => parent ["$type"],
  },

  routeByModeData: {
    type: ( parent ) => parent ["$type"],
  },

  RouteSections: {
    type: ( parent ) => parent ["$type"],
  },

  ServiceTypes: {
    type: ( parent ) => parent ["$type"],
  },

  Crowding: {
    type: ( parent ) => parent ["$type"],
  },

  StatusBySeverityData: {
    type: ( parent ) => parent ["$type"],
  },

  LineStatuses: {
    type: ( parent ) => parent ["$type"],
  },

  ServiceTypes: {
    type: ( parent ) => parent ["$type"],
  },

  Crowding: {
    type: ( parent ) => parent ["$type"],
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