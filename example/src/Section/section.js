import "../Section/styles.scss";


function Section() {

    return (
        <div className="elements">
            <div className="first-piece">
                <p>Dynamic Ticket Pricing</p>
                <button>dynamic-ticket-pricing</button>
                <p>Whether or not we should enable dynamic ticket pricing.</p>
                <button>pricing-eng</button>
            </div>
            <div className="second-piece">
                <span>Targeting</span>
                <input type="radio" />
                <select>
                    <option>Actions</option>
                    <option>Enable</option>
                    <option>Disable</option>
                </select>

            </div>
        </div>

    )
}


export default Section;