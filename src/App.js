import logo from './logo.svg';
import './App.css';
import useGameOfThronesFetch from './custom-hooks/useGameOfThronesFetch';
import House from './components/House';
import useMediaQuery from './custom-hooks/useMediaQuery';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { BiRightArrowAlt } from 'react-icons/bi';
import Button from './components/Button';
import { useCallback } from 'react';

export default function App() {
    const { data, setData } = useGameOfThronesFetch();
    const callback = useCallback((message) => {
        console.log(message);
    }, []);

    const deviceType = useMediaQuery();
    console.log({ deviceType });

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
                        <NoResults message="No results found" />
                    )}
                </main>
                <img src={logo} className="App-logo" alt="logo" />

                <div className="buttonsContainer">
                    <Button
                        icon={<HiOutlineSpeakerphone />}
                        title="Let us know"
                        onClick={() => callback("Clicked 'Let us know' button")}
                    />
                    <Button
                        title="Get Started"
                        onClick={() => callback("Clicked 'Get Started' button")}
                        primary
                    />
                    <Button
                        icon={<BiRightArrowAlt />}
                        title="Learn more"
                        onClick={() => callback("Clicked 'Learn more' button")}
                        hasIconRight
                    />
                </div>
            </header>
        </div>
    );
}
