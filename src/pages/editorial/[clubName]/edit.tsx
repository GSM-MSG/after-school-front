import { GetServerSideProps, NextPage } from "next";
import CreatePage from "../../../components/CreatePage";
import Header from "../../../components/Header";
import api from "../../../lib/api";
import userCheck from "../../../lib/userCheck";
import { ClubDetail } from "../../../types/ClubDetail";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { clubName } = ctx.query;

    const { cookies, accessToken } = await userCheck(ctx);

    const { data } = await api.get<ClubDetail>(
      `/club/web/detail?type=EDITORIAL&q=${encodeURI(clubName as string)}`,
      {
        headers: { cookie: `accessToken=${accessToken}` },
      }
    );

    if (cookies) ctx.res.setHeader("set-cookie", cookies);

    if (data.scope !== "HEAD")
      return {
        props: {},
        redirect: {
          destination: `/editorial/${encodeURI(clubName as string)}`,
        },
      };

    return { props: { clubData: data } };
  } catch (e: any) {
    if (e.response && e.response.status === 402)
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

interface ClubEditProps {
  clubData: ClubDetail;
}

const EditPage: NextPage<ClubEditProps> = ({ clubData }) => {
  return (
    <>
      <Header />
      <CreatePage clubData={clubData} />
    </>
  );
};

export default EditPage;
