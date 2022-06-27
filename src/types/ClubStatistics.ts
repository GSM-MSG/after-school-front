import { GradeType } from "./GradeType";
import { WeekType } from "./WeekType";

export interface ClubStatistics {
  afterSchoolIdx: number;
  week: WeekType[];
  title: string;
  attend: number;
  grade: GradeType[];
}
