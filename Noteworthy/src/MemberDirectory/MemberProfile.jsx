import './MemberProfile.css'
import jsonData from './member_info.json'
import imgData from './member_imgs.json'

import MemberBioPage from './MemberBioPage'

function MemberProfile(props) {
  /* Could use a for loop to identify correct member metadata, but if current member_info list
     has property member_id = json data index, then we can access correct data with member_id */
  const data = jsonData[props.member_id]
  const mem_img = imgData[props.member_id].img_path
  return (
    <>
      <button class="memberButton" onClick={props.on_profile_click}>
        <div class="memberProfileContent">
          <img src={mem_img} />
          <h3>{data.name}</h3>
          <h4>{data.voicePart}</h4>
        </div> 
      </button>
      <MemberBioPage 
        member_id = {props.member_id}
        is_active_bio = {props.is_active_bio}
        go_left_bio = {props.go_left_bio}
        go_right_bio = {props.go_right_bio}
        exit_bio = {props.exit_bio}
      />
    </>
  )
}

export default MemberProfile