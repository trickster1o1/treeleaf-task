import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getMsg } from "./states/messages";
import { BiSolidMessageRounded } from "react-icons/bi";
import { HiHomeModern } from "react-icons/hi2";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { FaArchive } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { IoFileTraySharp } from "react-icons/io5";
import { PiStickerDuotone } from "react-icons/pi";
import { MdOutlineGifBox } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa6";
import { BiLoaderAlt } from "react-icons/bi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";

function App() {
  const msg = useSelector((state) => state.current.value);
  const dispatch = useDispatch();
  const [flag,setFlag] = useState(false);
  const [page, setPage] = useState(1);
  const fetchChats = async () => {
    await fetch(`https://gorest.co.in/public/v1/users?page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(getMsg([...res.data, ...msg]));
        console.log(res.data);
        // setFlag(false);
      })
      .catch((err) => console.log(err));
  };
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    const elementBottom = elementTop + rect.height / 2;
    const viewportTop = window.scrollY;
    const viewportHalf = viewportTop + window.innerHeight / 2;

    return elementBottom > viewportTop && elementTop < viewportHalf;
  }



  function checkElementsInViewport() {
    const element = document.getElementById("ldr");
    if (isInViewport(element)) {
      if (!flag) {
        console.log('dekhyo');
        setFlag(true);
        setPage(page+1);
        fetchChats();
      }

    }
  }
  useEffect(() => {
    fetchChats();
    // window.addEventListener("load", checkElementsInViewport);
    // window.addEventListener("resize", checkElementsInViewport);
    // document.getElementById('c').addEventListener("scroll", checkElementsInViewport);
    console.log("working!!!!");
    const element = document.getElementById("ldr");
    if (isInViewport(element)) {
      if (!flag) {
        console.log('dekhyo!!!!');
        setFlag(true);
        // setPage(page+1);
        // fetchChats();
      }

    }
  }, []);
  const containerRef = useRef(null);

  return (
    <div className="container">
      <div className="side-bar">
        <div role="button" title="Chats">
          <BiSolidMessageRounded />
        </div>
        <div role="button" title="Marketplace">
          <HiHomeModern />
        </div>
        <div role="button" title="Requests">
          <BiSolidMessageRoundedDots />
        </div>
        <div role="button" title="Archives">
          <FaArchive />
        </div>
      </div>
      <div>
        <h2>Chats</h2>
        <div className="search-cont">
          {" "}
          <FaSearch /> <input placeholder="Search Messenger" />{" "}
        </div>
        <div className="chaters">
          <div role="button">
            <div className="chater-img">
              <img src="l.png" alt="LOGO" />
            </div>
            <div className="chater-cont">
              <span>Trealeaf</span>
              <span>Text</span>
            </div>
          </div>
        </div>
      </div>
      <div className="chat-cont">
        <div className="chat-head">
          <span>
            <div className="chater-img">
              <img src="l.png" alt="LOGO" />
            </div>
            Treeleaf
          </span>
          <span>
            <HiOutlineDotsHorizontal />
          </span>
        </div>
        <div className="chat-body">
          <div className="chats" id="c" ref={containerRef}>
            <span className="ldr" id="ldr">
              <span>
                <BiLoaderAlt />
              </span>
            </span>
            {msg
              ? msg.map((e, key) => (
                  <div
                    key={key}
                    className={e.id % 2 === 0 ? "receive" : "sent"}
                  >
                    {e.name}
                  </div>
                ))
              : null}
          </div>
        </div>
        <div className="chat-foot">
          <span>
            <FaPlusCircle />
          </span>
          <span>
            <IoFileTraySharp />
          </span>
          <span>
            <PiStickerDuotone />
          </span>
          <span>
            <MdOutlineGifBox />
          </span>
          <input type="text" />
          <span>
            <FaThumbsUp />
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
