export default function Button(icon, text, onClick){
    return(
       <button onClick={onClick}>
        {icon}
        {text}
       </button>
    )
}