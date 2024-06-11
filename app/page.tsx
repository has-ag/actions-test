"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("/api/accessToken")
      .then((res) => res.json())
      .then(console.log);
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <a
        href="/api/auth/login"
        className="btn btn-primary btn-margin text-white"
        tabIndex={0}
        data-testid="navbar-login-desktop"
      >
        Log in
      </a>

      <a
        href="/api/auth/logout"
        className="btn btn-secondary btn-margin"
        tabIndex={0}
        data-testid="navbar-login-desktop"
      >
        Log Out
      </a>
      <Link href="/protected">
        Can you navigate to a protected route on the client
      </Link>
      <Link href="/protected-server">
        Can you navigate to a protected route on the server
      </Link>
      <div>
        <h1>Welcome to Highland Ag</h1>
      </div>
    </main>
  );
}
