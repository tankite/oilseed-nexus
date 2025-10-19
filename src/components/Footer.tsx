import { Link } from "react-router-dom";
import { Sprout } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="w-8 h-8 text-secondary" />
              <span className="text-xl font-bold">NMEO-OP Platform</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              AI-powered value chain platform empowering India's journey towards
              self-sufficiency in edible oils through seamless stakeholder coordination.
            </p>
            <p className="text-sm text-primary-foreground/60">
              National Mission on Edible Oils–Oil Palm
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  About Mission
                </Link>
              </li>
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Farmer Portal
                </Link>
              </li>
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  FPO Services
                </Link>
              </li>
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Processor Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Guidelines
                </Link>
              </li>
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2025 National Mission on Edible Oils–Oil Palm. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
              Terms of Service
            </Link>
            <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
