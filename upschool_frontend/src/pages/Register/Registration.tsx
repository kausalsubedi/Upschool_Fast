import { useState } from 'react';
import useScreenWidth from '../../hooks/useScreenWidth';

import RegisterStepIHeader from '../../parts/PartsRegisterPage/RegisterStepIHeader';
import RegisterStepIIIHeader from '../../parts/PartsRegisterPage/RegisterStepIIIHeader';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { SecondColumnProgressSection as ProgressSection } from '../../parts/PartsRegisterPage/SecondColumnProgressSection';
import LoginPart from '../../parts/PartsRegisterPage/LoginPart';
import axiosInstance from '../../config/Axios';
import { useNavigate } from 'react-router-dom';
import useUser from '../../hooks/useUser';

export default function Registration() {
    const { user, refresh } = useUser();
    const { isLargeScreen } = useScreenWidth(); //min-width=768px
    const [currentStep, setCurrentStep] = useState(0);
    const navigate = useNavigate();
    const [currentData, setCurrentData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        country: '',
        user_type_id: '',
        date_of_birth: '',
        canvaAccount: true,
        condition1: false,
        condition2: false,
        condition3: false,
    });
    const components = [
        <Step1
            isLargeScreen={isLargeScreen}
            oldValues={currentData}
            submitHandler={async (data, onSubmitProps) => {
                console.log(data);
                setCurrentData((oldValue) => {
                    return { ...oldValue, ...data };
                });
                onSubmitProps.resetForm();
                setCurrentStep((oldStep) => oldStep + 1);
            }}
        />,
        <Step2
            oldValues={currentData}
            submitHandler={async (data, onSubmitProps) => {
                setCurrentData((oldValue) => {
                    return { ...oldValue, ...data };
                });
                onSubmitProps.resetForm();
                setCurrentStep((oldStep) => oldStep + 1);
            }}
            backHandler={(values) => {
                setCurrentData((oldData) => {
                    return { ...oldData, ...values };
                });
                setCurrentStep(0);
            }}
        />,
        <Step3
            oldValues={currentData}
            submitHandler={async (data, onSubmitProps) => {
                const fullData = { ...currentData, ...data };
                const csrfResp = await axiosInstance.get(
                    '/sanctum/csrf-cookie',
                );
                axiosInstance.defaults.headers['X-XSRF-TOKEN'] =
                    csrfResp.data.csrfToken;
                await axiosInstance.post('/auth/register', fullData);
                await refresh();
                onSubmitProps.resetForm();
                navigate('/');
            }}
            backHandler={(data) => {
                setCurrentData((oldValue) => {
                    return { ...oldValue, ...data };
                });
                setCurrentStep(1);
            }}
        />,
    ];
    if (user && user.id) {
        navigate('/');
    }

    return (
        <div
            className="flex justify-center items-center bg-gray-200 py-8"
            style={{ minHeight: '90vh' }}
        >
            {/*Layout*/}
            <div
                className={`grid ${
                    isLargeScreen ? 'grid-cols-16' : 'grid-cols-11'
                } gap-0 w-[90vw] xl:w-[60vw] ${
                    isLargeScreen ? 'min-h-[80vh]' : 'min-h-[85vh]'
                }`}
            >
                {/* first column:Registration Form*/}
                <div
                    className=" col-span-11 flex flex-wrap content-center  justify-center bg-white"
                    style={{ height: 'inherit' }}
                >
                    <div className="w-11/12 ">
                        {/* <!-- Heading --> */}
                        {currentStep == 0 && (
                            <RegisterStepIHeader
                                showOauth
                                isLargeScreen={isLargeScreen}
                            />
                        )}
                        {currentStep == 1 && (
                            <RegisterStepIHeader showOauth={false} />
                        )}
                        {currentStep == 2 && <RegisterStepIIIHeader />}

                        {/* <!-- Form --> */}
                        {/* First form */}
                        {components[currentStep]}
                    </div>
                    {!isLargeScreen && (
                        <div className="text-black grid grid-cols-10 content-center w-full">
                            <div className="col-span-10 flex flex-1 flex-wrap justify-center text-sm ">
                                <LoginPart />
                            </div>
                        </div>
                    )}
                </div>
                {/* Second column*/}
                {isLargeScreen && <ProgressSection currentStep={currentStep} />}
            </div>
        </div>
    );
}
