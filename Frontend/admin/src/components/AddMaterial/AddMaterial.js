import { useState } from "react";
import axios from "axios";
import { AiFillCloseCircle } from "react-icons/ai";

function UploadMaterial() {
  const [course, setCourse] = useState("React");
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  function handleCourseChange(event) {
    setCourse(event.target.value);
  }

  function handleFileChange(event) {
    const fileList = Array.from(event.target.files);
    setFiles([...files, ...fileList]);
    event.target.value = null;
  }

  function handleFileDelete(index) {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (files.length === 0) {
      setError("Please select at least one file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("courseType", course);

    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
    }

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/user/addstudymaterial`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
      setFiles([]);
      setError(null);
      event.target.reset();
    } catch (error) {
      console.error(error);
      setError("Failed to upload file(s)");
    }
  }

  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-mont font-bold mb-4">Add Material</h2>
      {success && (
        <p className="text-red-500 mb-4">File uploaded successfully</p>
      )}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <label htmlFor="courseType" className="font-mont text-18">
            Select a course:
          </label>
          <select
            id="courseType"
            value={course}
            onChange={handleCourseChange}
            className="outline-none border shadow-sm rounded py-2 px-2 max-w-330 focus:shadow-outline"
          >
            <option value="">Select a course</option>
            <option value="Passenger Ground Services">
              Passenger Ground Services
            </option>
            <option value="Personality Devlopement & Communication">
              Personality Devlopement & Communication
            </option>
            <option value="Professional Ethics and Code of Conduct">
              Professional Ethics and Code of Conduct
            </option>
            <option value="Organizational Behaviour">
              Organizational Behaviour
            </option>
            <option value="Customer Service">Customer Service</option>
          </select>
        </div>
        <div className="flex flex-col gap-5">
          <span className="font-mont">Select files to upload:</span>
          <input
            type="file"
            id="studyMaterial"
            accept="application/pdf"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
          <div className="flex gap-5">
            <span className="border-1 text-gray-700 rounded-l-0.2rem outline-none shadow-md font-open w-250 flex items-center px-3 text-sm">
              {files.length > 0 ? `${files.length}` : "Choose files to upload"}
            </span>
            <label
              htmlFor="studyMaterial"
              className="bg-gradient-to-r text-center from-gray-700 to-gray-900 px-4 font-mont rounded-r-0.2rem cursor-pointer text-white font-bold w-40 h-10 flex justify-center items-center"
            >
              {files.length > 0 ? "Add more" : "Add file"}
            </label>
          </div>
          {files.length > 0 && (
            <div className="mt-3 border rounded-lg p-3">
              <h3 className="text-lg font-bold mb-2">Selected files:</h3>
              <ul className="flex flex-col gap-[10px]">
                {files.map((file) => (
                  <div className="flex items-center gap-[10px]">
                    <span
                      onClick={handleFileDelete}
                      className="ml-2 cursor-pointer text-red-500"
                    >
                      <AiFillCloseCircle />
                    </span>
                    <span key={file.name} className="text-sm">
                      {file.name}
                    </span>
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="bg-gradient-to-r from-gray-700 to-gray-900 font-mont w-40 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadMaterial;
