#!/usr/bin/env sh

gcloud builds submit --config cloudbuild.yaml .
gcloud beta run services list --platform managed
