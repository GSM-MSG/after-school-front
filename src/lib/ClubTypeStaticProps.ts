import api from "./api";

export const ClubTypeStaticProps =
  (type: "MAJOR" | "EDITORIAL" | "FREEDOM") => async () => {
    try {
      const { data } = await api.get(`/club/list?type=${type}`, {
        withCredentials: true,
      });

      console.log(data);

      return {
        props: {
          clubs: data,
        },
        revalidate: 60 * 10,
      };
    } catch (e) {
      return {
        props: {},
      };
    }
  };
