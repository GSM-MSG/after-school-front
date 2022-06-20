import { GetServerSideProps, NextPage } from "next";
import Users from "../../../components/Users";
import api from "../../../lib/api";
import userCheck from "../../../lib/userCheck";
import { MemberType } from "../../../types/MemberType";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { cookies, accessToken } = await userCheck(ctx);

    const { clubName } = ctx.query;

    const { data } = await api.get(
      `/club/web/applicant?q=${encodeURI(clubName as string)}&type=FREEDOM`,
      { headers: { cookie: `accessToken=${accessToken}` } }
    );

    if (cookies) {
      ctx.res.setHeader("set-cookie", cookies);
    }

    return { props: { users: data } };
  } catch (e) {
    return { props: {}, redirect: { destination: "/" } };
  }
};

interface ApplicationProps {
  users: MemberType;
}

const Application: NextPage<ApplicationProps> = ({ users }) => {
  return <Users users={users} type="APPLICATION" />;
};

export default Application;
