import React from "react";

class SearchInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = { entry: '' }
    }
    //page not refresh when we click enter
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry);
    }
    // onSubmit - work when client click enter
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form" >
                    <div className="field">
                        <div className="ui massive icon input">
                            <input type='text'
                                placeholder="search ..."
                                onChange={(event) => this.setState(
                                    { entry: event.target.value })}
                                value={this.state.entry} />
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchInput;