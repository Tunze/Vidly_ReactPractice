import React from 'react';

const Movieform = ({match, history}) => {
    return (
        <div>
            <h1>Movie form {match.params.id}</h1>
            <button className="btn btn-primary" onClick={()=> history.push("/movies")}>save</button>
        </div>
    );
};

export default Movieform;