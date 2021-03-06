class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      idx: 0,
      text: '',
      videos: window.exampleVideoData
    };

    this.handleClick = this.handleClick.bind(this);
    this.onVideoClick = this.onVideoClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onVideoClick(index) {
    this.setState(function(){
      return {
        idx: index
      };
    });
  } // End of onVideoClick

  handleChange(event) {
    this.setState({ text: event.currentTarget.value });
    this.getYouTubeVideos(event.currentTarget.value);
  } // End of handleChange

  handleClick(event) {
    let searchResult = {
      key: window.YOUTUBE_API_KEY,
      query: this.state.text,
      max: 5
    };

    // Set this.state.videos to fetchedVideos
    let updateVideos = function(fetchedVideos) {
      this.setState({ videos: fetchedVideos })
    }

    updateVideos = updateVideos.bind(this);

    searchYouTube(searchResult, updateVideos);
  } // End of handleClick

  getYouTubeVideos(query) {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videos: videos
      })
    })
  } // End of getYouTubeVideos

  render() {
    return (
      <div>
        <Nav text={this.state.text} updateText={this.handleChange} clicker={this.handleClick}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.videos[this.state.idx]}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} clicker={this.onVideoClick}/>
        </div>
      </div>  
    );
  }

  componentDidMount() {
    this.getYouTubeVideos('duke basketball');
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;