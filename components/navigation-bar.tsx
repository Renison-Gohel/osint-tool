import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { createClient } from "@/utils/supabase/server"
import { signOutAction } from "@/app/actions"

export async function NavigationBar() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-sm fixed w-full z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-semibold">OSINT Portal</h1>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Dashboard</Link>
            <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Companies</Link>
            <Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Analytics</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Quick search..."
              className="pl-8 bg-gray-900 border-gray-800 focus:border-yellow-400/50 transition-colors"
            />
          </div>
          <ThemeToggle />
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-gray-300">Hey, {user.email}!</span>
              <form action={signOutAction}>
                <Button type="submit" variant="outline" className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-gray-300 hover:text-white">
                  Sign out
                </Button>
              </form>
            </div>
          ) : (
            <div className="flex gap-2">
              <Button asChild size="sm" variant="outline" className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-gray-300 hover:text-white">
                <Link href="/auth/sign-in">Sign in</Link>
              </Button>
              <Button asChild size="sm" variant="default" className="bg-yellow-400 hover:bg-yellow-500 text-black">
                <Link href="/auth/sign-up">Sign up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

