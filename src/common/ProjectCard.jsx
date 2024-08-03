import React from 'react'

function ProjectCard({src,link,h3,p}) {
  return (
    <a href={link} target="blank">
    <img src={src} className="hover" alt={`${h3}`} />
    <h3>{h3}</h3>
    <p>{p}</p>
  </a>
  )
}

export default ProjectCard
