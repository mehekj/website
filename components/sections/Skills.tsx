export default function Skills() {
    const languages = [
        'C++',
        'TypeScript',
        'JavaScript',
        'Python',
        'C',
        'Java',
        'HTML',
        'CSS',
    ];

    const technologies = ['OpenGL', 'Node.js', 'React.js', 'OpenCV'];

    const software = [
        'Git',
        'VSCode',
        'QtCreator',
        'Figma',
        'Photoshop',
        'Illustrator',
        'Blender',
    ];

    return (
        <div className="home-section gap-8">
            <h2>skills</h2>
            <div className="flex flex-col gap-3">
                <h3>languages</h3>
                <div className="flex flex-row flex-wrap gap-x-5 gap-y-3">
                    {languages.map((text) => (
                        <Bubble>{text}</Bubble>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h3>technologies</h3>
                <div className="flex flex-row flex-wrap gap-x-5 gap-y-3">
                    {technologies.map((text) => (
                        <Bubble>{text}</Bubble>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h3>software</h3>
                <div className="flex flex-row flex-wrap gap-x-5 gap-y-3">
                    {software.map((text) => (
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