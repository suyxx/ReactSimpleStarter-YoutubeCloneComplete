import React, { Component } from 'react';


class SearchBar extends Component{
    constructor(props){
        super(props);


        this.state = { term: '' };
    }

    render(){
        return (
            <div className="search-bar mt-3">
                <input
                    onChange={ (event) => this.onInputChange(event.target.value) }
                    value={this.state.term} className="form-control"/>
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onVideoSearchChange(term);
    }
};

export default SearchBar;
