import { SeasonType } from "./SeasonType";
import { WeekType } from "./WeekType";

export interface FixAfterSchool {
  season: SeasonType;
  id: number;
  title: string;
  week: WeekType[];
  grade: 1 | 2 | 3;
  teacher: string;
}
