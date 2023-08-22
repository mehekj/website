import { getAllPages } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';

export default function Misc() {
    const posts = getAllPages('_misc', [
        'title',
        'date',
        'description',
        'image',
        'slug',
    ]);

    return (
        <div className="flex flex-col justify-center gap-16">
            <div className="flex flex-col gap-8">
                <h1>miscellaneous</h1>
                <p>other stuff that I'm interested in and have been up to!</p>
            </div>
            <div className="flex flex-col gap-24 md:gap-16">
                {posts.map((post) => (
                    <MiscCard
                        title={post.title}
                        date={post.date}
                        description={post.description}
                        image={post.image}
                        link={'/misc/' + post.slug}
                    />
                ))}
            </div>
        </div>
    );
}

type MiscCardProps = {
    title: string;
    date: string;
    description: string;
    image: string;
    link: string;
};

function MiscCard(props: MiscCardProps) {
    return (
        <div className="flex flex-col items-center gap-5 md:flex-row md:gap-10">
            <div className="min-w-[100px] overflow-hidden rounded-full md:min-w-[150px]">
                <Link href={props.link}>
                    <Image
                        src={props.image}
                        alt={props.title + ' thumbnail'}
                        width={150}
                        height={150}
                        draggable={false}
                    />
                </Link>
            </div>
            <div className="flex w-full flex-col gap-4">
                <div>
                    <div className="flex flex-row flex-wrap items-center justify-between gap-x-3">
                        <Link href={props.link} className="hover-color">
                            <h3 className="underline">{props.title}</h3>
                        </Link>
                        <p className="text-sm">{props.date}</p>
                    </div>
                </div>
                <p className="text-justify">{props.description}</p>
            </div>
        </div>
    );
}
