import { Quicksand } from 'next/font/google';
import NavBar from '../components/NavBar';
import './globals.css';

const font = Quicksand({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-quicksand',
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${font.variable} border-box`}>
            <title>Mehek Jethani Portfolio</title>
            <head />
            <body className="bg-primary text-base md:text-lg">
                <div className="m-auto max-w-screen-lg px-6 py-28 md:py-40">
                    {/* <NavBar /> */}
                    {children}
                </div>
            </body>
        </html>
    );
}
