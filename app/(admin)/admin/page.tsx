
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import AdminDashboard from './admin-dashboard'

export default async function AdminPage() {
  const session = await auth()

  if (!session?.user) {
    redirect('/api/auth/signin')
  }

  if (session.user.role !== 'admin') {
    redirect('/unauthorized')
  }

  return <AdminDashboard user={session.user} />
}
