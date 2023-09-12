import { PropsWithChildren } from 'react';

type YoutubeProps = {
    src: string;
};

export default function Embed(props: PropsWithChildren<YoutubeProps>) {
    return (
        <div className="my-4 flex flex-col items-center gap-2 text-center">
            <div className="relative w-full overflow-hidden rounded-md pb-[56.25%]">
                <iframe
                    src={props.src}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute left-0 top-0 h-full w-full"
                ></iframe>
            </div>
            {props.children}
        </div>
    );
}
