import React, { useEffect } from "react";
import { Text, Pressable, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import {
  startTimer,
  pauseTimer,
  resetTimer,
  tick,
} from "@/store/slices/pomodoroSlice";
import * as Notifications from "expo-notifications";
import { Feather } from "@expo/vector-icons";
import Layout from "@/components/layout/Layout";

const Pomodoro = () => {
  const dispatch = useDispatch();
  const { mode, timeLeft, isRunning } = useSelector(
    (state: RootState) => state.pomodoro
  );

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(tick());
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, dispatch]);

  useEffect(() => {
    if (timeLeft === 0) {
      const newMode = mode === "focus" ? "Short Break" : "Focus";
      Notifications.scheduleNotificationAsync({
        content: {
          title: "Pomodoro",
          body: `Time for ${newMode}!`,
        },
        trigger: null,
      });
    }
  }, [timeLeft, mode]);

  return (
    <Layout>
      <Text className="text-3xl mb-32 ">Pomodoro (25/5)</Text>
      <View className="flex items-center">
        <Text className="text-5xl mb-5 font-bold">{mode === "focus" ? "Focus" : "Short Break"}</Text>
        <Text className="text-7xl mb-20">{formatTime(timeLeft)}</Text>
        <View className="flex-row">
          <Pressable
            onPress={() => dispatch(isRunning ? pauseTimer() : startTimer())}
            className="mr-9"
          >
            {isRunning ? (
              <Feather name="pause" size={75} color="#111" />
            ) : (
              <Feather name="play" size={75} color="#111" />
            )}
          </Pressable>

          <Pressable onPress={() => dispatch(resetTimer())}>
            <Feather name="square" size={73} color="#111" />
          </Pressable>
        </View>
      </View>
    </Layout>
  );
};

export default Pomodoro;
