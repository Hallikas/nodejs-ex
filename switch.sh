grep -qP 'COLOR=BLUE' views/index.html && perl -pi -e 's|COLOR=BLUE|COLOR=RED|' views/index.html || perl -pi -e 's|COLOR=RED|COLOR=BLUE|' views/index.html
grep COLOR views/index.html
