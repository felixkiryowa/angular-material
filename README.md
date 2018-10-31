# Create the project (avoid this if you are implementing DataTables on an existing project)
ng new datatables

# When finishing go for Bootstrap 4 (use the strict 4.0.0-beta.2 or you will be in trouble with autoprefixer and other stuffs)
npm install bootstrap@4.0.0-beta.2 --save --save-exact

# Then DataTables core 
npm install datatables.net --save

# Then DataTables Bootstrap 4
npm install datatables.net-bs4 --save

# Finaly jQuery and it's types 
npm install jquery --save
npm install @types/jquery --save-dev

#Awesome readme file