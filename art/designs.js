// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



// Your code goes here!

let color,height,width;
$("#sizePicker").submit(function(e){
    e.preventDefault();
    //call make grid()
    makeGrid();
});
function makeGrid() {
    $('tr').remove();
    //get Grid sizes
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    for (let r = 1; r <= height; r++) {
        $("#pixelCanvas").append('<tr id=table' + r + '></tr>');
        for (let c = 1; c <= width; c++) {
            $("#table" + r).append('<td></td>');
        }
    }
    $('td').click(function addColor(){
    //select your color value
    color = $('#colorPicker').val();
        if($(this).attr('style')){
            $(this).removeAttr('style');
        }else{
            $(this).attr('style', 'background-color:' + color);
        }
    });
}
