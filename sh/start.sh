sudo bower install --allow-root
echo "🐙  \033[1;34m bower install feito!! \033[0m"
mkdir ./_dev
echo "🐙  \033[1;34m dev dir feito!! \033[0m"
jekyll new ./_dev
echo "🐙  \033[1;34m novo jekyll feito!! \033[0m"
bundle install
echo "🐙  \033[1;34m Gemfile feito!! \033[0m"
mkdir ./_dev/_data
rm ./_dev/_config.yml
echo "🐙  \033[1;34m Config & _data feito!! \033[0m"
echo "🐙  \033[1;34m preparando IMGS!! \033[0m"
gulp imgs
echo "🐙  \033[1;34m bower gulp images feito!! \033[0m"
gulp
echo "🐙  \033[1;34m site rolando !! \033[0m"