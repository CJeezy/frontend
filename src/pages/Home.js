import { useEffect, useState } from 'react';

//components
import StatDetails from '../components/StatDetails';
import SearchForm from '../components/SearchForm';

const Home = () => {

    const[stats, setStats] = useState(null);

    useEffect(() => {
        const fetchStats = async () =>{
            const res = await fetch('/api/riot');
            const json = await res.json();


            if(res.ok){
                setStats(json);
            }
        }

        fetchStats();
    }, [])

    return (
        <div className="home">
            <div className="stats">
                {stats && stats.map((stat) => (
                    <p key={stat._id}>
                        <StatDetails key={stat._id} stat={stat}/>
                    </p>
                ))}
            </div>
            <SearchForm />
        </div>
    );
}

export default Home;