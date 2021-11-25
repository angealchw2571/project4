import React from 'react'
import axios from "axios";
import { useAtom } from "jotai";
import { userSessionAtom } from "./Login";
import { ToastContainer, toast } from "react-toastify";
require("dotenv").config();

function CreateNewProfile() {
  const sessionData = useAtom(userSessionAtom)[0];
  const URI = process.env.REACT_APP_URI
  
    const notify = () =>
    toast.success("Success! Please relogin to see your changes!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    const axiosConfig = {
        headers: {
           Authorization: "Bearer " + sessionData.token.access,
        },
        baseURL: URI,

     }
    const handleApi = async (newData) => {
        await axios.post(`/api/profiles/`, newData, axiosConfig).then((res)=> {
          notify();
        })
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
          name: event.target.name.value,
          height: event.target.height.value,
          weight: event.target.weight.value,
          displayPicture: event.target.displayPicture.value,
          language: [event.target.language.value],
          gender: event.target.gender.value,
          contact: event.target.contact.value,
          personalStatement: event.target.personalStatement.value,
          hairColor: event.target.hairColor.value,
          eyeColor: event.target.eyeColor.value,
          accents: [event.target.accents.value],
          skills: [event.target.skills.value],
          playAgeMin: event.target.playAgeMin.value,
          playAgeMax: event.target.playAgeMax.value,
          links: event.target.links.value,
          education: event.target.education.value,
          username: sessionData.username,
          email: sessionData.email,
          accountLinked: sessionData.id
        };
        handleApi(formData)
      };


    return (
        <>
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
        <div className="grid grid-cols-1  text-white justify-items-center">
      <form
        className="grid-cols-12 col-span-1 flex gap-4 text-white max-w-lg"
        onSubmit={handleSubmit}
      >
        <div className="firstDiv col-span-4 ">
          <div className="flex flex-wrap max-w-md">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-white text-xs font-bold mb-2">
                Name
              </label>
              <input
                name="name"
                className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Full Name"
              />
            </div>
            <div className="relative w-full mb-3">
              <label className="block uppercase text-white text-xs font-bold mb-2">
                Height (cm)
              </label>
              <input
                name="height"
                type="number"
                min="1"
                className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Height"
              />
            </div>
            <div className="relative w-full mb-3">
              <label className="block uppercase text-white text-xs font-bold mb-2">
                Weight (kg) (optional)
              </label>
              <input
                name="weight"
                type="number"
                min="1"
                className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Weight"
              />
            </div>
            <div className="relative w-full mb-3">
              <label className="block uppercase text-white text-xs font-bold mb-2">
                Display Picture
              </label>
              <input
                name="displayPicture"
                className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Display Picture (url)"
              />
            </div>
            <div className="relative w-full mb-3">
              <label className="block uppercase text-white text-xs font-bold mb-2">
                Language
              </label>
              <select
                name="language"
                className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
              >
                <option value="English">English</option>
                <option value="Mandarin">Mandarin</option>
                <option value="Malay">Malay</option>
                <option value="Tamil">Tamil</option>
              </select>
            </div>
            <div className="relative w-full mb-3">
              <label className="block uppercase text-white text-xs font-bold mb-2">
                Gender
              </label>
              <select
                name="gender"
                className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="relative w-full mb-3">
              <label className="block uppercase text-white text-xs font-bold mb-2">
                Contact Email
              </label>
              <input
                name="contact"
                className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Contact Email"
              />
            </div>
            <div className="relative w-full mb-3">
              <label className="block uppercase text-white text-xs font-bold mb-2">
                Personal Statement
              </label>
              <input
                name="personalStatement"
                className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Personal Statement"
              />
            </div>

            <div className="text-center mt-6">
              <button
                className="bg-gold-light text-gray-800 active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                type="submit"
                style={{ transition: "all .15s ease" }}
              >
                Create new profile
              </button>
            </div>
          </div>
        </div>
        <div className="secondDiv col-span-4">
          <div className="flex flex-wrap max-w-md">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-white text-xs font-bold mb-2">
                Hair Color
              </label>
              <input
                name="hairColor"
                className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Hair Color"
              />
            </div>
            <div className="relative w-full mb-3">
              <label className="block uppercase text-white text-xs font-bold mb-2">
                Eye Color
              </label>
              <input
                name="eyeColor"
                className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Eye Color"
              />
            </div>
            <div className="relative w-full mb-3">
              <label className="block uppercase text-white text-xs font-bold mb-2">
                Accents
              </label>
              <input
                name="accents"
                className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Accents"
              />
            </div>
            <div className="relative w-full mb-3">
              <label className="block uppercase text-white text-xs font-bold mb-2">
                Skills
              </label>
              <input
                name="skills"
                className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Skills"
              />
            </div>
            <div className="relative w-full mb-3">
              <label className="block uppercase text-white text-xs font-bold mb-2">
                Playing Age Min
              </label>
              <input
                name="playAgeMin"
                type="number"
                min="1"
                className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Playing Age Minimum"
              />
            </div>
            <div className="relative w-full mb-3">
              <label className="block uppercase text-white text-xs font-bold mb-2">
                Playing Age Max
              </label>
              <input
                name="playAgeMax"
                type="number"
                max="120"
                className="border-0 px-3 py-3 placeholder-white text-white bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Playing Age Maximum"
              />
            </div>
          </div>
        <div className="flex flex-wrap max-w-md">
          <div className="relative w-full mb-3">
            <label className="block uppercase text-white text-xs font-bold mb-2">
              Showreel
            </label>
            <input
              name="links"
              className="border-0 px-3 py-3 placeholder-white text-gray-100 bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Showreel Link"
            />
          </div>
        </div>
        <div className="flex flex-wrap max-w-md">
          <div className="relative w-full mb-3">
            <label className="block uppercase text-white text-xs font-bold mb-2">
              Education
            </label>
            <input
              name="education"
              className="border-0 px-3 py-3 placeholder-white text-gray-100 bg-gray-400 rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Education"
            />
          </div>
        </div>
        </div>
      </form>
    </div>
        </>
    )
}

export default CreateNewProfile
