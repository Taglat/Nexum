import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PomodoroState {
  mode: 'focus' | 'shortBreak';
  timeLeft: number;
  isRunning: boolean;
  focusDuration: number;
  shortBreakDuration: number;
}

const initialState: PomodoroState = {
  mode: 'focus',
  timeLeft: 25 * 60,
  isRunning: false,
  focusDuration: 25 * 60,
  shortBreakDuration: 5 * 60,
};

const pomodoroSlice = createSlice({
  name: 'pomodoro',
  initialState,
  reducers: {
    startTimer(state) {
      state.isRunning = true;
    },
    pauseTimer(state) {
      state.isRunning = false;
    },
    resetTimer(state) {
      state.isRunning = false;
      state.timeLeft = state.mode === 'focus' ? state.focusDuration : state.shortBreakDuration;
    },
    tick(state) {
      if (state.timeLeft > 0) {
        state.timeLeft -= 1;
      } else {
        state.isRunning = false;
        state.mode = state.mode === 'focus' ? 'shortBreak' : 'focus';
        state.timeLeft = state.mode === 'focus' ? state.focusDuration : state.shortBreakDuration;
      }
    },
  },
});

export const { startTimer, pauseTimer, resetTimer, tick } = pomodoroSlice.actions;
export default pomodoroSlice.reducer;
