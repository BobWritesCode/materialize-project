$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.datepicker').datepicker({
      format: "dd mmm, yyyy",
      i18n: {done: "Select"}
    });
    $('select').formSelect();
  });