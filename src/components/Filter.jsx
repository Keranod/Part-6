import { filterReducer } from "../reducers/filterReducer"
import { useDispatch } from "react-redux"

const Filter = (props) => {
    const dispatch = useDispatch()

    return (
        <div>
            filter
            <input 
                name='filter'
                onChange={() => dispatch(filterReducer(event.target.value))}    
            />
        </div>
    )
}

export default Filter