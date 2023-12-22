
// user type page
const UserType = () => {
    return (
        <div className="w-[100%] pb-28 bg-[#E7E7E7]">
            <h2 className="text-center text-3xl lg:text-5xl py-16 font-extrabold text-gray-500 p-4">Lets talk about what type of users <br /> can use this platform !</h2>
            <div className="bg-white w-[90%] lg:w-[60%] mx-auto p-12 rounded-2xl shadow-xl">
                <div className="w-[100%] mx-auto flex flex-col gap-4">
                    <div className="collapse bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            Doctors can use this website.benefits tailored to Doctor profession.
                        </div>
                        <div className="collapse-content">
                            <p className="pb-2"> <span className="font-bold">Patient Management:</span> Efficiently organize patient appointments, medical histories, prescriptions, and follow-ups.</p>
                            <p> <span className="font-bold">Collaborative Care: </span> Facilitate seamless communication among healthcare teams for coordinated patient care.</p>
                        </div>
                    </div>
                    <div className="collapse bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            developers can use this website.benefits tailored to developers profession.
                        </div>
                        <div className="collapse-content">
                            <p className="pb-2"> <span className="font-bold">Code Repository: </span> Store, manage, and collaborate on codebases, ensuring version control and team collaboration.</p>
                            <p> <span className="font-bold">Project Tracking:</span> Manage multiple projects, tasks, and deadlines in one centralized location.</p>
                        </div>
                    </div>
                    <div className="collapse bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            Corporate Professionals can use this website.benefits tailored to Corporate Professionals profession.
                        </div>
                        <div className="collapse-content">
                            <p className="pb-2"> <span className="font-bold">Code Repository: </span>
                                Task & Project Management: Streamline workflows, assign tasks, and track project progress in real-time.
                                Team Collaboration: Foster collaboration across departments with chat, file sharing, and collaboration tools.
                                Performance Analytics: Gain insights into team performance, project timelines, and resource allocation for data-driven decision-making.

                            </p>
                        </div>
                    </div>
                    <div className="collapse bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            Bankers Professionals can use this website.benefits tailored to Bankers profession.
                        </div>
                        <div className="collapse-content">
                            <p className="pb-2"> <span className="font-bold">Client Relationship Management (CRM): </span>
                                Manage client interactions, account details, and financial portfolios with ease.
                                Transaction Tracking: Monitor and track financial transactions, approvals, and compliance requirements.
                                Market Insights: Access to real-time market data, financial news, and analytics for informed decision-making.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserType;