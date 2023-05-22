export default function Projects() {
    return (
        <div className="flex flex-col justify-center gap-16">
            <div className="flex flex-col gap-8">
                <h1>projects</h1>
                <p>my academic and professional programming projects</p>
            </div>
            <div className="flex flex-col gap-16"></div>
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
    return <div></div>;
}
