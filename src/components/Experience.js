import { useState } from 'react';
import { FaRegUser, FaRegAddressCard } from 'react-icons/fa';

function Experience() {
    const [activeTab, setActiveTab] = useState('button1');

    const handleButtonClick = (buttonName) => {
        setActiveTab(buttonName);
    };

    return (
        <div className="experience">
            <div>

                <h1>Experience</h1>
                <div className="buttons">
                    <button
                        onClick={() => handleButtonClick('button1')}
                    >
                        <FaRegUser />
                        <span>EPOS</span>
                    </button>
                    <button
                        onClick={() => handleButtonClick('button2')}
                    >
                        <FaRegAddressCard />
                        <span>Denmarks Technical University</span>
                    </button>
                </div>

            </div>
            <div className="text">
                {activeTab === 'button1' && (
                    <p>Text for Button 1 goes hereaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        aaamdmdmdmdmdmdmddmdmdmmddmdmdmdmdmdmdmdmdmdmdmdmddmaaaaaa</p>
                )}
                {activeTab === 'button2' && (
                    <p>Text for Button 2 goes here</p>
                )}
            </div>
        </div>
    );
}


export default Experience;