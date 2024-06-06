FROM node:lts-alpine3.20
COPY 测试_VS /index
CMD npm install && npm run dev