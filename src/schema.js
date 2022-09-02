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
    data: [UsaData!]!
    source: [Sources!]!
  }

  type Sources {
    measures: [String!]!
    annotations: [AnnotationsDataSet]
    name: String
    
  }

  type UsaData {
    IDNation: String
    Nation: String
    IDYear: Int
    Year: String
    Population: Int
    SlugNation: String
  }

  type AnnotationsDataSet {
    source_name: String
    source_description: String
    dataset_name: String
    dataset_link: String
    table_id: String
    topic: String
    subtopic: String
  }
`;

module.exports = typeDefs