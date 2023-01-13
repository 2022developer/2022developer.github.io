<?php

require('config.php');
require('razorpay-php/Razorpay.php');

// Create the Razorpay Order
error_reporting(0);
use Razorpay\Api\Api;

$securecode =  htmlentities($_POST['securecode'] );
$receiptid =  htmlentities($_POST['txnid'] );
$amount =  htmlentities($_POST['amount'] );
// remove back slash from the variable if any...

$securecode =  stripslashes($securecode);  //   "1234567890";//
$receiptid =  stripslashes($receiptid);
$amount =  stripslashes($amount);


//echo "  outside ";
	$status =0;
    $msg  ="Invalid Parameters";
    $information  ="Invalid Parameters";

if(isset($securecode)  && !empty($securecode)  && !empty($receiptid) && !empty($amount) ) {


$api = new Api($keyId, $keySecret);

//
// We create an razorpay order using orders api
// Docs: https://docs.razorpay.com/docs/orders
//
$orderData = [
    'receipt'         => $receiptid,
    'amount'          => $amount, // 2000 rupees in paise
    'currency'        => 'INR',
    'payment_capture' => 1 // auto capture
];

$razorpayOrder = $api->order->create($orderData);

$razorpayOrderId = $razorpayOrder['id'];

 $status =1;
 $information = $razorpayOrderId ;
 $msg =" Order Id here";

}
	$post_data = array(
	 			 'status' => $status,
	 			 'msg' => $msg,
	 			 'Information' => $information );
	 	
	 	
	 $post_data= json_encode( $post_data );
	 	
	 echo $post_data;

?>