"use client";

import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";

function Profile() {
  const { user, isLoading } = useUser();

  return (
    <>
      <div>hello</div>
    </>
  );
}

export default withPageAuthRequired(Profile, {
  onRedirecting: () => <p>redirecting</p>,
  onError: (error) => <p>ERROR</p>,
});
