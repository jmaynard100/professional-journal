
// Import the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var journalSchema = new Schema({
    
    
    journalName: {type:String},
    userId: {type:String},
    date: {type:Date},
    journalSummary: {type:String},
    journalEntry: {
        title:{type:String, required: true},
        content: {type:String},
        originalDate: {type:Date},
        date: {type: Date},
        hidden:{type: Boolean},
        deleted: {type: Boolean},
        entryHistory: {
            date: {type: Date},
            content:{type:String},
            hidden: {type: Boolean},
            deleted: {type: Boolean},
            reasonSummary: {type:String},
        }    
    }
});
var Journal = mongoose.model('Journal', journalSchema);
module.exports = Journal;