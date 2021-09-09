//custom functions here prismic Reflections
//date picker start
if (top.location != location) {
    top.location.href = document.location.href;
}
$(function () {
    window.prettyPrint && prettyPrint();
    $('.default-date-picker').datepicker({
        format: 'dd-mm-yyyy',
        autoclose: true
    });
    $('.default-year').datepicker({
        format: 'yyyy',
        autoclose: true,
        minViewMode: "years"
    });

    $('.default-months').datepicker({
        format: 'MM',
        autoclose: true,
        minViewMode: "months"
    });
    
    $('.multidate-picker').datepicker({
        format: 'mm-dd-yyyy',
        autoclose: false,
        multidate: true
    });      
});
//date picker end