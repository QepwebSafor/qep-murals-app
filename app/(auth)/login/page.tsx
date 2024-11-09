import FormLogin from "@/components/form-login";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login",
};
const LoginPage = ({
  searchParams,
}: {
  searchParams: { verified: string; error: string };
}) => {

  const OAuthAccountNotLinked = searchParams.error === "OAuthAccountNotLinked";

  return (
   
    <FormLogin
    
      OAuthAccountNotLinked={OAuthAccountNotLinked}
    />
    
  );
};
export default LoginPage;
