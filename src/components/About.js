import React from 'react'
import Navbar from './Navbar'
import about from '../img/aboutImg2.png'
import Footer from './Footer'

export default function About() {
  return (
    <>
      <Navbar/>
      <div className="AboutSec">
        <div className="aboutImg">
            <img src={about} alt="" />
            <h1>College Eazy</h1>
            <p>A study material sharing platform</p>
        </div>
        <div className="whyTextAbout">
            <h3>Why?</h3>
            <p>When there are 50+ colleges affiliated to a single university having the same curriculum but lack the infrastructure for sharing study material, students are left to their own to collect and assemble notes. Students belonging to a particular year collate notes and sit for the exams. Post exams the notes are either discarded or are passed on to some relative/friend but never uploaded to a common platform.</p>
            <p>As a result, every year the same story is repeated - by a new set of students. This resulted in a lot of wastage of time, paper (photocopied notes), money, and energy.</p>
            <p>Hence, NotesHub - a study material sharing platform where students can just upload whatever study material they have and create a free-for-all open library.</p>

        </div>
        <div className="whatTextAbout">
            <h3>What?</h3>
            <p>NotesHub is a open and free-for-all study material sharing platform. The students can upload, download and share any type of study material with their friends. Teachers can also share study material with students.</p>
        </div>
        <div className="HowTextAbout">
            <h3>How?</h3>
            <p>Even though NotesHub is open, one cannot upload irrelevant stuff. There is a layer of NotesHub admins that accept/reject every single contribution by the students. Once the admin accepts a contribution, the study material is visible to everyone.</p>
        </div>
      </div>
      <Footer/>
    </>
  )
}
