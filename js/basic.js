$(document).ready(function(){
    $("#nav #navHome a").click(function() {
        $("#navHome").addClass("current");
        $("#navAbout").removeClass("current");
        $("#navResume").removeClass("current");
        $("#navWork").removeClass("current");
        $("#navContact").removeClass("current");
    });
    $("#nav #navAbout a").click(function() {
        $("#navAbout").addClass("current");
        $("#navHome").removeClass("current");
        $("#navResume").removeClass("current");
        $("#navWork").removeClass("current");
        $("#navContact").removeClass("current");
    });
    $("#nav #navResume a").click(function() {
        $("#navResume").addClass("current");
        $("#navHome").removeClass("current");
        $("#navAbout").removeClass("current");
        $("#navWork").removeClass("current");
        $("#navContact").removeClass("current");
    });
    $("#nav #navWork a").click(function() {
        $("#navWork").addClass("current");
        $("#navHome").removeClass("current");
        $("#navAbout").removeClass("current");
        $("#navResume").removeClass("current");
        $("#navContact").removeClass("current");
    });
    $("#nav #navContact a").click(function() {
        $("#navContact").addClass("current");
        $("#navHome").removeClass("current");
        $("#navAbout").removeClass("current");
        $("#navResume").removeClass("current");
        $("#navWork").removeClass("current");
    });
}); 

