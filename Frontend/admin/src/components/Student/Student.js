import React, { useState } from "react";
import axios from "axios";
import { AiFillCloseCircle } from "react-icons/ai";

function Student() {
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState([]);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [Certified, setCertified] = useState("");
  const [address, setAddress] = useState("");
  const [courseFee, setCourseFee] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [courseStartDate, setCourseStartDate] = useState("");
  const [courseEndDate, setCourseEndDate] = useState("");
  const [studentPhoto, setStudentPhoto] = useState(null);
  const [imageName, setImageName] = useState("Choose files to upload");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleQualificationChange = (event) => {
    setQualification(event.target.value);
  };

  const handleCertifiedChange = (event) => {
    setCertified(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCourseFeeChange = (event) => {
    setCourseFee(event.target.value);
  };

  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value);
  };

  const handleCourseStartDateChange = (event) => {
    setCourseStartDate(event.target.value);
  };

  const handleCourseEndDateChange = (event) => {
    setCourseEndDate(event.target.value);
  };

  const handleStudentPhotoChange = (event) => {
    const file = event.target.files[0];
    const maxSize = 1024 * 1024 * 1.5; // 1.5 MB
    if (!file) {
      alert("Please select an image!");
      return;
    }
    if (file.size > maxSize) {
      alert("File is too large! Maximum size is 1.5MB.");
      return;
    }
    setStudentPhoto(file);
    setImageName(file.name);
    event.target.value = null;
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("course", course);
    formData.append("image", studentPhoto);
    formData.append("mobile", contactNumber);
    formData.append("email", email);
    formData.append("qualification", qualification);
    formData.append("certified", Certified);
    formData.append("address", address);
    formData.append("coursefee", courseFee);
    formData.append("paymenttype", paymentType);
    formData.append("coursestart", courseStartDate);
    formData.append("courseend", courseEndDate);
    try {
      axios
        .post(`${process.env.REACT_APP_API_URL}/api/user/createuser`, formData)
        .then((res) => {
          setSuccess(res.data);
          setTimeout(() => {
            setSuccess("");
          }, 3000);
          setName("");
          setCourse("");
          setContactNumber("");
          setEmail("");
          setQualification("");
          setCertified("");
          setAddress("");
          setCourseFee("");
          setPaymentType("");
          setCourseEndDate("");
          setCourseStartDate("");
          setImageName("Choose files to upload");
          setStudentPhoto(null);
        })
        .catch((res) => {
          setError(res.response.data);
          setTimeout(() => {
            setError("");
          }, 3000);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6 flex flex-col gap-[60px]">
      <div className="flex flex-col">
        <h className="font-mont font-bold text-[18px] md:text-[22px]">
          Enter the student details
        </h>
        <div className="border-b-[2px] w-[150px] "></div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 ">
        <div className="flex flex-col gap-[20px] w-full">
          <div className="flex flex-col md:flex-row  md:items-center gap-[5px] md:gap-0">
            <label htmlFor="name" className="w-full text-gray-800 font-mont">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="w-full border border-gray-300 rounded-[0.2rem] shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-col md:flex-row  md:items-center gap-[5px]">
            <label htmlFor="course" className="w-full  text-gray-800 font-mont">
              Course:
            </label>
            <select
              id="course"
              value={course}
              onChange={handleCourseChange}
              className="w-full border font-open tracking-wide border-gray-300 rounded-[0.2rem] shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

          <div className="flex flex-col md:flex-row  md:items-center gap-[5px]">
            <label
              htmlFor="contactNumber"
              className="w-full  text-gray-800 font-mont"
            >
              Contact Number:
            </label>
            <input
              type="tel"
              id="contactNumber"
              value={contactNumber}
              onChange={handleContactNumberChange}
              className="w-full border border-gray-300 rounded-[0.2rem] shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-col md:flex-row  md:items-center gap-[5px]">
            <label htmlFor="email" className="w-full  text-gray-800 font-mont">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full border border-gray-300 rounded-[0.2rem] shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-col md:flex-row  md:items-center gap-[5px]">
            <label
              htmlFor="qualification"
              className="w-full  text-gray-800 font-mont"
            >
              Qualification:
            </label>
            <input
              type="text"
              id="qualification"
              value={qualification}
              onChange={handleQualificationChange}
              className="w-full border border-gray-300 rounded-[0.2rem] shadow-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-col md:flex-row  md:items-center ">
            <label
              htmlFor="certified"
              className="w-full  text-gray-800 font-mont"
            >
              Certified if any:
            </label>
            <input
              type="text"
              id="certified"
              onChange={handleCertifiedChange}
              className="w-full rounded-[0.2rem] shadow-md h-[60px] border-[1px] border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-col md:flex-row  md:items-center gap-[5px]">
            <label
              htmlFor="address"
              className="w-full  text-gray-800 font-mont"
            >
              Address:
            </label>
            <textarea
              id="address"
              value={address}
              onChange={handleAddressChange}
              className="w-full rounded-[0.2rem] shadow-md border-[1px] h-[80px] border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] w-full">
          <div className="flex flex-col md:flex-row  md:items-center gap-[5px]">
            <label
              htmlFor="courseFee"
              className="w-full  text-gray-800 font-mont"
            >
              Course Fee:
            </label>
            <input
              type="text"
              id="courseFee"
              value={courseFee}
              onChange={handleCourseFeeChange}
              className="w-full rounded-[0.2rem] shadow-md border-[1px] border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-col md:flex-row  md:items-center gap-[5px]">
            <label
              htmlFor="paymentType"
              className="w-full   text-gray-800 font-mont"
            >
              Payment Type:
            </label>
            <select
              id="paymentType"
              value={paymentType}
              onChange={handlePaymentTypeChange}
              className="w-full rounded-[0.2rem] font-open tracking-wide shadow-md border-[1px] border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select a payment type</option>
              <option value="Installment 1">Installment 1</option>
              <option value="Installment 2">Installment 2</option>
              <option value="Installment 3">Installment 3</option>
            </select>
          </div>
          <div className="flex flex-col md:flex-row  md:items-center gap-[5px]">
            <label
              htmlFor="courseStartDate"
              className="w-full  text-gray-800 font-mont"
            >
              Course Start Date:
            </label>
            <input
              type="date"
              id="courseStartDate"
              value={courseStartDate}
              onChange={handleCourseStartDateChange}
              className="w-full rounded-[0.2rem] shadow-md border-[1px] border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-col md:flex-row  md:items-center gap-[5px]">
            <label
              htmlFor="courseEndDate"
              className="w-full text-gray-800 font-mont"
            >
              Course End Date:
            </label>
            <input
              type="date"
              id="courseEndDate"
              value={courseEndDate}
              onChange={handleCourseEndDateChange}
              className="w-full rounded-[0.2rem] shadow-md border-[1px] border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-col md:flex-row  md:items-center gap-[5px]">
            <label
              htmlFor="studentPhoto"
              className="w-full  text-gray-800 font-mont"
            >
              Student Photo:
            </label>
            <input
              type="file"
              id="studentPhoto"
              accept="image/*"
              onChange={handleStudentPhotoChange}
              className="hidden"
            />
            <div className="w-full flex flex-col">
              <span className="border-[1px] px-[20px] py-[10px] font-open rounded-t-[1px]">
                {imageName}
              </span>
              <label
                htmlFor="studentPhoto"
                className="bg-gradient-to-r from-gray-700 to-gray-900 text-white font-mont flex justify-center cursor-pointer"
              >
                Choose File
              </label>
            </div>
          </div>
          {studentPhoto && (
            <div className="flex justify-start max-w-[180px]  relative  py-[20px]">
              <img
                src={URL.createObjectURL(studentPhoto)}
                alt=""
                className="h-[150px] w-[150px] object-cover"
              />
              <span
                onClick={() => {
                  setImageName("Choose files to upload");
                  setStudentPhoto(null);
                }}
                className="absolute text-[20px] cursor-pointer top-0 right-2 "
              >
                <AiFillCloseCircle />
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-[10px] justify-center items-center">
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-gray-700 to-gray-900 w-[200px] justify-center py-[8px] font-mont font-bold flex text-white"
        >
          Submit
        </button>
        <div className="text-[14px] font-roboto text-[red]">{success}</div>
        <div className="text-[14px] font-roboto text-[red]">{error}</div>
      </div>
    </div>
  );
}

export default Student;
