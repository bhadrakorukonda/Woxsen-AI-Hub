import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Clock, 
  Star, 
  TrendingUp, 
  BookOpen,
  DollarSign,
  ArrowRight,
  Users,
  Target
} from "lucide-react";

const recentActivity = [
  {
    tool: "Smart Budget Tracker",
    action: "Logged expense",
    time: "2 minutes ago",
    icon: DollarSign,
    color: "finance"
  },
  {
    tool: "Study Buddy AI",
    action: "Completed session",
    time: "1 hour ago",
    icon: BookOpen,
    color: "education"
  },
  {
    tool: "Course Planner Pro",
    action: "Updated schedule",
    time: "3 hours ago",
    icon: Target,
    color: "education"
  }
];

const recommendations = [
  {
    name: "Research Assistant",
    reason: "Based on your major",
    match: 95,
    users: "1.9K students"
  },
  {
    name: "Group Project Manager",
    reason: "For upcoming assignments",
    match: 88,
    users: "3.7K students"
  }
];

export function UserDashboard() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Your Dashboard</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track your progress, discover new tools, and stay on top of your academic journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Clock className="mr-2 h-5 w-5 text-primary" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Your latest tool interactions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                    <div className={`p-2 rounded-lg ${
                      activity.color === 'finance' 
                        ? 'bg-finance/10 text-finance' 
                        : 'bg-education/10 text-education'
                    }`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{activity.tool}</p>
                      <p className="text-xs text-muted-foreground">{activity.action}</p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {activity.time}
                    </div>
                  </div>
                );
              })}
              
              <Button variant="outline" className="w-full mt-4">
                View All Activity
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Progress Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <TrendingUp className="mr-2 h-5 w-5 text-accent" />
                Your Progress
              </CardTitle>
              <CardDescription>
                Weekly tool usage and achievements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Weekly Goal</span>
                  <span>7/10 tools used</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 rounded-lg bg-primary/5">
                  <div className="text-2xl font-bold text-primary">8</div>
                  <div className="text-xs text-muted-foreground">Tools Active</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-accent/5">
                  <div className="text-2xl font-bold text-accent">12</div>
                  <div className="text-xs text-muted-foreground">Hours Saved</div>
                </div>
              </div>
              
              <Button className="w-full" size="sm">
                Manage Tools
              </Button>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Star className="mr-2 h-5 w-5 text-education" />
                Recommended for You
              </CardTitle>
              <CardDescription>
                Tools that match your profile
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="p-4 rounded-lg border bg-card">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-sm">{rec.name}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {rec.match}% match
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{rec.reason}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Users className="mr-1 h-3 w-3" />
                      {rec.users}
                    </div>
                    <Button size="sm" variant="outline" className="h-7 text-xs">
                      Try Now
                    </Button>
                  </div>
                </div>
              ))}
              
              <Button variant="outline" className="w-full mt-4">
                View All Recommendations
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}