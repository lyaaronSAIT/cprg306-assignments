import React from 'react';
import { useUserAuth } from "./_utils/auth-context";
 
const LandingPage = () => {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleGitHubSignIn = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Error signing in with GitHub:", error);
        }
    };

    const handleFirebaseSignOut = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <div>
            {user ? (
                <div>
                <p>
                    Welcome, {user.displayName} ({user.email})
                </p>
                <button onClick={handleFirebaseSignOut}>Logout</button>
                <a href="./shopping-list/page">Go to Shopping List</a>
                </div>
            ) : (
                <div>
                <p>Please log in to continue:</p>
                <button onClick={handleGitHubSignIn}>Login with GitHub</button>
                </div>
            )}
        </div>
    ); 
};

export default LandingPage;