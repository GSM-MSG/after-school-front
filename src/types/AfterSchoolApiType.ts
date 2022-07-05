import { PropListType } from "./AfterSchoolType";
import { GradeType } from "./GradeType";
import { WeekType } from "./WeekType";

export interface AfterSchoolApiType {
  list: PropListType[];
  currentGrade: GradeType;
  appliedWeek: WeekType[];
}
