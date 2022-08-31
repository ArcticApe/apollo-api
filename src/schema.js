const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type Query {
    liveCarbonIntensity(zone: String!): LiveCarbonIntensityResponse!
    carbonIntensityHistory(zone: String!): CarbonIntensityHistoryResponse!
    publicAPI : publicAPIResponse!
    getUsaData (drilldowns: String!, measures: String!): getUsaData
  }

  type LiveCarbonIntensityResponse {
    code: Int!
    success: Boolean!
    message: String!
    carbonIntensity: CarbonIntensity
  }

  type CarbonIntensityHistoryResponse {
    code: Int!
    success: Boolean!
    message: String!
    carbonIntensityHistory: CarbonIntensityHistory
  }

  type CarbonIntensityHistory {
    zone: String
    history: [CarbonIntensity]
  }

  type CarbonIntensity {
    zone: String!
    carbonIntensity: Int
    datetime: Date
    updatedAt: Date
    emissionFactorType: String
    isEstimated: Boolean
    estimationMethod: String
  }

  type publicAPIResponse {
    count: Int!
    entries: [entries!]!
  }

  type entries {
    API: String!
    Description: String
    Auth: String
    HTTPS: String
    Cors: String
    Link: String
    Category: String
  }
  
  type getUsaData{
    IDNation: String
    Nation: String
    IDYear: Int
    Year: Int
    Population: Int
    SlugNation: String
  }
`;

module.exports = typeDefs