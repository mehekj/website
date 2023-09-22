export default function Skills() {
    const languages = [
        'C/C++',
        'Python',
        'JavaScript',
        'TypeScript',
        'HTML/CSS',
        'Java',
    ];

    const technologies = [
        'React',
        'Node.js',
        'Express.js',
        'Tensorflow',
        'Next.js',
        'TailwindCSS',
        'OpenCV',
        'OpenGL',
        'Eigen',
    ];

    const tools = [
        'VS Code',
        'Visual Studio',
        'Qt',
        'Git',
        'Perforce',
        'GCP',
        'MongoDB',
        'Figma',
        'Photoshop',
        'Illustrator',
        'Blender',
    ];

    return (
        <div className="home-section gap-8">
            <h2>Skills</h2>
            <div className="flex flex-col gap-3">
                <h3>Languages</h3>
                <div className="flex flex-row flex-wrap gap-x-4 gap-y-3">
                    {languages.map((text) => (
                        <Bubble>{text}</Bubble>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h3>Technologies</h3>
                <div className="flex flex-row flex-wrap gap-x-4 gap-y-3">
                    {technologies.map((text) => (
                        <Bubble>{text}</Bubble>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h3>Tools</h3>
                <div className="flex flex-row flex-wrap gap-x-4 gap-y-3">
                    {tools.map((text) => (
                        <Bubble>{text}</Bubble>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Bubble({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center justify-center rounded-full border-2 border-solid border-black px-3 py-0.5 dark:border-white">
            {children}
        </div>
    );
}
