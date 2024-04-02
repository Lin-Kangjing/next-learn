/*
 * @Date: 2024-04-02 14:46:16
 * @LastEditors: LinKangjing linkangjing@foxmail.com
 * @LastEditTime: 2024-04-02 15:24:45
 * @FilePath: \next-learn\dashboard\starter-example\app\layout.tsx
 * @Description: 
 */
import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';
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
