/*
 * @Date: 2024-04-02 16:29:12
 * @LastEditors: LinKangjing linkangjing@foxmail.com
 * @LastEditTime: 2024-04-02 16:29:32
 * @FilePath: \next-learn\dashboard\starter-example\app\ui\dashboard\layout.tsx
 * @Description: 
 */
import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}