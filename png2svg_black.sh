#!/bin/bash

File_png="${1?:Usage: $0 file.png}"

if [[ ! -s "$File_png" ]]; then
  echo >&2 "The first argument ($File_png)"
  echo >&2 "must be a file having a size greater than zero"
  ( set -x ; ls -s "$File_png" )
  exit 1
fi

File="${File_png%.*}"

convert "$File_png" "$File.pnm"        # PNG to PNM
potrace "$File.pnm" -s -o "$File.svg"  # PNM to SVG
rm "$File.pnm"                         # Remove PNM
