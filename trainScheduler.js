var config = {
    apiKey: "AIzaSyC_gOqgT7yGJA25zpWiCM9lQhorhsliG_Y",
    databaseURL: "https://train-scheduler-f6998.firebaseio.com/",
    storageBucket: "gs://train-scheduler-f6998.appspot.com"
};

firebase.initializeApp(config);

Var trainData = firebase.database();

$("#trainInfo-btn").on(click, function(){
    var train = $("#trainInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var trainTime = $("#trainTimeInput").val().trim();
    var frequency = $("#frequencyInput").val().trim();

    var newTrainInfo = {
        trainName: train,
        destination: destination,
        firstTrainTime: trainTime,
        frequency: frequency,
    };

    trainData.ref().push(newTrainInfo);
});