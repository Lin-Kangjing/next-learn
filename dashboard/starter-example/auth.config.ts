/*
 * @Description: 
 * @FilePath: \next-learn\dashboard\starter-example\auth.config.ts
 * @Date: 2024-04-06 12:57:06
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2024-04-06 13:21:21
 * @author: Lin_kangjing
 */
import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/ui/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/ui/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;