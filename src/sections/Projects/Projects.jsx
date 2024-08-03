import React from "react";
import styles from "./ProjectStyles.module.css"; // Corrected the import statement
import viber from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viber}
          link={"https://playersworld.net/"}
          h3="online gaming"
          p="Online gaming links and websites"
        />
        <ProjectCard
        src={viber}
        link={"https://playersworld.net/"}
        h3="online gaming"
        p="Online gaming links and websites"
      />
      <ProjectCard
      src={viber}
      link={"https://playersworld.net/"}
      h3="online gaming"
      p="Online gaming links and websites"
    />
    <ProjectCard
    src={viber}
    link={"https://playersworld.net/"}
    h3="online gaming"
    p="Online gaming links and websites"
  />
  <ProjectCard
  src={viber}
  link={"https://playersworld.net/"}
  h3="online gaming"
  p="Online gaming links and websites"
/>
<ProjectCard
src={viber}
link={"https://playersworld.net/"}
h3="online gaming"
p="Online gaming links and websites"
/>
      </div>
    </section>
  );
}

export default Projects;
