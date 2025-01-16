import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Github, ChromeIcon as Google } from 'lucide-react';

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;

  return (
    <div
      // initial={{ opacity: 0, y: 20 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.5 }}
    >
      <Card className="bg-gray-900/50 border-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl font-light">Welcome back</CardTitle>
          <p className="text-sm text-gray-400">
            Don&apos;t have an account?{" "}
            <Link 
              className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium" 
              href="/auth/sign-up"
            >
              Sign up
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
                <div className="flex justify-between">
                  <Label htmlFor="password" className="text-sm text-gray-400">Password</Label>
                  <Link
                    className="text-xs text-yellow-400 hover:text-yellow-300 transition-colors"
                    href="/auth/forgot-password"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    className="pl-9 bg-gray-800 border-gray-700 focus:border-yellow-400/50"
                  />
                </div>
              </div>
              <SubmitButton 
                pendingText="Signing In..." 
                formAction={signInAction}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black"
              >
                Sign in <ArrowRight className="ml-2 h-4 w-4" />
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
    </div>
  );
}

