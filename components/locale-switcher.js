'use client'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import dynamic from "next/dynamic";
import {i18n} from "@/i18n.config";
import Link from "next/link";


function LocaleSwitcher() {

    const pathName = usePathname()
    const router=useRouter()

    const redirectedPathName = (locale) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        const url=segments.join('/')
        return router.push(url)
    }

    return (
       <ul className={"switch-lang"}>
           {
               i18n.locales.map(lng=>{
                   return(
                       <li onClick={()=>redirectedPathName(lng.url)} className={` ${pathName.split('/')[1]===lng.url && "active-lng"}`} >
                           <img
                               loading="lazy"
                               width="20"
                               height={'20'}
                               src={`${lng.avatar}`}
                               alt="active"
                           />
                           <Link href={"#"}  onClick={(e)=>e.preventDefault()}>
                               {lng.name}
                           </Link>
                       </li>
                   )
               })
           }
       </ul>
    );

}
export default dynamic(() => Promise.resolve(LocaleSwitcher), { ssr: false });