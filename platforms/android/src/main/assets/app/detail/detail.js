var observableArray = require("data/observable-array");
var http = require("http");
var observableModule = require("data/observable");
var pageData = new observableModule.Observable();
var members = require("../officials.js");
members = members.members;
var frames = require("ui/frame");



exports.loaded = (args) => {
    var page = args.object;

    var detailData = page.navigationContext;
    var memberList = new observableArray.ObservableArray([]);
    for (var i = 0; i< members.length; i++) {
		var member = { name: members[i].name, title: members[i].title, img: members[i].image } //http images were blocked for security reasons so you needed to config a thing in info.plist
		memberList.push(member);
	}
    pageData.set("memberList", memberList);
    pageData.set("id",detailData.id);
    // it links an xml "beerList" variable to a js beerList variable
    page.bindingContext = pageData;
};

exports.getDetails = (detailData) => {
	for (var i = 0; i< members.length; i++) {
		if(members[i].name)
	}
};

















exports.back = () => {
	frames.topmost().navigate("/list/list");
};