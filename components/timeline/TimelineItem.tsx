import { FiChevronRight } from 'react-icons/fi';
import OutlineBox from '../OutlineBox';

export type TimelineItemData = {
    title: string;
    subtitle: string;
    start: string;
    end: string;
    description: string[];
};

type TimelineItemProps = TimelineItemData & {
    index: number;
    active: number | undefined;
    setActive: (index: number) => void;
};

export default function TimelineItem(props: TimelineItemProps) {
    const toggleOpen = (e: React.PointerEvent) => {
        e.stopPropagation();
        e.preventDefault();
        props.setActive(props.index);
    };

    const open = props.index === props.active;

    return (
        <div className="-translate-y-1.5">
            <div
                className={`text-sm font-bold leading-loose transition-colors duration-300 ${
                    open && 'text-main'
                }`}
            >{`${props.start} - ${props.end}`}</div>
            <OutlineBox active={open}>
                <div
                    className="flex cursor-pointer flex-col overflow-hidden"
                    onPointerDown={toggleOpen}
                >
                    <div
                        className={`flex flex-row items-center justify-between transition-all ${
                            open ? 'mb-4' : 'mb-0 delay-200 duration-100'
                        }`}
                    >
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
                    <div
                        className={
                            'transition-all duration-300' +
                            (open ? ' max-h-screen' : ' max-h-0')
                        }
                    >
                        <ul className="ml-5 list-outside list-disc">
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
