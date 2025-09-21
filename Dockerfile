FROM node

RUN  apt-get update
RUN apt-get install -y nodejs ffmpeg

# RUN apt-get update && \
#     apt-get install -y ffmpeg curl unzip && \
#     curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
#     unzip awscliv2.zip && ./aws/install && \
#     rm -rf awscliv2.zip aws

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

# ENV INPUT_FILE /app/videos/shortfilm.mp4
# ENV SEGMENT_FILE /app/videos/segment%03d.ts
# ENV OUTPUT_FILE /app/videos/index.m3u8

# RUN ffmpeg -i ${INPUT_FILE} -codec:v libx264 -codec:a aac -hls_time 10 -hls_playlist_type vod -hls_segment_filename ${SEGMENT_FILE} -start_number 0 ${OUTPUT_FILE}

CMD ["npm", "start"]