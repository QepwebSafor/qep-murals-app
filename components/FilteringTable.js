import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';

function FilteringTable({ columns, data }) {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
   
      <div>
        <table className=" bg-zinc-900 mx-auto ">
       
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <style jsx>{`
        table tbody tr:hover {
          background-color: #2d2d2d;
          
        }
      `}</style>
        </table>
      </div>
   
  );
}
export default FilteringTable;