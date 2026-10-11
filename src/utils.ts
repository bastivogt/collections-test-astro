export function isActiveLink(pathname: string, href: string): boolean {
    if(pathname !== "/" && href !== "/") {
        if (pathname.indexOf(href.slice(1)) != -1) {
            return true;
        }
    }else if(pathname === "/" && href === "/"){
        return true;
    }
    return false;
}



export function getFormattedDate(date: Date, locale: string = "de-DE") {
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        timeZone: "UTC",
        hour: "2-digit",
        minute: "2-digit"
    }

    const d = date.toLocaleString(locale, options);
    return d;
}