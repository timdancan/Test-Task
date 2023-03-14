import {useEffect, useState} from "react";
import Header from "./Header/Header";
import LevelSelect from "./LevelSelect/LevelSelect";
import Field from "./Field/Field";
import HoveredList from "./HoveredList/HoveredList";
import './App.css'

const App = () => {
    const [levels, setLevels] = useState([])
    const [activeLevel, setActiveLevel] = useState(0)
    const [isStarted, setIsStarted] = useState(false);
    const [highlightedSquares, setHighlightedSquares] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        fetch('https://60816d9073292b0017cdd833.mockapi.io/modes')
            .then(res => res.json())
            .then(res => setLevels(res))
            .catch(err => {
                console.log(err.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    const handleChangeActiveLevel = (event) => {
        setActiveLevel(+event.target.value)
    }

    const onStart = () => {
        setIsStarted(true)
    }

    return (
        <>
            <Header />
            <main className='main'>
                <div className='content-wrapper'>
                    <LevelSelect
                        activeLevel={activeLevel}
                        levels={levels}
                        handleChange={handleChangeActiveLevel}
                        onStart={onStart}
                    />
                    {isStarted &&
                    <Field
                        highlightedSquares={highlightedSquares}
                        setHighlightedSquares={setHighlightedSquares}
                        fields={activeLevel}
                    />
                    }
                </div>
                {loading && <p className='loading'>Loading...</p>}
                {isStarted &&
                    <HoveredList
                        highlightedSquares={highlightedSquares}
                    />
                }
            </main>
        </>
    );
};

export default App;