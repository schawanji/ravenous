import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this)


        this.sortByOptions = {
            'bestMatch': 'best_match',
            'highestRated': 'rating',
            'mostReviewed': 'review_count'
        }
    }

    getSortByClass(sortByOption) {

        if (this.state.sortBy === sortByOption) {
            return 'active'

        } else {
            return ''
        }

    }

    handleSortByChange(sortByOption) {

        this.setState({ sortBy: sortByOption })
    }

    handleTermChange(e) {

        const key = e.target.value
        this.setState({ term: key })
    }

    handleLocationChange(e) {
        const location = e.target.value
        this.setState({ location: location })
    }
    handleSearch(e) {
        e.preventDefault();
        this.props.searchYelp(this.state.term, this.state.location,this.state.sortBy);

    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption]
            return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}> {sortByOption}</li>

        })
    }
    render() {
        return <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" onChange={this.handleTermChange} />
                <input placeholder="Where?" onChange={this.handleLocationChange} />
            </div>
            <div className="SearchBar-submit" onClick={this.handleSearch}>
                <a href='https://www.codecademy.com/paths/build-web-apps-with-react/tracks/react-components-interacting/modules/ravenous-part-two/projects/passing-information'>Let's Go</a>
            </div>
        </div>
    }

}
export default SearchBar