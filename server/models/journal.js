
// Import the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var journalSchema = new Schema({
    
    journalId: {type:String, required: true, unique: true},
    journalName: {type:String},
    userId: {type:String},
    date: {type:Date},
    journalEntry: {
        entryId: {type:String, required: true, unique: true},
        content: {type:String},
        date: {type: Date},
        hidden:{type: Boolean},
        deleted: {type: Boolean},
        entryHistory: {
            historyId: {type:String, required: true, unique: true},
            date: {type: Date},
            content:{type:String},
            hidden: {type: Boolean},
            deleted: {type: Boolean},
        }    
    }
});
var Journal = mongoose.model('Journal', journalSchema);
module.exports = Journal;