import React from 'react';
import SearchInput from './SearchInput';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }


    async onSearchSubmit(entry) {
        const response = await
            axios.get(`https://pixabay.com/api/?key=25762307-564ff7be8a1412aa385951d21&q=${entry}&image_type=photo`);
        console.log(response);
    }



    render() {
        return (
            <div className='ui container ' style={{ marginTop: '30px' }} >
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
            </div>
        )
    }

}


export default App;