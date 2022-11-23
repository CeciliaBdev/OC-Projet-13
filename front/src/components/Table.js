import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import datas_table from '../Datas/datas_table.json'
import { COLUMNS } from '../Datas/columns'

function Table() {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => datas_table, [])

  // 2 propriétés - columns and rows
  const tableInstance = useTable({
    columns,
    data,
  })

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance

  return (
    <table {...getTableProps()} className="w-[80vw] mx-auto  text-center">
      <thead>
        {headerGroups.map((headergroup) => (
          <tr {...headergroup.getHeaderGroupProps()}>
            {headergroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="border bg-[white] ">
        {rows.map((row) => {
          prepareRow(row)

          return (
            <tr {...row.getRowProps()} className="border">
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className="py-4 "
                    onClick={() => console.log(cell.row.original)}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
export default Table
