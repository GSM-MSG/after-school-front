import { GradeType } from "./GradeType";
import { WeekType } from "./WeekType";

export interface ClubStatistics {
  afterSchoolIdx: number;
  dayOfWeekList: WeekType[];
  afterSchoolTitle: string;
  attend: number;
  grade: GradeType[];
}
