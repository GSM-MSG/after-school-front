import { SeasonType } from "./SeasonType";
import { GradeType } from "./GradeType";

export type UserState = {
  id: number;
  title?: string;
  grade: GradeType[];
  dayOfWeek: weekType[];
  isApplied: boolean;
};
export type weekType = "MON" | "TUE" | "WED";
export type PropListType = {
  id: number;
  title: string;
  dayOfWeek: weekType[];
  grade: GradeType[];
  season: SeasonType;
  teacher: string;
  isOpened: boolean;
  isApplied: boolean;
  isEnabled: boolean;
};

export type ChangeWeekType = (e: "MON" | "TUE" | "WED") => any;
