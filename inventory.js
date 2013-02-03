var Items = new Meteor.Collection("items");

if (Meteor.isClient) {
	Session.set("new", "false");
	Session.set("edit", "false");
 	Meteor.subscribe("items");
 	
 	Template.items.item = function(){
 		if(Session.get("search")){
 			return Items.find({id:{$regex: Session.get("search"), $options: 'i' }}, {sort: {id: 1}});		
 			//{$regex: Session.get("search"), $options: 'i' }
 		}
 		else{
 			return Items.find({},{sort: {id: 1}});
 		}
 	}
 	Template.items.showItems = function(){
 		return (Session.get("new") === "false");
 	}
 	
 	
 	Template.item.events = {
 		"click #remove": function(){
 			Items.remove({_id:this._id});
 		}
 	}
 	Template.item.edit = function(){
 		return (Session.get("edit") === "true");
 	}
 	
 	
 	Template.search.events = {
		"submit": function(){
			Session.set("new", "false");
			Session.set("search", $('#search').val());
			Session.set("edit", "false");
			console.log(Session.get("search"));
			$('#search').val("");
		},
		"click #clear": function(){
			Session.set("new", "false");
			Session.set("search", "");
			Session.set("edit", "false");
			console.log("clear");
		},
		"click #new": function(){
			Session.set("new", "true");
			Session.set("edit", "false");
			console.log("new");
		},
		"click #edit": function(){
			if(Session.get("edit") === "false")
				Session.set("edit", "true");
			else
				Session.set("edit", "false");
			console.log("edit");
		}
	}
 	
 	
 	
 	Template.insert.showNew = function(){
		return (Session.get("new") === "true");
 	}
 	Template.insert.events = {
		"click #add": function(){
			Items.insert({name:$('#name').val(),description:$('#desc').val(),id:$('#id').val()});
			Session.set("new", "false");
			Session.set("search", $('#id').val());
		}
	}
}

if (Meteor.isServer) {
  Meteor.startup(function () {
   	Meteor.publish("items", function(){
   		return Items.find({});
   	});
  });
}
