let favoriteMovie = "Star Wars";
let moviePhrase;
switch (favoriteMovie) {
  case "Jaws":
    moviePhrase = "You're gonna need a bigger boat.";
    alert(moviePhrase);
    break;
  case "The Shining":
    moviePhrase = "All work and no play makes Jack a dull boy.";
    alert(moviePhrase);
    break;
  case "Star Wars":
    moviePhrase = "Do. Or do not. There is no try";
    alert(moviePhrase);
    break;
  case "Forest Gump":
    moviePhrase = "Life was like a box of chocolates.";
    alert(moviePhrase);
    break;
  case "Back to the Future":
    moviePhrase = "Where we're going, we don't need roads.";
    alert(moviePhrase);
    break;
  default:
    alert("Great movie choice!")
}