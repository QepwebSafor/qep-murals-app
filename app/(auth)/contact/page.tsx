"use client";

import { createContactAction } from "@/actions/contact-action";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ContactFormValues, contactFormSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const AddContactForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const defaultValues: Partial<ContactFormValues> = {
    postername: "",
    email: "",
    topic: "",
    message: ""
  };

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onChange"
  });

  const onSubmit = async ({
    postername,
    email,
    topic,
    message
  }: ContactFormValues) => {
    setLoading(true);
    await createContactAction({ postername, email, topic, message });
    setLoading(false);
    router.push("/");
      router.refresh();
  };

  return (
    <div className="  lg:max-w-fit md:max-w-fit sm:max-w-fit xs:max-w-fit w-full mx-auto md:rounded-2xl px-6 font-bold  py-2 shadow-input
     bg-lime-700 border border-[hsl(71,77%,58%)] ">
      
      <h3 className="text-2xl mx-auto m-4">Send a message</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="postername"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
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
                  <Input placeholder="Your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Topic</FormLabel>
                <FormControl>
                  <Input placeholder="Go to gym" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us  about"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
              
                <FormMessage />
              </FormItem>
            )}
          />
           <div className="flex justify-end text-left p-4 ">
          <Button type="submit" className="space-x-2" disabled={loading}>
            {loading ? (
              <>
                <Spinner /> Loading...
              </>
            ) : (
              "Save"
            )}
          </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddContactForm;
