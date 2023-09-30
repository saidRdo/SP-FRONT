'use client'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import dynamic from "next/dynamic";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
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

/*
 <Autocomplete
            id="country-select-demo"
            sx={{ width: 150 ,height:10 }}
            options={i18n.locales}
            autoHighlight
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props} onClick={()=>redirectedPathName(option.url)}>
                    <img
                        loading="lazy"
                        width="20"
                        src={`${option.avatar}`}
                        alt=""
                    />
                    {option.name}
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={i18n.locales.find(lang=> lang.url==pathName.split('/')[1]).name}
                    inputProps={{
                        ...params.inputProps
                    }}
                />
            )}
        />
 */