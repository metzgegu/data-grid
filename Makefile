setup:
	cd data-grid && yarn build
	cd showcase-website/backend && yarn && yarn db:drop && yarn db:create && yarn db:migrate && yarn db:seed
	cd showcase-website/frontend && yarn

lint:
	cd showcase-website/frontend && yarn lint
	cd showcase-website/backend && yarn lint
	cd data-grid && yarn lint

run-frontend:
	cd showcase-website/frontend && yarn start

run-backend:
	cd showcase-website/backend && yarn start


