'use strict';

(function() {
    var i = 0;
    window.service.photo.getPhotos({
        // limit: document.getElementById('movies').dataSet.length
    }).then(function(responses) {
        console.log(responses);
        var html = responses.reduce(function(total, response, index, list) {
            console.log(arguments);

            if (i % 3 == 0) {
                i = i + 1;
                return total +
                    '<div class="col-sm-12">' +
                    '<div class="thumbnail" data-toggle="modal" data-target="#myModal">' +
                    '<img src="' + response.images.lg[0] + '" alt="Super Trolley">' +
                    '<div class="caption">' +
                    '<h5 class="truncate">' + response.name + '</h5>' +
                    '<a href="#" class="btn btn-default pull-right" role="button">' + response.price +
                    response.currency + '</a>' +
                    '</div>' +
                    '<a href="#" class="btn btn-default likesFeed" role="button">' + response.likes + '</a>' +
                    '</div>' +
                    '</div>';
            } else {
                i = i + 1;
                return total +
                    '<div class="col-sm-6">' +
                    '<div class="thumbnail" data-toggle="modal" data-target="#myModal">' +
                    '<img src="' + response.images.lg[0] + '" alt="Super Trolley">' +
                    '<div class="caption">' +
                    '<h5 class="truncate">' + response.name + '</h5>' +
                    '<a href="#" class="btn btn-default pull-right" role="button">' + response.price +
                    response.currency + '</a>' +
                    '</div>' +
                    '<a href="#" class="btn btn-default likesFeed" role="button">' + response.likes + '</a>' +
                    '</div>' +
                    '</div>';
            }
        }, '');
        $('.feed .row').append(html);
        // $('.javi div').append(html);


    }).catch(function() {
        console.log(arguments);
    });

})();

(function() {
    window.service.photo.getPhotos({
        // limit: document.getElementById('movies').dataSet.length
    }).then(function(responses) {
        console.log(responses);
        var html = responses.reduce(function(total, response, index, list) {
            console.log(arguments);
            return total +
                '<div class="col-sm-3">' +
                '<div class="thumbnail" data-toggle="modal" data-target="#myModal">' +
                '<img src="' + response.images.lg[0] + '" alt="Super Trolley">' +
                '<div class="caption">' +
                '<h5 class="truncate">' + response.name + '</h5>' +
                '<a href="#" class="btn btn-default pull-right" role="button">' + response.price +
                response.currency + '</a>' +
                '</div>' +
                '<a href="#" class="btn btn-default likesFeed" role="button">' + response.likes + '</a>' +
                '</div>' +
                '</div>';
        }, '');
        $('.extra .yep').append(html);

        // $('.javi div').append(html);


    }).catch(function() {
        console.log(arguments);
    });

})();
