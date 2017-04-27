#!/usr/bin/env bash

echo "No removal of previous images yet"

APPFILEPATH="target/universal/todomvc-play-angular-require-0.1.0-SNAPSHOT.zip"
APP="todomvc-play-angular-require"
VERSION="0.1.0-SNAPSHOT"
APPFILENAME="todomvc-play-angular-require-0.1.0-SNAPSHOT"
DOCKERCONTEXT="target/dockercontext"

rm -fvr $DOCKERCONTEXT
mkdir -pv $DOCKERCONTEXT
cp -v Dockerfile $DOCKERCONTEXT
cp $APPFILEPATH $DOCKERCONTEXT
unzip $APPFILEPATH -d $DOCKERCONTEXT

docker build --build-arg APP=$APP --build-arg VERSION=$VERSION -t play/todomvc:init $DOCKERCONTEXT
docker run -it play/todomvc:init