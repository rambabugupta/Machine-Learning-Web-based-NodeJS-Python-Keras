# Machine-Learning-Web-based-NodeJS-Python-Keras


--I have used node.js for web and python for predicting lable of digit image .
--Node.js is used as its helps fot fast building of web and scalable for event based systems.
--Shell scripts "Predict.sh".
--Node.js scripts index.js would call shell scripts and send images location as parameters to it.
--Shell scripts would run python scripts and get the results as predicted labels which is reaceived by index.js script.

--System have keras and tensorflow installed in it. There are two python code script. One for modeling and one of predicting.
  Modeling code copied from keras website.
  
--to run this code on your local machine, one should install keras and tensorflow so that prediction code could run.
  Also node installation is needed.
  and run "node index.js" but before that please change IP address to your local adress in "fileupload.html".
  
-- I have also hosted the web on ec2 instance on AWS and you might access 
   http://ec2-35-158-239-83.eu-central-1.compute.amazonaws.com:8080/ (do not work now)
  output will come like this {"message":"Prediction Pass","filename":"3.png","result":"3"}
  
-- in bash_ml foldel there are index.js and predict.sh folder present and in folder python_scripts
   there is model.h5 which is weight values after training on mnist "mode_keras_DL_mnist.py".
 
