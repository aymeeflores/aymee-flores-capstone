import "./Home.scss";
import Feed from "../../Components/Feed/Feed";
import Navbar from "../../Components/Navbar/Navbar";
import Rightbar from "../../Components/Rightbar/Rightbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="homecontainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}

export default Home;
