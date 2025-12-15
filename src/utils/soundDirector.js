import useSound from 'use-sound';
import seaWavesSfx from '../assets/audio/sea-waves.mp3';

export default function sounds ( ) {
    const [playWaves] = useSound(seaWavesSfx, {
        loop: true,        
        volume: 0.5,
    });

    return {
        playWaves,
    };

}