<?php
$a = 0;
$b = 1;
$sum = $a + $b;
echo $a."  ";
for ($i = 0; $i < 9;$i++){
  $b = $sum;
  echo $sum."  ";
  $sum = $b + $a;
  $a = $b;
}
?>
