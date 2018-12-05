import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import _ from 'lodash';

const API_KEY = 'AIzaSyBx3sM1wJgjVxsW3AdhJw2uXw1SVFEn0EU';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

  this.videoSearch('apple');

  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });

    });
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <SearchBar onVideoSearchChange={ videoSearch } />
          </div>
        </div>
        <div className="row mt-3">
            <VideoDetail video={ this.state.selectedVideo } />
            <VideoList
              onVideoSelect={ (selectedVideo) => this.setState({selectedVideo}) }
              videos={ this.state.videos } />
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App/>,document.querySelector('.container'));
