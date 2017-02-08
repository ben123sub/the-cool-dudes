$(document).ready( function(){
  $("button").click( function(){
      var animal; 
      animal="Ancient Psychic War Elephant";
      var guess=$("input").val();
      if (animal ==guess ){
          $("p").html( "Hello");
      }
      
  });
});
