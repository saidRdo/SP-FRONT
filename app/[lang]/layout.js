import "../../Styles/globals.css"
import "../../Styles/tailwind.output.css"
import { getDictionary } from '@/get-dictionary';
import Providers from "@/components/NextAuthProviders";
import {DictionaryProvider} from "@/components/DictionaryProvider/DictionaryProvider";

// import theme style scss file
import '../../Styles/theme.scss';

export default async function Root({ children, params }) {
    const dictionary = await getDictionary(params.lang);
    return (
        <DictionaryProvider dictionary={dictionary} lang={params.lang}>
            <html lang={params.lang}>
                <body dir={params.lang== 'ar' ? 'rtl' : 'ltr'}>
                <Providers>
                    {children}
                </Providers>
                </body>
            </html>
        </DictionaryProvider>
    );
}
