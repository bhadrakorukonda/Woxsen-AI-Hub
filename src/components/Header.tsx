import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  User, 
  Settings, 
  LogOut, 
  Bell,
  LayoutDashboard,
  HelpCircle 
} from "lucide-react";
import { WoxsenLogo } from "./WoxsenLogo";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

export function Header() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => {
    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    if (location.pathname === "/") {
      scrollTop();
    } else {
      navigate("/");
      setTimeout(scrollTop, 0);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <WoxsenLogo />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" className="text-foreground/80 hover:text-foreground" onClick={goHome}>
            Home
          </Button>
          <Button variant="ghost" className="text-foreground/80 hover:text-foreground" onClick={() => navigate("/dashboard")}>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            My Dashboard
          </Button>
          <Button variant="ghost" className="text-foreground/80 hover:text-foreground" onClick={() => navigate("/help")}>
            <HelpCircle className="mr-2 h-4 w-4" />
            Help
          </Button>
        </nav>

        {/* Search Bar */}
        <div className="hidden lg:flex flex-1 max-w-md mx-8">
          <div className={`relative w-full transition-smooth ${isSearchFocused ? 'shadow-glow' : ''}`}>
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Find tools, features, or help..."
              className="pl-10 pr-4 border-border/50 focus:border-primary bg-muted/30"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const value = (e.target as HTMLInputElement).value.trim();
                  navigate(value ? `/tools?search=${encodeURIComponent(value)}` : "/tools");
                }
              }}
            />
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative" onClick={() => toast("No new notifications") }>
            <Bell className="h-5 w-5" />
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              3
            </Badge>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    JS
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuItem className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Jane Student</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    jane.student@university.edu
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive" onClick={() => toast.success('Logged out') }>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}