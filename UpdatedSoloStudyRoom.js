/* Fullscreen button starts here*/////////////////////////////////////////////////////////////////////////////
const fullscreenButtonn = document.getElementById('fullscreen');

fullscreenButtonn.addEventListener('click', toggleFullscreen);

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    // Enter fullscreen
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
  } else {
    // Exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}
/* Fullscreen button ends here*/////////////////////////////////////////////////////////////////////////////

/* Wallpaper button starts here*/////////////////////////////////////////////////////////////////////////////
var wallpaperButton = document.getElementById("wallpaper-button");
var wallpaperOptions = document.getElementById("wallpaper-options");
var video = document.getElementById('video');
var currentBackgrounds = {
  nature: 1,
  city: 1,
  anime: 1,
  room: 1
};

  function toggleWallpaperOptions() {
    wallpaperOptions.classList.toggle("show");
    }

    wallpaperButton.addEventListener("click", toggleWallpaperOptions);

    function changeBackground(type) {
        var videoSrc = '';

        if (type === 'nature') {
            videoSrc = 'nature' + currentBackgrounds.nature + '.mp4';
            currentBackgrounds.nature = (currentBackgrounds.nature % 10) + 1;
        } else if (type === 'city') {
            videoSrc = 'city' + currentBackgrounds.city + '.mp4';
            currentBackgrounds.city = (currentBackgrounds.city % 15) + 1;
        } else if (type === 'anime') {
            videoSrc = 'anime' + currentBackgrounds.anime + '.mp4';
            currentBackgrounds.anime = (currentBackgrounds.anime % 10) + 1;
        } else if (type === 'room') {
            videoSrc = 'room' + currentBackgrounds.room + '.mp4';
            currentBackgrounds.room = (currentBackgrounds.room % 12) + 1;
        }

  video.src = videoSrc;
};
/* Wallpaper button ends here*/////////////////////////////////////////////////////////////////////////////

/* Games button starts here*//////////////////////////////////////////////////////////////////////////////
var gamesButton = document.getElementById("game-button");
var gameOptions = document.getElementById("game-options");
var xoxButton = document.getElementById("xox-button");
var chessButton = document.getElementById("chess-button");
var hangmanButton = document.getElementById("hangman-button");

  gamesButton.addEventListener("click", function() {
      gameOptions.classList.toggle("show");
  });

  xoxButton.addEventListener("click", function() {
      gameOptions.classList.remove("show");
      startXOXGame();
  });

  chessButton.addEventListener("click", function() {
      gameOptions.classList.remove("show");
      startChessGame();
  });

  hangmanButton.addEventListener("click", function() {
      gameOptions.classList.remove("show");
      startHangManGame();
  });

function startXOXGame() {
    // babaguhin pa to pag marunong mag code ng laro
    alert("Starting XOX game...");
}

function startChessGame() {
    // babaguhin pa to pag marunong mag code ng laro
    alert("Starting Chess game...");
}

function startHangManGame() {
    // babaguhin pa to pag marunong mag code ng laro
    alert("Starting Hang Man game...");
};
/* Games button ends here*////////////////////////////////////////////////////////////////////////////////

/* Music button starts here*/////////////////////////////////////////////////////////////////////////////
var musicButton = document.getElementById("music-button");
var musicOptions = document.getElementById("music-options");
var musicPlayer = document.getElementById('song');
var playButton = document.getElementById('play');
var previousButton = document.getElementById('previous');
var nextButton = document.getElementById('next');
var lofiButton = document.getElementById('lofibeat-button');
var pianoButton = document.getElementById('pianomusic-button');
var jazzButton = document.getElementById('jazzmusic-button');
var ghibliButton = document.getElementById('studioghiblimusic-button');
var startTime = document.getElementById('start');
var endTime = document.getElementById('end');
var progress = document.getElementById('progress');
var trackTitle = document.getElementById('title');
var trackMusician = document.getElementById('musician');
var albumCover = document.getElementById('imagecd');

// Define an array of objects containing track details
var trackDetails = {
    lofi: [
      { title: "Lofi 1", musician: "ChillStudyBeats", image: "imagecd1.jpg" },
      { title: "Lofi 2", musician: "RelaxingBeats", image: "imagecd1.jpg" },
      { title: "Lofi 3", musician: "MellowVibes", image: "imagecd1.jpg" },
      { title: "Lofi 4", musician: "DreamyMelodies", image: "imagecd1.jpg" }
    ],
    piano: [
      { title: "Piano 1", musician: "PianoMaestro", image: "imagecd2.jpg" },
      { title: "Piano 2", musician: "ClassicalKeys", image: "imagecd2.jpg" },
      { title: "Piano 3", musician: "ElegantTouches", image: "imagecd2.jpg" }
    ],
    jazz: [
      { title: "Jazz 1", musician: "JazzMasters", image: "imagecd3.jpg" },
      { title: "Jazz 2", musician: "SmoothJazzBand", image: "imagecd3.jpg" }
    ],
    ghibli: [
      { title: "Ghibli 1", musician: "StudioGhibliFans", image: "imagecd4.jpg" },
      { title: "Ghibli 2", musician: "MelodicGhibli", image: "imagecd4.jpg" }
    ]
  };

function toggleMusicOptions() {
    musicOptions.classList.toggle("show");
}

musicButton.addEventListener("click", toggleMusicOptions);

function changeMusic(type, numTracks) {
    var audioSrc = '';
    var currentTrack = parseInt(musicPlayer.dataset.currentTrack);

    if (type !== musicPlayer.dataset.currentType) {
        currentTrack = 1;
        musicPlayer.dataset.currentType = type;
    } else {
        currentTrack = (currentTrack % numTracks) + 1;
    }

    audioSrc = type + currentTrack + '.mp3';
    musicPlayer.src = audioSrc;
    musicPlayer.dataset.currentTrack = currentTrack;
    musicPlayer.dataset.currentType = type;

      // Update track details
  var details = trackDetails[type][currentTrack - 1];
  trackTitle.textContent = details.title;
  trackMusician.textContent = details.musician;
  albumCover.src = details.image; // Update the image source

    playPause(); // Automatically start playing the new track
}

// Initialize the data attributes to keep track of the current track and type
musicPlayer.dataset.currentTrack = 1;
musicPlayer.dataset.currentType = 'lofi';

function playPause() {
    if (musicPlayer.paused) {
        musicPlayer.play();
        playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
        document.getElementById("imagecd").classList.add("play");
    } else {
        musicPlayer.pause();
        playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
        document.getElementById("imagecd").classList.remove("play");
    }
}

function updateTime() {
    var currentTime = musicPlayer.currentTime;
    var duration = musicPlayer.duration;
    var minutes = Math.floor(currentTime / 60);
    var seconds = Math.floor(currentTime % 60);
    var totalMinutes = Math.floor(duration / 60);
    var totalSeconds = Math.floor(duration % 60);

    startTime.textContent = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    endTime.textContent = totalMinutes + ':' + (totalSeconds < 10 ? '0' : '') + totalSeconds;

    var progressPercentage = (currentTime / duration) * 100;
    progress.value = progressPercentage;
}

function updateProgress() {
    var progressPercentage = progress.value;
    var duration = musicPlayer.duration;
    var currentTime = (progressPercentage / 100) * duration;
    musicPlayer.currentTime = currentTime;
}

musicPlayer.addEventListener('timeupdate', updateTime);
progress.addEventListener('input', updateProgress);

function previousPlay() {
    var currentTrack = parseInt(musicPlayer.dataset.currentTrack);
    var currentType = musicPlayer.dataset.currentType;
    var numTracks = trackDetails[currentType].length;

        // Set the track to the previous one
        currentTrack = ((currentTrack - 2 + numTracks) % numTracks) + 1;
        musicPlayer.dataset.currentTrack = currentTrack;
        

    switch (currentType) {
        case 'lofi':
            changeMusic('lofi', 4);
            break;
        case 'piano':
            changeMusic('piano', 3);
            break;
        case 'jazz':
            changeMusic('jazz', 2);
            break;
        case 'ghibli':
            changeMusic('ghibli', 2);
            break;
        default:
            break;
    }

    // Set the track to the previous one
    currentTrack = ((currentTrack - 2 + numTracks) % numTracks) + 1;
    musicPlayer.dataset.currentTrack = currentTrack;
    changeMusic(currentType, numTracks);
}

function nextPlay() {
    var currentTrack = parseInt(musicPlayer.dataset.currentTrack);
    var currentType = musicPlayer.dataset.currentType;

    switch (currentType) {
        case 'lofi':
            changeMusic('lofi', 4);
            break;
        case 'piano':
            changeMusic('piano', 3);
            break;
        case 'jazz':
            changeMusic('jazz', 2);
            break;
        case 'ghibli':
            changeMusic('ghibli', 2);
            break;
        default:
            break;
    }

    // Set the track to the next one
    currentTrack = (currentTrack % numTracks) + 1;
    musicPlayer.dataset.currentTrack = currentTrack;
    changeMusic(currentType, numTracks);
}

lofiButton.addEventListener("click", function() {
    changeMusic('lofi', 4);
    musicOptions.classList.remove("show"); // Hide music options
});

pianoButton.addEventListener("click", function() {
    changeMusic('piano', 3);
    musicOptions.classList.remove("show"); // Hide music options
});

jazzButton.addEventListener("click", function() {
    changeMusic('jazz', 2);
    musicOptions.classList.remove("show"); // Hide music options
});

ghibliButton.addEventListener("click", function() {
    changeMusic('ghibli', 2);
    musicOptions.classList.remove("show"); // Hide music options
});

// Initially set the image to the first track's image on startup
window.onload = function() {
    var initialTrack = trackDetails['lofi'][0];
    albumCover.src = initialTrack.image;
}
// Show startup details
document.addEventListener("DOMContentLoaded", function () {
    var currentTrack = parseInt(musicPlayer.dataset.currentTrack);
    var currentType = musicPlayer.dataset.currentType;
    var details = trackDetails[currentType][currentTrack - 1];
    trackTitle.textContent = details.title;
    trackMusician.textContent = details.musician;
});
/* Music button ends here*////////////////////////////////////////////////////////////////////////////////

/* Tools button starts here*/////////////////////////////////////////////////////////////////////////////
var toolsButton = document.getElementById("tools-button");
var toolsOptions = document.getElementById("tools-options");

    toolsButton.addEventListener("click", function() {
        toolsOptions.classList.toggle("show");
    });
 /* Tools button ends here*//////////////////////////////////////////////////////////////////////////////////

/* Date/Time button starts here*/////////////////////////////////////////////////////////////////////////////
// Function to update the date and time in the datetime container
function updateDateTime() {
    const dateTimeElement = document.getElementById('datetime');
    const now = new Date();
    const dayOptions = { weekday: 'long' };
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    const day = now.toLocaleDateString('en-US', dayOptions);
    const date = now.toLocaleDateString('en-US', dateOptions);
    const time = now.toLocaleTimeString('en-US', timeOptions);
    dateTimeElement.innerHTML = `<h3>${date} / ${time}</h3>`;
    document.getElementById('day').innerHTML = `<h1>${day}</h1>`;
    }

        // Call updateDateTime() initially to show the actual day on page load
        updateDateTime();

        // Update date and time every second (1000 milliseconds)
        setInterval(updateDateTime, 1000);

        // Toggle the visibility of the date/time container when clicking the button
        const dateTimeContainer = document.getElementById('datetime-container');
        const dateTimeButton = document.getElementById('date-time-button');

        dateTimeButton.addEventListener('click', function () {
            dateTimeContainer.classList.toggle('show');
        });

        // The function to show the date/time container
        function showDateTimeContainer() {
            dateTimeContainer.classList.add('show');
        }

        // Call showDateTimeContainer() when the window loads
        window.addEventListener('load', showDateTimeContainer);
/* Date/Time button ends here*////////////////////////////////////////////////////////////////////////////////

/* Notepad button starts here*////////////////////////////////////////////////////////////////////////////////
const notepadButton = document.getElementById('notepad-button');
const notepadContainer = document.getElementById('notepad-container');
const noteTextarea = document.getElementById('note');
const saveButton = document.getElementById('save-button');
const closeButton = document.getElementById('close-button');

notepadButton.addEventListener('click', openNotepad);
saveButton.addEventListener('click', saveNote);
closeButton.addEventListener('click', closeNotepad);

function openNotepad() {
  notepadContainer.classList.toggle('show');
  // Close the tools options when the notepad button is clicked
  const toolsOptions = document.getElementById('tools-options');
  toolsOptions.classList.remove('show');
}

function saveNote() {
  const noteContent = noteTextarea.value;
  // You can add further functionality here to save the note (e.g., using Local Storage, sending to a server, etc.)
  alert(`Note saved:\n\n${noteContent}`);
};

 // Function to close the notepad container
 function closeNotepad() {
    notepadContainer.classList.remove('show');
}

// Variables to store the initial position of the mouse and the notepad container
let initialX = 0;
let initialY = 0;
let offsetX = 0;
let offsetY = 0;
let isDragging = false;

// Get references to the notepad container and notepad header
const notepad = document.getElementById('notepad-container');
const notepadHeader = document.querySelector('.notepad-header');

// Function to handle mouse down event on the notepad header
function handleMouseDown(e) {
    if (e.target === notepadHeader || e.target.parentNode === notepadHeader) {
        isDragging = true;
        initialX = e.clientX;
        initialY = e.clientY;
        const transform = notepad.style.transform;
        if (transform) {
            const values = transform.match(/-?\d+/g);
            offsetX = values[0] ? parseInt(values[0]) : 0;
            offsetY = values[1] ? parseInt(values[1]) : 0;
        }
    }
}

// Function to handle mouse move event during dragging
function handleMouseMove(e) {
    if (!isDragging) return;

    const currentX = e.clientX;
    const currentY = e.clientY;

    const dx = currentX - initialX;
    const dy = currentY - initialY;

    notepad.style.transform = `translate(${offsetX + dx}px, ${offsetY + dy}px)`;
}

// Function to handle mouse up event to stop dragging
function handleMouseUp() {
    if (!isDragging) return;

    isDragging = false;
}

// Attach event listeners for drag-and-drop functionality
document.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);
/* Notepad button ends here*////////////////////////////////////////////////////////////////////////////////

/* Calculator button starts here*////////////////////////////////////////////////////////////////////////////////
var calculatorButton = document.getElementById("calculator-button");
var calculatorContainer = document.getElementById("calculator-container");
var closeButton2 = document.getElementById("close-button2");

calculatorButton.addEventListener("click", function() {
    // Check if tools options are open (has the "show" class)
    if (toolsOptions.classList.contains("show")) {
        // If open, close the tools options
        toolsOptions.classList.remove("show");
    }

    // Toggle the display of the calculator container
    calculatorContainer.classList.toggle("show");
});

// Add a click event listener to the close button
closeButton2.addEventListener("click", function() {
    // Hide the calculator container
    calculatorContainer.classList.remove("show");
});


let currentInput = "0"; // Initialize currentInput with default value "0"
let result = ""; // Stores the result of the calculation

function clearDisplay() {
    document.getElementById("display").value = "0"; // Reset display to default "0"
    currentInput = "0"; // Reset currentInput to default "0"
}

function appendToDisplay(value) {
    if (currentInput === "0") {
        currentInput = value; // Replace default "0" with the entered value
    } else {
        currentInput += value; // Append the entered value
    }
    document.getElementById("display").value = currentInput;
}

function backspace() {
    if (currentInput.length === 1) {
        currentInput = "0"; // Set to default "0" if there's only one character
    } else {
        currentInput = currentInput.slice(0, -1); // Remove the last character
    }
    document.getElementById("display").value = currentInput;
}

function calculate() {
    try {
        // Handle percentage calculations
        currentInput = currentInput.replace(/%/g, "*0.01");

        // Evaluate the expression using the custom function
        result = evaluateExpression(currentInput);
        document.getElementById("display").value = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function evaluateExpression(expression) {
    // Replace x with * and ÷ with / for proper evaluation
    expression = expression.replace(/x/g, '*').replace(/÷/g, '/');
    return eval(expression);
}
/* Calculator button ends here*////////////////////////////////////////////////////////////////////////////////