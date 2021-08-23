import "./Home.scss";
import Feed from "../../Components/Feed/Feed";
import Navbar from "../../Components/Navbar/Navbar";
import Rightbar from "../../Components/Rightbar/Rightbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

function Home() {
  return (
    <>
      <div className="homecontainer">
        <Feed />
      </div>
    </>
  );
}

export default Home;
