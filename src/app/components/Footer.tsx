import Image from "next/image";

const footerLinks = [
  {
    heading: "Product",
    links: ["Download", "Features", "Changelog", "Roadmap"],
  },
  {
    heading: "Company",
    links: ["About", "Blog", "Careers", "Press"],
  },
  {
    heading: "Support",
    links: ["Help Center", "Community", "Status", "Contact"],
  },
  {
    heading: "Legal",
    links: ["Privacy", "Terms", "Cookies", "Licenses"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-card py-16">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h4 className="font-heading text-xs font-700 text-muted-foreground uppercase tracking-wider mb-4">
                {group.heading}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-foreground transition-colors duration-150 hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="/">
            <Image src="/logo-tran.webp" alt="Logo" width={1254} height={1254} className="h-7 w-auto" />
          </a>
          <p className="font-body text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Browser. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
