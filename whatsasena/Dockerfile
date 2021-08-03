FROM fusuf/whatsasena:latest

RUN git clone https://github.com/ThevinduHansara/69 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["run.sh"]
