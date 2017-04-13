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
      done: 0
    };

    this.onVideoClick = this.onVideoClick.bind(this);
  }

  onVideoClick(index) {
    // alert(index)
    this.setState(function(){
      return {
        done: index
      };
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={window.exampleVideoData[this.state.done]}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={window.exampleVideoData} clicker={this.onVideoClick}/>
        </div>
      </div>  
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
