import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <h1 className="text-center mt-8 text-2xl">Welcome to the Home Page!</h1>
    </div>
  );
};

export default Home;
