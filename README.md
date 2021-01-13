# Predicting the Probability of the state of a kickstarter campaign

![Screen Shot 2021-01-13 at 2 54 39 PM](https://user-images.githubusercontent.com/46835608/104432695-462e2880-55af-11eb-9e34-778f90d3f43f.png)

## Prerequisites
- Docker - https://docs.docker.com/get-docker/
- Docker Compose - https://docs.docker.com/compose/install/

## Run Application

To run the application, run the below command
```bash
$ docker-compose up -d
```

Once, you've run the above command, you can can visit https://localhost:3000 to use the application.

---

If you want to work with the jupyter notebook, then you can run the below commands to set up the environment in the `/assets` folder and install all dependencies.

```bash
$ cd assets
$ virtualenv .
$ source bin/activate
$ pip install -r requirements.txt
```

To run jupyter notebook, you can run `jupyter notebook`
