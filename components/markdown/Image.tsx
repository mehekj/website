import { PropsWithChildren } from 'react';

type ImageProps = {
    src: string;
    full: boolean;
};

export default function Image(props: PropsWithChildren<ImageProps>) {
    return (
        <div className="my-4 flex flex-col items-center gap-2 text-center">
            <div className="h-fit w-fit overflow-hidden rounded">
                <a href={props.src} target="_blank">
                    <img
                        src={props.src}
                        className={props.full ? 'h-full w-full' : ''}
                    />
                </a>
            </div>
            {props.children}
        </div>
    );
}
