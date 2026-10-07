import { createStore } from 'redux';
import reducer from './reducer';

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = createStore(reducer);

// remember the chosen color mode across reloads
store.subscribe(() => {
  try {
    localStorage.setItem('mode', store.getState().customization.mode);
  } catch {
    // storage unavailable (private mode) - not critical
  }
});

export { store };
