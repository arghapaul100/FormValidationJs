echo "Status Before Adding Files To The Staging Area"
git status
git add .
echo "Status After Adding Files To The Staging Area"
git status
echo -n "Please enter a commit message : "
read message
git commit -m "${message}"
git push origin master 
echo "Git Push Successfuly Completed"
sleep 3s