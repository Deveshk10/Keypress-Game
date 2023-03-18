$("body").keypress(function (event) {
    $("h2").html(`${event.key} key`)
})