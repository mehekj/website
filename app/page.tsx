import About from '../components/sections/About';
import Hero from '../components/sections/Hero';
import Experience from '../components/sections/Experience';
import Skills from '../components/sections/Skills';
import Education from '../components/sections/Education';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center gap-32 md:gap-40">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Education />
        </div>
    );
}
