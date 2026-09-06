import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Education",
    "Contact",
  ];

  /* ACTIVE NAVIGATION LINK */
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .map((link) =>
          document.getElementById(link.toLowerCase())
        )
        .filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* CLOSE MENU WHEN CLICKING OUTSIDE */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(target) &&
        !menuButtonRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [isOpen]);

  /* CLOSE MENU WITH ESCAPE KEY */
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* CLOSE MOBILE MENU WHEN SCREEN BECOMES DESKTOP SIZE */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <div className="navbar">

        {/* LOGO */}
        <a
          href="#home"
          className="logo"
          onClick={() => {
            setActiveSection("home");
            setIsOpen(false);
          }}
        >
          Prerna<span>.</span>
        </a>

        {/* NAVIGATION */}
       <nav
  id="mobile-navigation"
  ref={navRef}
  className={isOpen ? "nav-links active" : "nav-links"}
  aria-label="Main navigation"
>
          {navLinks.map((link) => {
            const sectionId = link.toLowerCase();

            return (
              <a
                key={link}
                href={`#${sectionId}`}
                className={
                  activeSection === sectionId
                    ? "nav-link active-link"
                    : "nav-link"
                }
                onClick={() => handleNavClick(sectionId)}
              >
                {link}
              </a>
            );
          })}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          ref={menuButtonRef}
          className="menu-button"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label={
            isOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;