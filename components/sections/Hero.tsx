import Image from 'next/image';
import Button from '../Button';
import { FiDownload } from 'react-icons/fi';

export default function Hero() {
    return (
        <div className="home-section max-w-screen-md items-center gap-x-28 gap-y-10 md:flex-row">
            <div className="pointer-events-none max-w-[200px] overflow-hidden rounded-full md:min-w-[250px]">
                <Image
                    src="/images/profile.jpeg"
                    alt="profile picture"
                    width={250}
                    height={250}
                />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-4 md:items-start">
                <h1 className="text-center md:text-left">
                    Hi! I'm <span className="text-main">Mehek</span>
                </h1>
                <p className="text-center md:text-justify">
                    CS student and TA at Brown University <br />
                    previous intern at Activision
                </p>
                <Button
                    icon={<FiDownload />}
                    href={'/files/Mehek_Jethani_Resume.pdf'}
                >
                    <span className="font-bold">resume</span>
                </Button>
            </div>
        </div>
    );
}
