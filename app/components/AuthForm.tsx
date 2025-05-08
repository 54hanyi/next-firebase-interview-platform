'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';
import FormField from './FormField';
import { useRouter } from 'next/navigation';


const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  })

}

const AuthForm = ({ type }: { type:FormType }) => {
  const router = useRouter(); 
  const formSchema = authFormSchema(type);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if(type === 'sign-up') {
        toast.success('成功創建帳號，請登入')
        router.push('/sign-in')
      } else {
        toast.success('登入成功！')
        router.push('/')
      }
    } catch(error) {
      console.log(error);
      toast.error(`發現錯誤：${error}`)
    }
  }

  const isSignIn = type === "sign-in";

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">面面相去</h2>
        </div>
        <h3 className="m-auto tracking-wide">模擬面試不求人，AI面試在線等</h3>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="width-full space-y-6 mt-4 form">
            {!isSignIn && (
              <FormField 
                control={form.control} 
                name="name" 
                label="用戶名" 
                placeholder="請輸入用戶名" 
              />
            )}
            <FormField 
              control={form.control} 
              name="email" 
              label="電子郵件" 
              placeholder="請輸入電子郵件" 
              type="email"
            />
            <FormField 
              control={form.control} 
              name="password" 
              label="密碼" 
              placeholder="請輸入密碼" 
              type="password"
            />
            <Button className="btn" type="submit">{isSignIn ? "登入" : "建立帳號"}</Button>
          </form>
        </Form>

        <p className='text-center'>
          {isSignIn ? "還沒有帳號？" : "已經有帳號？"}
          <Link
            href={!isSignIn ? '/sign-in' : '/sign-up'} 
            className='font-bold text-user-primary ml-1'
          >
            {!isSignIn ? "登入" : "註冊"}
          </Link>
        </p>
        
      </div>
    </div>
  );
};

export default AuthForm;
