'use client';
import { useRouter } from "next/navigation"

const Card = ({
    cardImage,
    cardLink,
    cardTitle
}) => {
    const router = useRouter()
    return (
        <div className="shadow-md rounded-md overflow-hidden relative z-0 cursor-pointer"
            onClick={() => {
                router.push(cardLink)
            }}
        >
            <img src={cardImage} className="rounded-md aspect-square" />
            <div className="absolute w-full h-full top-0 bottom-0 left-0 right-0" style={{
                background: "linear-gradient(180deg, #D9D9D900 0%, #000 100%);",
                backgroundColor: "transparent",
            }} />
            <p
                className="absolute text-white bottom-[5%] left-[5%]"
            >
                {cardTitle}
            </p>
            {/* </div> */}
        </div>
    )
}

export default Card