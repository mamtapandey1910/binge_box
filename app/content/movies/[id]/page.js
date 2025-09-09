"use client"
import { useEffect, useRef, useState } from "react"
import shakaPlayer from "shaka-player"

const movieDetailsPage = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const playerRef = useRef(null)
    const videoRef = useRef(null)
    const movie = {
        title: 'titanic',
        description: 'Old Titanic movie',
        hlsUri: 'https://streaming-segments.s3.us-east-2.amazonaws.com/videos/index.m3u8'
    }

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
    }

    const handlePlayerControls = (e) => {
        // if (isPlaying) {
        console.log('hello playeingg')
        // }/
    }

    return (
        <div>
            <button className="playButton" onClick={handlePlayVideo}>Play</button>

            <video ref={videoRef} className="player" autoPlay controls style={{ width: '500px', height: '300px' }} onClick={handlePlayerControls} />
        </div>
    )
}


export default movieDetailsPage