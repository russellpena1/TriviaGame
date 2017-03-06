$(document).ready(function(){
  
  $("#start-button").click(function(){
    
    var startNumber = 60;
   
    $("#start-button").on("click", start);
    
    $("#submit").on("click", finish);  
    
    $("#restart").on("click", restart);
    
    function start(){
      
      counter = setInterval(timer, 1000);
      
    }
    
    function timer(){
      
      startNumber--
      
      $("#show-number").html("<h2>" + startNumber + "</h2>" );
      
      if (startNumber === 0){
        
        stop();
      
      }
    }
    
    start();
  
  });
});