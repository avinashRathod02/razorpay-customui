import {View, Button} from 'react-native';
import React from 'react';
import Razorpay from 'react-native-customui';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        onPress={() => {
          var options = {
            description: 'Credits towards consultation',
            currency: 'INR',
            key_id: 'rzp_test_1DP5mmOlF5G5ag',
            amount: '5000',
            email: 'void@razorpay.com',
            contact: '9999999123',
            method: 'netbanking',
            bank: 'HDFC',
          };
          Razorpay.open(options)
            .then(data => {
              // handle success
              alert(`Success: ${data.razorpay_payment_id}`);
            })
            .catch(error => {
              // handle failure
              alert(`Error: ${error.code} | ${error.description}`);
            });
        }}
        title="Pay now"
      />
    </View>
  );
};

export default App;
