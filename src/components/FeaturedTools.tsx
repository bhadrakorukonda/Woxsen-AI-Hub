import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Star, 
  ExternalLink, 
  Play, 
  DollarSign, 
  BookOpen, 
  Calculator,
  GraduationCap,
  PiggyBank,
  FileText,
  Users,
  Target,
  Lightbulb
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const featuredTools = [
  {
    id: 1,
    name: "Smart Budget Tracker",
    description: "AI-powered expense tracking specifically designed for college students with meal plans and textbook budgets.",
    category: "finance",
    icon: PiggyBank,
    rating: 4.8,
    reviewCount: 1205,
    color: "finance",
    features: ["Automatic categorization", "Campus spending insights", "Goal tracking"],
    users: "3.2K students",
    url: "https://example.com/budget"
  },
  {
    id: 2,
    name: "Study Buddy AI",
    description: "Personalized study assistant that adapts to your learning style and helps you prepare for exams.",
    category: "education",
    icon: GraduationCap,
    rating: 4.9,
    reviewCount: 892,
    color: "education",
    features: ["Adaptive learning", "Study scheduling", "Progress tracking"],
    users: "5.1K students",
    url: "https://example.com/study"
  },
  {
    id: 3,
    name: "Course Planner Pro",
    description: "Smart course scheduling tool that optimizes your academic path and graduation timeline.",
    category: "education",
    icon: Target,
    rating: 4.7,
    reviewCount: 654,
    color: "education",
    features: ["Degree planning", "Prerequisite tracking", "GPA optimization"],
    users: "2.8K students",
    url: "https://example.com/plan"
  },
  {
    id: 4,
    name: "Scholarship Finder",
    description: "Discover and apply to scholarships that match your profile and academic achievements.",
    category: "finance",
    icon: DollarSign,
    rating: 4.6,
    reviewCount: 1098,
    color: "finance",
    features: ["Personalized matches", "Application tracking", "Deadline reminders"],
    users: "4.5K students",
    url: "https://example.com/scholarships"
  },
  {
    id: 5,
    name: "Research Assistant",
    description: "AI-powered research tool that helps you find credible sources and organize your academic papers.",
    category: "education",
    icon: FileText,
    rating: 4.8,
    reviewCount: 743,
    color: "education",
    features: ["Source verification", "Citation management", "Outline generation"],
    users: "1.9K students",
    url: "https://example.com/research"
  },
  {
    id: 6,
    name: "Group Project Manager",
    description: "Coordinate team projects with task assignment, progress tracking, and seamless collaboration.",
    category: "education",
    icon: Users,
    rating: 4.5,
    reviewCount: 567,
    color: "education",
    features: ["Task distribution", "Real-time sync", "Grade tracking"],
    users: "3.7K students",
    url: "https://example.com/group"
  }
];

const getColorClasses = (color: string) => {
  const classes = {
    finance: {
      badge: "bg-finance-light text-finance border-finance/20",
      icon: "bg-finance/10 text-finance",
      hover: "hover:border-finance/30"
    },
    education: {
      badge: "bg-education-light text-education border-education/20",
      icon: "bg-education/10 text-education",
      hover: "hover:border-education/30"
    }
  };
  return classes[color as keyof typeof classes] || classes.education;
};

export function FeaturedTools() {
  const navigate = useNavigate();
  return (
    <section className="py-12 border-b">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Featured Tools</h2>
          <p className="text-muted-foreground">Top-rated tools curated for students</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTools.map((tool) => {
            const Icon = tool.icon;
            const colors = getColorClasses(tool.color);

            return (
              <Card key={tool.id} className={cn("group relative transition-all duration-300 hover:shadow-lg", colors.hover)}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className={cn("p-2 rounded-lg", colors.icon)}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">{tool.name}</CardTitle>
                        <Badge className={colors.badge}>{tool.category}</Badge>
                      </div>
                      <CardDescription className="mt-1">{tool.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-500 fill-yellow-500" />
                      <span>{tool.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{tool.users}</span>
                    </div>
                    <div className="flex items-center">
                      <Lightbulb className="h-4 w-4 mr-1" />
                      <span>{tool.features[0]}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button 
                      className="flex-1 h-9 text-sm font-medium"
                      size="sm"
                      asChild
                    >
                      <a href={tool.url} target="_blank" rel="noreferrer">
                        <Play className="mr-2 h-3 w-3" />
                        Try Now
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="h-9 px-3"
                      onClick={() => navigate("/tools")}
                    >
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </Card>
            );
          })}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8" onClick={() => navigate("/tools")}>
            View All Tools
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}