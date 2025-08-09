import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  User,
  Code,
  Briefcase,
  Mail,
  Globe,
} from "lucide-react";

const navLinks = [
  { href: "#about", label: "About", icon: <User className="w-5 h-5" /> },
  { href: "#skills", label: "Skills", icon: <Code className="w-5 h-5" /> },
  { href: "#projects", label: "Projects", icon: <Briefcase className="w-5 h-5" /> },
  { href: "#contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
];

const HeaderSidebarLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState("#about");

  // scroll spy
  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (el instanceof HTMLElement && scrollPos >= el.offsetTop) {
          setActive(link.href);
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
        className={`
          fixed inset-y-0 left-0 z-40 flex flex-col bg-gradient-to-b from-teal-600 to-teal-800 text-white shadow-xl transition-all duration-300
          ${sidebarOpen ? "w-64" : "w-16"}
          md:relative md:translate-x-0
          ${!sidebarOpen ? "overflow-hidden" : ""}
          sm:fixed
        `}
        aria-label="Sidebar"
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-3 py-3 border-b border-teal-500">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="relative">
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden transform transition-transform duration-200 ${
                  sidebarOpen ? "scale-100" : "scale-90"
                }`}
              >
                <img
                  src="/Profile.jpg"
                  alt="Avatar"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-col overflow-hidden">
              <div
                className={`text-base sm:text-lg font-bold leading-tight transition-all duration-200 ${
                  sidebarOpen ? "opacity-100" : "opacity-0 w-0"
                }`}
              >
                Sameer Singh
              </div>
              <div
                className={`text-[10px] sm:text-xs transition-all duration-200 ${
                  sidebarOpen ? "opacity-100" : "opacity-0 w-0"
                }`}
              >
                Fullstack Dev
              </div>
            </div>
          </div>
          <button
            aria-label="Toggle sidebar"
            onClick={() => setSidebarOpen((o) => !o)}
            className="p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto mt-3 px-2">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href} className="relative group">
                  <a
                    href={link.href}
                    onClick={() => setActive(link.href)}
                    className={`
                      flex items-center gap-3 px-3 py-2 rounded-xl transition
                      ${isActive ? "bg-white/20" : "hover:bg-white/10"}
                      ${sidebarOpen ? "justify-start" : "justify-center"}
                    `}
                  >
                    <div className={isActive ? "text-white" : "text-teal-100"}>
                      {link.icon}
                    </div>
                    <span
                      className={`
                        flex-1 text-sm font-medium whitespace-nowrap text-white transition-all
                        ${sidebarOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}
                      `}
                    >
                      {link.label}
                    </span>
                  </a>
                  {!sidebarOpen && (
                    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 rounded-md bg-black/80 text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none text-white">
                      {link.label}
                    </div>
                  )}
                  {isActive && sidebarOpen && (
                    <div className="absolute left-0 top-0 h-full w-1 rounded-r-full bg-gradient-to-b from-green-300 to-teal-200" />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Overlay for mobile when sidebar open */}
      {!sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setSidebarOpen(true)}
          aria-hidden="true"
        />
      )}

      {/* Content wrapper */}
      <div
        className={`
          flex-1 flex flex-col min-h-screen transition-all duration-300
          ${sidebarOpen ? "pl-[16rem]" : "pl-16"}
          sm:pl-4
        `}
      >
        {/* Top header */}
        <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#0f1f44]/90 backdrop-blur-md border-b border-gray-200 dark:border-[#23335d] flex items-center justify-between px-4 sm:px-6 py-3 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="text-xl font-bold text-teal-700 dark:text-teal-300">
              Sameer Singh
            </div>
            <div className="hidden md:flex gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-300 transition"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 text-sm bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded-full shadow">
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">Portfolio</span>
            </button>
            <div className="md:hidden">
              <button
                aria-label="Toggle sidebar"
                onClick={() => setSidebarOpen((o) => !o)}
                className="p-2 rounded-md hover:bg-gray-200  transition text-white"
              >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-auto p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
};

export default HeaderSidebarLayout;
