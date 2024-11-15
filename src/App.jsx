import './App.css';
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { getMsg } from './states/messages';
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
import { HiOutlineDotsHorizontal } from "react-icons/hi";

function App() {
  // const msg = useSelector((state)=>state.current.value);
  // const dispatch = useDispatch();
  // const moreMsg = () => {
  //   console.log('get more');
  // }

  return (
    <div className='container'>
      <div className='side-bar'>
        <div role='button' title='Chats'><BiSolidMessageRounded /></div>
        <div role='button' title='Marketplace' ><HiHomeModern /></div>
        <div role='button' title='Requests'><BiSolidMessageRoundedDots /></div>
        <div role='button' title='Archives'><FaArchive /></div>
      </div>
      <div>
        <h2>Chats</h2>
        <div className='search-cont'> <FaSearch /> <input placeholder='Search Messenger' /> </div>
        <div className='chaters'>
          <div role='button'>
            <div className='chater-img'>
              <img src="l.png" alt="LOGO" />
            </div>
            <div className='chater-cont'>
              <span>Trealeaf</span>
              <span>Text</span>
            </div>
          </div>
        </div>
      </div>
      <div className='chat-cont'>
        <div className='chat-head'>
          <span><div className='chater-img'>
              <img src="l.png" alt="LOGO" />
            </div>Treeleaf</span>
          <span><HiOutlineDotsHorizontal /></span>
        </div>
        <div className='chat-body'>
          <div className='chats'>
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
          
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
            <div className='sent'>hello</div>
            <div className='receive'>hello</div>
            <div className='receive'>hello</div>
          
          </div>
          
        </div>
        <div className='chat-foot'>
          <span><FaPlusCircle /></span>
          <span><IoFileTraySharp /></span>
          <span><PiStickerDuotone /></span>
          <span><MdOutlineGifBox /></span>
          <input type="text" />
          <span><FaThumbsUp /></span>
        </div>
      </div>
    </div>
  );
}

export default App;
