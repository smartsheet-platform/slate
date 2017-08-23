#!/bin/bash
set -e
set -x

BUILD_DIR="build"
STATIC_DIR="docs"

if [ -d "$STATIC_DIR" ]; then rm -Rf "$STATIC_DIR"; fi

cp -R "$BUILD_DIR" "$STATIC_DIR"