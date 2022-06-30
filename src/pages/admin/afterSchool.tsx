import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import AdminAfterSchool from "../../components/AdminAfterSchool";
import { CreateAfterSchool } from "../../components/CreateAfterSchool";
import Header from "../../components/Header";
import { PropListType } from "../../types";
import userCheck from "../../lib/userCheck";
import admin from "../../lib/admin";
import SEO from "../../components/SEO";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { cookies, accessToken } = await userCheck()(ctx);

    const { data } = await admin.get("/afterschool", {
      headers: { cookie: `accessToken=${accessToken}` },
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
  const [create, setCreate] = useState(false);
  return (
    <>
      <SEO title="GCMS | admin" />
      <Header clickModal={setCreate} />
      <AdminAfterSchool data={data} />
      {create && <CreateAfterSchool setCreate={setCreate} />}
    </>
  );
};

export default AfterSchool;
