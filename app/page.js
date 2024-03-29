import Image from "next/image";
import SignUp from "./components/organisims/SignUp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignUp />
    </main>
  );
}
