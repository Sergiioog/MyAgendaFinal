import Image from "next/image"

interface Props {

    width:number;
    height:number;
    borderRadius:number;
    backgroundColor:string;

    icon:string;
    text:string;
    alt:string;
    
}

export default function SocialButton ({width,height,borderRadius,backgroundColor,text,icon}:Props ) {
    
    const buttonStyle = {
        width : `${width}px`,
        height : `${height}px`,
        borderRadius : `${borderRadius}px`,
        backgroundColor : `${backgroundColor}`,
        

    }

    return (
        <button style={buttonStyle} className="flex justify-center items-center m-2 transform hover:-translate-y-1 transition-transform duration-500 ease-in-out cursor-pointer">
            <Image src={icon} alt="/" height={20} width={20} />
            <p className="ml-1 font-bold">{text}</p>
        </button>
    )
}