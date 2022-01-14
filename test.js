(function() {
  'use strict';
  kintone.events.on([
    'app.record.edit.change.work_date'
    ], function(event) {
      console.log("testing");
      var new_date = moment(event.record.work_date.value).clone().startOf('month').format('YYYY-MM-DD');
      event.record.work_date.value = new_date;
      return event;
  });
})();
