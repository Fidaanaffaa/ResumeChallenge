
import './App.css';
import React, { useEffect, useState } from 'react';
const project1 = {name : "Unity Game - Nuclear Reactor Simulator",
    descriptions : ["Implemented game mechanices using C#.","Designed the code architecture.",
        "Used inheritance to facilitate level design, giving game designers the ability to create new levels without having to know how to code.",
        "Tested and debugged gameplay and program flow."], key : "1"
    };

const project2 = {name : "Simplified Java Parser – A Simple Java code parsing program using Java.",
    descriptions : ["Wrote the code responsible for validating the internal logic of the code scripts using Java.",
    "Designed the architecture for the program, based it on the factory design pattern.",
    "Performed extensive debugging on the code workflow.", "Used exception mechanisms to detect cases such as" +
        " division by zero or instances of undefined variables."], key : "2"
};

const project3 = {name : "Music Composition Program - A Python based melody composition program using AI/",
    descriptions : ["Used Q-learning as the main learning algorithm.",
        "Designed the user interface and code architecture."], key : "3"
};

const projects = [project1, project2, project3];

const programmingLanguages = {name: "Programming Languages", list : ["Java, ","Python, ","C#, ","C/C++, ","MySQL, ","Javascript" +
    "/HTML/CSS."]};

const languages = {name: "Languages", list : ["Arabic, ","English, ","Hebrew."]};
const technologies = {name: "Technologies", list : ["Windows, ","Linux."]};
const tools = {name: "Tools", list : ["IntelliJ, ","PyCharm, ","VSC, ","Clion, ","Unity, ","Rhinoceros3D, ","Grasshopper."]};
const hobbies = {name: "Hobbies", list : ["Programming, ", "weightlifting, ", "running, ", "playing guitar."]};

const skills = [programmingLanguages, languages, technologies, tools, hobbies];
function App() {
  return ( <div className = "BKG">
          <Header/>
          <Counter></Counter>
  <ContactDetails></ContactDetails>
          {/*<Separator></Separator>*/}
            <WorkExperience></WorkExperience>
          {/*<div className = "secondSeparator"><Separator></Separator></div>*/}
          <Projects></Projects>
          <Skills></Skills>
  </div>

  );
}
export default App;
const Counter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        fetch('https://0ivuawja13.execute-api.eu-north-1.amazonaws.com/sendcounter/visitorCounter', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => setCounter(data["Counter"]))
            .catch((error) => console.error(error));
    }, []);
    console.log(counter);
    return <div className = "Counter">Page views: {counter}</div>;
};



function Header()
{
    return(<div className="App">
        <header className="App-header">
            <h1>Fidaa Naffaa</h1><br/>
        </header>
    </div>);
}

function ContactDetails()
{
    return(<div className="Contact">
        <h2>Fidaa.naffaa@gmail.com, 0527810107, Jerusalem, Israel</h2>
        <Separator></Separator>
    </div>);
}

function Separator()
{
    return(<div className="Separator">
        <hr/>
    </div>);
}

function WorkExperience()
{
    return(<div className="WorkExperience">
        <h2>WORK EXPERIENCE</h2>
        <Separator></Separator>
        <ul>
            <h3>Teacher's Assistant, Hebrew University of Jerusalem</h3>
                <ul>
                    <li> Graded weekly coursework for hundreds of students in a course called Introduction
                to Computability and Complexity.
                    </li>
                </ul>
        </ul>

    </div>);
}


function Projects()
{
    return(
        <div className="ProjectsSection">
            <h2 className="ProjectsHeader">PROJECTS</h2>
            <Separator></Separator>
            {projects.map((project) => <div className="ProjectSubsection"><h2 className="Project">{project.name}</h2>
                <ul>{project.descriptions.map((description)=> <li className="ProjectDescription">{description}</li>)}
                </ul>
            </div>)}
        </div>
    )
}

function Skills()
{
    return(
        <div className="SkillsSection">
            <h2 className="SkillsHeader">SKILLS & INTERESTS</h2>
            <Separator></Separator>
            <ul>{skills.map((skill)=><li className="SkillName">{skill.name}:
                <p className="SkillDescription">{skill.list.map((item)=>item)}</p></li>
            )}</ul>
        </div>
    )
}

