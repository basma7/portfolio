import React from 'react'
import { Col } from 'react-bootstrap'
import { Model } from '../../ConstIndex'
import './Project.scss'

export default function Project() {
  return (
    <div className="project">
      <div className="d-flex d-row justify-content-center">
        <img alt="pjt-img" src={Model} />
      </div>
      <div className="d-flex d-row justify-content-center dsc-prj">
          <Col lg={3}>
            <p className='ttl-txt'>The project</p>
            <div className="und-line"></div>
          </Col>
          <Col lg={6}>
            <p className="dsc-txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
              but also the leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
          </Col>
        </div>

        <div className="d-flex d-row justify-content-center dsc-prj">
          <Col lg={3}>
            <p className='ttl-txt'>The context</p>
            <div className="und-line"></div>
          </Col>
          <Col lg={6}>
            <p className="dsc-txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
              but also the leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
          </Col>
        </div>

        <div className="d-flex d-row justify-content-center dsc-prj">
          <Col lg={3}>
            <p className='ttl-txt'>The project</p>
            <div className="und-line"></div>
          </Col>
          <Col lg={6}>
            <p className="dsc-txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
              but also the leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
          </Col>
        </div>
    </div>
  )
}
