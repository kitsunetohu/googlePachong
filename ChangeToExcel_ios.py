import json
import csv
import tablib

id="1164388317"

with open('./result/'+id+'.json', 'r',encoding='UTF-8') as f:
    rows = json.load(f)
print(rows[0])

header=('userName','score','version','text')

data=[]

for row in rows:
    body = []
    body.append(row['userName'])
    body.append(row['score'])
    body.append(row['version'])
    body.append(row['text'])
    data.append(tuple(body))

data = tablib.Dataset(*data,headers=header)

open('./excels/'+id+'_data.xls', 'wb').write(data.xls)

