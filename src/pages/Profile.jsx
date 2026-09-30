import "./Profile.css";
import { getUserBuilds } from "../api/builds";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Build from "../components/Build.jsx";
import { useAuth } from "../be/authContext"


export default function Profile() {

    // const [user, setUser] = useState(null);
    const {user, loading: authLoading} = useAuth();
    const [userBuilds, setUserBuilds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function load() {
            try{
                const builds = await getUserBuilds(user.id);
                setUserBuilds(builds);
            }
            catch(err){
                console.error(err);
                setError(true);
            }
            finally{    
                setLoading(false);
            }   
        }
        load();
    }, [user]);

    if (authLoading) {
        return (
            <main className="page-layout">
                <p className="comment">Checking your session...</p>
            </main>
        );
    }

    if (!user) {
        return (
            <main className="page-layout">
                <h1 className="main-title">Profile</h1>
                <div className="window">
                    <p className="fleuron">❦</p>
                    <p className="info">Log in to see your builds</p>
                    <Link to="/login" className="button">Log in</Link>
                </div>
            </main>
        );
    }

    const buildsEl = userBuilds.length === 0 ? <div className="window">
            <p className="info">Currently you don't have any builds. Let's fix it!</p>
            <Link to="/new-build" className="button">Create your first build</Link>
        </div> : 
                userBuilds.map((b) => (
                <Build key={b.id} build={b} />
                ));

    return (
        <main className="page-layout">
            <h1 className="main-title">{user ? user.username : "Profile"}</h1>

            {loading && <p className="comment">Loading your builds...</p>}
            {error && <p className="secondary-text">Looks like we've got a problem loading your builds</p>}

            {!loading && !error && (
            <div className="build-grid">
                {buildsEl}
            </div>
            )}
        </main>
    );

}