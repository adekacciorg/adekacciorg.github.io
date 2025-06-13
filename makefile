

default:
	echo "Only for updating packs. nothin else intended"

update:
	cd lin-packs && dpkg-scanpackages --arch all pool/ > Packages
	cd lin-packs && gzip -kf Packages

gitup:
	git add .
	git status
	git commit -m "Update in packages[update automated]"
	git push