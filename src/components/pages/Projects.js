import React from 'react';
import Wrapper from '../Wrapper';
import { Row } from 'react-bootstrap';
import PortfolioCard from '../portfoliocard/PortfolioCard';

function Projects(props) {
    return (
        
           <Wrapper className="wrapper">
               <Row className="row" responsive="true">
                   {
                       props.projects.map(projects => (
                           <PortfolioCard 
                                key={projects.id}
                                image={projects.image}
                                altTag={projects.altTag}
                                title={projects.title}
                                anchorGithub={projects.anchorGithub}
                                anchorLive={projects.anchorLive}
                                description={projects.description}
                                languages={projects.languages}
                           />
                       ))
                   }
               </Row>
           </Wrapper>
           
    )
};

export default Projects;