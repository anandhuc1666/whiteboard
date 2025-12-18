import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

function Python() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "PYTHON",
    tittle: "",
    discription: "",
    episode: "",
  });
  const [video, setVideo] = useState(null);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const token = localStorage.getItem("token")

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5803/api/course/find_PYTHON",{
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        })
      setData(response.data.course);
      console.log(response.data.course)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(); 
  },[]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.name === "videoFile") {
      setVideo(e.target.files[0]);
    } else if (e.target.name === "thumbnail") {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!video || !image) {
      return Swal.fire(
        "Error",
        "Please select both video and thumbnail",
        "error"
      );
    }

    const formToSend = new FormData();
    formToSend.append("name", formData.name);
    formToSend.append("tittle", formData.tittle);
    formToSend.append("discription", formData.discription);
    formToSend.append("episode", formData.episode);
    formToSend.append("videoFile", video);
    formToSend.append("thumbnail", image);

    setUploading(true);
    try {
      const res = await axios.post(
        "http://localhost:5803/api/course/add-video",
        formToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      Swal.fire("Success", "Video Uploaded!", "success");
      console.log(res.data);
      await fetchData();

      // Reset form
      setFormData({
        name: "PYTHON",
        tittle: "",
        discription: "",
        episode: "",
      });
      setVideo(null);
      setImage(null);
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Upload failed", "error");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const confirm = await Swal.fire({
        title: "Are you sure?",
        text: "This video will be deleted permanently!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });

      if (!confirm.isConfirmed) return;

      await axios.delete(
        `http://localhost:5803/api/course/delete_GO?videoId=${id}`
      );

      Swal.fire("Deleted!", "The video has been removed.", "success");

      // Update UI without reload
      setData((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
      Swal.fire("Error", "Failed to delete", "error");
    }
  };

  return (
    <div className="w-[1150px] h-screen flex bg-white rounded-2xl p-3">
      <div className="flex gap-3">
        <div className="w-[200px] h-[200px] flex items-center justify-center">
          <img
            src="https://drive.google.com/thumbnail?id=1cQfwvc_gngwcC1XMVR-WxQ83EevFDIVb&sz=s800"
            alt=""
            className="w-[150px]"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full bg-white p-4 rounded-2xl shadow-xl flex flex-col gap-4"
        >
          <h2 className="text-3xl font-bold text-[#5F48D5] text-center mb-4">
            Upload Course Episode
          </h2>

          <input
            name="name"
            placeholder="Course Name (e.g. Python)"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />
          <input
            name="tittle"
            placeholder="Video Title"
            value={formData.tittle}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />
          <textarea
            name="discription"
            placeholder="Description"
            value={formData.discription}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />
          <input
            name="episode"
            type="number"
            placeholder="Episode Number"
            value={formData.episode}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            required
          />

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-600">
              Thumbnail Image:
            </label>
            <input
              type="file"
              name="thumbnail"
              accept="image/*"
              onChange={handleFileChange}
              className="border p-2 rounded-lg"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-600">Video File:</label>
            <input
              type="file"
              name="videoFile"
              accept="video/*"
              onChange={handleFileChange}
              className="border p-2 rounded-lg"
              required
            />
          </div>

          <button
            type="submit"
            disabled={uploading}
            className={`mt-4 py-3 text-white font-bold rounded-lg text-xl ${
              uploading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#5F48D5] hover:bg-[#4a3ab8]"
            }`}
          >
            {uploading ? "Uploading (Please Wait)..." : "Upload Video"}
          </button>
        </form>
      </div>

      <div className="w-full h-[640px] pl-2 overflow-auto">
        {Array.isArray(data) &&
          data.map((item, i) => (
            <div
              key={item._id || i}
              className="w-full h-[100px] bg-[#F8F8F8] mt-2 rounded-[5px] flex items-center gap-5 text-[20px] justify-between px-5 shadow-lg/20"
            >
              <div className="flex items-center gap-2.5">
                <img
                  src={item.img}
                  alt=""
                  className="w-[50px] rounded-[5px] drop-shadow-lg/50"
                />
                <div className="w-[250px] flex justify-between">
                  <p>tittle: {item.tittle}</p>
                  <p>EP: {item.episode}</p>
                </div>
              </div>
              <div className="flex text-2xl gap-3">
                <FiEdit className="cursor-pointer" />
                <MdDelete
                  className="cursor-pointer text-red-500"
                  onClick={() => handleDelete(item._id)}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Python;
