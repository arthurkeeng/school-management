

"use client"

import Image from "next/image"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
    {
        name :'Mon',
        present : 40,
        absent : 35, 
 },
    {
        name :'Tue',
        present : 70,
        absent : 30, 
 },
    {
        name :'Wed',
        present : 20,
        absent : 60, 
 },
    {
        name :'Thu',
        present : 55,
        absent : 30, 
 },
    {
        name :'Fri',
        present : 85,
        absent : 40, 
 },

]
const AttendanceChart = () =>{
    return <div className=" bg-white rounded-lg p-4 h-full">
        <div className="flex justify-between items-center" >
            <h1 className="text-lg font-semibold">
              Attendance  </h1>
          <Image src="/moreDark.png" alt="" width={20} height={20}/>    
        </div>
        <ResponsiveContainer width="100%" height="90%">
            <BarChart 
            width={500}
            height={300}
            data={data}
           barSize={20}
            >
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd" vertical = {false}/>
                <XAxis dataKey="name" tickLine = {false} axisLine = {false}/>
                <YAxis axisLine = {false}/>
                <Tooltip/>
                <Legend align="left" verticalAlign="top"
                wrapperStyle={{
                    paddingTop : "20px" ,
                    paddingBottom : "40px"
                }}
                />
                <Bar 
                dataKey="absent"
                fill="#fae27c"
                legendType="circle"
                radius={[10 , 10 , 0 , 0]}
                />
                <Bar 
                dataKey="present"
                fill="#c3ebfa"
                legendType="circle"
                radius={[10 , 10 , 0 , 0]}
                />
                




            </BarChart>
        </ResponsiveContainer>
    </div>
}

export default AttendanceChart