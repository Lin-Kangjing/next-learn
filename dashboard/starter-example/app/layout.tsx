/*
 * @Date: 2024-04-02 14:46:16
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2024-04-06 16:16:29
 * @FilePath: \next-learn\dashboard\starter-example\app\layout.tsx
 * @Description: 
 */
import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
