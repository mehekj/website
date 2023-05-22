import Timeline from '@/components/timeline/Timeline';

export default function Experience() {
    const data = [
        {
            title: 'Engine Engineering Intern',
            subtitle: 'Activision - Infinity Ward Studios',
            start: '05/2023',
            end: '08/2023',
            description: ['bullet 1', 'bullet2'],
        },
        {
            title: 'Teaching Assistant',
            subtitle: 'Brown University',
            start: '05/2022',
            end: '12/2023',
            description: ['bullet 1', 'bullet2'],
        },
        {
            title: 'Research Assistant',
            subtitle: 'Brown University',
            start: '05/2021',
            end: '05/2023',
            description: ['bullet 1', 'bullet2'],
        },
        {
            title: 'Web Development Intern',
            subtitle: 'CMYK Digital Agency',
            start: '09/2019',
            end: '06/2020',
            description: ['bullet 1', 'bullet2'],
        },
        {
            title: 'Technology Analyst Intern',
            subtitle: 'Morgan Stanley',
            start: '07/2019',
            end: '08/2019',
            description: ['bullet 1', 'bullet2'],
        },
    ];

    return (
        <div className="home-section gap-10">
            <h2>experience</h2>
            <Timeline items={data} />
        </div>
    );
}
