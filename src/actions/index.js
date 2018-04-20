export const TRANSACTION_AGGREGATION_BY_PARTICIPATING_ORGANISATION_INITIAL =
  'TRANSACTION_AGGREGATION_BY_PARTICIPATING_ORGANISATION_INITIAL';
export const TRANSACTION_AGGREGATION_BY_PARTICIPATING_ORGANISATION_REQUEST =
  'TRANSACTION_AGGREGATION_BY_PARTICIPATING_ORGANISATION_REQUEST';
export const TRANSACTION_AGGREGATION_BY_PARTICIPATING_ORGANISATION_SUCCESS =
  'TRANSACTION_AGGREGATION_BY_PARTICIPATING_ORGANISATION_SUCCESS';
export const TRANSACTION_AGGREGATION_BY_PARTICIPATING_ORGANISATION_FAILED =
  'TRANSACTION_AGGREGATION_BY_PARTICIPATING_ORGANISATION_FAILED';
export function transactionAggregationByParticipatingOrganisationInitial() {
  return {
    type: TRANSACTION_AGGREGATION_BY_PARTICIPATING_ORGANISATION_INITIAL
  }
}
export function transactionAggregationByParticipatingOrganisationRequest(values) {
  return {
    type: TRANSACTION_AGGREGATION_BY_PARTICIPATING_ORGANISATION_REQUEST,
    values: values
  }
}
export function transactionAggregationByParticipatingOrganisationSuccess(data) {
  return {
    type: TRANSACTION_AGGREGATION_BY_PARTICIPATING_ORGANISATION_SUCCESS,
    data: data
  }
}
export function transactionAggregationByParticipatingOrganisationFailed(error) {
  return {
    type: TRANSACTION_AGGREGATION_BY_PARTICIPATING_ORGANISATION_FAILED,
    error: error
  }
}

export const ACTIVITIES_INITIAL = 'ACTIVITIES_INITIAL';
export const ACTIVITIES_REQUEST = 'ACTIVITIES_REQUEST';
export const ACTIVITIES_SUCCESS = 'ACTIVITIES_SUCCESS';
export const ACTIVITIES_FAILED = 'ACTIVITIES_FAILED';
export function activitiesInitial() {
  return {
    type: ACTIVITIES_INITIAL
  }
}
export function activitiesRequest(values) {
  return {
    type: ACTIVITIES_REQUEST,
    values: values
  }
}
export function activitiesSuccess(data) {
  return {
    type: ACTIVITIES_SUCCESS,
    data: data
  }
}
export function activitiesFailed(error) {
  return {
    type: ACTIVITIES_FAILED,
    error: error
  }
}

export const TRANSACTIONS_AGGREGATIONS_INITIAL = 'TRANSACTIONS_AGGREGATIONS_INITIAL';
export const TRANSACTIONS_AGGREGATIONS_REQUEST = 'TRANSACTIONS_AGGREGATIONS_REQUEST';
export const TRANSACTIONS_AGGREGATIONS_SUCCESS = 'TRANSACTIONS_AGGREGATIONS_SUCCESS';
export const TRANSACTIONS_AGGREGATIONS_FAILED = 'TRANSACTIONS_AGGREGATIONS_FAILED';
export function transactionsAggregationsInitial() {
  return {
    type: TRANSACTIONS_AGGREGATIONS_INITIAL
  }
}
export function transactionsAggregationsRequest(values) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_REQUEST,
    values: values
  }
}
export function transactionsAggregationsSuccess(data) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_SUCCESS,
    data: data
  }
}
export function transactionsAggregationsFailed(error) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_FAILED,
    error: error
  }
}

export const TRANSACTIONS_AGGREGATIONS_REGIONS_INITIAL = 'TRANSACTIONS_AGGREGATIONS_REGIONS_INITIAL';
export const TRANSACTIONS_AGGREGATIONS_REGIONS_REQUEST = 'TRANSACTIONS_AGGREGATIONS_REGIONS_REQUEST';
export const TRANSACTIONS_AGGREGATIONS_REGIONS_SUCCESS = 'TRANSACTIONS_AGGREGATIONS_REGIONS_SUCCESS';
export const TRANSACTIONS_AGGREGATIONS_REGIONS_FAILED = 'TRANSACTIONS_AGGREGATIONS_REGIONS_FAILED';
export function transactionsAggregationsRegionsInitial() {
  return {
    type: TRANSACTIONS_AGGREGATIONS_REGIONS_INITIAL
  }
}
export function transactionsAggregationsRegionsRequest(values) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_REGIONS_REQUEST,
    values: values
  }
}
export function transactionsAggregationsRegionsSuccess(data) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_REGIONS_SUCCESS,
    data: data
  }
}
export function transactionsAggregationsRegionsFailed(error) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_REGIONS_FAILED,
    error: error
  }
}

export const TRANSACTIONS_AGGREGATIONS_COUNTRIES_INITIAL = 'TRANSACTIONS_AGGREGATIONS_COUNTRIES_INITIAL';
export const TRANSACTIONS_AGGREGATIONS_COUNTRIES_REQUEST = 'TRANSACTIONS_AGGREGATIONS_COUNTRIES_REQUEST';
export const TRANSACTIONS_AGGREGATIONS_COUNTRIES_SUCCESS = 'TRANSACTIONS_AGGREGATIONS_COUNTRIES_SUCCESS';
export const TRANSACTIONS_AGGREGATIONS_COUNTRIES_FAILED = 'TRANSACTIONS_AGGREGATIONS_COUNTRIES_FAILED';
export function transactionsAggregationsCountriesInitial() {
  return {
    type: TRANSACTIONS_AGGREGATIONS_COUNTRIES_INITIAL
  }
}
export function transactionsAggregationsCountriesRequest(values) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_COUNTRIES_REQUEST,
    values: values
  }
}
export function transactionsAggregationsCountriesSuccess(data) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_COUNTRIES_SUCCESS,
    data: data
  }
}
export function transactionsAggregationsCountriesFailed(error) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_COUNTRIES_FAILED,
    error: error
  }
}

export const TRANSACTIONS_AGGREGATIONS_ACTIVITY_STATUS_INITIAL = 'TRANSACTIONS_AGGREGATIONS_ACTIVITY_STATUS_INITIAL';
export const TRANSACTIONS_AGGREGATIONS_ACTIVITY_STATUS_REQUEST = 'TRANSACTIONS_AGGREGATIONS_ACTIVITY_STATUS_REQUEST';
export const TRANSACTIONS_AGGREGATIONS_ACTIVITY_STATUS_SUCCESS = 'TRANSACTIONS_AGGREGATIONS_ACTIVITY_STATUS_SUCCESS';
export const TRANSACTIONS_AGGREGATIONS_ACTIVITY_STATUS_FAILED = 'TRANSACTIONS_AGGREGATIONS_ACTIVITY_STATUS_FAILED';
export function transactionsAggregationsActivityStatusInitial() {
  return {
    type: TRANSACTIONS_AGGREGATIONS_ACTIVITY_STATUS_INITIAL
  }
}
export function transactionsAggregationsActivityStatusRequest(values) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_ACTIVITY_STATUS_REQUEST,
    values: values
  }
}
export function transactionsAggregationsActivityStatusSuccess(data) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_ACTIVITY_STATUS_SUCCESS,
    data: data
  }
}
export function transactionsAggregationsActivityStatusFailed(error) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_ACTIVITY_STATUS_FAILED,
    error: error
  }
}

export const TRANSACTIONS_AGGREGATIONS_SECTOR_INITIAL = 'TRANSACTIONS_AGGREGATIONS_SECTOR_INITIAL';
export const TRANSACTIONS_AGGREGATIONS_SECTOR_REQUEST = 'TRANSACTIONS_AGGREGATIONS_SECTOR_REQUEST';
export const TRANSACTIONS_AGGREGATIONS_SECTOR_SUCCESS = 'TRANSACTIONS_AGGREGATIONS_SECTOR_SUCCESS';
export const TRANSACTIONS_AGGREGATIONS_SECTOR_FAILED = 'TRANSACTIONS_AGGREGATIONS_SECTOR_FAILED';
export function transactionsAggregationsSectorInitial() {
  return {
    type: TRANSACTIONS_AGGREGATIONS_SECTOR_INITIAL
  }
}
export function transactionsAggregationsSectorRequest(values) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_SECTOR_REQUEST,
    values: values
  }
}
export function transactionsAggregationsSectorSuccess(data) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_SECTOR_SUCCESS,
    data: data
  }
}
export function transactionsAggregationsSectorFailed(error) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_SECTOR_FAILED,
    error: error
  }
}

export const TRANSACTIONS_AGGREGATIONS_PARTICIPATING_ORGANISATION_INITIAL =
  'TRANSACTIONS_AGGREGATIONS_PARTICIPATING_ORGANISATION_INITIAL';
export const TRANSACTIONS_AGGREGATIONS_PARTICIPATING_ORGANISATION_REQUEST =
  'TRANSACTIONS_AGGREGATIONS_PARTICIPATING_ORGANISATION_REQUEST';
export const TRANSACTIONS_AGGREGATIONS_PARTICIPATING_ORGANISATION_SUCCESS =
  'TRANSACTIONS_AGGREGATIONS_PARTICIPATING_ORGANISATION_SUCCESS';
export const TRANSACTIONS_AGGREGATIONS_PARTICIPATING_ORGANISATION_FAILED =
  'TRANSACTIONS_AGGREGATIONS_PARTICIPATING_ORGANISATION_FAILED';
export function transactionsAggregationsParticipatingOrganisationInitial() {
  return {
    type: TRANSACTIONS_AGGREGATIONS_PARTICIPATING_ORGANISATION_INITIAL
  }
}
export function transactionsAggregationsParticipatingOrganisationRequest(values) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_PARTICIPATING_ORGANISATION_REQUEST,
    values: values
  }
}
export function transactionsAggregationsParticipatingOrganisationSuccess(data) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_PARTICIPATING_ORGANISATION_SUCCESS,
    data: data
  }
}
export function transactionsAggregationsParticipatingOrganisationFailed(error) {
  return {
    type: TRANSACTIONS_AGGREGATIONS_PARTICIPATING_ORGANISATION_FAILED,
    error: error
  }
}