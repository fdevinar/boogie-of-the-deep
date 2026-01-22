import useSound from 'use-sound'
import seaWavesSfx from '../assets/audio/sea-waves.mp3'
import fireSteamSfx from '../assets/audio/fire-steam.mp3'
import revealSfx from '../assets/audio/revelation-gong.mp3'
import windSfx from '../assets/audio/wind-past.mp3'

export default function sounds ( ) {

    const globalConfig = {loop: false, volume: 0.3,}

    const [playWaves] = useSound(seaWavesSfx, globalConfig );
    const [playSteam] = useSound(fireSteamSfx, globalConfig );
    const [playReveal] = useSound(revealSfx, globalConfig );
    const [playWind] = useSound(windSfx, globalConfig );

    return {
        playWaves, playSteam, playReveal, playWind
    };

}