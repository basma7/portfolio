import React from 'react'
import './Portfolio.scss'
import { Epitech } from '../../ConstIndex'

export default function Portfolio() {
  return (
    <div className="portfolio">
      <p className="intro-txt">testing, the header is something not really important so what the even have</p>
      <div class="row">
        <div class="column">
          <div class="card">
            <img className="project-img" alt="project" src={Epitech} />
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img className="project-img" alt="project" src={Epitech} />
          </div>
        </div>
        
        <div class="column">
          <div class="card">
            <img className="project-img" alt="project" src={Epitech} />
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img className="project-img" alt="project" src={Epitech} />
          </div>
        </div>
      </div>
    </div>
  )
}
