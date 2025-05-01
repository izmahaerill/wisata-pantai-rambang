#!/usr/bin/env bash

rm ./prisma/dev.db
npx prisma generate
npm run db:push
npm run dev
