from keras.models import load_model
import cv2
import keras
import numpy as np
import os
import sys

file_name = sys.argv[1]
dir_path = '/home/ubuntu/website/bash_ml/python_scripts'
model_path = dir_path + '/model1.h5'
image_path = dir_path + '/images/' + file_name

model = load_model(model_path)

model.compile(loss=keras.losses.categorical_crossentropy,
             optimizer=keras.optimizers.Adadelta(),
             metrics=['accuracy'])


img = cv2.imread(image_path)
img = cv2.resize(img,(28,28))
img = np.reshape(img,[3,1,28,28])

out2 = model.predict(img, batch_size=32, verbose=0)
print(np.argmax(out2))
