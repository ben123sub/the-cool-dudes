$(document).ready( function(){
 
  $("button").click( function(){
      
      var animal; 
     animal="Ancient Psychic War Elephant";
      var guess=$("input").val();
      if (animal ==guess ){
       $("p").html( "eezy peezy livin breezy");
       $(".hint").hide();      
        
      };
      
  });

    
});
