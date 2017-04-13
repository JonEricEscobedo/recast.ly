var searchYouTube = (options, callback) => {
  // TODO
  // var searchTerm;

  // $('#search-button').on('click', function(){
  //   searchTerm = $('#search-term').val();
  // });
  var key = options.key;
  var query = options.query;
  var max = options.max;
  console.log(options);
  $.ajax({
  	type: 'GET',
  	url: 'https://www.googleapis.com/youtube/v3/search',
  	dataType: 'json',
  	data: {
      part: 'snippet',
      order: 'rating',
      q: query,
      type: 'video',
      maxResults: max,
      videoDefinition: 'high',
      videoEmbeddable: 'true',
      key: key
    },
  	success: function(data) {
      // console.log('this worked', data.items);
      callback(data.items)
  	}
  })
};

window.searchYouTube = searchYouTube;

// AIzaSyDXVbT0Qo5HWxlaxGywRPugi5OO9n34o38