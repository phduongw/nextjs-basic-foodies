import React from 'react';
import Link from "next/link";
import Image from "next/image";

import logo from '@/assets/logo.png'
import classes from './main-header.module.css'
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "@/components/main-header/nav-link";

const MainHeader = () => {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link href={'/'} className={classes.logo}>
                    <Image src={logo} alt="logo" />
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Foodies Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default MainHeader;