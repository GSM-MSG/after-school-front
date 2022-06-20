export interface initialStateType {
  type: "MAJOR" | "FREEDOM" | "EDITORIAL";
  title: string;
  description: string;
  bannerUrl: string;
  contact: string;
  relatedLink: {
    name: string;
    url: string;
  };
  teacher: string;
  activityUrls: string[];
  member: Member[];
}

export interface Member {
  name: string;
  userImg: string;
}
