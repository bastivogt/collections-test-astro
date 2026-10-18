interface NavItem {
    name: string;
    href: string;
    type: string;
}

const NAV: NavItem[] = [
    { name: "Home", href: "/", type: "MAIN" },
    { name: "Posts", href: "/posts/", type: "MAIN" },
    { name: "Members", href: "/members/", type: "MAIN" },
    { name: "About", href: "/about/", type: "MAIN" },
    { name: "Team", href: "/about/team/", type: "MAIN" },
    { name: "Service", href: "/about/service/", type: "MAIN" },

    { name: "Datenschutz", href: "/datenschutz/", type: "META" },
    { name: "Impressum", href: "/impressum/", type: "META" },

];

export { NAV };