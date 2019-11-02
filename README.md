# Fluidly DevOps Test

## Assumptions:

1. Having the endpoint accessible at
https://fluidly-test-4pz724bcoa-ew.a.run.app is okay (this could be
easily be changed to a custom domain)

2. No requirements for authentication to the endpoint

3. Monitoring is out of scope - I would probably set up Stackdriver
monitoring with terraform if I was doing it

4. CI is out of scope - as there are no existing tests

5. Checks/management of GCP projects is out of scope

## Prerequisites:

1. gcloud SDK installed locally

2. Cloud Build & Cloud Run APIs enabled on project

3. Cloud Build service account has the 'Cloud Run Admin' and 'Service
Account User' roles granted

## Deployment:

The app can be deployed to the current GCP project with: `./manual-deploy.sh`

This will display the URL of the deployed Cloud Run service.


## Summary

I decided to use Docker in a serverless environment because
it's a simple and easy to manage solution for a simple stateless app
such as this. I chose Google Cloud Run because I'm familiar with GCP
and looked easy to use and good provides scalability. Google Cloud
Build joins the two together and can be integrated with GitHub to
provide continous delivery.

I had to change the app to use a PORT environment variable so that it
could fit in with the Cloud Run requirements.

I looked looked into setting up a Cloud Build Github trigger with
terraform (using this resource
https://www.terraform.io/docs/providers/google/r/cloudbuild_trigger.html)
but it would be tied to a specific GCP project and it doesn't appear
possible to create the Github linked source repository in GCP with
this provider.

The app is deployed in my GCP project at:
https://fluidly-test-4pz724bcoa-ew.a.run.app/

## Technical Answers

1. How long did you spend on the coding test? Why that length of time?

I spent 5-10 mins thinking about the deployment and looking into
options, 75 mins on the Docker & Cloud Run part, then about 30 mins on
the Cloud Build part. This was due to not having used Cloud Build
before, so reading the docs and trying it out.

2. Describe why you made the choices that you did. What would you do
differently?

I think going with Docker and serverless was a good choice. Using
terraform for the server-side prerequisites would have been an
improvement.

3. What did you enjoy most/least about this exercise?

I liked that I could choose the Cloud Provider and technology. Being
so open-ended left me wondering if I had done enough (or too much).

4. What is the most useful bit of tech you have used recently?

I recently used GCP Task Queues and found they were a very simple and
effective way to do work asynchronously.
