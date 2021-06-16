<?php
  $name = isset($_POST['name']) ? $_POST['name'] : '';
  $designation = isset($_POST['designation']) ? $_POST['designation'] : '';
  $company = isset($_POST['company']) ? $_POST['company'] : '';  
  $email = isset($_POST['email_id']) ? $_POST['email_id'] : '';
  $countryCode = isset($_POST['countryCode']) ? $_POST['countryCode'] : '';  
  $ph_no = isset($_POST['ph_no']) ? $_POST['ph_no'] : '';  
  $attending = isset($_POST['attending']) ? $_POST['attending'] : '';

   /* sending mail      */
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
    $headers .= "X-Priority: 1\r\n";
    $headers .= "X-MSMail-Priority: High\r\n";
    $headers .= 'From:SpireData<unnita@spiresolutions.com>';
    $mailTo = 'unnita@spiresolutions.com, tausif@spiresolutions.com, sunil@prismicreflections.com, mail@spiredata.ai';
    $subject = "New Webinar Registration";
    $message = "<br><b>Name :-&nbsp;</b>" . $name . "\n\n"
            . "<br><b>Designation:-&nbsp;</b>" . $designation . "\n\n"
            . "<br><b>Company:-&nbsp;</b>" . $company . "\n\n"
            . "<br><b>Email:-&nbsp;</b>" . $email . "\n\n"
            . "<br><b>Mobile:-&nbsp;</b>" .$countryCode. "-" . $ph_no . "\n\n"            
            . "<br><b>Attending:-&nbsp;</b>" . $attending . "\n\n";
    $mailSend1 = mail($mailTo, $subject, $message, $headers);

    $headers1 = "MIME-Version: 1.0\r\n";
    $headers1 .= "Content-type: text/html; charset=iso-8859-1\r\n";
    $headers1 .= "X-Priority: 1\r\n";
    $headers1 .= "X-MSMail-Priority: High\r\n";
    $headers1 .= 'From:SpireData<unnita@spiresolutions.com>';
    $mailTo1 = $email;
    $subject1 = " Hey, Thank you.";
    $message1 = "<br>Hello  <b>" . $name . "</b>,\n\n<br>"
                ."<br>Thank you for webinar registration!.\n\n<br>"
                ."<br>We will get back to you soon.\n\n<br>"
                ."<br>Have a good day!\n\n<br>"
                ."<br>www.spiredata.ai\n\n";

    $mailSend = mail($mailTo1, $subject1, $message1, $headers1);
    // header("Location: http://just2037.temp.domains/~tqprojec/projects2017/spiredata/contact.html?succ=true");
    header("Location: http://spiredata.ai/index.html?succ=true");

?>