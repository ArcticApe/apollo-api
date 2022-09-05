const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type Query {
    liveCarbonIntensity(zone: String!): LiveCarbonIntensityResponse!
    carbonIntensityHistory(zone: String!): CarbonIntensityHistoryResponse!
    getUsaData(drilldowns: String!, measures: String!) : UsaDataResponse!
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

  type UsaDataResponse {
    code: Int
    success: Boolean
    message: String
    data: [UsaData]
    sources: [Sources]
  }

  type UsaData {
    IDNation: String
    Nation: String
    IDYear: Int
    Year: String
    Population: Int
    SlugNation: String
  }

  type Sources {
    measures: [String]
    annotations: AnnotationsDataSet
    name: String
    substitutions: [String]
  }

  type AnnotationsDataSet {
    sourcename: String
    sourcedescription: String
    datasetname: String
    datasetlink: String
    tableid: String
    topic: String
    subtopic: String
  }
`;

module.exports = typeDefs