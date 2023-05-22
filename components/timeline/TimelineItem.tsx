'use client';

import { FiChevronRight } from 'react-icons/fi';
import OutlineBox from '../OutlineBox';
import { useState } from 'react';

export type TimelineItemProps = {
    title: string;
    subtitle: string;
    start: string;
    end: string;
    description: string[];
};

export default function TimelineItem(props: TimelineItemProps) {
    const [open, setOpen] = useState(false);

    const toggleOpen = (e: React.PointerEvent) => {
        e.stopPropagation();
        e.preventDefault();
        setOpen(!open);
    };

    return (
        <div className="-translate-y-1.5">
            <div
                className={`text-sm font-bold leading-loose transition-colors duration-300 ${
                    open && 'text-main'
                }`}
            >{`${props.start} - ${props.end}`}</div>
            <OutlineBox active={open}>
                <div
                    className={`flex cursor-pointer flex-col ${
                        open ? 'gap-4' : ''
                    }`}
                    onPointerDown={toggleOpen}
                >
                    <div className="flex flex-row items-center justify-between">
                        <div>
                            <h3>{props.title}</h3>
                            <h4>{props.subtitle}</h4>
                        </div>
                        <FiChevronRight
                            size={40}
                            className={`cursor-pointer transition-all duration-300 ${
                                open ? 'rotate-90 text-main' : 'rotate-0'
                            }`}
                        />
                    </div>
                    <div className="overflow-hidden">
                        <ul
                            className={`list-inside list-disc ${
                                open ? 'h-full' : 'h-0 overflow-hidden'
                            }`}
                        >
                            {props.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </OutlineBox>
        </div>
    );
}
