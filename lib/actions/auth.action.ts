'use server'

import { db, auth } from "@/firebase/admin";
import { cookies } from "next/headers";

const ONE_WEEK = 60 * 60 * 24 * 7;

export async function signUp(params: SignUpParams) {
  const { uid, name, email } = params;


  try{ 
    const userRecord = await db.collection('user').doc(uid).get();

    if(userRecord.exists) {
      return{
        success: false,
        message: '該帳號已存在，請直接登入',
      }
    }

    await db.collection('user').doc(uid).set({
      name, email
    })

    return {
      success: true,
      message: '帳號創建成功，請登入'
    }

  } catch(error: any) {
    console.log('創建使用者錯誤：', error);

    if(error.code === 'auth/email-already-exists') {
      return{
        success: false,
        message: '該電子郵件已被使用',
      }
    }

    return{
      success: false,
      message: '發生未知錯誤無法創建帳號'
    }
  }
}

export async function signIn(params: SignInParams) {
  const { email, idToken } = params;

  try {
    const userRecord = await auth.getUserByEmail(email);

    if(!userRecord) {
      return{
        success: false,
        message: '用戶尚未註冊，請先註冊'
      }
    }

    await setSessionCookie(idToken);

    return {
      success: true,
      message: '登入成功'
    }

  } catch(error) {
    console.log(error);

    return {
      success: false,
      message: '帳號登入失敗',
    }
  }
}

export async function setSessionCookie(idToken: string) {
  const cookieStore = await cookies();

  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: ONE_WEEK * 1000,
  })

  cookieStore.set('session', sessionCookie, {
    maxAge: ONE_WEEK,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax',
  })
}