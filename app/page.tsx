import About from '../components/sections/About';
import Hero from '../components/sections/Hero';
import Experience from '../components/sections/Experience';
import Skills from '../components/sections/Skills';
import Education from '../components/sections/Education';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center gap-32 md:gap-40">
            {/* <Hero />
            <About />
            <Experience />
            <Skills />
            <Education /> */}
            <div>
                <h1>under construction</h1>
                <br />
                <p>
                    surprise surprise! instead of working on any of my other
                    half finished web apps i've decided to redesign my website
                    again. come back in 6-24 months and maybe it'll be done and
                    look 10% better lol
                </p>
                <br />
                <p>
                    now that i'm no longer trying and failing to sell myself to
                    the corporate world maybe i'll use this domain for more fun
                    stuff like sharing my coffee ranking spreadsheets, notion
                    templates, and journey to learn to feed myself like a whole
                    human.
                </p>
                <br />
                <img src="/images/construction.gif" alt="construction" />
            </div>
        </div>
    );
}
