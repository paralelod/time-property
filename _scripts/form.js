

    // replace "ss-submit" with the ID of your submit button
    document.getElementById("ss-submit").addEventListener("click", function(){
        // adds a delay because the results page loads before the form has a chance to submit
        setTimeout(function() {  
        // replace "ss-form" with the ID of your form
        document.getElementById("ss-form").reset();
        console.log('passaaaaa')
        }, 1000);

        $( "#form-success-msg" ).fadeIn(500).removeClass( "hide" );
        
        window.setTimeout(function(){
          $( "#form-success-msg" ).addClass('hide');
        }, 5000);
      });
      document.getElementById("close-msg").addEventListener("click", function(){
        $( "#form-success-msg" ).fadeOut(500).addClass( "hide" );
      });
    









   // replace "ss-submit" with the ID of your submit button
   document.getElementById("ss-submit-2").addEventListener("click", function(){
    // adds a delay because the results page loads before the form has a chance to submit
    setTimeout(function() {  
    // replace "ss-form" with the ID of your form
      document.getElementById("ss-form-2").reset();
      $( "#form-success-msg-2" ).fadeIn(500).removeClass( "hide" );
    }, 1000);
    // window.setTimeout(function(){
    //   $( "#form-success-msg" ).addClass('hide');
    // }, 5000);
  });
  document.getElementById("close-msg-2").addEventListener("click", function(){
    $( "#form-success-msg-2" ).fadeOut(500).addClass( "hide" );
  });








//   $(document).ready(function(){
//     $('#ss-submit').attr('disabled',true);

//     // $('#entry_1900922270').keyup(function(){
//     //     if($(this).val().length !=0)
//     //         $('#ss-submit').attr('disabled', false);            
//     //     else
//     //         $('#ss-submit').attr('disabled',true);
//     // });
// });




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

