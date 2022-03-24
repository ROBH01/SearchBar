import './App.css';
import useMediaQuery from './custom-hooks/useMediaQuery';
import ReducerExample from './components/ReducerExample/ReducerExample';
import GameOfThrones from '../src/components/GameOfThrones';

export default function App() {
    const deviceType = useMediaQuery();
    console.log({ deviceType });

    return (
        <div className="App">
            <header className="App-header">
                <GameOfThrones />
                <ReducerExample />
            </header>
        </div>
    );
}
