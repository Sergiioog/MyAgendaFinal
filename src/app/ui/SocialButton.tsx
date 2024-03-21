import Image from "next/image";

interface Props {
    width: number;
    height: number;
    borderRadius: number;
    backgroundColor: string;
    boxShadowRound: number;
    colorShadow: string;
    backdropFilter: number;
    border: string;
    colorBorder: string;
    icon: string;
    text: string;
    textColor:string;
    alt: string;
}

export default function SocialButton({
    width,
    height,
    borderRadius,
    backgroundColor,
    boxShadowRound,
    colorShadow,
    backdropFilter,
    border,
    colorBorder,
    icon,
    text,
    textColor,
    alt,
}: Props) {
    
    const buttonStyle = {
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${borderRadius}px`,
        backgroundColor: backgroundColor,
        boxShadow: `0 0 ${boxShadowRound}px ${colorShadow}`,
        backdropFilter: `blur(${backdropFilter}px)`,
        border: `${border}px solid ${colorBorder}`,
        color:`${textColor}`
    };

    return (
        <button style={buttonStyle} className="boton flex justify-center items-center m-2 transform hover:-translate-y-1 transition-transform duration-500 ease-in-out cursor-pointer">
            <Image src={icon} alt={alt} height={20} width={20} />
            <p className="ml-1 font-bold">{text}</p>
        </button>
    );
}
