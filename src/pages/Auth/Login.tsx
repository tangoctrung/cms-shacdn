"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"

import InputPassword from "@/components/InputPassword"
import { toast } from "sonner"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import useAuthStore from "@/store/useAuthStore"
import { Toaster } from "@/components/ui/sonner"

const formSchema = z.object({
  email: z.string().min(1, {
    message: "Empty email"
  }).email("Email invalid"),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  })
})

export default function LoginPage() {
  const { setTokens } = useAuthStore()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log({ values });
    if (values.email === "admin@gmail.com" && values.password === "12345678") {
      setTokens("5fabbf10-d352-40b6-aaf4-899377de0a1e")
      return
    }
    console.log("fail");
    toast.error("Login fail", {
      position: "top-right"
    })
  }



  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 sm:w-[400px] w-[90%] p-5 bg-bg2 rounded-md text-txtDark">
          <div className="mb-6">
            <h1 className={`text-3xl text-center`}>Đăng nhập</h1>
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="gap-1">
                <FormLabel className="text-sm">Email</FormLabel>
                <FormControl>
                  <Input className="border-bg8" placeholder="Nhập email của bạn..." {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage className="text-[12px]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="gap-1">
                <FormLabel className="text-sm">Mật khẩu</FormLabel>
                <FormControl>
                  <InputPassword placeholder="Nhập mật khẩu của bạn..." {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage className="text-[12px]" />
              </FormItem>
            )}
          />

          <div className="w-full flex justify-center mt-5">
            <Button type="submit"
              className="bg-bgButton hover:bg-bgButtonHover cursor-pointer w-[150px]"
              disabled={form.formState.isSubmitting}
            >Đăng nhập</Button>
          </div>
        </form>
      </Form>
      <Toaster />
    </div>
  )
}
