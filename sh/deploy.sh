echo "🐙  \033[1;34m starting gh-page deploys!! \033[0m"
gulp ghpages-build
echo "🐙  \033[1;34m gh-pages feito!! \033[0m"
gulp ghpages-deploy
echo "🐙  \033[1;34m starting html deploy!! \033[0m"
gulp html-build
echo "🐙  \033[1;34m starting html feito!! \033[0m"
gulp html-deploy