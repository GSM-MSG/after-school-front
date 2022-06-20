export type UserState = {
  id: number;
  title?: string;
  grade: number;
  week: string;
  personnel: number;
  maxPersonnel: number;
  isApplied: boolean;
};
export type weekType = "MON" | "TUE" | "WED";
export type PropListType = {
  id: number;
  title: string;
  week: [weekType, weekType] | [weekType];
  grade: number;
  personnel: number;
  maxPersonnel: number;
  isOpend: boolean;
  isApplied: boolean;
  isEnabled: boolean;
};

export type ChangeWeekType = (e: "MON" | "TUE" | "WED") => any;
