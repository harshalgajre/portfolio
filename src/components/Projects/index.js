import React from "react";
import styled from "styled-components";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {projects} from "../../data/constants"
import ProjectCard from "../Cards/ProjectCard";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
padding: 50px 0px;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const TimeLineSection = styled.div`
width:100%;
max-width: 1000px;
margin-top: 10px;
display: flex;
flex-direction: column;
align-items: center;
justofy-content: center;
gap: 12px;
`;

const Projects = () =>{
    return (
    <Container id= "projects">
        <Wrapper>
            <Title>Projects</Title>
            <Desc> </Desc>
            <TimeLineSection>
                <Timeline>
                    {projects.map((projects, index) => (
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot varient="outlined" color="secondary"/>
                            {index !== projects.length - 1 && 
                            <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent sx={{py: "12px", px: 2}}>
                            <ProjectCard projects={projects}/>
                            </TimelineContent>
                            </TimelineItem>
                    ))}
                </Timeline>
            </TimeLineSection>
        </Wrapper>
    </Container>
    ); 
    
};
export default Projects;