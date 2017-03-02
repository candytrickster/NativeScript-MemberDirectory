var observableArray = require("data/observable-array");
var http = require("http");
var observableModule = require("data/observable");
var pageData = new observableModule.Observable();
var members = require("../officials.js");
members = members.members;
var frames = require("ui/frame");
var official = {};


exports.loaded = (args) => {
    var page = args.object;

    var passedData = page.navigationContext;
    getDetails(passedData);
    pageData.set("name",official.name);
    pageData.set("title",official.title);
    pageData.set("img",official.image);
    pageData.set("phone",official.phone);

    page.bindingContext = pageData;
};

function getDetails(passedData) {
	for (var i = 0; i< members.length; i++) {
		if(members[i].id == passedData.id) {
			official = members[i];
			break;
		}
	}
};

















exports.back = () => {
	frames.topmost().navigate("/list/list");
};