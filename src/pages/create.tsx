import { GetServerSideProps, NextPage } from "next";
import CreatePage from "../components/CreatePage";
import Header from "../components/Header";
import userCheck from "../lib/userCheck";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { cookies } = await userCheck(ctx);

    if (cookies) {
      ctx.res.setHeader("set-cookie", cookies);
    }

    return {
      props: {},
    };
  } catch (e) {
    return { props: {}, redirect: { destination: "/login" } };
  }
};

const create: NextPage = () => {
  return (
    <>
      <Header />
      <CreatePage />
    </>
  );
};

export default create;
