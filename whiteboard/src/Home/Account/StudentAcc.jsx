import axios from "axios";
import { useEffect, useRef, useState } from "react"; // Import useRef
import { FaStar } from "react-icons/fa6";
import demo3dpic from "../../assets/picture/demo3dpic.png";
import { Link, useNavigate } from "react-router-dom";
import mini_sm1 from "../../assets/one.jpg";
import mini_sm2 from "../../assets/two.jpg";
import mini_sm3 from "../../assets/three.jpg";
import { MdEdit } from "react-icons/md";

function StudentAcc() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Get token once
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null); // Ref for the hidden file input

  // Fetches user profile data
  useEffect(() => {
    if (!token) {
      return setUser(null);
    }
    axios
      .get(`http://localhost:5803/students/student_profile`, {
        headers: {
          Authorization: `Bearer ${token}`, // Use stored token
        },
        withCredentials: true,
      })
      .then((ress) => setUser(ress.data.user))
      .catch((err) => {
        console.log("Profile fetch error:", err);
        setUser(null);
      });
  }, [token]); // Depend on token

  let userNm = user?.name;

  const handleOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    // Optionally navigate to home or login page
    navigate('/');
  };

  const handleClick = () => {
    navigate("/payment");
  };

  // 1. Function to open the hidden file dialog
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  // 2. Function to handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    // Immediately upload after selection (common pattern)
    if (selectedFile) {
      handleUpload(selectedFile);
    }
  };

  // 3. Function to handle the actual upload
  const handleUpload = async (selectedFile) => {
    // If we're calling this immediately after selection, use the selectedFile param
    const fileToUpload = selectedFile || file;

    if (!fileToUpload || !token) {
        console.log("No file selected or no token available.");
        return;
    }
    
    const formData = new FormData();
    formData.append("profileImage", fileToUpload); // Key must match backend: upload.single("profileImage")

    try {
        const response = await axios.post(
            `http://localhost:5803/students/profile_edit`, // Corrected URL
            formData,
            {
                headers: { 
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`, // Include Authorization header
                },
                timeout: 10000,
            }
        );

        console.log("Server response:", response.data);
        // Important: Update the local state with the new image URL from the server
        setUser(prevUser => ({
            ...prevUser,
            profileImage: response.data.imageUrl // Assuming your backend returns the new image URL
        }));
        // Optional: Reset file state
        setFile(null);
        alert("Profile image updated successfully!");

    } catch (error) {
        console.error("Image upload failed:", error);
        alert("Image upload failed. See console for details.");
    }
  };

  return (
    <div className="w-full h-auto flex justify-between px-[145px] py-[30px]">
      <div className="w-[26%] h-screen bg-[#5F48D5] rounded-2xl">
        <div className="w-full h-[400px]">
          <div className="w-full h-[350px] flex ">
            <div className="w-[100px] h-[350px] flex justify-evenly items-end flex-col">
              {/* star section */}
              <FaStar className="mr-12 text-[#FFFF8D]" />
              <FaStar className="text-[#FFFF8D]" />
              <FaStar className="mr-10 text-[#FDD835]" />
            </div>
            <div className="flex flex-col">
              <div className="w-[320px] h-[250px] flex items-center pl-5">
                {/* profile image section */}
                <FaStar className="mt-32 text-3xl text-[#FDD835] " />
                <div
                  className={`border-5 rounded-full ${
                    !token || user?.payment === false
                      ? `border-[#5F48D5]`
                      : `border-[#A57C00]`
                  } `}
                >
                  <div className="w-[150px] h-[150px] flex items-center justify-center text-center bg-white rounded-full overflow-hidden relative">
                    {/* Hidden file input */}
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden" // Hide the default input
                    />
                    
                    {/* The Edit Icon/Button that triggers the hidden input */}
                    <MdEdit
                      className="text-black absolute text-4xl cursor-pointer right-3 bottom-3 bg-white p-1 rounded-full border border-gray-300"
                      onClick={handleImageClick} // Trigger file selection
                    />
                    
                    {/* Display the image */}
                    {user?.profileImage ? (
                      <img
                        src={user.profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      // Fallback content when no image is available
                      <div className="text-gray-500 text-sm">Upload Image</div>
                    )}
                  </div>
                </div>
                <FaStar className="mt-56 text-[#FFFF8D]" />
              </div>
              <div className=" w-[320px] h-[100px] flex items-center pl-10">
                <button
                  className="w-[130px] h-12 bg-white rounded-full text-[#5F48D5] font-Inter text-2xl font-bold"
                  onClick={user ? handleOut : undefined}
                >
                  {user ? "logout" : <Link to="/login">login</Link>}
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-[50px] bg-white rounded-2xl flex items-center pl-10">
            {/* user status section */}
            <p className="text-2xl text-[#9BEF4C] font-Inter font-semibold">
              ACTIVE
            </p>
          </div>
          {/* ... (rest of the component remains the same) */}
          <div className="w-full h-[520px] p-5">
            <div className="w-full h-[480px] bg-white rounded-2xl">
              <div className=" w-full font-Inter p-5 text-[15px] flex flex-col gap-5">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  {user ? user.email : ""}
                </p>
                <p>
                  <span className="font-semibold">Phone:</span>
                  {user ? user.number : ""}
                </p>
              </div>
              <div className="w-full h-0.5 bg-[#5F48D5]"></div>
              {/* payment option and course option */}
              {user && user.payment === false && (
                <div className="flex w-full justify-center py-5">
                  <div
                    className="w-[350px] h-[80px] bg-[green] hover:bg-[lightgreen] hover:text-[green] rounded-full flex items-center justify-center text-2xl font-semibold text-white cursor-pointer" // Added cursor-pointer
                    onClick={handleClick}
                  >
                    <p>Unlock Premium Course</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* rigt side container */}
      <div className="w-[72%] h-[100vh]flex flex-col gap-8">
        {/* header section */}
        <div className="w-full h-[350px] bg-[#5F48D5] rounded-2xl flex items-end py-10">
          {/* user name welcome section */}
          <div className="w-full text-5xl text-white font-Inter font-semibold h-30 px-20 flex flex-col justify-between">
            <p>
              Welcome back, {userNm}
              {user ? user.lastName : ""}
            </p>
            <p className="font-medium text-2xl">
              Always stay updated in your students portel
            </p>
          </div>
          <img
            src={demo3dpic}
            alt=""
            className="w-[350px] drop-shadow-lg/50 drop-shadow-white"
          />
        </div>
        <div className="w-full h-[550px] flex justify-between">
          <div className="w-[350px] h-550px">
            <div className="w-full h-[150px] font-Inter text-2xl flex items-center">
              <div className="">
                <p>Upcoming new program’s</p>
                <p>view course</p>
              </div>
            </div>
            {/* upcomming courses list */}
            <div className="w-full h-[350px] flex flex-col justify-between">
              <div className="w-full flex justify-between">
                <div className="w-[150px] h-[150px] bg-[#F8F8F8] rounded-2xl"></div>
                <div className="w-[150px] h-[150px] bg-[#F8F8F8] rounded-2xl"></div>
              </div>
              <div className="w-full flex justify-between">
                <div className="w-[150px] h-[150px] bg-[#F8F8F8] rounded-2xl"></div>
                <div className="w-[150px] h-[150px] bg-[#F8F8F8] rounded-2xl"></div>
              </div>
            </div>
          </div>
          {user ? (
            <div className="w-[500px] h-[550px] bg-[#5F48D5] rounded-2xl flex flex-col gap-2 py-3">
              <div className="w-full h-[100px] pl-2.5 text-3xl flex items-center font-medium font-Inter text-white">
                <p>course instructor</p>
              </div>
              {/* course asign instructors list */}
              <div className="w-full h-[100px] bg-white flex items-center gap-2">
                <div
                  className="w-[70px] h-[70px] border-2 border-[#5F48D5] rounded-full bg-center bg-cover"
                  style={{ backgroundImage: `url(${mini_sm3})` }}
                ></div>
                <div
                  className="w-[70px] h-[70px] border-2 border-[#5F48D5] rounded-full bg-center bg-cover"
                  style={{ backgroundImage: `url(${mini_sm2})` }}
                ></div>
                <div
                  className="w-[70px] h-[70px] border-2 border-[#5F48D5] rounded-full bg-center bg-cover"
                  style={{ backgroundImage: `url(${mini_sm1})` }}
                ></div>
              </div>
              <div className="w-full h-[250px] flex flex-col gap-5 p-5">
                <p className="text-2xl font-semibold text-white">
                  Daily notice{" "}
                </p>
                <div className="w-full h-auto text-[12px] px-2 py-3 bg-white rounded-2xl">
                  <p>
                    create a dedicated study space, use effective time
                    management by scheduling study times and setting goals, and
                    actively engage with the material through note-taking and
                    participation
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentAcc;