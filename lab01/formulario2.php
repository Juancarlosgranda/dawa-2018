<?php  

$suma = 0;
$valor1= 0;
$valor2=0;
if(isset($_POST)){
    $valor1= $_POST['T1'];
    $valor2= $_POST['T2'];
    $suma = $valor1 + $valor2;
}
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
	<title> Formulario PHP</title>
</head>
<body>
<form action="" method="post">
    
    <p>Valor 1:<input type="text" name="T1" size="20" value="<?php echo $valor1; ?>"> </p>
    <p>Valor 2:<input type="text" name="T2" size="20" value="<?php echo $valor2; ?>"> </p>
    <p><input type="submit" name="B1" value="Sumar" size="20"> </p>
    <p> Resultado: <?php echo $suma; ?></p>
    
</form>

</body>
</html>