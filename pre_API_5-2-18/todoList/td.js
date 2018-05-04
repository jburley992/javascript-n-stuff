$("input").keypress( function(e){
    if(e.which === 13){
        $("ul").append('<li><span class="delete"><i class="fa fa-trash"></i> </span>'  + this.value + '</li>');
        $(this).val("");
      
    }
    
} );

//We can only add listeners on items that already exist, when
// code is ran for the first time

//The li argument specifies that we should only
// be listening when that child object is clicked
$("ul").on("click", "li", function(){
    $(this).toggleClass("crossedOff");
})


//On will add click listeners for items after they are created
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$(".fa-plus").click(function(){
    $("input").fadeToggle();
})