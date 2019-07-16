#!/usr/bin/env bash
echo "Creating function db and user account..."
mongo admin --eval "db.getSiblingDB('function').createUser({user:'function',pwd:'function',roles:[{role:'readWrite', db:'function'}]});"
echo "function db and user account created."