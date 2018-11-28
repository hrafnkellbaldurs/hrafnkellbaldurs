#!/usr/bin/env bash

echo "Running pre-commit hook"
./hook-scripts/run-format.bash
./hook-scripts/run-tests.bash
# $? stores exit value of the last command
if [ $? -ne 0 ]; then
 echo "Tests must pass before commit!"
 exit 1
fi

./hook-scripts/build-storybook.bash
# $? stores exit value of the last command
if [ $? -ne 0 ]; then
 echo "Storybook build must pass before commit!"
 exit 1
fi

