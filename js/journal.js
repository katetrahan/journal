function Entry(entry) {
  this.entry = entry;
}

Entry.prototype.wordCount = function(entry) {
  var output = entry.split("");
  return output.length;
};


exports.entryModule = Entry;
