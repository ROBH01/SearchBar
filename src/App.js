import './App.css';
import useMediaQuery from './custom-hooks/useMediaQuery';
import ReducerExample from './components/ReducerExample/ReducerExample';
import GameOfThrones from '../src/components/GameOfThrones';

export default function App() {
    const deviceType = `Device size: ${useMediaQuery()}`;

    return (
        <div className="app">
            <header className="app-header">
                <h4>{deviceType}</h4>
                <GameOfThrones />
                <ReducerExample />
            </header>
        </div>
    );
}
