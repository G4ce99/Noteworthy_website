import ReactDOM from 'react-dom'

import './MemberBioPage.css'
import jsonData from './member_info.json'
import imgData from './member_imgs.json'

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
                <h3>{data.name}</h3>
                <p><b>Voice part:</b> {data.voicePart}</p>
                <p><b>Semester in Noteworthy:</b> {data.semesterInNoteworthy}</p>
                <p><b>Semester in Berkeley:</b> {data.semesterInBerkeley}</p>
                <p><b>Majors/Minors:</b> {data.majorsminors}</p>
                <p><b>Interests:</b> {data.interests}</p>
              </div>
            </div>
            <p class="bio">Bio: {data.bio}</p>
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