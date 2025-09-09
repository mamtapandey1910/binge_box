import Link from "next/link"
import cardsImage from '@/static/movie_card_dummy.jpg'
import cssClass from './cards.module.css'
import Image from "next/image"

const Cards = ({ id }) => {
    return (
        <div className="card_div" style={cssClass.card_div} >
            <Link href={`/content/movies/${id}`}>
                <div className="card" style={cssClass.card_div}>
                    <Image src={cardsImage.src} className='card_image' width={200} height={300} alt="cardImage" />
                </div>

            </Link>
        </div>
    )
}

export default Cards