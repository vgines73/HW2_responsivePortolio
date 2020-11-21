window.addEventListener("DOMContentLoaded", function() {

    var form = document.getElementById("my-form");
    var button = document.getElementById("submit-button");
    var status = document.getElementById("form-status");

    function sent() {
        form.reset();
        button.style = "display: none";
        status.innerHTML = "Much Appreciated!";
    }

    function error() {
        status.innerHTML = "Something went wrong!"
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var data = new FormData(form);
        ajax(form.method, form.action, data, sent, error);
    });
});

function ajax(method, url, data, sent, error) {
    var xhr = XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            sent(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xh.responseType);
        }
    };
    xhr.send(data);
}