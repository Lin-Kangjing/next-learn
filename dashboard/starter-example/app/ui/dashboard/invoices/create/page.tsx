/*
 * @Description: 
 * @FilePath: \next-learn\dashboard\starter-example\app\ui\dashboard\invoices\create\page.tsx
 * @Date: 2024-04-04 19:55:59
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2024-04-04 19:57:02
 * @author: Lin_kangjing
 */
import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}