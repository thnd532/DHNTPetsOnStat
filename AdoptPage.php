<!DOCTYPE html>
<html lang="en">
<head>
  <title>DHNT Pets Station---Adoption</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

  <style>

    jumbotron{ 
      color:black;
    }

    #cover{
      background-image: linear-gradient(#51636E, #ADC9DA); 
    }

    div.transbox {
      font: bold 25px Georgia, "Times New Roman", serif;
      margin: 5px;
      background-color: #ffffff;
      border: 1px solid black;
      opacity: 0.6;
    }

    div.transbox h1, div.transbox h2{
      margin: 3%;
      font-weight:bold;
      color: #000000;
    }

    #footer {
      background-image: linear-gradient(#ADC9DA, #51636E); 
      color: black;
    }

    hr{
      height:3px;
      border-width:0;
      color: LightGray;
    }

    .error {color: #FF0000;}

    form {
      text-align: center;
    }

  </style>

</head>
<body>

<div class="jumbotron text-center" id="cover" style="margin-bottom:0">
  <div class="transbox">
    <h1>DHNT Pets Station</h1>
    <h2>Pets Adoption & Pet Supplies Store</h2>
    <h2>Here, You can find what you want !</h2>
  </div>
</div><br>


<?php
$nameErr = "";
$name = $email = $gender = $phone = $choice = $address = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = test_input($_POST["name"]);
    if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
      $nameErr = "Only letters and white space allowed";
    }
  
    $email = test_input($_POST["email"]);
  
    $address = test_input($_POST["address"]);
    
    if (!empty($_POST["choice"])) {
    $choice = test_input($_POST["choice"]);
    }

    $phone = test_input($_POST["phone"]);
    
    if (!empty($_POST["gender"])) {
      $gender = test_input($_POST["gender"]);
    }
  }

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

<h2 style="text-align: center;">Adoption Form</h2>
<p style="text-align: center;"><span class="error">* required field</span></p><br>
<form method="post" action="insert.php">  

  Gender:
  <input type="radio" name="gender" required <?php if (isset($gender) && $gender=="female") echo "checked";?> value="female"> Female
  <input type="radio" name="gender" required<?php if (isset($gender) && $gender=="male") echo "checked";?> value="male"> Male
  <span class="error">*</span>
  <br><br>
  Name: <input type="text" name="name" required value="<?php echo $name;?>">
  <span class="error">* <?php echo $nameErr;?></span>
  <br><br>
  
  Phone: <input type="tel" id="phone" name="phone" placeholder="xxxxxxxx" pattern="[0-9]{4}[0-9]{4}" required value="<?php echo $phone;?>">
  <span class="error">* </span>
  <br><br>
  
  Email: <input type="email" name="email" required value="<?php echo $email;?>">
  <span class="error">*</span>
  <br><br>
  Adopter's Address: <input type="text" name="address" required value="<?php echo $address;?>">
  <span class="error">* </span>
  <br><br>
  
  Choose a dog/cat to adopt: <select id="choice" name="choice" required>
    <option value="catAvan">Cat-Avan (British Shorthair)</option>
    <option value="catBell">Cat-Bell (British Shorthair)</option>
    <option value="catDora">Cat-Dora (British Shorthair)</option>
    <option value="catMay">Cat-May (Ragdoll)</option>
    <option value="catNeon">Cat-Neon (British Shorthair)</option>
    <option value="catPayPay">Cat-Paypay (Siamese) </option>
    <option value="dogAnka">Dog-Anka (Poodle)</option>
    <option value="dogBobo">Dog-Bobo (Shiba Inu)</option>
    <option value="dogKiki">Dog-Kiki (Pomeranian)</option>
    <option value="dogKiwi">Dog-Kiwi (Corgi)</option>
    <option value="dogKen">Dog-Ken (Chinese Native Dog)</option>
    <option value="dogLily">Dog-Lily (Poodle)</option>
  </select>
  <span class="error">* </span>
  <br><br>
  
  <input type="submit" name="submit" value="Submit">  
  <input type="reset" name="reset" value=" Reset ">
</form>

<br>




<div class="jumbotron text-center" style="margin-bottom:0" id="footer">
  <p>Copyright © 2021 &nbsp DHNT Pets Online Station &nbsp All rights reserved.</p>
</div>


</body>
</html>
