"use client"
import Link from "next/link"
import Cards from "../../components/Cards"
import cardsImage from '@/static/movie_card_dummy.jpg'
import Image from "next/image";
import { useState, useEffect } from "react";

const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const token = localStorage.getItem('token')
        const getData = async () => {
            const fetchedData = await fetch('http://localhost:3000/api/movies', {
                method: 'GET',
                cache: "no-store",
                headers: {
                    'content-type': 'application/json',
                    authorization: "Bearer " + token
                }
            })
            const data = await fetchedData.json()
            return data
        }

        getData().then(response => {
            setMovies(response?.movieMetadata)
        })
    }, [])

    return (
        <div>
            {movies.map(movie => <Cards key={movie?.id} id={movie?.id} />)}
        </div>
    )
}
export default Movies;