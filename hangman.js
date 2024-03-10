let randomWord = "";
$(document).ready(function () {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let html = "";
  for (let i = 0; i < alphabet.length; i++) {
    html += "<button class='keybtn'> " + alphabet[i] + " </button>";
  }
  $("#keyboard").append(html);

  let catagoryArray = [
    {
      category: "Fruit",
      words: ["PEAR", "PEACH", "LEMON", "GRAPE", "FIG", "ORANGE", "MANGO"],
    },
    {
      category: "Animal",
      words: ["DOG", "CAT", "LION", "TIGER", "HORSE", "DONKEY", "COW"],
    },
    {
      category: "Country",
      words: ["BRAZIL", "EGYPT", "UKRAIN", "USA", "MALI", "NEPAL", "PERU"],
    },
  ];

  $(".catagory").click(function () {
    let catName = this.textContent;
    $(this).css("background-color", "rgb(182, 182, 213)");

    for (let obj of catagoryArray) {
      if (obj.category == catName) {
        let randomIdx = getRandomNumber(obj.words.length);
        randomWord = obj.words[randomIdx];
        console.log(randomWord);
      }
    }
    dashLine(randomWord.length);
    let count = 0;
    let result = 0;

    $(".keybtn").click(function () {
      let clickedLetter = $(this).text().trim();
      $(this).css("opacity", "0.3");
      count++;

      for (let i = 0; i < randomWord.length; i++) {
        if (clickedLetter === randomWord[i]) {
          console.log(result);
          count--;
          result++;
          let clickedElement = $(this);
          let targetElement = $("#position" + i);

          //shifting clicked element to target position
          shiftPositin(clickedElement, targetElement);
          $(this).css("position", "relative");
          // setInterval(timerfunc, 1000);
        }
        if (result === randomWord.length) {
          setTimeout(() => {
            $(".form").css("display", "none");
            $("#gameOver").html("you win!!");
            $("#gameOver").css("display", "block");
          }, 2000);
        }
      }

      scoreCalculation(count);
    });
  });

  function scoreCalculation(score) {
    switch (score) {
      case 1:
        $("#head").css("visibility", "visible");
        break;
      case 2:
        $("#head").css("visibility", "visible");
        $("#body").css("visibility", "visible");
        break;
      case 3:
        $("#head").css("visibility", "visible");
        $("#leftarm").css("visibility", "visible");
        $("#body").css("visibility", "visible");

        break;
      case 4:
        $("#head").css("visibility", "visible");
        $("#leftarm").css("visibility", "visible");
        $("#body").css("visibility", "visible");
        $("#rightarm").css("visibility", "visible");
        break;
      case 5:
        $("#head").css("visibility", "visible");
        $("#leftarm").css("visibility", "visible");
        $("#body").css("visibility", "visible");
        $("#rightarm").css("visibility", "visible");
        $("#rightleg").css("visibility", "visible");
        break;
      case 6:
        $("#head").css("visibility", "visible");
        $("#leftarm").css("visibility", "visible");
        $("#body").css("visibility", "visible");
        $("#rightarm").css("visibility", "visible");
        $("#leftleg").css("visibility", "visible");
        $("#rightleg").css("visibility", "visible");
        break;
      case 7:
        $(".form").css("display", "none");
        $("#gameOver").css("display", "block");
        break;

      default:

      // code block
    }
  }
  function winFun(score) {
    if (score === randomWord.length) {
      $(".form").css("display", "none");
    }
  }

  // code bloc
  function shiftPositin(element1, element2) {
    let horizontalPos1 = element1.position().left;
    let horizontalPos2 = element2.position().left;
    let verticalPos1 = element1.position().top;
    let verticalPos2 = element2.position().top;
    $(element1).css("opacity", "1.3");
    $(element2).css("opacity", "1.3");

    if (horizontalPos1 < horizontalPos2) {
      element1.animate(
        {
          left: horizontalPos2 - horizontalPos1,
        },
        400
      );
    } else {
      element1.animate(
        {
          right: horizontalPos1 - horizontalPos2,
        },
        400
      );
    }
    if (verticalPos1 < verticalPos2) {
      element1.animate(
        {
          bottom: verticalPos1 - verticalPos2,
        },
        400
      );
    } else {
      element1.animate(
        {
          top: verticalPos2 - verticalPos1,
        },
        400
      );
    }
  }
});

let imageIndex = 0;
let images = [
  "1.png",
  "3.png",
  "2.png",
  "4.png",
  "1.png",
  "3.png",
  "2.png",
  "4.png",
  "1.png",
  "3.png",
  "2.png",
  "4.png",
  "1.png",
  "3.png",
  "2.png",
  "4.png",
  "1.png",
  "3.png",
  "2.png",
  "4.png",
  "15.png",
  "16.png",
  "17.png",
  "18.png",
];
let timer = setInterval(timerFunc, 400);

let left = 0;
let isEndReached = false;
function timerFunc() {
  if (left > 350) {
    left = 0;
    isEndReached = true;
  }

  $("#image").attr("src", images[imageIndex]);
  imageIndex = (imageIndex + 1) % images.length;
  $("#image").css("margin-left", left + "px");
  left += 15;

  if (imageIndex === 0 && isEndReached) {
    clearInterval(timer);
    setTimeout(() => {
      timer = setInterval(timerFunc, 400);
      isEndReached = false;
    }, 5000); // Delay for 2 seconds at the end of the slideshow
  }
}

function getRandomNumber(length) {
  return Math.floor(Math.random() * length);
}

function dashLine(len) {
  let html = "";
  for (let i = 0; i < len; i++) {
    html += "<label id = 'position" + i + "'>&mdash;</label>";
  }
  $("#inputLine").html(html);
}
