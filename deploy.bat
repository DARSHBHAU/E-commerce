@echo off
echo Deploying to GitHub Pages...
git add .
git commit -m "Update website"
git push origin master
echo Deployment complete!
pause