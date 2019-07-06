import DEFAULT_TABLE from '../../__constants__/DEFAULT_TABLE';

const SET = 'currentUsageTable/SET';

const initialState = {
  // Note that gen should be <= 7
  gen: DEFAULT_TABLE.GEN,
  // Format should be ubers, ou, uu, or nu
  format: DEFAULT_TABLE.FORMAT,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET:
      return {
        gen: action.gen,
        format: action.format
      };
    default:
      return state;
  }
}

export const set = (gen, format) => {
  return {
    type: SET,
    gen,
    format,
  };
}