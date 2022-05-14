import React, { useCallback, useMemo } from 'react';
import Button from '../Button';
import House from './House';
import useGameOfThronesFetch from './useGameOfThronesFetch';
import reactLogo from '../../react-logo.svg';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { BiRightArrowAlt } from 'react-icons/bi';

import styles from './GameOfThrones.module.css';
import { debounce } from 'lodash';

const GameOfThrones = () => {
    const { slug, results, setSlug } = useGameOfThronesFetch();

    const speakerIcon = <HiOutlineSpeakerphone />;
    const rightArrowIcon = <BiRightArrowAlt />;

    const hasResults = results.length > 0 && slug !== '';

    const NoResults = ({ message = 'No results found' }) => (
        <h5>{slug === '' ? 'Game Of Thrones house members will be shown here' : message}</h5>
    );

    const callback = useCallback((message) => {
        alert(message);
    }, []);

    const debouncedChangeHandler = useMemo(
        () => debounce(({ target: { value } }) => setSlug(value.toLowerCase()), 800),
        [setSlug],
    );

    return (
        <>
            <main>
                <input
                    type="search"
                    placeholder="Type your favorite house"
                    className={styles.searchInput}
                    onChange={debouncedChangeHandler}
                />
                {hasResults ? <House family={results[0]} /> : <NoResults />}
            </main>

            <img src={reactLogo} className={styles.reactLogo} alt="react-logo" />

            <div className={styles.buttonsContainer}>
                <Button
                    icon={speakerIcon}
                    title="Let us know"
                    onClick={() => callback("Clicked 'Let us know' button")}
                />
                <Button
                    title="Get Started"
                    onClick={() => callback("Clicked 'Get Started' button")}
                    primary
                />
                <Button
                    icon={rightArrowIcon}
                    title="Learn more"
                    onClick={() => callback("Clicked 'Learn more' button")}
                    hasIconRight
                />
            </div>
        </>
    );
};

export default GameOfThrones;
