import { useDispatch } from "react-redux"
import filterAction from "../actions/filterAction"

const VisibilityFilter = () => {
    const dispatch = useDispatch()

    return (
        <div>
        all          <input type="radio" name="filter"
          onChange={() => dispatch(filterAction('ALL')) } />
        important    <input type="radio" name="filter"
          onChange={() => dispatch(filterAction('IMPORTANT'))} />
        nonimportant <input type="radio" name="filter"
          onChange={() => dispatch(filterAction('NONIMPORTANT'))} />
      </div>
    )
}

export default VisibilityFilter