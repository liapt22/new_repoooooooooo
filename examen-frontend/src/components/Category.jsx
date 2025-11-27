import { Link } from "react-router-dom"
export default function Category( {data }){
    return (
      <li>
        <Link to={`/category/${data.id}`}>
        {data.name_ro}
        </Link>
      </li>
    );
}