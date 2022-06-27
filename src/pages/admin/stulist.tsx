import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import AdminStuList from "../../components/AdminStuList";
import { CreateAfterSchool } from "../../components/CreateAfterSchool";
import Header from "../../components/Header";
import { ApplyUserType } from "../../types";
import userCheck from "../../lib/userCheck";
import api from "../../lib/api";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { cookies, accessToken } = await userCheck(ctx);

    const { data } = await api.get(`/users/${ctx.query.afterSchoolIdx}`, {
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

interface StulistProps {
  data: ApplyUserType[];
}

const StuList: NextPage<StulistProps> = ({ data }) => {
  const [create, setCreate] = useState(false);

  return (
    <>
      <Header clickModal={setCreate} />
      <AdminStuList data={data} />
      {create && <CreateAfterSchool setCreate={setCreate} />}
    </>
  );
};

export default StuList;
