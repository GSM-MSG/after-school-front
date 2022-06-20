import { GetServerSideProps, NextPage } from "next";
import ClubAll from "../../components/ClubAll";
import Header from "../../components/Header";
import api from "../../lib/api";
import userCheck from "../../lib/userCheck";
import { Club } from "../../types/Clubs";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { cookies, accessToken } = await userCheck(ctx);

    const { data } = await api.get(`/club/web/list?type=FREEDOM`, {
      headers: { cookie: `accessToken=${accessToken}` },
    });

    if (cookies) ctx.res.setHeader("set-cookie", cookies);

    return {
      props: {
        clubs: data,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {},
      redirect: {
        destination: "/login",
      },
    };
  }
};

interface FreedomListProps {
  clubs: Club[];
}

const FreedomList: NextPage<FreedomListProps> = ({ clubs }) => {
  return (
    <>
      <Header />
      <ClubAll clubs={clubs} type="freedom" />
    </>
  );
};

export default FreedomList;
