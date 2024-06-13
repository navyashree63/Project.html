# Quiz.html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Quiz Game</title>
<link rel="stylesheet" href="style.css">
<style type="text/css">
  body{
    background-image: url(bq.jpg); 
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;

    .container {
        margin-left: -500px; 
    }
    
</style>

</head>
<body> 
<div class="container"> 
<h1>Quiz Game</h1>
  <div id="question-container">
    <p id="question-text"></p>
    <div id="answer-buttons" class="btn-grid" style="color: rgb(9, 176, 247);">
     
      
    </div>
  </div>
  <div id="score-container">
    <p>Score: <span id="score">0</span></p>
  </div>
  <button id="next-button" class="btn"  onclick="nextQuestion()">Next Question</button>
</div>

<script src="questions.js"></script>
<script src="script.js"></script>



</body>
</html>
