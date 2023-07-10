'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = (e: React.PointerEvent) => {
        e.stopPropagation();
        e.preventDefault();
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => setMenuOpen(false);

    const pathname = usePathname();
    const searchParams = useSearchParams();
    useEffect(closeMenu, [pathname, searchParams]);

    const navLinks = [
        ['home', '/'],
        ['projects', '/projects'],
        ['misc', '/misc'],
        ['contact', '/contact'],
    ];

    return (
        <nav className="bg-primary absolute right-0 top-0 z-50 flex w-full flex-wrap items-center justify-end px-4 py-4 md:fixed md:py-0">
            <button onPointerDown={toggleMenu} className="md:hidden">
                {menuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
            </button>
            <div
                className={`${
                    menuOpen ? 'flex' : 'hidden'
                } h-screen w-full md:flex md:h-auto md:w-auto md:items-center`}
            >
                <ul className="w-full pt-4 text-3xl font-bold md:flex md:justify-between md:text-base">
                    {navLinks.map(([page, href], i) => {
                        const active = pathname === href;
                        return (
                            <li
                                key={i}
                                className={`group block py-2 text-center hover:text-main md:px-6 md:transition md:duration-300 ${
                                    active
                                        ? 'text-main underline md:no-underline'
                                        : ''
                                }`}
                            >
                                <NavLink href={href}>{page}</NavLink>
                                <span className="relative top-[-2px] hidden h-0.5 max-w-0 bg-main group-hover:max-w-full md:block md:transition-all md:duration-300"></span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}

type NavLink = {
    href: string;
    children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLink) => {
    return <Link href={href}>{children}</Link>;
};
