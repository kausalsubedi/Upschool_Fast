import React, { useState } from 'react';
import DashboardContent from './DashboardContent';
import MyCourses from './MyCourses';
import MyBooks from './MyBooks';
import MyDonations from './MyDonations';
import Logout from './Logout';
import Setting from './Setting';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
    const [selectedOption, setSelectedOption] = useState<string>('Dashboard');

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="md:w-1/5 p-4 border text-[#cecece] xl:w-1/6">
                <ul className="mt-4 flex flex-col gap-4">
                    <li
                        className={`cursor-pointer p-2 border-2 border-white rounded-lg ${
                            selectedOption === 'Dashboard'
                                ? 'text-[#242254] border-[#242254]'
                                : 'hover:text-[#242254] hover:border-[#242254]'
                        }`}
                        onClick={() => handleOptionClick('Dashboard')}
                    >
                        {' '}
                        <i className="fa fa-dashboard"></i> Dashboard
                    </li>
                    <li
                        className={`cursor-pointer p-2 border-2 border-white rounded-lg ${
                            selectedOption === 'My Courses'
                                ? 'text-[#242254] border-[#242254]'
                                : 'hover:text-[#242254] hover:border-[#242254]'
                        }`}
                        onClick={() => handleOptionClick('My Courses')}
                    >
                        {' '}
                        <i className="fa fa-desktop"></i> My Courses
                    </li>
                    <li
                        className={`cursor-pointer p-2 border-2 border-white rounded-lg ${
                            selectedOption === 'My Books'
                                ? 'text-[#242254] border-[#242254]'
                                : 'hover:text-[#242254] hover:border-[#242254]'
                        }`}
                        onClick={() => handleOptionClick('My Books')}
                    >
                        <i className="fa fa-book"></i> My Books
                    </li>
                    <li
                        className={`cursor-pointer p-2 border-2 border-white rounded-lg ${
                            selectedOption === 'My Donations & Purchase'
                                ? 'text-[#242254] border-[#242254]'
                                : 'hover:text-[#242254] hover:border-[#242254]'
                        }`}
                        onClick={() =>
                            handleOptionClick('My Donations & Purchase')
                        }
                    >
                        <i className="fa fa-table"></i> My Donations & Purchase
                    </li>
                    <li
                        className={`cursor-pointer p-2 border-2 border-white rounded-lg ${
                            selectedOption === 'Setting'
                                ? 'text-[#242254] border-[#242254]'
                                : 'hover:text-[#242254] hover:border-[#242254]'
                        }`}
                        onClick={() => handleOptionClick('Setting')}
                    >
                        <i className="fa fa-gear"></i> Setting
                    </li>
                    <li
                        className={`cursor-pointer p-2 border-2 border-white rounded-lg ${
                            selectedOption === 'Logout'
                                ? 'text-[#242254] border-[#242254]'
                                : 'hover:text-[#242254] hover:border-[#242254]'
                        }`}
                        onClick={() => handleOptionClick('Logout')}
                    >
                        <i className="fa fa-power-off"></i> Logout
                    </li>
                </ul>
            </div>

            {/* Content */}
            <div className="w-4/5 lg:w-5/6 p-4 bg-[#cecece]">
                {/* Content specific to the selected option */}
                {selectedOption === 'Dashboard' && <DashboardContent />}
                {selectedOption === 'My Courses' && <MyCourses />}
                {selectedOption === 'My Books' && <MyBooks />}
                {selectedOption === 'My Donations & Purchase' && (
                    <MyDonations />
                )}
                {selectedOption === 'Setting' && <Setting />}
                {selectedOption === 'Logout' && <Logout />}
            </div>
        </div>
    );
};

export default Dashboard;
