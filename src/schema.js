const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type Query {
    liveCarbonIntensity(zone: String!): LiveCarbonIntensityResponse!
    carbonIntensityHistory(zone: String!): CarbonIntensityHistoryResponse!
    getUsaData(drilldowns: String!, measures: String!): UsaDataResponse!
    getBikePoints(app_id: String!, app_key: String!): BikePointsResponse!
    getStopPointFares(app_id: String!, app_key: String!): stopPointFaresResponse!
    getStopPointServesRoutes(app_id: String!, app_key: String!): stopPointServesRoutesResponse!
    getRouteByMode(app_id: String!, app_key: String!): routeByModeResponse!
    getStatusBySeverity( app_id: String!, app_key: String!): statusBySeverityResponse!
    getTimeTableFromStationToStation( app_id: String!, app_key: String!): timeTableFromStationToStationResponse! 
  }

  type timeTableFromStationToStationResponse {
    code: Int
    success: Boolean
    message: String
    timeTableFromStationToStation: TimeTableFromStationToStationData
  }

  type TimeTableFromStationToStationData {
    type: String
    lineId: String
    lineName: String
    direction: String
    stations: [Stations]
    timetable: Timetable
    
  }

  type Stations {
    type: String
    stationId: String
    icsId: Int
    topMostParentId: String
    modes: [String]
    stopType: String
    zone: String
    lines: [Lines]
    status: Boolean
    id: String
    name: String
    lat: Float
    lon: Float
  }

  type Lines {
    id: String
    name: String
    uri: String
    type: String
    crowding: Crowding
    routeType: String
    status: String
  }

  type Crowding {
    type: String
  }

 type Timetable {
  departureStopId: String
  routes: [Routes]
 }

 type Routes {
  stationIntervals: [StationIntervals]
  schedules: [Schedules]

 }

 type StationIntervals {
  id: String
  intervals: [Intervals]
 }

 type Schedules {
  name: String
  knownJourneys: [KnownJourneys]
  periods: [Periods]
 }

 type Periods {
  type: String
  fromTime : FromTime
  toTime: ToTime
  frequency: Frequency
 }

 type FromTime {
  hour: String
  minute: String
 }

 type ToTime {
  hour: String
  minute: String
 }

 type Frequency {
  lowestFrequency: Float
  highestFrequency: Float
 }

 type KnownJourneys {
  hour: String
  minute: String
  intervalId: Int
 }

 type Intervals {
  stopId: String
  timeToArrival: Float

 }

  type statusBySeverityResponse{
    code: Int
    success: Boolean
    message: String
    statusBySeverity : [StatusBySeverityData]
  }

  type StatusBySeverityData {
    type: String
    name: String
    modeName: String
    disruptions: [String]
    created: String
    modified: String
    lineStatuses: [LineStatuses]
    routeSections: [String]
    serviceTypes: [ServiceTypes]
    crowding: Crowding

  }

  type LineStatuses {
    type: String
    id: Int
    statusSeverity: Int
    statusDescription: String
    created: String
    validityPeriods: [String]
  }

  type ServiceTypes {
    type: String
    name: String
    uri: String
  }

  type Crowding {
    type: String
  }

  type routeByModeResponse {
    code: Int
    success: Boolean
    message: String
    routeByMode: [routeByModeData]
  }

  type routeByModeData {
    type: String
    id: String
    name: String
    modeName: String
    disruptions: [String]
    created: String
    modified: String
    lineStatuses: [String]
    routeSections: [RouteSections]
    serviceTypes: [ServiceTypes]
    crowding: Crowding
  }

  type RouteSections {
    type: String
    name: String
    direction: String
    originationName: String
    destinationName: String
    originator: String
    destination: String
    serviceType: String
    validTo: String
    validFrom: String
  }

  type Crowding {
    type: String
  }

  type ServiceTypes {
    type: String
    name: String
    uri: String
  }


  type stopPointServesRoutesResponse {
    code: Int
    success: Boolean
    message: String
    stopPointsFaresRoutes: [stopPointServesRoutesData]
  }

  type stopPointServesRoutesData {
    type: String
    naptanId: String
    lineId: String
    mode: String
    validFrom: String
    validTo: String
    direction: String
    routeSectionName: String
    lineString : String
    isActive: Boolean
    serviceType: String
    destinationName: String

  }

  type stopPointFaresResponse {
    code: Int
    success: Boolean
    message: String
    stopPointFares: [stopPointFaresData]
  }

  type stopPointFaresData {
    type: String
    header: String
    index: Int
    journey: Journey
    rows: [Rows]
    messages: [Messages]
  }

  type Journey {
    type: String
    fromStation: FromStation
    toStation: ToStation
  }

  type FromStation {
    type: String
    atcoCode: String
    commonName: String
    fareCategory: String
  }

  type ToStation {
    type: String
    atcoCode: String
    commonName: String
    fareCategory: String
  }

  type Rows {
    type: String
    startDate: String
    endDate: String
    passengerType: String
    contactlessPAYOnlyFare: Boolean
    from: String
    to: String
    fromStation: String
    toStation: String
    displayName: String
    displayOrder: Int
    routeDescription: String
    specialFare: Boolean
    throughFare: Boolean
    isTour: Boolean
    ticketsAvailable: [TicketsAvailable]
    messages: [String]
  }

  type TicketsAvailable {
    type: String
    passengerType: String
    ticketType: TicketType
    ticketTime: TicketTime
    cost: Float
    description: String
    mode: String
    displayOrder: Int
    messages: [String]
  }

  type TicketType {
    type: String
    description: String 
  }

  type TicketTime {
    type: String
    description: String
  }

  type Messages {
    type: String
    bulletOrder: Int
    messageText: String
  }

  type BikePointsResponse {
    code: Int
    success: Boolean
    message: String
    bikePoints: [BikePointsData]
  }
  
  type BikePointsData {
    type: String
    id: String
    url: String
    commonName: String
    placeType: String
    additionalProperties: [AdditionalProperties]
    children: [String]
    childrenUrls: [String]
    lat: Float
    lon: Float
  }

  type AdditionalProperties {
    type: String
    category: String
    key: String
    sourceSystemKey: String
    value: String
    modified: String
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