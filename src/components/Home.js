import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="fade-in">
                <h1>Hello, I'm Thomas Arildtoft</h1>
                <p>I'm a Software Engineer who has unending enthusiasm for solving problems.</p>
            </div>
            <div className="box">
                <div className="tab">
                    <img src="javascript-logo.png" alt="JavaScript Logo" />
                    <span>read.me *</span>
                </div>
                <div className="content">
          <pre>
            <code>
{`1. Im Ugi Stelmokaitis, a software engineer and entrepreneur based in Sydney, Australia.

2. I’m currently working at Priffle: The digital agency that harness the power of brands.  At Priffle we work with start-ups as well as established brands, crafting phenomenal digital products to help bring brands stand out in the crowd.

3. During my "spare" time, Im also working on Aezthetics app. This new fitness app helps you to reach your goals and stay on track with a sleek interface. It has everything from workout plans, food diary tools or even fasting tracker so there is no need for multiple apps anymore.`}
            </code>
          </pre>
                </div>
            </div>
        </div>
    );
}

export default Home;
