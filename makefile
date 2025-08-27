default:
	@echo "Only for updating packs. nothin else intended"

update:
	@cd lin-packs && dpkg-scanpackages --arch all pool/ > Packages 2>/dev/null
	@cd lin-packs && gzip -kf Packages 2>/dev/null
	@cd man-pacs && repo-add adekacci.db.tar.gz *.pkg.tar.zst 2>/dev/null
	@echo "Packages updated in package directories"

gitup:
	@git add .
	@git status
	@git commit -m "Update in packages[update automated]"
	@git push
	@echo "Git repository updated"