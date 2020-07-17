import pandas as pd
import csv
import time

keygen_time = []
enc_time = []
dec_time = []

dataFile = open('./results.csv', 'r')
reader = csv.reader(dataFile)

for item in reader:
  keygen_time.append(float(item[0]))
  enc_time.append(float(item[1]))
  dec_time.append(float(item[2]))

avg1 = sum(keygen_time) / 1000
avg2 = sum(enc_time) / 1000
avg3 = sum(dec_time) / 1000

keygen_time.insert(0, avg1)
enc_time.insert(0, avg2)
dec_time.insert(0, avg3)

print(len(keygen_time))
identify = ['Average Time']
identify.extend(['#' + str(x) for x in range(1, 1001)])
dataframe = pd.DataFrame({'Rounds [TEST DATE: ' + time.strftime('%Y-%m-%d %H:%M',time.localtime(time.time())) + ']':identify, 'Keygen Time':keygen_time, 'Encryption Time': enc_time, 'Decryption Time': dec_time})
dataframe.to_csv('./Lantency_Results.csv', index=False)