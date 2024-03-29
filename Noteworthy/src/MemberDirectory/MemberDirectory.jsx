//import { useState } from 'react'

import './MemberDirectory.css'
import jsonData from './member_info.json'
import MemberProfile from './MemberProfile'


function MemberDirectory() {
  //const [currId, setCount] = useState(0)

  const rows = []
  for (let i = 0; i < (jsonData.length / 3) + 1; i++) {
    const cur_cols = []
    for (let j = 0; j < 3; j++) {
      const m_id = 3*i + j
      if (m_id == jsonData.length) {
        break;
      }
      cur_cols.push(<MemberProfile member_id={m_id} />)
    }
    if (cur_cols.length > 0) {
      rows.push(<div class = "profileRow">
        {cur_cols}
      </div>)
    }
  }
  
  return (
    <>
      <div>NavBar Goes Here!</div>
      <h2>M E M B E R S</h2>
      <div class="memberPreviewTable">
        {rows}
      </div>
      <div>Socials Go Here!</div>
    </>
  )
}

export default MemberDirectory