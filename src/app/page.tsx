
import Link from "next/link";

const HomePage =()=>{
    return <div
    className="p-4 flex gap-4 flex-col md:flex-row"
    >
       <div className="p-6 space-y-4">
      This would have the school's default homepage
    </div>
        <Link  href = "/admin">
            <button>Click here for more
            </button>
        </Link>
    </div>
}
export default HomePage
