import api from "./api";
import { GetServerSidePropsContext } from "next";

const userCheck = async (ctx: GetServerSidePropsContext) => {
  let accessToken = ctx.req.cookies["accessToken"];
  const refreshToken = ctx.req.cookies["refreshToken"];
  let cookies: string[] | undefined;

  if (!accessToken) {
    const res = await api.post(
      "/auth/teacher/refreshtoken",
      {},
      { headers: { cookie: `refreshToken=${refreshToken};` } }
    );

    cookies = res.headers["set-cookie"];
    accessToken = res.data.accessToken;
  } else {
    await api.get("/auth/check", {
      headers: { cookie: `accessToken=${accessToken};` },
    });
  }

  return { cookies, accessToken };
};

export default userCheck;
