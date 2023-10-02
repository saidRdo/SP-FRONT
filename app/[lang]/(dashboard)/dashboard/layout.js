'use client'
// import node module libraries
import { useState } from 'react';
import 'datatables.net-dt/css/jquery.dataTables.min.css';


// import sub components
import NavbarVertical from '@/layouts/navbars/NavbarVertical';
import NavbarTop from '@/layouts/navbars/NavbarTop';
import {useDictionary} from "@/components/DictionaryProvider/DictionaryProvider";
import useMounted from "@/hooks/useMounted";

export default function DashboardLayout({ children }) {
    const dictionary = useDictionary();
    const hasMounted =useMounted();

    const [showMenu, setShowMenu] = useState(true);
    const ToggleMenu = () => {
        return setShowMenu(!showMenu);
    };

    if (!hasMounted){
        return (
            <div className={"screen"}>
                <img src={"/images/brand/logo/xl-logo.png"}/>
            </div>
        )
    }

    return (
        <div id="db-wrapper" className={`bg-global-content ${dictionary?.lang == 'ar' ? 'rtl' : 'ltr'} ${showMenu ? '' : 'toggled'} `}>
            <div className={`navbar-vertical ${dictionary?.lang == 'ar' ? 'rtl' : 'ltr'} navbar`}>
                <NavbarVertical
                    showMenu={showMenu}
                    onClick={(value) => setShowMenu(value)}
                />
            </div>
            <div id="page-content" className={`${dictionary?.lang == 'ar' ? 'rtl' : 'ltr'}`}>
                <div className="header">
                    <NavbarTop
                        data={{
                            showMenu: showMenu,
                            SidebarToggleMenu: ToggleMenu,
                            lang:dictionary.lang
                        }}
                    />
                </div>
                {children}
            </div>
        </div>
    )
}
