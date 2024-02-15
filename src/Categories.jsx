import React from 'react'

const Categories = (props) => {
    const { filterItems, categories } = props

    return (
        <div className="btn-container">

            {categories.map(category => {
                return (<button className="filter-btn" onClick={() => filterItems(category)}>
                    {category}
                </button>)
            })}

            {/* <button className="filter-btn" onClick={() => filterItems('all')}>
                All
            </button>
            <button className="filter-btn" onClick={() => filterItems('breakfast')}>
                Breakfast
            </button>
            <button className="filter-btn" onClick={() => filterItems('shakes')}>
                Shakes
            </button>
            <button className="filter-btn" onClick={() => filterItems('lunch')}>
                Lunch
            </button> */}
        </div>
    )
}

export default Categories