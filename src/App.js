import logo from './logo.svg';
import './App.css';
import useGameOfThronesFetch from './custom-hooks/useGameOfThronesFetch';
import House from './components/House';

export default function App() {
    const { data, setData } = useGameOfThronesFetch();

    const NoResults = ({ message }) => {
        if (data.slug === '') {
            return <h5>Game Of Thrones house members will be shown here</h5>;
        }

        return <h5>{message}</h5>;
    };

    return (
        <div className="App">
            <header className="App-header">
                <main>
                    <input
                        type="search"
                        placeholder="Type your favorite house"
                        value={data.slug}
                        style={{ height: 40, width: 320, fontSize: 20 }}
                        onChange={(e) => setData({ ...data, slug: e.target.value.toLowerCase() })}
                    />

                    {data.results.length > 0 && data.slug !== '' ? (
                        <House family={data.results[0]} />
                    ) : (
                        <NoResults message={'No results found'} />
                    )}
                </main>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}
