import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote, TrendingUp, Award } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Computer Science Junior",
    university: "Tech University",
    content: "The Smart Budget Tracker completely changed how I manage my college expenses. I've saved over $300 this semester!",
    rating: 5,
    tool: "Smart Budget Tracker",
    avatar: "/placeholder.svg"
  },
  {
    name: "Marcus Rodriguez",
    role: "Pre-Med Sophomore", 
    university: "State University",
    content: "Study Buddy AI helped me improve my GPA from 3.2 to 3.8. The personalized study plans are incredible!",
    rating: 5,
    tool: "Study Buddy AI",
    avatar: "/placeholder.svg"
  },
  {
    name: "Emily Park",
    role: "Business Senior",
    university: "Metro College",
    content: "Course Planner Pro saved my graduation timeline. Without it, I would have missed prerequisites and graduated late.",
    rating: 5,
    tool: "Course Planner Pro",
    avatar: "/placeholder.svg"
  }
];

const campusStats = [
  {
    university: "Tech University",
    users: "2,847",
    topTool: "Study Buddy AI"
  },
  {
    university: "State University", 
    users: "1,923",
    topTool: "Budget Tracker"
  },
  {
    university: "Metro College",
    users: "1,456",
    topTool: "Course Planner"
  },
  {
    university: "Community College",
    users: "892",
    topTool: "Scholarship Finder"
  }
];

export function SocialProof() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-accent/20 bg-accent/5 text-accent">
            <Award className="mr-1 h-3 w-3" />
            Loved by Students
          </Badge>
          
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            What Students Are Saying
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Join thousands of students who are already using our tools to succeed in college
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-6">
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-foreground mb-4 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Tool badge */}
                <Badge variant="outline" className="mb-4 text-xs border-primary/20 bg-primary/5 text-primary">
                  {testimonial.tool}
                </Badge>
                
                {/* Author */}
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role} • {testimonial.university}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Campus popularity */}
        <div className="rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-education/5 p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-xl font-bold">Most Popular on Campus</h3>
            </div>
            <p className="text-muted-foreground">
              See what tools are trending at universities nationwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {campusStats.map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-background/50 backdrop-blur">
                <div className="text-2xl font-bold text-primary mb-1">{stat.users}</div>
                <div className="text-sm font-medium mb-1">{stat.university}</div>
                <div className="text-xs text-muted-foreground">
                  Top: {stat.topTool}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}