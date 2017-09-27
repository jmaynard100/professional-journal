
// Import the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var journalSchema = new Schema({
    
    _id: {type:String},
    journalName: {type:String},
    userId: {type:String},
    date: {type:Date},
    journalSummary: {type:String},
    journalEntry: [{
        title:{type:String},
        content: {type:String},
        createdAt: {type:Date},
        lastUpdated: {type: Date},
        hidden:{type: Boolean},
        deleted: {type: Boolean},
        entryHistory: [{
            date: {type: Date},
            content:{type:String},
            hidden: {type: Boolean},
            deleted: {type: Boolean},
            reasonSummary: {type:String},
        }]    
    }]
});
var Journal = mongoose.model('Journal', journalSchema);
module.exports = Journal;