import React, {PropTypes} from "react";
import {Link} from "react-router";

const Categories = (categories) => {

    return (
        <ul>
        {categories.categories.map((category, i) =>
            <li key={i}>
                <Link to={`/blog/categories/${category.slug}`}> {category.title} </Link>
            </li>
        )}
        </ul>
    )
}

export default Categories;