import DEFAULT_TABLE from '../../__constants__/DEFAULT_TABLE';
import getLatestValidTime from '../../utils/getLatestValidTime';

const SET_FORMAT = 'currentUsageTable/SET_FORMAT';
const SET_MONTH = 'currentUsageTable/SET_MONTH';
const SET_YEAR = 'currentUsageTable/SET_YEAR';

const initialState = {
  format: DEFAULT_TABLE,
  month: getLatestValidTime().month,
  year: getLatestValidTime().year,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_FORMAT:
      return {
        format: action.payload,
      };
    case SET_MONTH:
      return {
        month: action.payload,
      }
    case SET_YEAR:
      return {
        year: action.payload,
      }
    default:
      return state;
  }
}

export const setFormat = (format) => {
  return {
    type: SET_FORMAT,
    payload: format,
  };
}

export const setMonth = (month) => {
  return {
    type: SET_MONTH,
    payload: month,
  };
}

export const setYear = (year) => {
  return {
    type: SET_YEAR,
    payload: year,
  };
}