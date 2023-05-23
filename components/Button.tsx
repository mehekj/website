'use client';

import { PropsWithChildren, ReactNode } from 'react';

type ButtonProps = {
    icon?: ReactNode;
    href: string;
};

export default function Button(props: PropsWithChildren<ButtonProps>) {
    return (
        <a
            target="_blank"
            href={props.href}
            className="flex max-w-fit items-center justify-center gap-2.5 rounded border-2 border-solid border-black px-3.5 py-0.5 transition duration-300 hover:bg-highlight dark:border-white"
        >
            {props.children} {props.icon}
        </a>
    );
}
