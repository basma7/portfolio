import React from 'react'
import './Resume.scss'
import { Col } from 'react-bootstrap'
import { Model } from '../../ConstIndex'

export default function Resume() {
  return (
    <div className="resume">
      <div class="row">
        <Col xs={3}>
          <img className="profile-img" alt="model" src={Model} />
        </Col>
        <Col xs={9}>
          <div className='resume-txt'>
            <p className='hey-txt'>Hey there</p>
            <p className='detail-txt'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
             took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
             but also the leap into electronic typesetting, remaining essentially unchanged. 
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
             and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </Col>
      </div>
    </div>
  )
}
