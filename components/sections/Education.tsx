import OutlineBox from '../OutlineBox';

export default function Education() {
    return (
        <div className="home-section gap-8">
            <h2>Education</h2>
            <div className="flex w-full flex-row flex-wrap gap-5 md:flex-nowrap">
                <OutlineBox>
                    <div className="flex flex-col gap-4">
                        <div>
                            <div className="flex flex-row items-center justify-between">
                                <h3>Brown University</h3>
                                <p className="text-right text-sm">
                                    Sc.B. Computer Science
                                </p>
                            </div>
                            <div className="flex flex-row items-center justify-between text-right">
                                <p className="text-sm">09/2020 - 05/2024</p>
                                <p className="text-sm">4.0/4.0 GPA</p>
                            </div>
                        </div>
                        <div>
                            Coursework: Computer Systems, Data Structures and
                            Algorithms, UI/UX, Deep Learning, NLP, Computer
                            Vision, Computer Graphics, Computational
                            Photography, Embedded Systems, Linear Algebra,
                            Statistical Inference
                        </div>
                    </div>
                </OutlineBox>

                <OutlineBox>
                    <div className="flex flex-col gap-4">
                        <div>
                            <div className="flex flex-row items-center justify-between">
                                <h3>Bergen County Academies</h3>
                                <p className="text-right text-sm">HS Diploma</p>
                            </div>
                            <div className="flex flex-row items-center justify-between text-right">
                                <p className="text-sm">09/2016 - 06/2020</p>
                                <p className="text-sm">3.9/4.0 GPA</p>
                            </div>
                        </div>
                        <div>Academy for Engineering and Design Technology</div>
                    </div>
                </OutlineBox>
            </div>
        </div>
    );
}
