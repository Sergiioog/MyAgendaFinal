
interface Props {
    texto:string;
}
export default function ProfileButton({
    texto
}: Props) {
    return (
        
        <button>{texto}</button>
    )
}