var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;
function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
} 

recognition.onresult = function(e){
    console.log(e);
    var content = e.results[0][0].transcript;
    console.log(content);

    document.getElementById("textbox").innerHTML = content;
    
    if(content == "take my selfie"){
        console.log("taking selfie......");
        speak();
    }else{
        speak1();
    }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie";
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snap();
        save();
    },5000)
}

function speak1(){
    var synth = window.speechSynthesis;
    speak_data = "plz say take my selfie";
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
}

Webcam.set({
    width : 360,
    height :  250,
    image_format : 'png',
    png_quality : 100
});
camera = document.getElementById("camera"); 

function take_snap(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie" src="'+data_uri+'"/>';
    })
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie").src;
    link.href = image;
    link.click();
}