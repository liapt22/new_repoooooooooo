export default function Button({ icon, text, onClick }){
    return(
       <button
         onClick={onClick}
         className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
       >
        {icon}
        {text}
       </button>
    )
}