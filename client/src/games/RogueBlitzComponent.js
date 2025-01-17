import React, { useEffect } from "react";
import HeaderR from "../components/HeaderR";
import FooterR from "../components/FooterR";
import "../styles/headerR.css";
import "../styles/footerR.css";

const RogueBlitz = () => {
    let script;

    useEffect(() => {
        script = document.createElement('script');

        script.src = "/rogueblitz/assets/js/mainGame.js";
        script.type = "module"
        script.async = true;

        document.body.appendChild(script);

        return () => {
            script.remove();
            window.location.reload();
        }
    }, [])

    return (
        <div className="rogueblitz">

            <HeaderR> </HeaderR>
            <div id="roguegame"></div>
            <FooterR> </FooterR>
        </div>
    )
}

export default RogueBlitz;