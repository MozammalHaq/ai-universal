import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';
import Button from './Button';
import Modal from './Modal';

const Card = () => {
    // 1. State
    const [information, setInformation] = useState([]);
    const [more, setMore] = useState(false);
    const [singleInfo, setSingleInfo] = useState({});
    const [aiId, setAiId] = useState(null);

    // 2. handle
    const handleMore = () => {
        setMore(true)
    }

    const handleShort = (a, b) => {
        const sortedData = information.sort((a, b) => {
            return new Date(a.published_in) - new Date(b.published_in)
        })
        setInformation([...information, sortedData])
    }

    // 3. useEffect
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/ai/tools')
            .then(res => res.json())
            .then(data => setInformation(data.data.tools))
    }, []);

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${aiId}`)
            .then(res => res.json())
            .then(data => setSingleInfo(data.data))
    }, [aiId])

    return (
        <>
            <span onClick={handleShort}>
                <Button>Sort By Date</Button>
            </span>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-12 mx-8 '>
                {
                    information.slice(0, !more ? 6 : information.length).map(info => <SingleCard
                        key={info.id}
                        info={info}
                        setAiId={setAiId}
                    ></SingleCard>)
                }
            </div>
            {!more && <div onClick={handleMore}>
                <Button>See More</Button>
            </div>}
            <Modal singleInfo={singleInfo} />
        </>
    );
};

export default Card;