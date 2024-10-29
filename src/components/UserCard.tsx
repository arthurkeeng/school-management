import Image from "next/image"

const UserCard =({type} : {type : string}) =>{
    return <div className="min-w-[130px] rounded-2xl odd:bg-oskypurple even:bg-oskyyellow p-4 flex-1">
        <div className=" flex justify-between items-center">
            <span className="text-10px bg-white px-2 py-1 rounded-full text-green-600">2024/25</span>
            <Image src="/more.png" alt="" width={20} height={20}/>
        </div>
            <h1 className="text-2xl font-semibold my-4">1,200</h1>
            <h1 className="capitalize text-sm font-medium text-gray-200">{type}s</h1>
    </div>
}

export default UserCard