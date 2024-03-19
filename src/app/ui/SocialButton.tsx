import Image from "next/image"
export default function SocialButton () {
    return (
        <button className="shadow__btn flex justify-center items-center m-2">
            <Image src={"/"} alt="/" height={20} width={20} />
            <p>GitHub</p>
        </button>
    )
}