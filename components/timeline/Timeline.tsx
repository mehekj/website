import TimelineItem, { TimelineItemProps } from './TimelineItem';

export default function Timeline(props: { items: TimelineItemProps[] }) {
    return (
        <ol className="relative flex flex-col gap-6 border-l-2 border-main pl-4">
            {props.items.map((itemProps) => (
                <li>
                    <div className="absolute -left-[8px] h-[14px] w-[14px] rounded-full bg-main"></div>
                    <TimelineItem {...itemProps} />
                </li>
            ))}
        </ol>
    );
}
