import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import AdminStuList from "../../components/AdminStuList";
import { CreateAfterSchool } from "../../components/CreateAfterSchool";
import Header from "../../components/Header";
import { ApplyUserType } from "../../types";
import userCheck from "../../lib/userCheck";
import admin from "../../lib/admin";
import SEO from "../../components/SEO";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { cookies, accessToken } = await userCheck(ctx);

    const { data } = await admin.get(`/users/${ctx.query.afterSchoolIdx}`, {
      headers: { cookie: `adminAccessToken=${accessToken}` },
    });

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

interface StulistProps {
  data: ApplyUserType[];
}

const StuList: NextPage<StulistProps> = ({ data }) => {
  const [create, setCreate] = useState(false);

  return (
    <>
      <SEO title="GCMS | students" />
      <Header clickModal={setCreate} />
      <AdminStuList data={data} />
      {create && <CreateAfterSchool setCreate={setCreate} />}
    </>
  );
};

export default StuList;
