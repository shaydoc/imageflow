
//Web Service Definitions
amplify.request.define("flickr-api", "ajax", {
    url: "http://api.flickr.com/services/feeds/photos_public.gne?tags=vintage&format=json",
    dataType: "jsonp"
});

function jsonFlickrFeed(data) {
    
    //Get the Data and update the DOM
    var viewModel;
    viewModel = ko.mapping.fromJS(data);
    ko.applyBindings(viewModel);

    //Load Image Flow
    var domReady = function (handler) { domReadyEvent.add(handler); };
    domReadyEvent.init();
    var instanceOne = new ImageFlow();
    instanceOne.init({ ImageFlowID: 'myImageFlow' });
   
}

$(document).ready(function () {
    //Using Jquery
    (function ($) {
        //GET SOME IMAGES
        amplify.request("flickr-api");
    })(jQuery);

});

