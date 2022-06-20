export interface MyPageType {
  userData: {
    email: string;
    name: string;
    grade: number;
    class: number;
    num: number;
    userImg: string;
  };
  clubs: Club[];
}

interface Club {
  id: number;
  type: "MAJOR" | "FREEDOM" | "EDITORIAL";
  bannerUrl: string;
  title: string;
  description: string;
  contact: string;
  teacher: null | string;
  isOpened: boolean;
}
