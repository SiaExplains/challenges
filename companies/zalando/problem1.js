'use strict';

/* global $, jQuery */

function solution() {
    $('.comment-list').each(function(index, element) {
        let current = $(this);
        let dataCount = current.attr('data-count');
        fetchDataIntoElement(current, dataCount);
    });
}

function fetchDataIntoElement(element, count) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `https://www.example.com/comments?count=${count}`);
    xhr.send();
    element.text(`Loading...`);
    xhr.onload = function() {
        if (xhr.status != 200) {
            element.html('');
        } else {
            //  xhr.response.map(d => {
            //
            // });
            element.text(``);
            let currentData = JSON.parse(xhr.response);
            currentData.map(d => {
                createComment(element, d);
            });
        }
    };

    xhr.onprogress = function(event) {
        element.text(`Loading...`);
    };

    xhr.onerror = function() {
        element.text(``);
    };
}

function createComment(element, data) {
    let item = document.createElement('div');
    $(item).addClass('comment-item');

    let itemUserName = document.createElement('div');
    $(itemUserName)
        .addClass('comment-item__username')
        .text(`${data.username}`);

    let itemMessage = document.createElement('div');
    $(itemMessage)
        .addClass('comment-item__message')
        .text(`${data.message}`);

    $(itemUserName).appendTo(item);
    $(itemMessage).appendTo(item);

    $(item).appendTo(element);
}

// $(document).ready(function() {
//     solution();
// });
