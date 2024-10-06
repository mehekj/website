import Timeline from '../timeline/Timeline';

export default function Experience() {
    const data = [
        {
            title: 'Associate Engine Engineer',
            subtitle: 'Activision - Infinity Ward',
            start: '07/2024',
            end: 'Present',
            description: [],
        },
        {
            title: 'Teaching Assistant',
            subtitle: 'Brown University',
            start: '05/2022',
            end: '12/2023',
            description: [
                // "Designed assignment code and handouts for Brown's CSCI 1230 computer graphics course in C++ and OpenGL",
                // 'Rewrote two projects and created a new interactive assignment about coordinate spaces and transformations',
                // 'Host weekly office hours (6 hours total) to provide one-on-one conceptual and debugging help',
            ],
        },
        {
            title: 'Engine Engineering Intern',
            subtitle: 'Activision - Infinity Ward',
            start: '05/2023',
            end: '08/2023',
            description: [
                // 'Wrote PC and console C++ code for the cross-platform Call of Duty game engine supporting a live product',
                // "Created and shipped the new Eco Mode setting, launching <a target='_blank' class='link' href='https://learn.microsoft.com/en-us/gaming/sustainability/case-studies/case-studies-cod'>CoD's Sustainability Initiative</a>",
                // 'Developed rendering features that reduce power consumption by 50% in the multiplayer game lobbies',
                // 'Collaborated with Microsoft to profile power usage changes on XBox using PIX and implemented telemetry features to gather player device performance data',
            ],
        },
        {
            title: 'Research Assistant',
            subtitle: 'Brown University',
            start: '05/2021',
            end: '05/2023',
            description: [
                // 'Led a team of 6-8 research assistants in developing Dash, a MERN stack Typescript hypermedia application',
                // 'Delegated coding tasks, supervised weekly meetings, performed user testing, handled member recruitment, and instituted code reviews to manage updates to a 100,000+ line codebase',
                // 'Implemented tools for audio/video editing, digital handwriting transcription, and document metadata interaction',
            ],
        },
        {
            title: 'Web Development Intern',
            subtitle: 'CMYK Digital Agency',
            start: '09/2019',
            end: '06/2020',
            description: [
                // 'Built HTML/CSS templates for client contracted web pages from design mockups',
                // 'Enhanced and maintained existing client sites',
            ],
        },
        {
            title: 'Technology Analyst Intern',
            subtitle: 'Morgan Stanley',
            start: '07/2019',
            end: '08/2019',
            description: [
                // 'Restored and refined Enterprise Computing Services department website in HTML/CSS/JS and Bootstrap',
                // 'Maintained an online inventory of company database services',
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
