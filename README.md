# GitHub Actions Tutorial

This is a short example of how to automatically deploy to Heroku any Node.js app using CI/CD pipelines in GitHub Actions.

## Requirements

- [Git](https://git-scm.com/downloads)
- [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

## Steps

First, make sure you are logged in Git.

Also, create an account in [Heroku](https://www.heroku.com) and create an app (this will indicate the URL for your Node.js app when its deployed).

After that, use a terminal on your machine to run the following command: 

```
heroku login
```

Once you've logged in, you will need to create token to access your account and your app by SSH. Run the following command:

```
heroku authorizations:create <app-name>
```

This command will generate some authentication data, you will need to copy the `token` data and save it for further actions.

Now that you already have your app token, go to your GitHub Repository > Settings > Secrets > Actions. Here you will add 3 secrets with the corresponding values:

- HEROKU-API-KEY = `<app-token>`
- HEROKU-APP     = `<your-app-name>`
- HEROKU-EMAIL   = `<your-email>`

## Setup your Actions

You can setup your actions directly in your GitHub repo or by manually creating a `.github > workflows > main.yml` folders and file in your project.
  
Either way, you can follow the example written in this tutorial and adapt it to your project.
  
## Recommended videos
  
- [GitHub Actions by midudev](https://youtu.be/sIhm4YOMK6Q)
