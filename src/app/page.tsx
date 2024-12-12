import Announcements from "@/components/Announcements"
import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CountChart"
import EventCalendar from "@/components/EventCalendar"
import FinanceChart from "@/components/FinanaceChart"
import UserCard from "@/components/UserCard"
// this would be the school's homepage

const AdminPage =()=>{
    return <div
    className="p-4 flex gap-4 flex-col md:flex-row"
    >
        {/* the left */}
        <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* user cards */}
        <div className="flex gap-4 justify-between flex-wrap">
            <UserCard type = "student"/>
            <UserCard type = "teacher"/>
            <UserCard type = "admin"/>
            <UserCard type = "parent"/>
        </div>
        {/* middle charts */}
        <div className=" flex gap-4 flex-col lg:flex-row">
            {/* count chart */}
            <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart/>
            </div>
            {/* attendance chart */}
            <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart/></div>
        </div>
        {/* bottom charts */}
        <div className="w-full h-[500px]">
            <FinanceChart/>
        </div>
        </div>
        {/* the right */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar/>
        <Announcements/>
        </div>
    </div>
}
export default AdminPage
