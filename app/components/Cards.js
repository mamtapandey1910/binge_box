import Link from "next/link"
import cardsImage from '@/static/movie_card_dummy.jpg'
import cssClass from './cards.module.css'
import Image from "next/image"

const Cards = () => {
    return (
        <div className="card_div" style={cssClass.card_div} >
            {/* <Link> */}
            <Image src={cardsImage.src} className='card_image' width={300} height={450} alt="cardImage" />
            {/* </Link> */}
        </div>
    )
}

export default Cards