import { redirect } from "next/navigation";

export default function Home() {
  redirect("/welcome"); // Auto-redirect to /welcome
  return null;
}
