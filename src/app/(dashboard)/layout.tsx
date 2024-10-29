import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
// import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";

export const metadata: Metadata = {
  title: "School Management Dashboard",
  description: "Designed by Omeenee",
};

async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className = "h-screen flex">
        <div className=" w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 ">
          <Link href = "/"
            className="flex items-center justify-center lg:justify-start gap-2"
        >
        <Image src="/logo.png"alt="logo" width={32} height={32}/>
        <span className="hidden lg:block font-bold"> Bridgin Gaps </span>
        </Link>
        <Menu/>
        </div>
        <div className="flex flex-col w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] ">
        <Navbar/>
        {children}
          </div>
       
      </div>

  );
}

export default DashboardLayout