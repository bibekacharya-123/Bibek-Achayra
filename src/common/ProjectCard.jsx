import React from 'react'

function ProjectCard({src}) {
  return (
    <a href="https://playersworld.net/" target="blank">
    <img src={src} className="hover" alt="gaming logo" />
    <h3>Online gaming</h3>
    <p>Online gaming links and websites</p>
  </a>
  )
}

export default ProjectCard
