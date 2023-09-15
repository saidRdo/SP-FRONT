'use client'
// import node module libraries
import { useState } from 'react';

// import theme style scss file
import 'styles/theme.scss';

// import sub components
import NavbarVertical from '@/layouts/navbars/NavbarVertical';
import NavbarTop from '@/layouts/navbars/NavbarTop';
import {useDictionary} from "@/components/DictionaryProvider/DictionaryProvider";

export default function DashboardLayout({ children }) {
    const dictionary = useDictionary();

    const [showMenu, setShowMenu] = useState(true);
    const ToggleMenu = () => {
        return setShowMenu(!showMenu);
    };

    return (
        <div id="db-wrapper" className={`${dictionary?.lang == 'ar' ? 'rtl' : 'ltr'} ${showMenu ? '' : 'toggled'} `}>
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
                            SidebarToggleMenu: ToggleMenu
                        }}
                    />
                </div>
                {children}
            </div>
        </div>
    )
}
