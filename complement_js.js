
function complement_generator() {
  var complement_list = ["You are the most beautiful person that I know.",
                      "You are the sunshine of my life.",
                      "Holy hell you're attractive!!!",
                      "Are your parents models?",
                      "You are the most wonderful person alive.",
                      "You make my world go round",
                      "You are so friendly :)",
                      "Wow you're cute AND nice??",
                      "I know there's an afterlife because there's an angel reading this",
                      "You're awesome!!"]
  var complement_index = Math.ceil(10 * (Math.random()))
  var temp = complement_list[complement_index]
  document.getElementById("complement_text").innerHTML = complement_list[complement_index];
  console.log(temp)
};

document.getElementById("demo").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}

// document.getElementById("complement_button").onclick = function() {complement_generator()};
