import json
import csv
import tablib

id="com.netease.onmyoji.na"

with open('./result/'+id+'.json', 'r',encoding='UTF-8') as f:
    rows = json.load(f)
print(rows[0])

header=('userName','score','date','text')

data=[]

for row in rows:
    body = []
    body.append(row['userName'])
    body.append(row['score'])
    body.append(row['date'])
    body.append(row['text'])
    data.append(tuple(body))

data = tablib.Dataset(*data,headers=header)

open('./excels/'+id+'_data.xls', 'wb').write(data.xls)

