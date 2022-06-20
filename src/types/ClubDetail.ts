export interface ClubDetail {
  club: {
    type: "MAJOR" | "FREEDOM" | "EDITORIAL";
    bannerUrl: string;
    title: string;
    description: string;
    contact: string;
    teacher?: string;
    isOpened: boolean;
    notionLink: string;
  };
  activityurls: string[];
  head: {
    email: string;
    grade: number;
    class: number;
    num: number;
    userImg: string;
    name: string;
  };
  member: Member[];
  scope: "HEAD" | "MEMBER" | "USER";
  isApplied: boolean;
}

interface Member {
  email: string;
  grade: number;
  class: number;
  num: number;
  userImg: string;
  name: string;
}
