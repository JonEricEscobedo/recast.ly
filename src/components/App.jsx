// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={window.exampleVideoData[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={window.exampleVideoData}/>
//     </div>
//   </div>asdfasdf
// );

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
    // alert(index)
    this.setState(function(){
      return {
        idx: index
      };
    });
  }

  handleChange(event) {
    this.setState({ text: event.currentTarget.value })
    searchYouTube(searchResult, updateVideos);

  }

  handleClick(event) {
    let searchResult = {
      key: 'AIzaSyDXVbT0Qo5HWxlaxGywRPugi5OO9n34o38',
      query: this.state.text,
      max: 5
    };

    // Set this.state.videos to fetchedVideos
    let updateVideos = function(fetchedVideos) {
      console.log(this);
      this.setState({ videos: fetchedVideos })
    }

    updateVideos = updateVideos.bind(this);

    searchYouTube(searchResult, updateVideos);
  }

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
    let that = this;
    this.props.searchYouTube({key: 'AIzaSyDXVbT0Qo5HWxlaxGywRPugi5OO9n34o38', query: 'tarheel', max: 5}, function(fetchedVideos) {
      console.log(this);
      that.setState({ videos: fetchedVideos })
    })
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;