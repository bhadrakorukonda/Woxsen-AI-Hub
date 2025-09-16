import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp, Users, Zap } from "lucide-react";

export function HeroSection() {
  const [searchCategory, setSearchCategory] = useState("all");

  return (
    <section className="relative overflow-hidden gradient-hero py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Welcome badge */}
          <Badge variant="outline" className="mb-6 border-primary/20 bg-primary/5 text-primary">
            <Zap className="mr-1 h-3 w-3" />
            Welcome to the Future of Campus Tools
          </Badge>

          {/* Main heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
            Discover, Launch, and Manage{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-education bg-clip-text text-transparent">
              Smart Tools
            </span>{" "}
            for Your College Journey
          </h1>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8 leading-relaxed">
            All your favorite agents and resources, from budgeting to study buddies, 
            in one place. Discover powerful tools designed specifically for students and faculty.
          </p>

          {/* Search section */}
          <div className="mx-auto max-w-2xl mb-12">
            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-card/80 backdrop-blur border rounded-2xl shadow-card">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search for tools, features, or help..."
                  className="pl-12 pr-4 border-0 bg-transparent text-base h-12 focus-visible:ring-0"
                />
              </div>
              
              <Select value={searchCategory} onValueChange={setSearchCategory}>
                <SelectTrigger className="w-full sm:w-48 border-0 bg-transparent h-12">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="productivity">Productivity</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                </SelectContent>
              </Select>
              
              <Button size="lg" className="h-12 px-8 gradient-primary text-white font-medium">
                Search
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mx-auto max-w-xl">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Smart Tools</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Users className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground">15K+</div>
              <div className="text-sm text-muted-foreground">Active Students</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="p-2 rounded-lg bg-education/10">
                  <Zap className="h-6 w-6 text-education" />
                </div>
              </div>
              <div className="text-2xl font-bold text-foreground">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}