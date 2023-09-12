import Timeline from '../timeline/Timeline';

export default function Experience() {
    const data = [
        {
            title: 'Engine Engineering Intern',
            subtitle: 'Activision - Infinity Ward',
            start: '05/2023',
            end: '08/2023',
            description: [
                'Launched Call of Duty Modern Warfare II\'s Sustainability Initiative and implemented the new "Eco Mode" setting',
                'Developed rendering features to cut back energy consumption in the multiplayer game',
                'Wrote C++ code for a Triple A game engine supporting a live product with regular title updates',
            ],
        },
        {
            title: 'Teaching Assistant',
            subtitle: 'Brown University',
            start: '05/2022',
            end: 'Present',
            description: [
                "Designed assignment code and handouts for Brown's CSCI 1230 computer graphics course in C++ and OpenGL",
                'Oversaw a team of TAs in completely rewriting multiple course projects and individually created a new assignment with an interactive Qt OpenGL demo to teach students about coordinate spaces and affine transformations',
                'Hosted two sets of weekly office hours during the semester to provide one-on-one conceptual and debugging help',
            ],
        },
        {
            title: 'Research Assistant',
            subtitle: 'Brown University',
            start: '05/2021',
            end: '05/2023',
            description: [
                'Led a team of research assistants in building Dash, a MERN stack Typescript browser-based hypermedia system',
                'Delegated coding tasks, supervised weekly meetings and codebase updates, performed user testing, managed member recruitment, and instituted a peer code review system',
                'Introduced features for audio/video playback and editing, digital handwritten note transcription, and a table schema interface for viewing and modifying collections of document metadata',
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
