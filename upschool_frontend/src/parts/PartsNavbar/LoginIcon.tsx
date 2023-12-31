export default function LoginIcon() {
    return (
        <>
            <div className="flex flex-row gap-1 flex-1 items-center">
                <div className="relative w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg //imported from heroicons
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="white"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                        />
                    </svg>
                </div>
                <span className="text-sm lg:text-sm text-white">Login</span>
            </div>
        </>
    );
}
