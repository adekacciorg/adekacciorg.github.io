sys ?= $(shell cat SYS)

default:
	@echo "$(sys)" > SYS
	@echo "Only for updating packs. nothin else intended"

update:
	@echo "$(sys)" > SYS
	@if [ "$(sys)" = "deb" ]; then \
		cd lin-packs && dpkg-scanpackages --multiversion --arch all pool/ > Packages ; \
		gzip -kf Packages ; \
	else \
		cd man-pacs && repo-add adekacci.db.tar.gz *.pkg.tar.zst ; \
	fi
	@echo "Packages updated in package directories"

gitup:
	@git add .
	@git status
	@git commit -m "Update in packages[update automated]"
	@git push
	@echo "Git repository updated"