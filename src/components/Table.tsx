

const Table = ({columns,renderRow, data} : {columns : {header : string , accessor : string}[];
    renderRow : (item : any)=> React.ReactNode ; data : any[]
}) =>{
  console.log("the data is " , data);
    
    return  <table className="w-full mt-4">
    <thead>
      <tr className="text-left text-gray-500 text-sm">
        {columns.map((col) => (
          <th key={col.accessor} >{col.header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
        {data.map((item) => renderRow(item))}
        </tbody>
  </table>
}

export default Table