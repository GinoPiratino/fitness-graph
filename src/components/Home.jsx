import "./Home.css"
import fulmine from "../assets/icon-reaction.svg"
import cervello from "../assets/icon-memory.svg"
import occhio from "../assets/icon-visual.svg"
import fumetto from "../assets/icon-verbal.svg"

export const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="purple-part">
                    <div className="second-container">
                        <div className="text-container">
                            <p className="text-aligned">Your Result</p>
                        </div>
                        <div className="circle-center">
                            <div className="circle">
                                <p className="text-aligner"> <span className="big-number">76</span><br />
                                    <span className="little-number">of 100</span></p>
                            </div>
                        </div>
                        <div className="gj">Great</div>
                        <p className="paragraph">You scored higher than 65% of <br />the people who have taken <br />these test.</p>
                    </div>
                </div>
                <div className="white-part">
                     <div className="second-container">
                        <p className="summary">Summary</p>
                        <div className="results-container">
                            <div className="container-result red">
                                <div className="half-container">
                                    <img src={fulmine} alt="fulmine-rosso" className="icon" />
                                    <p className="power-name1">Reaction</p>
                                </div>
                                <div className="half-container2">
                                    <p className="testo-colorato"><span className="testo-colorato-ciccione">80</span> / 100</p>
                                </div>
                            </div>
                            <div className="container-result yellow">
                                <div className="half-container">
                                    <img src={cervello} alt="cervello-giallo" className="icon" />
                                    <p className="power-name2">Memory</p>
                                </div> 
                                <div className="half-container2">
                                    <p className="testo-colorato"><span className="testo-colorato-ciccione">92</span> / 100</p>
                                </div>
                            </div>
                            <div className="container-result green">
                                <div className="half-container">
                                    <img src={fumetto} alt="fumetto-verde" className="icon" />
                                    <p className="power-name3">Verbal</p>
                                </div>
                                <div className="half-container2">
                                    <p className="testo-colorato"><span className="testo-colorato-ciccione">61</span> / 100</p>
                                </div>
                            </div>
                            <div className="container-result green">
                                <div className="half-container">
                                    <img src={occhio} alt="occhio-blu" className="icon" />
                                    <p className="power-name4">Visual</p>
                                </div>
                                <div className="half-container2">
                                    <p className="testo-colorato"><span className="testo-colorato-ciccione">72</span> / 100</p>
                                </div>
                            </div>
                        </div>
                        <button className="bottone-blu">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}