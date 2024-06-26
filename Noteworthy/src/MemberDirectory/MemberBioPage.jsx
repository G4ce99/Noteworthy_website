import ReactDOM from 'react-dom'
//import { useState, useEffect } from 'react'

import './MemberBioPage.css'
import jsonData from './member_info.json'
import imgData from './member_imgs.json'

// Got help from this link: https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
// function useWindowWidth() {
//   const [width, setWidth] = useState(window.innerWidth);
//   useEffect(() => {
//     function updateWidth() {
//       setWidth(window.innerWidth);
//       if (width >= 1000) {
//         document.getElementsByClassName('photoAndInfo')[0].style.flexDirection='row'
//       } else {
//         document.getElementsByClassName('photoAndInfo')[0].style.flexDirection='col'
//       }
//     }
//     window.addEventListener('resize', updateWidth);
//     updateWidth();
//     return () => window.removeEventListener('resize', updateWidth);
//   }, []);
//   return width;
// }

function MemberBioPage(props) {
  if (!props.is_active_bio) {
    return null
  }
  const data = jsonData[props.member_id]
  const mem_img = imgData[props.member_id].img_path

  return ReactDOM.createPortal(
    <>
      <div class="darkOverlay"></div>
      <div class="memberBioBlock">
        <button class="exitButton" onClick={props.exit_bio}>✕</button>
        <div class="memberBioContent">
          <div class="leftArrow">
            <button onClick={props.go_left_bio}>‹</button>
          </div>
          <div class="memberBio">
            <div class="photoAndInfo"> 
              <img src={mem_img}/>
              <div class="info">
                <h3 class="info-title">{data.name}</h3>
                <p class="info-text"><b>Voice part:</b> {data.voicePart}</p>
                <p class="info-text"><b>Semester in Noteworthy:</b> {data.semesterInNoteworthy}</p>
                <p class="info-text"><b>Semester in Berkeley:</b> {data.semesterInBerkeley}</p>
                <p class="info-text"><b>Majors/Minors:</b> {data.majorsminors}</p>
                <p class="info-text"><b>Interests:</b> {data.interests}</p>
              </div>
            </div>
            <p class="bio"><b>My Bio</b><br></br>{data.bio}</p>
          </div>
          <div class="rightArrow">
            <button onClick={props.go_right_bio}>›</button>
          </div>
        </div>
      </div>
    </>, 
    document.getElementById("member_dir_portal")
  )
}

export default MemberBioPage