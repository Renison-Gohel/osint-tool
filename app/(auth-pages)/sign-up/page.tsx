/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Github, ChromeIcon as Google } from 'lucide-react';
// import { SmtpMessage } from "../smtp-message";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  
  if ("message" in searchParams) {
    return (
      <div className="w-full flex items-center justify-center p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <div
      // initial={{ opacity: 0, y: 20 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.5 }}
    >
      <Card className="bg-gray-900/50 border-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl font-light">Create an account</CardTitle>
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <Link 
              className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium" 
              href="/sign-in"
            >
              Sign in
            </Link>
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-gray-400">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="pl-9 bg-gray-800 border-gray-700 focus:border-yellow-400/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm text-gray-400">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    minLength={6}
                    required
                    className="pl-9 bg-gray-800 border-gray-700 focus:border-yellow-400/50"
                  />
                </div>
              </div>
              <SubmitButton 
                formAction={signUpAction} 
                pendingText="Signing up..."
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black"
              >
                Sign up <ArrowRight className="ml-2 h-4 w-4" />
              </SubmitButton>
              <FormMessage message={searchParams} />
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-gray-900 px-2 text-gray-400">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="bg-gray-800 border-gray-700 hover:bg-gray-700">
                <Github className="mr-2 h-4 w-4" />
                Github
              </Button>
              <Button variant="outline" className="bg-gray-800 border-gray-700 hover:bg-gray-700">
                <Google className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* <SmtpMessage /> */}
    </div>
  );
}

