import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";

function UploadCertificate() {
  const [success, setSuccess] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [files, setFiles] = useState([]);

  const handleStudentIdChange = (event) => {
    setStudentId(event.target.value);
  };

  function handleFileChange(event) {
    const fileList = Array.from(event.target.files);
    setFiles([...files, ...fileList]);
    event.target.value = null;
  }

  const handleFileCancel = (fileId) => {
    setFiles(files.filter((file) => file.id !== fileId));
  };
  function handleFileDelete(index) {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("studentid", studentId);
    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
    }

    try {
      await axios
        .post(
          `${process.env.REACT_APP_API_URL}/api/user/addcertificate`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          setSuccess(res.data.message);
          setTimeout(() => {
            setSuccess("");
          }, 3000);
          setStudentId("");
          setFiles([]);
          event.target.reset();
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-[30px] p-6">
      <div>
        <h1 className="text-3xl font-bold font-mont">Upload Certificate</h1>
        {success && <span className="text-red-500 mb-4">{success}</span>}
      </div>
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <label
              className="block text-gray-700 font-mont"
              htmlFor="student-id"
            >
              Student ID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="student-id"
              type="text"
              placeholder="Enter Student ID"
              value={studentId}
              onChange={handleStudentIdChange}
              required
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <label
              className="block text-gray-700 font-mont"
              htmlFor="certificate-file"
            >
              Certificate File
            </label>
            <input
              className="hidden"
              id="certificate-file"
              type="file"
              accept="application/pdf"
              multiple
              onChange={handleFileChange}
            />
            <div className="flex items-center justify-center">
              <label
                className="bg-gradient-to-r cursor-pointer from-gray-700 to-gray-900 text-white font-bold font-mont w-[120px] py-2 px-4 rounded-[.1rem] focus:outline-none focus:shadow-outline"
                type="button"
                htmlFor="certificate-file"
              >
                {files.length > 0 ? "Add More" : "Select File"}
              </label>
              {files.length > 0 && (
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold font-mont py-2 px-4 rounded-[.1rem] ml-4 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={() => handleFileCancel(files.id)}
                >
                  Cancel All
                </button>
              )}
            </div>
            {files.length > 0 && (
              <div className="py-[20px]">
                <ul className="flex flex-col gap-[10px]">
                  {files.map((file) => (
                    <li
                      key={file.id}
                      className="flex items-center justify-between"
                    >
                      <span className="font-mont text-gray-700">
                        {file.name}
                      </span>
                      <button
                        className="text-[red] font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline text-[22px]"
                        type="button"
                        onClick={handleFileDelete}
                      >
                        <AiFillCloseCircle />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {files.length > 0 && (
            <div className="flex ">
              <button
                className="bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold font-mont py-2 px-4 rounded focus:outline-none w-[120px] focus:shadow-outline"
                type="submit"
              >
                Upload
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default UploadCertificate;
