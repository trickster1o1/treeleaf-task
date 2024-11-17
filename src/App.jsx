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
  const msg = useSelector((state) => state.messages.value);
  const dispatch = useDispatch();
  const [flag,setFlag] = useState(true);
  const [page, setPage] = useState(1);
  const [loader,setLoader] = useState(true);
  
  const flagRef = useRef(flag);
  const pageRef = useRef(page);
  const msgRef = useRef([]);
  const dummy = ['.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.'];
  const fetchChats = async () => {
    await fetch(`https://gorest.co.in/public/v1/users?per_page=40&page=${pageRef.current}`)
      .then((res) => res.json())
      .then((res) => {
        if(pageRef.current > 1 && scrollableRef.current) {
            const scrollable = scrollableRef.current;
      
            const previousScrollHeight = scrollable.scrollHeight;
            const previousScrollTop = scrollable.scrollTop;
      
            dispatch(getMsg([...res.data, ...msg]));
            msgRef.current = [...res.data,...msgRef.current];
      
            // Adjust scroll position after the update
            setTimeout(() => {
              const currentScrollHeight = scrollable.scrollHeight;
              scrollable.scrollTop =
                previousScrollTop + (currentScrollHeight - previousScrollHeight);
            }, 0); 
        } else {
          dispatch(getMsg([...res.data, ...msg]));
          msgRef.current = [...res.data,...msgRef.current];
          console.log(res.data);
        }
        
        setLoader(false);
        setTimeout(() => {
          setFlag(false);
          flagRef.current = false;
        }, 2000);

      })
      .catch((err) => console.log(err));
  };
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    const elementBottom = elementTop + rect.height / 2;
    const viewportTop = window.scrollY;
    const viewportHalf = viewportTop + window.innerHeight / 2;

    return elementBottom+550 > viewportTop && elementTop < viewportHalf;
  }



  function checkElementsInViewport() {
    const element = document.getElementById("ldr");
    if (isInViewport(element)) {
      if (!flagRef.current) {
        setFlag(true);
        setPage((currPage)=>currPage+1);
        pageRef.current = pageRef.current + 1;
        flagRef.current = true;
        fetchChats();
        console.log('tannyo');
      }

    }
  }
  const scrollableRef = useRef(null);

  useEffect(() => {
    fetchChats();
    setTimeout(() => {  
      let m = document.getElementById('bottom');
      m.scrollIntoView({ behavior: "smooth" }, true);
    }, 500);
  }, []);


useEffect(() => {
    flagRef.current = flag;
    pageRef.current = page;
    // msgRef.current = msg;

    document.getElementById('c').addEventListener("scroll", checkElementsInViewport);    
   
}, [flag, page]);

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
          <div className="chats" id="c" ref={scrollableRef}>
            <span className="ldr" id="ldr">
              <span>
                <BiLoaderAlt />
              </span>
            </span>
            { loader ? dummy.map((e, key) => (
                <div
                  key={key}
                  className={key % 2 === 0 ? "receive l-msg" : "sent l-msg"}
                >
                </div>
              )) : msgRef.current
              ? msgRef.current.map((e, key) => (
                  <div
                    title={e.id}
                    key={key}
                    className={e.id % 2 === 0 ? "receive" : "sent"}
                  >
                    {e.name}
                  </div>
                ))
              : null}
              <span id="bottom"></span>
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
