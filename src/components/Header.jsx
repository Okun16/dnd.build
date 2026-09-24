import "./Header.css"

export default function Header(props){
    return(
        <header>    
            <div className="brand">
                <img src={props.logo} className="logo"/>
                <h1>dnd.build</h1>
            </div>
            <navbar className="nav">
                <h2><a href="">Home</a></h2>
                <h2><a href="">New build</a></h2>
                <h2><a href="">Profile</a></h2>
            </navbar>
            <navbar className="user">
                <h2><a href="">Log in</a></h2>
                <button className="signup">Sign up</button>
            </navbar>
        </header>
    )
}