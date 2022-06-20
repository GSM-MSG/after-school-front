export interface MemberType {
  userScope: "HEAD" | "MEMBER";
  requestUser: Member[];
}

export interface Member {
  email: string;
  name: string;
  grade: number;
  class: number;
  num: number;
  userImg: string;
  scope?: "HEAD" | "MEMBER";
}
