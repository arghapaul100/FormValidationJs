echo "Status Before Adding Files To The Staging Area"
git status
git add .
echo "Status After Adding Files To The Staging Area"
git status
echo "Please enter a commit message"
message=read
git commit -m "${message}"
git push origin master 
read