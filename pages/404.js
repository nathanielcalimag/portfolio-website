import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

const ErrorPage = () => {
  // Reroute back to "/"
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  });

  return null;
};

export default ErrorPage;
