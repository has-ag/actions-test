"use client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

export default withPageAuthRequired(function Protected({ user }) {
  return <div className="text-white">Hello {user.name}</div>;
});
