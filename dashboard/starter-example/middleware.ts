/*
 * @Description: 
 * @FilePath: \next-learn\dashboard\starter-example\middleware.ts
 * @Date: 2024-04-06 13:00:44
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2024-04-06 13:00:51
 * @author: Lin_kangjing
 */
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};