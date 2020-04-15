import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: any) => url !== router.pathname && setLoading(true);
    const handleComplete = (url: any) =>
      url !== router.pathname && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return loading ? <div>Loading....</div>: null;
}
