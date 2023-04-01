import './Home.css';
import { FaJs } from 'react-icons/fa';
import Experience from './Experience';
import Toolbox from './Toolbox';
import Work from './Work';



function Home() {
    return (
        <div className="home">
            <h1> Hello, I'm </h1>
<div className="typing">
                    <p>Thomas Arildtoft</p>
            </div>
            <div className="under-title">
                <p>I'm a Software Engineering student who has unending enthusiasm for solving problems.</p>
            </div>
            <div className="tab">
                <FaJs />
                <span>readme.js ●</span>
            </div>
            <div className="box">
                <div className="content">
          <pre>
            <code>
{`1. Im Thomas Arildtoft, a software engineer student from Denmarks Technical University (DTU) based in Roskilde, Denmark.

2. I’m currently working at EPOS: EPOS delivers high-end audio solutions designed for Enterprise and Gaming. I work as Junior DevOps Engineer, where I help to maintain and improve the CI/CD pipeline and the infrastructure.

3. During my "spare" time, Im also working on a portfolio manager web application. This new portfolio manager is a web application that will help me to keep track of my investments and my portfolio in both stocks, crypto and estate.`}
            </code>
          </pre>
                </div>

            </div>

            <Experience />

            <Toolbox />
            
            <Work />
        </div>
    );
}

export default Home;
