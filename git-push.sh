echo "Status before adding files to the staging area : "
git status
git add .
echo "Status after adding files to the staging area : "
git status
echo -n "Please enter a commit message : "
read message
git commit -m "${message}"
echo "Please wait a while! updating changes to the remote repository..."
git push origin master 
echo "Git Push Successfuly Completed."
sleep 2s