count=0
while [ $count -lt 10000 ]
  do
    echo Requst numer $count 
    (( count++ )) 
    curl localhost:8000 
    sleep 3
  done
