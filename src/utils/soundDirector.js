import useSound from 'use-sound';
import seaWavesSfx from '../assets/audio/sea-waves.mp3';
import fireSteamSfx from '../assets/audio/fire-steam.mp3'

export default function sounds ( ) {

    const globalConfig = {loop: false, volume: 0.5,}

    const [playWaves] = useSound(seaWavesSfx, globalConfig );
    const [playSteam] = useSound(fireSteamSfx, globalConfig );

    return {
        playWaves, playSteam,
    };

}