import { useState } from 'react'

import './MemberDirectory.css'
// Note from creator: Use the following guide to export the google sheet with form responses to JSON and put in member_info.json
// https://thenewstack.io/how-to-convert-google-spreadsheet-to-json-formatted-text/
// Member image json data were uploaded manually for the Member Profiles/Bio components, but can created similarly
import jsonData from './member_info.json'
import MemberProfile from './MemberProfile.jsx'


function MemberDirectory() {
  document.body.style.margin = 0

  const [CurrId, setCurrId] = useState(-1)
  const [scrollHeight, setScrollHeight] = useState(0)

  const enterBio = (m_id) => {
    setScrollHeight(window.scrollY)
    document.body.style.paddingRight = '17px'
    document.getElementsByClassName('profileRow').style = {'position': 'fixed', 'left': '50%', 'transform': 'translateX(-50%)'}
    document.body.style.overflow = 'hidden'
    setCurrId(m_id)
  }
  const exitBio = () => {
    setCurrId(-1)
    document.body.style.overflow = 'visible'
    document.getElementsByClassName('profileRow').style = {'position': 'static', 'left': 0, 'transform': 'translateX(0)'}
    document.body.style.paddingRight = 0
    window.scrollTo(0, scrollHeight)
  }

  const rows = []
  for (let i = 0; i < ((jsonData.length - 1) / 3) + 1; i++) {
    const cur_cols = []
    for (let j = 0; j < 3; j++) {
      let m_id = 3*i + j
      if (m_id == jsonData.length) {
        break;
      }
      cur_cols.push(<MemberProfile 
        member_id={m_id} 
        on_profile_click={()=>{(CurrId < 0) ? enterBio(m_id) : 0}} 
        is_active_bio = {CurrId == m_id}
        go_left_bio = {() => (CurrId == 0) ? exitBio() : setCurrId(m_id-1)}
        go_right_bio = {() => setCurrId((CurrId+1)%jsonData.length)}
        exit_bio = {() => exitBio()}
      />)
    }
    
    if (cur_cols.length > 0) {
      rows.push(<div class = "profileRow">
        {cur_cols}
      </div>)
    }
  }
  
  //(CurrId == -1) ? document.body.style.position = 'static': document.body.style.position = 'fixed'
  return (
    <>
      <div>NavBar Goes Here!</div>
      <h2 class="title">M E M B E R S</h2>
      <h3 class="subtitle">Click on their profiles to learn more!</h3>
      <div class="memberProfileTable">
        {rows}
      </div>
      <div>
        <a href="https://www.instagram.com/cal_noteworthy/" target="_blank"><img src="./src/MemberDirectory/social_imgs/insta.png" class="socialImg"/></a>
        <a href="https://www.facebook.com/Noteworthy" target="_blank"><img src="./src/MemberDirectory/social_imgs/facebook.png" class="socialImg"/></a>
        <a href="https://www.tiktok.com/@uc_noteworthy" target="_blank"><img src="./src/MemberDirectory/social_imgs/tiktok.png" class="socialImg"/></a>
        <a href="https://www.youtube.com/channel/UCDyMtV5cuuJZrg5Wm7VZmMA" target="_blank"><img src="./src/MemberDirectory/social_imgs/youtube.png" class="socialImg"/></a>
      </div>
    </>
  )
}

export default MemberDirectory