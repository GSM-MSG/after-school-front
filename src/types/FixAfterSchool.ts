import { GradeType } from "./GradeType";
import { SeasonType } from "./SeasonType";
import { WeekType } from "./WeekType";

export interface FixAfterSchool {
  season: SeasonType;
  id: number;
  title: string;
  week: WeekType[];
  grade: GradeType[];
  teacher: string;
}
