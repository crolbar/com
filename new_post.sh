#!/usr/bin/env bash

if [[ -z "$1" ]]; then
  echo specify title as first arg
  exit 0
fi

title="$1"
path="./src/pages/posts/$title.md"

if [[ -f "$path" ]]; then
  echo post with this title already exists
  exit 0
fi

echo "\
---
layout: ../../layouts/PostLayout.astro
title: \"$title\"
description: \"$title\"
publicationDate: $(date "+%d-%m-%Y")
tags: []
finished: false
---" > "$path"
