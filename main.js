function animal(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classify=ml5.soundClasifier('https://teachablemachine.withgoogle.com/models/Kotkb4syh/model.json',modelLoaded);
    }
function modelLoaded(){
    console.log("Model Loaded!")
    classifer.classify(audio, gotResult)
}
function gotResult(error, results)