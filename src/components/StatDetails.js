const StatDetails = ({ stat }) => {
    return (
        <div className="stat-details">
            <h2>{stat.riotName}</h2>
            <h2>{stat.summonerName}</h2>
            <p>{stat.createdAt}</p>
        </div>
    );
}

export default StatDetails;