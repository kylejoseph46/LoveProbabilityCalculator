import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <>
            <div className="about">
                <Link to='/' style={{textDecoration: 'none'}}>
                    <span className="about-link">Home</span>
                </Link>
            </div>
            <div className="description2">
                <h2>Type in the name of the first lover and second lover and click generate. </h2>
            </div>
        </>
    )
}

export default About