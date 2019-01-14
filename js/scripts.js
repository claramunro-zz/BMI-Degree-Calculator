$(document).ready(function() {
    $('#frmBMI').submit(function(e) {
      e.preventDefault();

        var heightFt = $('input[name="height_ft"]').val(),
            heightIn = $('input[name="height_in"]').val(),
            height = parseFloat(heightFt * 12) + parseFloat(heightIn);
            weight = $('input[name="weight"]').val(),
            BMI = calculateBMI(height, weight);

        $('#response').text('Your BMI is '+BMI);
    });
});


function calculateBMI(height, weight) {
	var BMI = (weight / (height * height)) * 703

	return Math.round(BMI * Math.pow(10, 2)) / Math.pow(10, 2);
}



$(document).ready(function() {
    $('#frmDegOne').submit(function(e) {
      e.preventDefault();

      var Fvalue = $('input[name="F_deg"]').val();
      var Cvalue = (Fvalue-32) * (5/9);

      //  (32°F − 32) × 5/9 = 0°C -- converts F to C
      $('#response1').text('C is '+Cvalue);
    });
});


$(document).ready(function() {
    $('#frmDegTwo').submit(function(e) {
      e.preventDefault();

      var Cvalue2 = $('input[name="C_deg"]').val();
      var Fvalue2 = (Cvalue2 * (9/5)) + 32;

      // (0°C × 9/5) + 32 = 32°F -- converts C to F
      $('#response2').text('F is '+Fvalue2);

    });
});
