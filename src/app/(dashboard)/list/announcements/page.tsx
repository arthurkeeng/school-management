import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import {
  announcementsData,
  role,

} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Announcemnet = {
  id: number,
    title: string,
    class: string,
    date: string,
};

const columns = [
  {
    header: "Announcement Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },

  {
    header: "Actions",
    accessor: "action",
  },
];

const AnnouncementList = () => {
  const renderRow = (item: Announcemnet) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>

      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
          <>
           <FormModal table="announcement" type="update" data={item}/>
           <FormModal table="announcement" type="delete" id = {item.id}/>
          </>
        
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Announcement </h1>
        <div
          className="flex flex-col md:flex-row items-center gap-4
           w-full md:w-auto"
        >
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-oskyyellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-oskyyellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && ( <FormModal table="announcement" type="create"/>

            )}
          </div>
        </div>
      </div>
      {/* list */}
      <div className=""></div>
      {/* pagination */}
      <div className="">
        <Table columns={columns} renderRow={renderRow} data={announcementsData} />
        <Pagination />
      </div>
    </div>
  );
};

export default AnnouncementList;