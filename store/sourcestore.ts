import { create } from "zustand";

type SourceState = {
  currentSource: String;
  pageNumber: String;
  setSource: (source: String, index: String) => void;
};

export const useSourceStore = create<SourceState>()((set) => ({
  currentSource: "",
  pageNumber: "",
  setSource: (source, index) =>
    set({ currentSource: source, pageNumber: index }),
}));
