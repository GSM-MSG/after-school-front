export type UserState = {
  id: number;
  title?: string;
  grade: number;
  week: string;
  isApplied: boolean;
};
export type weekType = "MON" | "TUE" | "WED";
export type PropListType = {
  id: number;
  title: string;
  week: weekType[];
  grade: number;
  isOpend: boolean;
  isApplied: boolean;
  isEnabled: boolean;
};

export type ChangeWeekType = (e: "MON" | "TUE" | "WED") => any;
