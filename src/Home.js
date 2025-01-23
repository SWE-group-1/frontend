import CourseList from "./Components/CourseList";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="ml-72">
        <div className="p-8 font-serif">
            <h1 className="text-6xl font-extralight text-gray-600 ">Hi Sarah jones,</h1>
            <h1 className="text-3xl text-gray-400">Its time to achieve your GOAL.</h1>
        </div>
        <div className="flex gap-20 p-8">
        <div className="bg-custom-pink p-4 w-96 rounded-lg flex items-start">
                <img src="/Assets/Images/missed.png" />
            <div className="ml-4">
                <span className="text-gray-400">Missed deadline</span>
                <p className="text-4xl font-semibold mt-2">6</p>
            </div>
        </div>
        <div className="bg-custom-pink p-4 w-96 rounded-lg flex items-start">
                <img src="/Assets/Images/upcoming.png" />
            <div className="ml-4">
                <span className="text-gray-400">Upcoming deadline</span>
                <p className="text-4xl font-semibold mt-2">Dec, 22</p>
            </div>
        </div>
        <div className="bg-custom-pink p-4 w-96 rounded-lg flex items-start">
                <img src="/Assets/Images/completed.png" />
            <div className="ml-4">
                <span className="text-gray-400">Completed Courses</span>
                <p className="text-4xl font-semibold mt-2">Dec, 22</p>
            </div>
        </div>
        </div>
        <div className="flex">
        <div className="w-3/5 ml-8">
           <CourseList /> 
        </div>
        <div className="bg-custom-pink p-6 font-serif rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Profile Details</h2>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-custom-yellow text-3xl">5th Year Computer Eng</h1>
        <img
          src="/Assets/Images/user.png" 
          alt="User Profile"
          className="rounded-full w-32 h-32 mr-2"
        />
        <h1>Sarah Martins</h1>
        <p>
          <a href="mailto:Sarah.Martins@aastustudent.edu.et" className="text-blue-500 hover:underline">
            Sarah.Martins@aastustudent.edu.et
          </a>
        </p>
        <h1>Department: Electrical & Computer Engineering</h1>
        <div className="flex flex-col self-start gap-4 mt-2 items-start ">
        <h1>
          <strong>ID:</strong> ETS1112/13
        </h1>
        <h1>
          <strong>Phone:</strong> +251912345678
        </h1>
        <p>
          <strong>Grade:</strong> 3.23
        </p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          Save
        </button>
        <button className="bg-custom-yellow hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
          Edit
        </button>
      </div>
    </div>
        </div>
        </div>
      </div>
  );
};

export default Home;
