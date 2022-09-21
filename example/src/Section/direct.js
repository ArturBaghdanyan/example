function Direct() {
    return (
        <div className="elements">
            <div className="first-piece">
                <p>Dynamic Ticket Pricing</p>
                <button className="button-copy">dynamic-ticket-pricing</button>
                <p>Whether or not we should enable dynamic ticket pricing.</p>
                <button className="button">pricing-eng</button>
            </div>
            <div className="second-piece">
                <span>Targeting</span>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <select>
                    <option>Actions</option>
                    <option>Enable</option>
                    <option>Disable</option>
                </select>
            </div>
        </div>
    )
}
  export default Direct;