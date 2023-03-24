//Blog
export const ViewBlogData = [
  {
    Header: "SI.",
    Footer: "SI.",
    accessor: (row, i) => <>{i + 1}</>,
    width: 80,
  },
  {
    Header: "Title",
    Footer: "Title",
    accessor: "title",
    maxWidth: 400,
    minWidth: 220,
    width: 200,
  },
  {
    Header: "Description",
    Footer: "Description",
    accessor: (row) => (
      <div
        dangerouslySetInnerHTML={{ __html: row.content }}
        className="h-[100px] overflow-y-scroll"
      ></div>
    ),
    maxWidth: 400,
    minWidth: 400,
    width: 200,
  },
  {
    Header: "Image",
    Footer: "Image",
    accessor: (row) => (
      <img
        src={`data:image/*;base64,${btoa(
          new Uint8Array(row.image.data ? row.image.data.data : row).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        )}`}
        alt=""
        className="h-[100px] w-[150px]"
      />
    ),
    maxWidth: 400,
    minWidth: 180,
    width: 200,
  },
  {
    Header: "Status",
    Footer: "Status",
    accessor: (row) => <span>{row.status}</span>,
    maxWidth: 400,
    minWidth: 130,
    width: 130,
  },
];

//TestimonyData
export const ViewTestimonyData = [
  {
    Header: "SI.",
    Footer: "SI.",
    accessor: (row, i) => <span className="">{i + 1}</span>,
    width: 80,
  },
  {
    Header: "Full Name",
    Footer: "Full Name",
    accessor: (row) => <span className="uppercase">{row.name}</span>,
    maxWidth: 400,
    minWidth: 180,
    width: 200,
  },
  {
    Header: "Course",
    Footer: "Course",
    accessor: (row) => <span className="uppercase">{row.coursedetail}</span>,
    maxWidth: 400,
    minWidth: 180,
    width: 200,
  },
  {
    Header: "Placed At",
    Footer: "Placed At",
    accessor: (row) => <span className="uppercase ">{row.placed}</span>,
    maxWidth: 400,
    minWidth: 180,
    width: 200,
  },
  {
    Header: "Image",
    Footer: "Image",
    accessor: (row) => (
      <img
        src={`data:image/*;base64,${btoa(
          new Uint8Array(
            row.image ? (row.image.data ? row.image.data.data : "") : ""
          ).reduce((data, byte) => data + String.fromCharCode(byte), "")
        )}`}
        alt=""
        className="h-[140px] w-full"
      />
    ),
    maxWidth: 400,
    minWidth: 200,
    width: 200,
  },
  {
    Header: "Content",
    Footer: "Content",
    accessor: (row) => (
      <div
        dangerouslySetInnerHTML={{ __html: row.description }}
        className="h-[210px] overflow-scroll"
      ></div>
    ),
    maxWidth: 400,
    minWidth: 400,
    width: 200,
  },
  {
    Header: "Status",
    Footer: "Status",
    accessor: (row) => <span className="">{row.status}</span>,
    maxWidth: 400,
    minWidth: 110,
    width: 200,
  },
];

//StudentData
export const AllStudentData = [
  {
    Header: "SI",
    Footer: "SI",
    accessor: (row, key) => <div>{key + 1}</div>,
  },
  {
    Header: "Image",
    Footer: "Image",
    accessor: (row) => (
      <div>
        <img
          src={`data:image/*;base64,${btoa(
            new Uint8Array(row.image.data.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          )}`}
          alt=""
          className="h-[60px] w-[80px]"
        />
      </div>
    ),
    maxWidth: 400,
    minWidth: 130,
    width: 200,
  },
  {
    Header: "Full Name",
    Footer: "Full Name",
    accessor: (row) => <div className="uppercase text-[13px]">{row.name}</div>,
    maxWidth: 400,
    minWidth: 200,
    width: 200,
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "mobile",
    maxWidth: 400,
    minWidth: 130,
    width: 200,
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: (row) => <div className="lowercase">{row.email}</div>,
    maxWidth: 400,
    minWidth: 180,
    width: 200,
  },
  {
    Header: "Personal Status",
    Footer: "Personal Status",
    accessor: (row) => <span className="lowercase">{row.personalstatus}</span>,
    maxWidth: 400,
    minWidth: 170,
    width: 170,
  },
  {
    Header: "Plan",
    Footer: "Plan",
    accessor: "paymenttype",
    maxWidth: 400,
    minWidth: 150,
    width: 200,
  },
  {
    Header: "Created at",
    Footer: "Created at",
    accessor: (row) => <>{row.createdAt.slice(0,10)}</>,
    maxWidth: 400,
    minWidth: 130,
    width: 200,
  },
];

//Alladmindata
export const AllAdminData = [
  {
    Header: "SI",
    Footer: "SI",
    accessor: (row, key) => <div>{key + 1}</div>,
  },
  {
    Header: "Full Name",
    Footer: "Full Name",
    accessor: (row) => <div className="uppercase text-[13px]">{row.name}</div>,
    maxWidth: 400,
    minWidth: 200,
    width: 200,
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: (row)=><div className="lowercase">{row.mobile}</div>,
    maxWidth: 400,
    minWidth: 130,
    width: 200,
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: (row) => <div className="lowercase">{row.email}</div>,
    maxWidth: 400,
    minWidth: 180,
    width: 200,
  },
  {
    Header: "Type",
    Footer: "Type",
    accessor: (row) => <div className="lowercase">{row.superadmin}</div>,
    maxWidth: 400,
    minWidth: 180,
    width: 200,
  },
  {
    Header: "Created at",
    Footer: "Created at",
    accessor: (row) => <>{row.createdAt.slice(0,10)}</>,
    maxWidth: 400,
    minWidth: 130,
    width: 200,
  },
];

