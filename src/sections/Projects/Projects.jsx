import React from "react";
import styles from "./ProjectStyles.module.css"; // Corrected the import statement
import viber from "../../assets/gaming.avif";
import ProjectCard from "../../common/ProjectCard";
import firewall from"../../assets/firewall.png";
import mero from "../../assets/merodharti.jpg";
import nepal from "../../assets/nepal.jpg";
import erp from "../../assets/erp.png";

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
        src={nepal}
        link={"https://github.com/DuRg3sH-8H/CompanyApp"}
        h3="Nepal Lines"
        p="Import and Export services"
      />
      <ProjectCard
      src={firewall}
      link={"https://github.com/bibekacharya-123/IDSN"}
      h3="Intrusion Dtection System"
    p="monitors a network for malicious 
    activity"
  />
  <ProjectCard
  src={mero}
  link={"https://github.com/bibekacharya-123/Merodharitii"}
  h3="Mero Dharti"
  p="Online news application"
/>
<ProjectCard
src={erp}
link={"https://github.com/bibekacharya-123/employee-management-system/tree/master"}
h3="Employee Management System"
p="applications for employee management"
/>
      </div>
    </section>
  );
}

export default Projects;
