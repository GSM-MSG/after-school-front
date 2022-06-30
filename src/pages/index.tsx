import { GetServerSideProps, NextPage } from "next";
import Header from "../components/Header";
import NomalAfterSchool from "../components/NomalAfterSchool";
import SEO from "../components/SEO";
import api from "../lib/api";
import userCheck from "../lib/userCheck";
import { PropListType } from "../types";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { cookies, accessToken } = await userCheck(true)(ctx);

    const { data } = await api.get("/afterschool", {
      headers: { cookies: `accessToken=${accessToken}` },
    });

    if (cookies) ctx.res.setHeader("set-cookie", cookies);

    return {
      props: {
        data,
      },
    };
  } catch (e) {
    return {
      props: {},
      redirect: { destination: "/login" },
    };
  }
};

interface AfterSchoolProps {
  data: PropListType[];
}

const AfterSchool: NextPage<AfterSchoolProps> = ({ data }) => {
  return (
    <>
      <SEO title="GCMS" />
      <Header turn={false} />
      <NomalAfterSchool data={data} />
    </>
  );
};

export default AfterSchool;
