import { atom } from "nanostores";

export type ThemeType = "dark" | "light" | null;

export const themeStore = atom<ThemeType>(null);
