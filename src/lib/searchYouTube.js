var searchYouTube = (options, callback) => {
  var key = options.key;
  var query = options.query;
  var max = options.max;

  $.ajax({
  	type: 'GET',
  	url: 'https://www.googleapis.com/youtube/v3/search',
  	dataType: 'json',
  	data: {
      part: 'snippet',
      q: query,
      type: 'video',
      maxResults: max,
      videoDefinition: 'high',
      videoEmbeddable: 'true',
      relevanceLanguage: 'en',
      key: key
    },
  	success: function(data) {
      // console.log('this worked', data.items);
      callback(data.items)
  	}
  })
};

window.searchYouTube = searchYouTube;

