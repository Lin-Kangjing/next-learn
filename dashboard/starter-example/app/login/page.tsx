/*
 * @Description: 
 * @FilePath: \next-learn\dashboard\starter-example\app\login\page.tsx
 * @Date: 2024-04-06 12:50:25
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2024-04-06 12:50:28
 * @author: Lin_kangjing
 */
import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}