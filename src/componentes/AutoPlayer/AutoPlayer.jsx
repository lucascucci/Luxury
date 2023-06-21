import React, { useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import '../../css/autoPlayer.css';


const AutoPlayer = () => {
    const videoId = 'wcihdUJp-vY';

    const playerOptions = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: -1,
            controls: 0,
        },
    };

    const playerRef = useRef(null);

    useEffect(() => {
        if (playerRef.current) {
            playerRef.current.internalPlayer.playVideo();
        }
    }, []);

    const handleVideoEnd = () => {
        if (playerRef.current) {
            playerRef.current.internalPlayer.playVideo();
        }
    };

    return(
        <>
        <YouTube className='youtube' videoId={videoId} opts={playerOptions} onEnd={handleVideoEnd} ref={playerRef} />;
        </>
    )
};

export default AutoPlayer;