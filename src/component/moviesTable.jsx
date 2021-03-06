import React from 'react';
import Like from "./common/like";
import Table from "./common/table";
import {Link} from "react-router-dom";



export default class MoviesTable extends React.Component {

    columns = [
        {path: 'title', label: 'Title', content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        {key: "like", content:movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
        },
        { key: "delete",
            content:movie =>( <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">Delete
           </button>)
        },

    ];



render()
{
    const {moviesPag, onSort, sortColumn} = this.props



    return (
       <Table
           columns={this.columns}
       data={moviesPag}
       sortColumn={sortColumn}
       onSort={onSort}
       />
    );
}
}


//export default MoviesTable;