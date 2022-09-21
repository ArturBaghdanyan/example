import "./styles.scss";
import HandleClick from "./handleClick";
import {useState,useRef,useEffect} from "react";


function Header() {
    const [value,setValue] = useState("");
    const count = useRef("");

    useEffect(() => {
        count.current = value;
    },[value]);

    return (
        <div className="header">
            <div className="title">
                <h2>Discount LaunchDarkly</h2>
                <p>Use LaunchDarkly via API token.</p>
            </div>

            <div className="container">

                <div className="first-component">
                <select>
                    <option>Project: default</option>
                </select>
                <select>
                    <option>Env: Staging</option>
                </select>
                <button>X</button>
                    <p>{count.current}</p>
                <input
                    placeholder="Filter flags"
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                </div>

                <HandleClick />

            </div>
        </div>
    )
}
export default Header;