import { TypeRootStackParamList } from "@/navigation/navigation.types";

export const techniques: {
  id: number;
  path?: keyof TypeRootStackParamList;
  title: string;
  description: string;
}[] = [
  {
    id: 1,
    path: "Pomodoro",
    title: 'Pomodoro (25/5)',
    description: 'Set a timer for 25 minutes, start working. When the time is up, go to rest for 5 minutes. And several times in a row.',
  },
  {
    id: 2,
    title: 'Feynman technique',
    description: 'A four-step process for understanding any topic. This technique eschews automatic memorization in favor of true understanding achieved through selection, research, writing, explanation, and clarification.',
  },
  {
    id: 3,
    path: "EisenhowerMatrix",
    title: 'Eisenhower matrix',
    description: 'Time management method. which helps to isolate the most important and urgent from the whole flow of cases.',
  },
  {
    id: 4,
    path: "Blurting",
    title: 'Blurting',
    description: 'Blurting involves writing down all the information you can remember on a topic (it doesn\'t matter about the order or if it\'s correct at the start) then going back to your notes to find out what you\'ve missed or got wrong.',
  },
];
