import filterAction from "../actions/filterAction"

const VisibilityFilter = () => {

    return (
        <div>
        all          <input type="radio" name="filter"
          onChange={() => console.log('dispatch ALL') } />
        important    <input type="radio" name="filter"
          onChange={() => console.log('IMPORTANT')} />
        nonimportant <input type="radio" name="filter"
          onChange={() => console.log('NONIMPORTANT')} />
      </div>
    )
}

export default VisibilityFilter