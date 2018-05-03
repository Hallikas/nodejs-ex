oc project semi && \
cd ~/semiex && \
bash ./switch.sh && \
git commit -a -m "Sample update" && \
git push && \
oc start-build node --wait
