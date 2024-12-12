
import Link from "next/link"
// this would be the school's homepage

const AdminPage =()=>{
    return <div
    className="p-4 gap-4 "
    >
        <div>This would be the school's default homepage</div>
        <Link href = "/admin" className = ""><button>
        Go to Admin
        </button></Link>
     
    </div>
}
export default AdminPage
