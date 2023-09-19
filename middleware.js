import { NextResponse } from "next/server"
import { i18n } from "./i18n.config"
import { match as matchLocale } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import { withAuth } from "next-auth/middleware";

function getLocale(request) {
    const negotiatorHeaders = Object.fromEntries(request.headers.entries());

    // @ts-ignore locales are readonly
    const locales = i18n.locales

    const languages = new Negotiator(negotiatorHeaders).request["accept-language"]


    const preferredLocales = languages
        .split(',')
        .map((languageTag) => {
            const [locale, qValue] = languageTag.split(';q=');
            return { locale, qValue: parseFloat(qValue || 1) };
        })
        .sort((a, b) => b.qValue - a.qValue)
        .map((entry) => entry.locale);

    const LocalesSupported=locales.map(entry=>entry.url)

    /*
        console.log('negotiatorHeaders:', negotiatorHeaders);
        console.log('locales:', locales);
        console.log('languages:',preferredLocales);
        console.log('LocalesSupported:', LocalesSupported);
        console.log('i18n.defaultLocale:', i18n.defaultLocale);*/

    return matchLocale(preferredLocales, LocalesSupported, i18n.defaultLocale);
}


export function middleware(request) {
    const pathname = request.nextUrl.pathname

    if (pathname.startsWith('/images/')) {
        return;
    }

    const pathnameIsMissingLocale = i18n.locales.every(
        locale => !pathname.startsWith(`/${locale.url}/`) && pathname !== `/${locale.url}`
    )

    /*
    console.log("request",request)
    console.log("pathname",pathname)
    console.log("pathnameIsMissingLocale.url",pathnameIsMissingLocale)*/

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)

        return NextResponse.redirect(
            new URL(
                `${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
                request.url
            )
        )
    }
}
/*

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(req) {
        console.log(req.nextauth.token)
    },
    {
        callbacks: {
            authorized: ({ token }) => token?.role === "admin",
        },
    }
)*/


export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)","/en/dashboard"]
}