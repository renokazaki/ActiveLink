import AuthenticatedHome from '@/_components/manual_ui/AutenticatedHome';
import LandingPage from '@/_components/manual_ui/landingPage/LandingPage';
import { auth } from '@clerk/nextjs/server';

export default async function Home() {
  const { userId } = await auth();

  // 未認証ユーザーにはランディングページを表示
  if (!userId) {
    return <LandingPage />;
  }

  // 認証済みユーザーには既存のダッシュボードを表示
  return <AuthenticatedHome userId={userId} />;
}
