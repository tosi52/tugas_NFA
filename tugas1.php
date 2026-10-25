<?php
    $nama = "Budi";
    $email = "budi@gmail.com";
    $nilai = 60;

    if ($nilai >= 70) {
        $status = "Lulus";
    } else {
        $status = "Remedial";
    }

    echo "Nama: " . $nama . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Nilai: " . $nilai . "<br>"; 
    echo "Status: " . $status . "<br>";
?>