/* eslint-disable react/no-unknown-property */
import React from "react";
import * as Yup from "yup";

import { Formik } from "formik";
const ContactPage = () => {
  return (
    <div className="max-w-screen-xl bg-gray-900  rounded-md mt-5 px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white sm:text-3xl">
          Get In Touch With Us
        </h2>
        <p className=" mx-auto text-sm mt-4 text-gray-500 text-center justify-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nam
          pariatur ipsum neque consectetur cumque deserunt expedita illum Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Sunt eius omnis,
          veritatis quos ut minus maxime deleniti error, quas quidem corrupti
          laborum dicta nobis quis.
        </p>
      </div>
      <Formik
        initialValues={{
          Name: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={Yup.object({
          Name: Yup.string()
            .required("First name is required.")
            .trim()
            .max(55, "First name must be at max 55 characters."),

          email: Yup.string()
            .email("Must be  valid email.")
            .required("Email is required.")
            .trim()
            .lowercase()
            .max(55, "Email must be at max 55 characters."),
          phone: Yup.string().max(
            10,
            "Phone number must be at max 10 characters"
          ),

          message: Yup.string().required("Message is required."),
        })}
        onSubmit={(data, { setSubmitting }) => {
          // make api request to backend server
          fetch("/send/message", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Success:", data);
            })
            .catch((error) => {
              console.error("Error:", error);
              setSubmitting(false);
            });
        }}
      >
        {({ handleSubmit, getFieldProps, setFieldValue, errors, touched }) => (
          <form
            className="w-full  mx-auto bg-[#1C2534] rounded-md p-10"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-400 text-[14px]  font-bold mb-2"
                  htmlFor="grid-full-name"
                  error={!!touched.fullName && !!errors.fullName}
                  helperText={errors.fullName}
                  {...getFieldProps("fullName")}
                >
                  Full Name
                </label>
                <input
                  className="appearance-none block w-full bg-[#2C3444] text-white border-none rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#2C3444]"
                  id="grid-full-name"
                  type="text"
                  placeholder="Enter your full name"
                  {...getFieldProps("Name")}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-2 mt-1">
                <label
                  className="block uppercase tracking-wide text-gray-400 text-[14px] text-xs font-bold mb-2"
                  htmlFor="grid-email-address"
                  error={!!touched.email && !!errors.email}
                  helperText={errors.email}
                  {...getFieldProps("email")}
                >
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full bg-[#2C3444] text-white border-none rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-[#2C3444]"
                  id="grid-email-address"
                  type="text"
                  placeholder="Enter your email"
                  {...getFieldProps("email")}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-400 text-[14px] text-xs font-bold mb-2"
                  htmlFor="grid-Phone-number"
                  error={!!touched.phone && !!errors.phone}
                  helperText={errors.phone}
                  {...getFieldProps("phone")}
                >
                  Phone Number
                </label>
                <input
                  className="appearance-none block w-full bg-[#2C3444] text-white border-none rounded-md  py-3 px-4 leading-tight focus:outline-none focus:bg-[#2C3444]"
                  id="grid-phone-number"
                  type="text"
                  placeholder="+977........"
                  {...getFieldProps("phone")}
                />
              </div>

              <div className="w-full md:w-1/2 px-3 mt-1">
                <label
                  htmlFor="get-in-touch"
                  className="block  text-sm font-medium uppercase text-gray-400 text-[14px] w-full "
                  error={!!touched.get_in_touch && !!errors.get_in_touch}
                  helperText={errors.get_in_touch}
                  {...getFieldProps("get_in_touch")}
                >
                  Get In Touch With Us
                </label>
                <select
                  id="get-in-touch"
                  className="h-11  border-none bg-[#2C3444] text-gray-400 text-base rounded-md block w-full py-2.5 px-4  focus:outline-none focus:bg-[#2C3444]"
                  {...getFieldProps("get_in_touch")}
                >
                  <option selected>Email</option>
                  <option value="Facebook">Facebook</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Github">Github</option>
                  <option value="Viber">Viber</option>
                  <option value="Telegram">Telegram</option>
                </select>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-400 text-[14px]  font-bold mb-2"
                  htmlFor="grid-message"
                  error={!!touched.message && !!errors.message}
                  helperText={errors.message}
                  {...getFieldProps("message")}
                >
                  Message
                </label>
                <textarea
                  className="appearance-none block w-full bg-[#2C3444] text-white border-none rounded-md  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#2C3444]"
                  id="message"
                  type="text"
                  placeholder="Hi! We are Lookscout..."
                  {...getFieldProps("message")}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="flex items-center mb-4 ml-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  {...getFieldProps("default-checkbox")}
                ></input>
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-medium text-gray-400"
                  {...getFieldProps("default-checkbox")}
                >
                  I agree with Lookscout Privacy Policy
                </label>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2 mt-6">
              <div className="w-full px-3">
                <button
                  className="block w-[120px] bg-[#437EF7] text-white border-none rounded-md  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-[#2C3444]"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactPage;
