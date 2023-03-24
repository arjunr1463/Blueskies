import React, { useMemo, useState, useEffect } from "react";
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useSortBy,
  useRowSelect,
} from "react-table";
import { Checkbox } from "../CheckBox/CheckBox";
import axios from "axios";
import { AllAdminData } from "../Coloumn/Coloumn";
import GlobalFilter from "../GlobalFilter/GlobalFilter";
import { BsArrowDownUp } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function AllAdmin() {
  const { id } = useParams();
  const [Data, setData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const fetchData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/adminuser/getadminuser`
    );
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  const columns = useMemo(() => AllAdminData, []);
  const data = useMemo(() => {
    return Data.filter((row) =>
      row.name.toLowerCase().includes(globalFilter.toLowerCase())
    ).sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB - dateA;
    }).map((row) => {
      return {
        ...row,
        superadmin: row.issuperadmin ? "super admin" : "admin",
      };
    });
  }, [Data, globalFilter]);
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            Cell: ({ row }) => (
              <Checkbox
                {...row.getToggleRowSelectedProps()}
                className="flex items-center h-[15px] w-[15px]"
              />
            ),
          },
          ...columns,
        ];
      });
    }
  );

  const handleDelete = (deleteid) => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/api/adminuser/deleteadmin/${id}/${deleteid}`
      )
      .then((res) => {
        console.log(res);
        setData(data.filter((row) => row.id !== id));
        fetchData();
      });
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    setPageSize,
    footerGroups,
    pageCount,
    state,
  } = tableInstance;
  const { pageIndex, pageSize } = state;

  return (
    <motion.div
      className=""
      initial={{ y: -20, opacity: 0.1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col gap-[20px] p-6 overflow-x-scroll scroll">
        <h className="font-bold font-mont text-[18px] md:text-[22px] sticky left-0 tracking-wider ">
          All Admin
        </h>
        <div className="border-b-[2px] w-[150px] sticky left-0"></div>
        <div className="flex flex-col md:flex-row gap-[20px] justify-between sticky left-0">
          <div className="flex items-center gap-[10px]">
            <span>Show</span>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="outline-none border-[1px] w-[60px] h-[30px] text-center"
            >
              {[10, 25, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
            <span>Entries</span>
          </div>
          <div>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          </div>
        </div>
        <table {...getTableProps()} className="text-center text-[14px] ">
          <thead className="font-mont">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="">
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps([
                      column.getSortByToggleProps(),
                      {
                        style: {
                          minWidth: column.minWidth,
                          width: column.width,
                        },
                      },
                    ])}
                    className="py-[13px] bg-[white] border-[1px]"
                  >
                    <div className="flex items-center justify-center gap-[5px]">
                      <span> {column.render("Header")}</span>
                      <span className="text-[8px]">
                        <BsArrowDownUp />
                      </span>
                    </div>
                  </th>
                ))}
                <th className="border-[1px]">Action</th>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, id) => {
              prepareRow(row, id);
              return (
                <tr {...row.getRowProps()} className="table-row">
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps({
                          style: {
                            minWidth: cell.minWidth,
                            width: cell.width,
                            maxWidth: cell.maxWidth,
                          },
                        })}
                        className=" hover:text-[#4077B5] hover:duration-300 px-[20px] py-[15px] capitalize border-[1px]"
                      >
                        <span>{cell.render("Cell")}</span>
                      </td>
                    );
                  })}
                  <td className="border-[1px] relative">
                    <div className="flex flex-col gap-[10px]">
                      <div className="flex justify-center w-[200px]">
                        <span
                          onClick={() => handleDelete(row.original._id)}
                          className="text-[18px] text-[red] cursor-pointer"
                        >
                          <AiFillDelete />
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="font-mont ">
            {footerGroups.map((footerGroup) => (
              <tr {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map((column) => (
                  <td
                    {...column.getFooterProps}
                    className="font-semibold  px-[10px] py-[13px] bg-[white] border-[1px] "
                  >
                    <span>{column.render("Footer")}</span>
                  </td>
                ))}
                <th className="border-[1px]">Action</th>
              </tr>
            ))}
          </tfoot>
        </table>

        <div className="flex flex-col md:flex-row gap-[10px] md:gap-0 items-center justify-between sticky left-0">
          <div className="flex gap-[10px]">
            <span>Showing</span>
            <strong>
              {pageIndex + 1} <span className="font-normal">of</span>{" "}
              {pageOptions.length}
            </strong>
            <span>entries</span>
          </div>
          <div className="flex flex-row items-center gap-[10px]">
            <button
              className="font-semibold text-[20px]"
              onClick={() => gotoPage(0)}
            >
              {"<<"}
            </button>
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              className="bg-[black] w-[60px] h-[20px] rounded-[0.1rem] font-fair flex justify-center items-center text-[14px] font-semibold text-white"
            >
              PREV
            </button>
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className="bg-[black] w-[60px] h-[20px] rounded-[0.1rem] font-fair flex justify-center items-center text-[14px] font-semibold text-white"
            >
              NEXT
            </button>
            <button
              className="font-semibold text-[20px]"
              onClick={() => gotoPage(pageCount - 1)}
            >
              {">>"}
            </button>
          </div>
          <div>
            GoToPage:{""}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
              className="w-[50px] outline-none border-[1px] text-center"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AllAdmin;
