const mongoose = require("mongoose");

const suggestionschema = mongoose.Schema({
    name : {type : String, default :'익명의 사용자'},
    content : {type : String, required : true},
    createdat : {type : Date, default : Date.now}

});

module.exports = mongoose.model("Suggestion", suggestionschema)