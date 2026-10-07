// project imports
import config from 'config';

// action - state management
import * as actionTypes from './actions';

function initialMode() {
  try {
    const saved = localStorage.getItem('mode');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // storage unavailable - fall back to the OS preference
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export const initialState = {
  isOpen: [], // for active default menu
  defaultId: 'default',
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: false,
  mode: initialMode()
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const customizationReducer = (state = initialState, action) => {
  let id;
  switch (action.type) {
    case actionTypes.MENU_OPEN:
      id = action.id;
      return {
        ...state,
        isOpen: [id]
      };
    case actionTypes.SET_MENU:
      return {
        ...state,
        opened: action.opened
      };
    case actionTypes.SET_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily
      };
    case actionTypes.SET_BORDER_RADIUS:
      return {
        ...state,
        borderRadius: action.borderRadius
      };
    case actionTypes.SET_MODE:
      return {
        ...state,
        mode: action.mode
      };
    default:
      return state;
  }
};

export default customizationReducer;
