import Timeline from '../timeline/Timeline';

export default function Experience() {
    const data = [
        {
            title: 'Engine Engineering Intern',
            subtitle: 'Activision - Infinity Ward',
            start: '05/2023',
            end: '08/2023',
            description: [
                'Wrote PC and console C++ code for the cross-platform Call of Duty game engine supporting a live product',
                'Created and shipped the new Eco Mode setting for Warzone S5, launching CoD’s Sustainability Initiative',
                'Developed rendering features that reduce power consumption in the multiplayer game lobbies by almost 50%',
                'Collaborated with Microsoft to profile power usage changes on XBox and implemented telemetry features to gather player device performance data',
            ],
        },
        {
            title: 'Teaching Assistant',
            subtitle: 'Brown University',
            start: '05/2022',
            end: 'Present',
            description: [
                'Designed assignment code and handouts for Brown’s CSCI 1230 computer graphics course in C++ and OpenGL',
                'Rewrote two projects and created a new interactive assignment about coordinate spaces and transformations',
                'Host two sets of weekly office hours during the semester to provide one-on-one conceptual and debugging help',
            ],
        },
        {
            title: 'Research Assistant',
            subtitle: 'Brown University',
            start: '05/2021',
            end: '05/2023',
            description: [
                'Led a team of research assistants in developing Dash, a MERN stack Typescript browser-based hypermedia system',
                'Delegated coding tasks, supervised weekly meetings, performed user testing, handled member recruitment, and instituted code reviews to manage updates to a 100,000+ line codebase',
                'Implemented tools for audio/video editing, digital handwriting transcription, and document metadata interaction',
            ],
        },
        {
            title: 'Web Development Intern',
            subtitle: 'CMYK Digital Agency',
            start: '09/2019',
            end: '06/2020',
            description: [
                'Built HTML/CSS templates for client contracted web pages from design mockups',
                'Enhanced and maintained existing client sites',
            ],
        },
        {
            title: 'Technology Analyst Intern',
            subtitle: 'Morgan Stanley',
            start: '07/2019',
            end: '08/2019',
            description: [
                'Restored and refined Enterprise Computing Services department website in HTML/CSS/JS and Bootstrap',
                'Maintained an online inventory of company database services',
            ],
        },
    ];

    return (
        <div className="home-section gap-10">
            <h2>Experience</h2>
            <Timeline items={data} />
        </div>
    );
}
