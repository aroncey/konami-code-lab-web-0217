const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index = 0

  document.body.addEventListener('keydown', function(e){
    const key = parseInt(e.which || e.detail)

    if(code[index] === key){
      index++

        if(index === code.length-1){
          alert('congrats!')
          index = 0
        }
    }else{
      index = 0
    }
  })
}


// You'll want to attach an event listener to
// document.body and check for 'keydown' events.
// If the user enters this special code, alert() a
//  congratulatory message. But if they start entering
//  anything else anywhere along the way,
//  don't trigger anything out of the ordinary.
// When you're testing the code out,
// be sure to call init() to set everything up!


// Be aware that we're looking at both e.detail
// and e.which. In browsers nowadays, e.which is
// usually sufficient; however, I'll be honest
// with you: it's not universally supported,
// it's technically deprecated,
// and it doesn't work with our tests.
//  So check e.detail too, please. :)
// Also note that we're calling parseInt on the
// key value.
//  This is because the event handler
//  might pass us the string representation
//  of the number, which wouldn't work so well
//  with our comparisons.
