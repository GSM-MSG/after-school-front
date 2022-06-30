import api from "./api";
import { GetServerSidePropsContext } from "next";
import admin from "./admin";

const userCheck =
  (isClient?: boolean) => async (ctx: GetServerSidePropsContext) => {
    const check = isClient ? api : admin;
    let accessToken = ctx.req.cookies["accessToken"];
    const refreshToken = ctx.req.cookies["refreshToken"];
    let cookies: string[] | undefined;

    if (!accessToken) {
      const res = await check[isClient ? "patch" : "post"](
        isClient ? "/auth/refresh" : "/auth/teacher/refreshtoken",
        {},
        { headers: { cookie: `refreshToken=${refreshToken};` } }
      );

      cookies = res.headers["set-cookie"];
      accessToken = res.data.accessToken;
    }

    return { cookies, accessToken };
  };

export default userCheck;
