(function () {
    for (var ii=0 ; ii<names.length; ii=ii+1) {
        //var first = names[ii].charAt(0).toLowerCase();
        //if(first==='j') {byeSpeaker.speak(names[ii]);} 
        //else {helloSpeaker.speak(names[ii]);}
        var first = names[ii].charAt(0);
        if(first==="j"||first==="J") {byeSpeaker.speak(names[ii]);} 
        else {helloSpeaker.speak(names[ii]);}
    }
})();