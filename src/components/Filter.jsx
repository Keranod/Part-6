import { filterChange } from "../reducers/filterReducer"
import { useDispatch } from "react-redux"

const Filter = (props) => {
    const dispatch = useDispatch()

    return (
        <div>
            filter
            <input 
                name='filter'
                onChange={() => dispatch(filterChange(event.target.value))}    
            />
        </div>
    )
}

export default Filter