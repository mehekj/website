import { PropsWithChildren } from 'react';

type VideoProps = {
    src: string;
    full: boolean;
};

export default function Video(props: PropsWithChildren<VideoProps>) {
    return (
        <div className="my-4 flex flex-col items-center gap-2 text-center">
            <div className="h-fit w-fit overflow-hidden rounded">
                <video
                    src={props.src}
                    className={`h-full ${props.full ? 'w-full' : ''}`}
                    controls
                />
            </div>
            {props.children}
        </div>
    );
}
