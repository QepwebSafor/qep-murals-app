"use client";

import { registerSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { z } from "zod";
import { registerAction } from "@/actions/auth-action";
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

const FormRegister = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    setError(null);
    startTransition(async () => {
      const response = await registerAction(values);
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
      className="  lg:max-w-fit md:max-w-fit sm:max-w-fit xs:max-w-fit w-full mx-auto md:rounded-2xl  px-6 font-bold  py-2 shadow-input
     bg-lime-700  border border-[hsl(71,77%,58%)] "
    >
          <h3 className="text-2xl mx-auto m-4">Signup</h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
            Already have an account?{" "}
            </label>
            <Link
              className="text-sm block font-semibold  text-red-700 hover:underline hover:text-blue-600"
              href="/login"
            >
               Sign in
            </Link>
          </div>

          <div className="flex justify-end text-left p-4 ">
            <Button type="submit" disabled={isPending}>
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default FormRegister;
