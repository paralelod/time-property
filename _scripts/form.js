

    // replace "ss-submit" with the ID of your submit button
  document.getElementById("ss-submit").addEventListener("click", function(){
      // adds a delay because the results page loads before the form has a chance to submit

      
      setTimeout(function() {  
      // replace "ss-form" with the ID of your form
      document.getElementById("ss-form").reset();
      $( "#success" ).fadeIn(500).removeClass( "hide" );
      }, 1000);
      
      setTimeout(function() {  
        // replace "ss-form" with the ID of your form
        // document.getElementById("ss-form").reset();
        $( "#success" ).fadeIn(500).addClass( "hide" );
        }, 5000);
        



    });
   
    
    document.getElementById("close-msg").addEventListener("click", function(){
      $( "#success" ).fadeOut(500).addClass( "hide" );
    });
    

    $("#ss-form")

     .on("invalid", function(ev) {
    ev.preventDefault();
    console.log("Submit for form id "+ev.target.id+" intercepted");
  });

    
   // replace "ss-submit" with the ID of your submit button
   document.getElementById("ss-submit-2").addEventListener("click", function(){
    // adds a delay because the results page loads before the form has a chance to submit
    setTimeout(function() {  
    // replace "ss-form" with the ID of your form
      document.getElementById("ss-form-2").reset();
      $( "#success-2" ).fadeIn(500).removeClass( "hide" );
    }, 1000);
    // window.setTimeout(function(){
    //   $( "#form-success-msg" ).addClass('hide');
    // }, 5000);
  });


  document.getElementById("close-msg-2").addEventListener("click", function(){
    $( "#success-2" ).fadeOut(500).addClass( "hide" );
  });


  
var fullName = $("#entry_1900922270");
var eMail = $("#entry_1873196811");
var phone = $("#entry_704361778");

  $(document).ready(function(){
    $("#ss-submit").css({ opacity: 0.1 });
    $('#ss-submit').attr('disabled',true);

    $('#ss-form input').keyup(function(){
        if($("#ss-form #entry_1873196811").val().length >=3 && $("#ss-form #entry_704361778").val().length >=3 && $("#ss-form #entry_1900922270").val().length >=3 ){
          $("#ss-submit").css({ opacity: 1 });
          $('#ss-submit').attr('disabled', false);
        }              
        else{
          $("#ss-submit").css({ opacity: 0.1 });
          $('#ss-submit').attr('disabled',true);}
    });

});


$(document).ready(function(){
  $("#ss-submit-2").css({ opacity: 0.1 });
  $('#ss-submit-2').attr('disabled',true);

  $('#ss-form-2 input').keyup(function(){
      if($("#ss-form-2 #entry_1900922270").val().length >=3 && $("#ss-form-2 #entry_1873196811").val().length >=3 && $("#ss-form-2 #entry_704361778").val().length >=3 ){
        $("#ss-submit-2").css({ opacity: 1 });
        $('#ss-submit-2').attr('disabled', false);
      }              
      else{
        $("#ss-submit-2").css({ opacity: 0.1 });
        $('#ss-submit-2').attr('disabled',true);}
  });

});





  // $(document)
  // // field element is invalid
  // .on("invalid.zf.abide", function(ev,elem) {
  //   console.log("Field id "+ev.target.id+" is invalid");
    
  // })
  // // field element is valid
  // .on("valid.zf.abide", function(ev,elem) {
  //   console.log("Field name "+elem.attr('name')+" is valid");
  // })
  // // form validation failed
  // .on("forminvalid.zf.abide", function(ev,frm) {
  //   console.log("Form id "+ev.target.id+" is invalid");
  // })
  // // form validation passed, form will submit if submit event not returned false
  // .on("formvalid.zf.abide", function(ev,frm) {
  //   console.log("Form id "+frm.attr('id')+" is valid");
  //   // ajax post form 
  // })
  // // to prevent form from submitting upon successful validation
  // .on("submit", function(ev) {
  //   ev.preventDefault();
  //   console.log("Submit for form id "+ev.target.id+" intercepted");
  // });

