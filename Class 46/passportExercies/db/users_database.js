var records = [
    { id: 1, username: 'Tom', cell: '212-767-3019',  admin: true, password: 'iamtom', displayName: 'Tom', emails: [ { value: 'tom@example.com' } ] }
  , { id: 2, username: 'Jane', cell: '908-445-8927',  admin: true, password: 'iamjane', displayName: 'Jane', emails: [ { value: 'jane@example.com' } ] },
  { id: 3, username: 'Laura', cell: '908-445-8927',  admin: false, password: 'iamlaura', displayName: 'Laura', emails: [ { value: 'laura@example.com' } ] }
];

exports.findById = function(id, cb) {
  process.nextTick(function() {
    var idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
}

exports.findByUsername = function(username, cb) {
  process.nextTick(function() {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}
