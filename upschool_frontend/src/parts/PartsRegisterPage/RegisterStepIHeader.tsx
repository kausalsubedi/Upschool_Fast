interface IRegisterStepIHeader {
    showOauth: boolean;
    isLargeScreen?: boolean;
}

export default function RegisterStepIHeader({
    showOauth,
    isLargeScreen,
}: IRegisterStepIHeader) {
    return (
        <div className="mt-5">
            <h1 className="text-2xl font-bold text-font-color md:p-2 md:m-2">
                Create Your Upschool Account
            </h1>
            <h3 className="text-font-color font-normal md:p-2 md:m-2">
                You are a few clicks away from creating your account
            </h3>
            <div
                className={`${
                    showOauth ? 'grid' : 'hidden'
                } grid-cols-4 gap-4  p-2 m-2 w-11/12`}
            >
                <button
                    className={`${
                        isLargeScreen
                            ? 'col-span-2 justify-center'
                            : 'col-span-4 justify-start pl-2'
                    } flex flex-wrap  gap-1 items-center border border-font-color p-1 rounded-md`}
                >
                    <span>
                        <svg
                            className={`${
                                isLargeScreen ? 'w-8 h-8 ' : 'w-6 h-6'
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            fill="#FFC107"
                        >
                            <path
                                fill="#FFC107"
                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                            />
                            <path
                                fill="#FF3D00"
                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                            />
                            <path
                                fill="#4CAF50"
                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                            />
                            <path
                                fill="#1976D2"
                                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                            />
                        </svg>
                    </span>
                    <span className="text-font-color">
                        Continue with Google
                    </span>
                </button>
                <button
                    className={`${
                        isLargeScreen
                            ? 'col-span-2 justify-center'
                            : 'col-span-4 justify-start pl-2'
                    } flex flex-wrap  gap-1 items-center border border-font-color p-1 rounded-md`}
                >
                    <span>
                        <svg
                            className={`${
                                isLargeScreen ? 'w-8 h-8 ' : 'w-6 h-6'
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            fill="url(#CXanuwD9EGkBgTn76_1mxa)"
                        >
                            <linearGradient
                                id="CXanuwD9EGkBgTn76_1mxa"
                                x1="9.993"
                                x2="40.615"
                                y1="-299.993"
                                y2="-330.615"
                                gradientTransform="matrix(1 0 0 -1 0 -290)"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0" stopColor="#2aa4f4" />
                                <stop offset="1" stopColor="#007ad9" />
                            </linearGradient>
                            <path
                                fill="url(#CXanuwD9EGkBgTn76_1mxa)"
                                d="M24,4C12.954,4,4,12.954,4,24c0,10.028,7.379,18.331,17.004,19.777	C21.981,43.924,22.982,41,24,41c0.919,0,1.824,2.938,2.711,2.818C36.475,42.495,44,34.127,44,24C44,12.954,35.046,4,24,4z"
                            />
                            <path
                                d="M27.707,21.169c0-1.424,0.305-3.121,1.757-3.121h4.283l-0.001-5.617l-0.05-0.852l-0.846-0.114	c-0.608-0.082-1.873-0.253-4.206-0.253c-5.569,0-8.636,3.315-8.636,9.334v2.498H15.06v7.258h4.948V43.6	C21.298,43.861,22.633,44,24,44c1.268,0,2.504-0.131,3.707-0.357V30.301h5.033l1.122-7.258h-6.155V21.169z"
                                opacity=".05"
                            />
                            <path
                                d="M27.207,21.169c0-1.353,0.293-3.621,2.257-3.621h3.783V12.46l-0.026-0.44l-0.433-0.059	c-0.597-0.081-1.838-0.249-4.143-0.249c-5.323,0-8.136,3.055-8.136,8.834v2.998H15.56v6.258h4.948v13.874	C21.644,43.876,22.806,44,24,44c1.094,0,2.16-0.112,3.207-0.281V29.801h5.104l0.967-6.258h-6.072V21.169z"
                                opacity=".05"
                            />
                            <path
                                fill="#fff"
                                d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46	c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.475	C21.988,43.923,22.981,44,24,44c0.921,0,1.82-0.062,2.707-0.182V29.301z"
                            />
                        </svg>
                    </span>
                    <span className="text-font-color">
                        Continue with facebook
                    </span>
                </button>
                <div
                    className={`col-span-4 border border-[#DDD2D2] ${
                        isLargeScreen ? 'my-2' : 'my-0.5'
                    }`}
                ></div>
            </div>
        </div>
    );
}
