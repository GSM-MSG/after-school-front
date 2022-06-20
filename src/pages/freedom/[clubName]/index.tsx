import Header from "../../../components/Header";
import InfoPage from "../../../components/InfoPage";
import api from "../../../lib/api";
import userCheck from "../../../lib/userCheck";
import { GetServerSideProps, NextPage } from "next";
import { ClubDetail } from "../../../types/ClubDetail";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { clubName } = ctx.query;

    const { cookies, accessToken } = await userCheck(ctx);

    const { data } = await api.get(
      `/club/web/detail?type=FREEDOM&q=${encodeURI(clubName as string)}`,
      {
        headers: { cookie: `accessToken=${accessToken}` },
      }
    );

    if (cookies) ctx.res.setHeader("set-cookie", cookies);

    return { props: { clubData: data } };
  } catch (e: any) {
    if (e.response.status === 402)
      return {
        props: {},
        redirect: { destination: "/login" },
      };

    return {
      props: {},
      redirect: { destination: "/" },
    };
  }
};

interface ClubInfo {
  clubData: ClubDetail;
}

const ClubInfo: NextPage<ClubInfo> = ({ clubData }) => {
  return (
    <>
      <Header />
      <InfoPage clubData={clubData} />
    </>
  );
};

export default ClubInfo;
