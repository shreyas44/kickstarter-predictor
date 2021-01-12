FROM python:3.8-slim

RUN mkdir /var/server && mkdir /var/assets
WORKDIR /var/server

COPY . .
RUN python -m pip install -r requirements.txt

ENV FLASK_APP=server.py
ENV FLASK_ENV=development
CMD python server.py