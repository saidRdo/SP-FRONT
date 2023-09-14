import "server-only"

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
    en: () => import("/public/dictionaries/en.json").then(module => module.default),
    fr: () => import("/public/dictionaries/fr.json").then(module => module.default),
    ar: () => import("/public/dictionaries/ar.json").then(module => module.default)
}

export const getDictionary = async locale =>
    dictionaries[locale]?.() ?? dictionaries.en()
