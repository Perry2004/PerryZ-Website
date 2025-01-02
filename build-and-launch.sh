rm -r backend/dist

cd frontend/
npm install
npm run build
mv dist/ ../backend/dist/

cd ../backend/
npm install
npm run start