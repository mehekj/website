'use client';

import { ReactNode } from 'react';

type ButtonProps = {
    text: string;
    icon: ReactNode;
    href: string;
};

export default function Button(props: ButtonProps) {
    return (
        <a
            target="_blank"
            href={props.href}
            className="flex items-center justify-center gap-2.5 rounded border-2 border-solid border-black px-3.5 py-1 font-bold transition duration-300 hover:bg-highlight_light dark:border-white hover:dark:bg-highlight_dark"
        >
            {props.text} {props.icon}
        </a>
    );
}
