"use strict";
var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  title: String
});

UserSchema.virtual("date")
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model("User", UserSchema);
