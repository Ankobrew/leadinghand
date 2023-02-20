import { create } from "zustand";

type Answer = {
  answers: string;
  source: string[];
  page: string[];
};

type AnswerState = {
  answer: Answer | null;

  fetchData: (question: string) => Promise<void>;
};

export const useAnswerStore = create<AnswerState>()((set) => ({
  answer: null,
  fetchData: async (question: string) => {
    const response = await fetch(`http://127.0.0.1:5000/${question}`);
    set({ answer: await response.json() });
  },
}));
