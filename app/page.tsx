import { SignIn } from "@/components/SignIn";
import { PayBlock } from "@/components/Pay";

import WelcomeComponent from "@/components/Welcome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-y-3 bg-white">
      <WelcomeComponent />
      
      <SignIn />
    </main>
  );
}
