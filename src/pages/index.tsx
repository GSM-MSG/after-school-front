import { GetServerSideProps, NextPage } from "next";
import Header from "../components/Header";
import NomalAfterSchool from "../components/NomalAfterSchool";
import SEO from "../components/SEO";
import api from "../lib/api";
import userCheck from "../lib/userCheck";
import { AfterSchoolApiType } from "../types";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { cookies, accessToken } = await userCheck(ctx, true);

    const { data } = await api.get("/afterschool", {
      headers: { cookie: `accessToken=${accessToken}` },
    });

    console.log(data);

    if (cookies) ctx.res.setHeader("set-cookie", cookies);

    return {
      props: {
        data,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {},
      redirect: { destination: "/login" },
    };
  }
};

interface AfterSchoolProps {
  data: AfterSchoolApiType;
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
