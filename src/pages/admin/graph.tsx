import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import AdminGraph from "../../components/AdminGraph";
import { CreateAfterSchool } from "../../components/CreateAfterSchool";
import Header from "../../components/Header";
import SEO from "../../components/SEO";
import admin from "../../lib/admin";
import userCheck from "../../lib/userCheck";
import { ClubStatistics } from "../../types";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { cookies, accessToken } = await userCheck(ctx);

    const { data } = await admin.get("/afterschool/statistics", {
      headers: { cookies: `accessToken=${accessToken}` },
    });

    if (cookies) ctx.res.setHeader("set-cookie", cookies);

    return {
      props: {
        clubData: data,
      },
    };
  } catch (e) {
    return {
      props: {},
      redirect: { destination: "/login" },
    };
  }
};

interface GraphProps {
  clubData: {
    total: number;
    afterSchools: ClubStatistics[];
  };
}

const Graph: NextPage<GraphProps> = ({ clubData }) => {
  const [create, setCreate] = useState(false);

  return (
    <>
      <SEO title="GCMS | graph" />
      <Header clickModal={setCreate} />
      <AdminGraph clubData={clubData} />
      {create && <CreateAfterSchool setCreate={setCreate} />}
    </>
  );
};

export default Graph;
