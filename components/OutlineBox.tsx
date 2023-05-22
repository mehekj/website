import { PropsWithChildren } from 'react';

type OutlineBoxProps = {
    active?: boolean;
};

export default function OutlineBox(props: PropsWithChildren<OutlineBoxProps>) {
    return (
        <div
            className={`w-full rounded-lg border-2 border-solid transition-colors duration-300 ${
                props.active ? `border-main` : 'border-black dark:border-white'
            } p-[2px]`}
        >
            <div
                className={`h-full rounded border-2 border-solid transition-colors duration-300 ${
                    props.active
                        ? `border-main`
                        : 'border-black dark:border-white'
                } p-3`}
            >
                {props.children}
            </div>
        </div>
    );
}
