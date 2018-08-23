import { EXAMPLE } from '../types';

const INITIAL_STATE = {
  EXAMPLE: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case EXAMPLE: {
      return {
        ...state,
        EXAMPLE: 'EXAMPLE'
      };
    }
    default:
      return state;
  }
}
