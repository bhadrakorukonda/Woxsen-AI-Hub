import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { WoxsenLogo } from "./WoxsenLogo";
import { 
  Mail, 
  MapPin, 
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Heart
} from "lucide-react";

const footerLinks = {
  product: [
    { name: "Finance Tools", href: "#" },
    { name: "Education Tools", href: "#" },
    { name: "Productivity", href: "#" },
    { name: "Support", href: "#" }
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Contact Support", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Accessibility", href: "#" }
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Partners", href: "#" }
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR Compliance", href: "#" }
  ]
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" }
];

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container">
        {/* Newsletter section */}
        <div className="py-12 border-b">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Get notified about new tools, features, and campus success stories
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button className="px-6">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Main footer content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <WoxsenLogo />
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Empowering Woxsen University students with smart tools and AI-powered agents designed 
                specifically for college success.
              </p>
              
              <div className="flex items-center space-x-2 mb-4">
                <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary">
                  Powered by Lovable
                </Badge>
              </div>
              
              {/* Contact info */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>support@campusagenthub.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>1-800-CAMPUS-1</span>
                </div>
              </div>
            </div>

            {/* Product links */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support links */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal links */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-6 border-t">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-4 sm:mb-0">
              <span>© 2024 Woxsen University. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for students everywhere.</span>
            </div>
            
            {/* Social links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}