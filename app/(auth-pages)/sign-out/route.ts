import { signOutAction } from "@/app/actions";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return signOutAction();
}

