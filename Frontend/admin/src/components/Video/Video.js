import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { Formik, FieldArray } from "formik";

function AddVideo() {
  const [error, setError] = useState([]);
  const validationSchema = yup.object().shape({
    urls: yup.array().of(
      yup
        .string()
        .required("Video field is required")
        .matches(
          /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=\w{11}(?:&\S*)?/,
          "Invalid YouTube URL"
        )
    ),
    success: yup.boolean().oneOf([true], "Upload Failed"),
  });
  const [success, setSuccess] = React.useState(false);
  return (
    <div className="p-6 flex flex-col gap-[30px]">
      <div>
        <h className="font-bold font-mont text-[20px] text-center">
          Gallery Video Upload
        </h>
      </div>
      <Formik
        initialValues={{ urls: [""] }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await axios
              .post(
                `${process.env.REACT_APP_API_URL}/api/Gallery/createvideo`,
                {
                  videos: values.urls,
                }
              )
              .then(() => {
                setSuccess(true);
                setTimeout(() => {
                  setSuccess(false);
                }, 3000);
                resetForm({});
                setSubmitting(false);
              })
              .then(() => window.location.reload());
          } catch (error) {
            setError(error.response.data.message);
            setSubmitting(false);
          }
        }}
      >
        {({ handleSubmit, touched, values, errors }) => (
          <form onSubmit={handleSubmit} className=" flex flex-col gap-[20px]">
            <FieldArray
              name="urls"
              render={(arrayHelpers) => (
                <div className="flex flex-col gap-[10px]">
                  {values.urls.map((url, index) => (
                    <div
                      key={index}
                      className="flex flex-col lg:items-center sm:flex-row gap-[10px]"
                    >
                      <input
                        onChange={(event) =>
                          arrayHelpers.replace(index, event.target.value)
                        }
                        name={`urls.${index}`}
                        value={url}
                        type="text"
                        id={`video_${index}`}
                        placeholder="youtube video url"
                        className="outline-none border-[1px] font-open h-[50px] lg:w-[400px] px-[20px] rounded-[0.3rem] shadow-md"
                      />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                        className="bg-gray-300 rounded-md px-2 py-1 text-sm font-mont text-gray-600 hover:text-red-600 hover:bg-gray-400"
                      >
                        X
                      </button>
                    </div>
                  ))}
                  <div className="flex gap-[15px] flex-row items-start">
                    <button
                      type="button"
                      onClick={() => arrayHelpers.push("")}
                      className="bg-gradient-to-r w-[150px] from-gray-700 rounded-[0.2rem] font-bold py-2 to-gray-900 text-white font-mont "
                    >
                      Add More
                    </button>
                    <button type="submit" className="bg-gradient-to-r w-[150px] from-gray-700 to-gray-900  rounded-[0.2rem] font-bold py-2 text-white font-mont">Submit</button>
                  </div>
                </div>
              )}
            />
            {errors.urls && touched.urls && (
              <div className="text-[red] font-fair tracking-wider px-[10px] ">
                {errors.urls}
              </div>
            )}
            <div className="text-[red] text-[12px] px-[10px] ">{error}</div>
            {success && !errors.success && (
              <div className="text-[red] font-fair tracking-wider px-[10px] ">
                Upload Successful!!!
              </div>
            )}
          </form>
        )}
      </Formik>
    </div>
  );
}

export default AddVideo;
