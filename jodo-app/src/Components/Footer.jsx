import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white mt-3 text-dark-300 px-6 py-10 shadow-[0_-4px_12px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-dark">About</h3>
          <p className="text-sm">
            Our video calling platform lets you connect, collaborate, and share in real-time. Secure, fast, and built for teams.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-dark">Contact Us</h3>
          <ul className="text-sm space-y-1">
            <li>Email: support@JoDo.app</li>
            <li>Phone: +91 6265 43210</li>
            <li>Live Chat: 24/7 Available</li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-dark">Address</h3>
          <p className="text-sm">
            JoDo HQ, 2nd Floor, TechTower<br />
            Bengaluru, Karnataka - 560001<br />
            India
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Connect With Us</h3>
          <div className="flex flex-wrap space-x-4 mt-2">
            {[
              { icon: <Github/>, label: "Github" },
              { icon: <Twitter/>, label: "Twitter" },
              { icon: <Facebook/>, label: "Facebook" },
              { icon: <Instagram/>, label: "Instagram" },
              { icon: <Linkedin/>, label: "LinkedIn" }
            ].map((item, index) => (
              <span
                key={index}
                title={item.label}
                className="text-2xl hover:scale-125 transition-transform duration-300 cursor-pointer"
              >
                {item.icon}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-center">
        &copy; {new Date().getFullYear()} JoDo. All rights reserved.
      </div>
    </footer>
  );
}
