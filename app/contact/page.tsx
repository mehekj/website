import Button from '@/components/Button';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Contact() {
    return (
        <div className="flex flex-col justify-center gap-10">
            <div className="flex flex-col gap-8">
                <h1>contact</h1>
                <p>find me everywhere I'm present on the internet</p>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex flex-row items-center gap-4">
                    <p className="font-bold">email</p>
                    <Button
                        icon={<FiMail />}
                        href="mailto:mehekj2020@gmail.com"
                    >
                        mehekj2020@gmail.com
                    </Button>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <p className="font-bold">linkedin</p>
                    <Button
                        icon={<FiLinkedin />}
                        href="https://www.linkedin.com/in/mehek-jethani/"
                    >
                        Mehek Jethani
                    </Button>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <p className="font-bold">github</p>
                    <Button
                        icon={<FiGithub />}
                        href="https://github.com/mehekj"
                    >
                        mehekj
                    </Button>
                </div>
            </div>
        </div>
    );
}
