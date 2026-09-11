import todoistBg from "../assets/todoistbg.png";
function Welcome({onStart}){
    return(
        <>
        <section className="welcome-card"
            style={{backgroundImage: `url(${todoistBg})`}}>
            <div className="welcome-icon">
                   ✓
            </div>
        <h1>Welcome to <br/>Todoist!</h1>
        <p>You personal task buddy.</p>
        <button className="start-button" onClick={onStart}>Get Started</button>
        </section>
        </>
    );
}
export default Welcome;