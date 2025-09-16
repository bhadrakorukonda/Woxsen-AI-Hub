import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  BookOpen, 
  Target, 
  HelpCircle,
  Calculator,
  GraduationCap,
  Clock,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: "all",
    name: "All Tools",
    icon: Target,
    count: 48,
    description: "Browse all available agents and tools"
  },
  {
    id: "finance",
    name: "Finance",
    icon: DollarSign,
    count: 12,
    description: "Budget tracking, scholarships, and financial planning",
    color: "finance"
  },
  {
    id: "education",
    name: "Education",
    icon: BookOpen,
    count: 18,
    description: "Study tools, course planning, and academic support",
    color: "education"
  },
  {
    id: "productivity",
    name: "Productivity",
    icon: Clock,
    count: 10,
    description: "Time management, task tracking, and organization",
    color: "accent"
  },
  {
    id: "support",
    name: "Support",
    icon: HelpCircle,
    count: 8,
    description: "Campus resources, counseling, and student services",
    color: "secondary"
  }
];

const categoryColors = {
  finance: {
    active: "bg-finance text-finance-foreground border-finance",
    inactive: "border-finance/20 text-finance hover:bg-finance/10",
    badge: "bg-finance-light text-finance"
  },
  education: {
    active: "bg-education text-education-foreground border-education",
    inactive: "border-education/20 text-education hover:bg-education/10",
    badge: "bg-education-light text-education"
  },
  accent: {
    active: "bg-accent text-accent-foreground border-accent",
    inactive: "border-accent/20 text-accent hover:bg-accent/10",
    badge: "bg-accent-light text-accent"
  },
  secondary: {
    active: "bg-secondary text-secondary-foreground border-secondary",
    inactive: "border-secondary/20 text-secondary hover:bg-secondary/10",
    badge: "bg-secondary text-secondary-foreground"
  }
};

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  const navigate = useNavigate();
  return (
    <section className="py-12 border-b bg-muted/30">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Browse by Category</h2>
          <p className="text-muted-foreground">
            Find the perfect tools for your academic and financial needs
          </p>
        </div>

        {/* Desktop tabs */}
        <div className="hidden md:grid md:grid-cols-5 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            const colors = category.color 
              ? categoryColors[category.color as keyof typeof categoryColors]
              : categoryColors.accent;

            return (
              <button
                key={category.id}
                className={cn(
                  "group p-4 rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md text-left",
                  isActive && "ring-2 ring-primary",
                )}
                onClick={() => {
                  onCategoryChange(category.id);
                  navigate(`/tools${category.id !== 'all' ? `?category=${category.id}` : ''}`);
                }}
              >
                <div className="flex items-start gap-3">
                  <div className={cn("p-2 rounded-lg", colors.icon)}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{category.name}</span>
                      <Badge className={colors.badge}>{category.count}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Mobile tabs */}
        <div className="md:hidden space-y-3">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            const colors = category.color 
              ? categoryColors[category.color as keyof typeof categoryColors]
              : categoryColors.accent;

            return (
              <button
                key={category.id}
                className={cn(
                  "w-full p-4 rounded-lg border bg-card text-card-foreground shadow-sm transition-all",
                  isActive && "ring-2 ring-primary",
                )}
                onClick={() => {
                  onCategoryChange(category.id);
                  navigate(`/tools${category.id !== 'all' ? `?category=${category.id}` : ''}`);
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={cn("p-2 rounded-lg", colors.icon)}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{category.name}</span>
                        <Badge className={colors.badge}>{category.count}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}