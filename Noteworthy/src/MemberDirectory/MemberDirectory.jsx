import { useState } from 'react'

import './MemberDirectory.css'
import jsonData from './member_info.json'
import MemberProfile from './MemberProfile.jsx'


function MemberDirectory() {
  const [CurrId, setCurrId] = useState(-1)
  const [scrollHeight, setScrollHeight] = useState(0)

  const enterBio = (m_id) => {
    setScrollHeight(window.scrollY)
    document.getElementsByClassName('profileRow').style = {'position': 'fixed', 'left': '50%', 'transform': 'translateX(-50%)'}
    setCurrId(m_id)
  }
  const exitBio = () => {
    setCurrId(-1)
    document.getElementsByClassName('profileRow').style = {'position': 'static', 'left': 0, 'transform': 'translateX(0)'}
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
      <h2>M E M B E R S</h2>
      <div class="memberProfileTable">
        {rows}
      </div>
      <p>CurrID currently equals: {CurrId}</p>
      <div>Socials Go Here!</div>
    </>
  )
}

export default MemberDirectory