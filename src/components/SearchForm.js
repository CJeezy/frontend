import React, { useState } from 'react';

const SearchForm = () => {
    const [summonerName, setSummonerName] = useState('');
    const [riotName, setRiotName] = useState('');
    const [error, setError] = useState(null);
    

    const handleSubmit = async (e) => {

        const riot = {riotName, summonerName};

        const response = await fetch('/api/riot', {
            method: 'POST',
            body: JSON.stringify(riot),
            headers: {
                'Content-Type': 'application/json'
            },
            
        });
        const json = await response.json();
        
        if(!response.ok){
            setError(json.error);
            return;
        }
        if(response.ok){
            setSummonerName('');
            setRiotName('');
            setError(null);
            return;
        }
    }

    return (
        <form classname="create" onSubmit={handleSubmit}>
            <h2>Search for Riot Name</h2>
            <label>Riot Name:</label>
            <input
                type="text"
                onChange={(e) => setRiotName(e.target.value)}
                value={riotName}/>

            <label>Summoner Name:</label>
            <input
                type="text"
                onChange={(e) => setSummonerName(e.target.value)}
                value={summonerName}/>    
            <button>Search</button>
            {error && <div classname="error">{error}</div>}
        </form>
    )
}

export default SearchForm;