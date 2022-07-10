import { GetServerSideProps } from "next";
import AdminLogin from "../../components/AdminLogin";
import SEO from "../../components/SEO";
import admin from "../../lib/admin";
import userCheck from "../../lib/userCheck";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { cookies, accessToken } = await userCheck(ctx);

    await admin.get("/afterschool", {
      headers: { cookie: `adminAccessToken=${accessToken}` },
    });

    if (cookies) ctx.res.setHeader("set-cookie", cookies);

    return {
      props: {},
      redirect: { destination: "/admin/afterSchool" },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default function AdminPage() {
  return (
    <>
      <SEO title="GCMS | admin login" />
      <AdminLogin />
    </>
  );
}
