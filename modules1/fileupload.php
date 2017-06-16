<?php
$target_dir = "stud/";

$target_file = $target_dir . basename($_FILES["0"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    // $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    $check=true;
    if($check !== false) {
        //echo "File is valid - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        //echo "File is not an image.";
        $uploadOk = 0;
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    //echo "Sorry, file already exists.";
    $uploadOk = 0;
}
// Check file size
if ($_FILES["0"]["size"] > 500000 || $_FILES["0"]["size"] ==0) {
    //echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "pdf" && $imageFileType != "doc" && $imageFileType != "docx" ) {
    //echo "Sorry, only PDF, DOC, DOCX files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo json_encode("Sorry, your file was not uploaded.");
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["0"]["tmp_name"], $target_file)) {
        echo json_encode("The file ". basename( $_FILES["0"]["name"]). " has been uploaded.");
    } else {
        echo json_encode("Sorry, there was an error uploading your file.");
        //echo $_FILES["0"]["error"];
    }
}
?>