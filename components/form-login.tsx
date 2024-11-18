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
    <div className="container md:rounded-2xl bg-zinc-900 px-10 py-4 mt-5 shadow-md shadow-black w-full md:w-2/4 sm:w-2/3 lg:w-1/3 mx-auto">
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
            <label className="text-sm block font-semibold  ">
              ¿Do not have an account?{" "}
            </label>
            <Link
              className="text-sm block font-semibold  text-white underline hover:text-violet-500"
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
