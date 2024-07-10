import { getFullYear, getFooterCopy } from "../utils/utils";
import React from "react";
import "./Footer.css";

function Footer()
{
    return (
        <div>
            <div className="App-footer">
                Copyright {getFullYear()} - {getFooterCopy()}
            </div>
        </div>
    )
}

export default Footer;