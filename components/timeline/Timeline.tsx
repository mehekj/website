'use client';

import { useState } from 'react';
import TimelineItem, { TimelineItemData } from './TimelineItem';

export default function Timeline(props: { items: TimelineItemData[] }) {
    const [active, setActive] = useState<number | undefined>(undefined);

    const setActiveItem = (index: number) => {
        if (index === active) {
            setActive(undefined);
        } else {
            setActive(index);
        }
    };

    return (
        <ol className="relative flex flex-col gap-6 border-l-2 border-main pl-4">
            {props.items.map((itemProps, i) => (
                <li key={i}>
                    <div className="absolute -left-[8px] h-[14px] w-[14px] rounded-full bg-main"></div>
                    <TimelineItem
                        key={i}
                        index={i}
                        active={active}
                        setActive={setActiveItem}
                        {...itemProps}
                    />
                </li>
            ))}
        </ol>
    );
}
