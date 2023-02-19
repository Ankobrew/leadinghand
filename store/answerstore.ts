import { create } from "zustand";

type Answer = {
  answers: string;
  source: string[];
};

type AnswerState = {
  question: String | null;
  answer: Answer | null;

  fetchData: () => Promise<void>;
};

export const useAnswerStore = create<AnswerState>()((set) => ({
  question: null,
  answer: null,

  fetchData: async () => {
    const response = await fetch("http://127.0.0.1:5000");
    set({ answer: await response.json() });
  },
}));

// useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://127.0.0.1:5000");
//         const json = await response.json();
//         setData(json);
//       } catch (err) {
//         setError(error);
//       }
//     };
//     fetchData();
//   }, []);
