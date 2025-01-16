import { signOutAction } from "@/app/actions";
// import { NextRequest } from "next/server";

export async function GET() {
  return signOutAction();
}

