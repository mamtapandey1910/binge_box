"use client"
import { useEffect, useRef, useState } from "react"
import shakaPlayer from "shaka-player"

const movieDetailsPage = ({ id }) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const playerRef = useRef(null)
    const videoRef = useRef(null)

    useEffect(() => {
        const player = new shakaPlayer.Player(videoRef.current)
        playerRef.current = player

        player.load(movie.hlsUri).catch(err => {
            if (err) {
                console.log(err)
            }
        })
        return () => {
            if (playerRef.current) {
                playerRef.current.destroy()
            }
        }

    }, [])

    const handlePlayVideo = (e) => {
        setIsPlaying(true)
        videoRef.current.play()
    }



    return (
        <div>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>

            <button className="playButton" onClick={handlePlayVideo}>Play</button>

            <video
                ref={videoRef}
                className="player"
                autoPlay={false}
                controls
                style={{ width: '500px', height: '300px' }}
            />
        </div>
    )
}


export default movieDetailsPage