function Contact() {
    return (
        <>
            <div className="w-full flex justify-center">
                <div className="m-20 text-[#242254] ">
                    <p className="">We are here to help!</p>
                    <span className="text-[28px] font-bold">
                        Reach out here: <br />
                        hello@upschool.co
                    </span>
                    <p className="font-light">
                        You can also keep up-to-date with Upschool by following
                        our <br />
                        social media accounts!
                    </p>
                    <div className="flex gap-1 pt-4 text-[#fff] text-[30px]">
                        <span className="bg-[#0e76a8] px-2 rounded-md hover:bg-[#1e86b8]">
                            <a
                                className=""
                                href="https://www.linkedin.com/company/upschool.co/"
                                target="_blank"
                            >
                                <span className="hidden">Linkedin</span>
                                <i className="fa fa-linkedin-square"></i>
                            </a>
                        </span>
                        <span className="bg-[#C13584] px-2 rounded-md hover:bg-[#D14594]">
                            <a
                                className=""
                                href="https://www.instagram.com/upschoolofficial/"
                                target="_blank"
                            >
                                <span className="hidden">Instagram</span>
                                <i className="fa fa-instagram"></i>
                            </a>
                        </span>
                        <span className="bg-[#405DE6] px-2 rounded-md hover:bg-[#506df6]">
                            <a
                                className=""
                                href="https://www.facebook.com/Upschool.co"
                                target="_blank"
                            >
                                <span className="hidden">Facebook</span>
                                <i className="fa fa-facebook-square"></i>
                            </a>
                        </span>
                        <span className="bg-[#EE0000] px-2  rounded-md hover:bg-[#FF0000]">
                            <a
                                className=""
                                href="https://www.youtube.com/channel/UC5kweQ5J5eOl30WrjXfO1IA/videos"
                                target="_blank"
                            >
                                <span className="hidden">Youtube</span>
                                <i className="fa fa-youtube-square"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
