import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession();

  return (
    <div>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Error!</div>}
      {status === "authenticated" && (
        <>
          <p>Signed in as {session.user.email}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
      {status === "unauthenticated" && (
        <>
          <p>Not signed in</p>
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
