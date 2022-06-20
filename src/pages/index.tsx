import type { GetServerSideProps, NextPage } from "next";
import ClubAll from "../components/ClubAll";
import { Club } from "../types/Clubs";
import api from "../lib/api";
import userCheck from "../lib/userCheck";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { cookies, accessToken } = await userCheck(ctx);

    const { data } = await api.get(`/club/web/list?type=MAJOR`, {
      headers: { cookie: `accessToken=${accessToken}` },
    });

    if (cookies) ctx.res.setHeader("set-cookie", cookies);

    return {
      props: {
        clubs: data,
      },
    };
  } catch (e) {
    return {
      props: {},
      redirect: {
        destination: "/login",
      },
    };
  }
};

interface MainProps {
  clubs: Club[];
}

const Home: NextPage<MainProps> = ({ clubs }) => {
  return <ClubAll clubs={clubs} type="major" />;
};

export default Home;
