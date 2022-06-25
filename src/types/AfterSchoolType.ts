import { SeasonType } from "./SeasonType";

export type UserState = {
  id: number;
  title?: string;
  grade: 1 | 2 | 3;
  week: weekType[];
  isApplied: boolean;
};
export type weekType = "MON" | "TUE" | "WED";
export type PropListType = {
  id: number;
  title: string;
  week: weekType[];
  grade: 1 | 2 | 3;
  season: SeasonType;
  teacher: string;
  isOpend: boolean;
  isApplied: boolean;
  isEnabled: boolean;
};

export type ChangeWeekType = (e: "MON" | "TUE" | "WED") => any;
