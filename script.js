function push(){
    Push.create("Salmon Code", {
	body: "お前は人生に負けてる",
	icon: "",
	tag: "myTag",
	timeout: 5000,
	vibrate: [100, 100, 100],
	onClick: function(e){
		console.log("onClick", e);
	},
	onShow: function(e){
		console.log("onShow", e);
	},
	onClose: function(e){
		console.log("onClose", e);
	},
	onError: function(e){
		console.log("onError", e);
	}
});
}