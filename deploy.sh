yarn build &&
git push &&
git checkout gh-pages &&
rd /s /q *.html *.js *.css *.jpg &&
mv dist/* ./ &&
git add . &&
git commit -m 'update' &&
git push

