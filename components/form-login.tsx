"use client";

import { loginSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginAction } from "@/actions/auth-action";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import Link from "next/link";
/* import ButtonSocial from "./button-social";
import { FaGithub, FaGoogle } from "react-icons/fa6"; */

interface FormLoginProps {
  OAuthAccountNotLinked: boolean;
}

const FormLogin = ({ OAuthAccountNotLinked }: FormLoginProps) => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setError(null);
    startTransition(async () => {
      const response = await loginAction(values);
      if (response.error) {
        setError(response.error);
      } else {
        router.refresh();
        router.push("/admin/settings");
      }
    });
  }

  return (
    <div
      className="lg:max-w-fit md:max-w-fit sm:max-w-fit xs:max-w-fit w-full mx-auto md:rounded-2xl sm:rounded-2xl px-6 font-bold  py-2 shadow-input
    bg-lime-700 border border-[hsl(71,77%,58%)]  "
    >
      <h3 className="text-2xl mx-auto m-4">Signin</h3>

      {OAuthAccountNotLinked && (
        <p className="text-center text-red-500 mb-5 text-sm">
           To confirm your identity, sign in with the same account you used
           originally.
        </p>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && <FormMessage>{error}</FormMessage>}
          <div className=" flex justify-around items-end  ">
            <label className="text-sm block font-semibold  text-zinc-900">
              ¿Do not have an account?{" "}
            </label>
            <Link
              className="text-sm block font-semibold  text-red-800 hover:underline hover:text-blue-600"
              href="/register"
            >
              Signup
            </Link>
          </div>
          <div className="flex justify-end text-left p-4 ">
            <Button type="submit" disabled={isPending}>
              Submit
            </Button>
          </div>
        </form>
      </Form>
      {/*  <div className="mt-5 space-y-4 mb-4">
        <ButtonSocial provider="github">
          <FaGithub className="mr-2 h-4 w-4" />
          <span>Sign in with Github</span>
        </ButtonSocial>
        {'  '}
        <ButtonSocial provider="google">
          <FaGoogle className="mr-2 h-4 w-4" />
          <span>Sign in with Google</span>
        </ButtonSocial>
      </div> */}
    </div>
  );
};
export default FormLogin;
