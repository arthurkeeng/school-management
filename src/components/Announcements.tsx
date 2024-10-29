

const Announcements = () => {
    return <div className="bg-white p-4 ">
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Announcements</h1>
            <span className="text-xs text-gray-400"> See all</span>
        </div>
        <div className="flex flex-col gap-4 mt-3">
        <div className="bg-oskylight rounded-md p-4">
            <div className="flex items-center justify-between">
                <h2 className="font-medium">Lorem ipsum sdjfosdio ewlfewo sdfle</h2>
                <span className="w-fit text-xs text-gray-400 bg-white">01 /01/ 25 </span>
            </div>
            <p className="text-gray-400 text-sm mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem earum, voluptate nesciunt </p>
        </div>
        <div className="bg-oskypurplelight rounded-md p-4">
            <div className="flex items-center justify-between">
                <h2 className="font-medium">Lorem ipsum sdjfosdio ewlfewo sdfle</h2>
                <span className="w-fit text-xs text-gray-400 bg-white">01 /01/ 25 </span>
            </div>
            <p className="text-gray-400 text-sm mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem earum, voluptate nesciunt </p>
        </div>

        </div>
        </div>
}

export default Announcements