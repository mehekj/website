import { getAllPages } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';

export default async function Projects() {
    const projects = await getAllPages('_projects', [
        'title',
        'date',
        'technologies',
        'category',
        'description',
        'image',
        'slug',
    ]);

    return (
        <div className="flex flex-col justify-center gap-16">
            <div className="flex flex-col gap-8">
                <h1>Projects</h1>
                <p>My academic and professional programming projects</p>
            </div>
            <div className="flex flex-col gap-24 md:gap-16">
                {projects
                    .sort(
                        (a, b) =>
                            parseInt(b.frontmatter.slug.split(/-(.*)/s)[0]) -
                            parseInt(a.frontmatter.slug.split(/-(.*)/s)[0])
                    )
                    .map((project) => (
                        <ProjectCard
                            title={project.frontmatter.title}
                            date={project.frontmatter.date}
                            technologies={project.frontmatter.technologies}
                            category={project.frontmatter.category}
                            description={project.frontmatter.description}
                            image={project.frontmatter.image}
                            link={'/projects/' + project.frontmatter.slug}
                        />
                    ))}
            </div>
        </div>
    );
}

type ProjectCardProps = {
    title: string;
    date: string;
    technologies: string;
    category: string;
    description: string;
    image: string;
    link: string;
};

function ProjectCard(props: ProjectCardProps) {
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
                    <p className="text-sm">
                        {props.category} | {props.technologies}
                    </p>
                </div>
                <p className="text-justify">{props.description}</p>
            </div>
        </div>
    );
}
