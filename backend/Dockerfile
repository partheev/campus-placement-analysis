FROM python:3.9

COPY ./requirements.txt /app/requirements.txt
WORKDIR /app

RUN pip install --upgrade pip
RUN pip install -r requirements.txt


COPY . /app
EXPOSE 5000

CMD [ "gunicorn", "--bind", "0.0.0.0:5000", "-w", "2" , "src:create_app()"]