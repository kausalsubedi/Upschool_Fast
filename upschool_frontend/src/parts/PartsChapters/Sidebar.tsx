import OpenBook from '../../assets/OpenBook.png';
import SidebarContent from './SidebarContent';
// import axiosInstance from '../../config/Axios';

// import { useState, useEffect } from 'react';
// interface IChapters {
//     id: number;
//     created_at: Date;
//     updated_at: Date;
//     name: string;
//     slug: string;
//     description: string;
//     course_id: number;
//     active: boolean;
// }
const detail = [
    {
        title: 'Lesson Resources',
        subtitle: [
            'Learning Sequence 1',
            'Learning Sequence 2',
            'Learning Sequence 3',
            'Learning Sequence 4',
        ],
    },
    {
        title: 'Completing the course',
        subtitle: [
            'Reflection(<8 yrs)',
            'Reflection(8+ yrs)',
            'Completing this course',
        ],
    },
];

export default function Sidebar() {
    // const [chapter, setChapter] = useState<IChapters | null>(null);
    // useEffect(() => {
    //     (async () => {
    //         const res = await axiosInstance.get(`/data/chapters`);
    //         setChapter(res.data.data);
    //     })();
    // }, []);
    return (
        <>
            <div className="flex flex-row justify-center items-center bg-red-600 w-full">
                <div className="flex flex-row items-center justify-center text-white w-fit gap-1  h-14">
                    <span className=" ">
                        <img
                            src={OpenBook}
                            width="25"
                            height="25"
                            alt="OpenBook"
                        />
                    </span>
                    <h3 className="text-xs sm:text-sm md:text-base">
                        Lesson List
                    </h3>
                </div>
            </div>
            <div className="overflow-auto h-[82vh]">
                {detail.map((section, index) => (
                    <SidebarContent key={index} section={section} />
                ))}
            </div>
        </>
    );
}
