import { Formik } from 'formik';
import * as yup from 'yup';
import { TextField } from '@mui/material';
// import axiosInstance from '../../config/Axios';

const ResetPasswordEmailSchema = yup.object().shape({
    email: yup
        .string()
        .email('invalid email')
        .required('required')
        .max(255, 'Characters too long'),
});

const initialValuesResetPasswordEmail = {
    email: '',
};
const submitHandler = async (_values: any, onSubmitProps: any) => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
};
export default function ResetPasswordEmail() {
    return (
        <>
            <div className="  w-full h-[80vh] bg-gray-300 flex justify-center items-start">
                <div className="flex justify-center bg-white w-10/12 md:w-2/3 lg:w-[768px] h-2/3 md:h-3/5 lg:h-[60%] mt-10">
                    <div className="w-11/12 h-[90%] flex flex-col gap-4">
                        <div className=" px-2 py-0.5 mx-2 my-0.5 md:p-2 md:m-2">
                            <h3 className="text-font-color font-normal text-xs xs:text-sm sm:text-base md:text-xl lg:text-2xl">
                                we'll sen password reset instructions to the
                                email address associated with your account.
                            </h3>
                        </div>
                        <div className=" px-2 py-0.5 mx-2 my-0.5 md:p-2 md:m-2">
                            <h1 className="text-font-color font-semibold text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl">
                                Enter Email Address
                            </h1>
                        </div>
                        <div className=" px-2 py-0.5 mx-2 my-0.5 md:p-2 md:m-2">
                            <Formik
                                onSubmit={submitHandler}
                                initialValues={initialValuesResetPasswordEmail}
                                validationSchema={ResetPasswordEmailSchema}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleBlur,
                                    handleChange,
                                    handleSubmit,
                                    isSubmitting,
                                }) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className="grid grid-rows-2 grid-cols-2 w-full gap-y-5 py-0.5">
                                            <TextField
                                                className="row-span-1 col-span-2"
                                                type="email"
                                                label="Email"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.email}
                                                name="email"
                                                error={
                                                    Boolean(touched.email) &&
                                                    Boolean(errors.email)
                                                }
                                                helperText={
                                                    touched.email &&
                                                    (errors.email as string)
                                                }
                                            />
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className=" row-span-1 col-span-1 m-auto p-4 bg-theme-color text-white text-center w-full  overflow-hidden"
                                            >
                                                <span className="inline-block  text-xs xs:text-sm md:text-base">
                                                    Reset Password
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
