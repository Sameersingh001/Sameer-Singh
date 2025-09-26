import React, { useState, useEffect } from "react";
import { Menu, X, User, Code, Briefcase, Mail, Globe } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About", icon: <User className="w-5 h-5" /> },
  { href: "#skills", label: "Skills", icon: <Code className="w-5 h-5" /> },
  { href: "#projects", label: "Projects", icon: <Briefcase className="w-5 h-5" /> },
  { href: "#contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
];

const HeaderSidebarLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState("#about");

  // Scroll spy for active link
  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.querySelector(navLinks[i].href);
        if (el instanceof HTMLElement && scrollPos >= el.offsetTop) {
          setActive(navLinks[i].href);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col bg-gradient-to-b from-teal-600 to-teal-800 text-white shadow-lg transform transition-transform duration-300 sm:w-1/4 w-[80%]
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-teal-500">
          <div className="flex items-center gap-3">
            <img
              src="/Profile.jpg"
              alt="Avatar"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />
            <div>
              <h1 className="text-lg font-bold">Sameer Singh</h1>
              <p className="text-xs">Fullstack Dev</p>
            </div>
          </div>
          <button
            aria-label="Close sidebar"
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-2 py-4">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => {
                      setActive(link.href);
                      setSidebarOpen(false);
                    }}
                    className={`flex items-center gap-3 px-3 py-2 rounded-xl transition
                      ${isActive ? "bg-white/20" : "hover:bg-white/10"}`}
                  >
                    {link.icon}
                    <span className="text-sm font-medium">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 py-3 shadow-sm">
          <div className="flex items-center gap-3">
            <button
              aria-label="Toggle sidebar"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              {sidebarOpen ? (
                <X className="w-5 h-5 text-teal-700" />
              ) : (
                <Menu className="w-5 h-5 text-teal-700" />
              )}
            </button>
            <span className="text-xl font-bold text-teal-700">Sameer Singh</span>
            <div className="hidden md:flex gap-4 ml-6">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`text-sm font-medium transition ${
                    active === l.href
                      ? "text-teal-600"
                      : "text-gray-600 hover:text-teal-600"
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <button className="flex items-center gap-1 text-sm bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded-full shadow">
            <Globe className="w-4 h-4" />
            <span className="hidden sm:inline">Portfolio</span>
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6">{children}</main>
      </div>

      {/* Overlay for click-outside */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default HeaderSidebarLayout;
