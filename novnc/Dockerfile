FROM debian:bookworm-slim

RUN set -ex; \
    apt update; \
    apt install -y \
        fluxbox \
        git \
        net-tools \
        novnc \
        supervisor \
        x11vnc \
        xterm \
        xvfb \
    && rm -rf /var/lib/apt/lists/*

ENV HOME=/root \
    DEBIAN_FRONTEND=noninteractive \
    LANG=en_US.UTF-8 \
    LANGUAGE=en_US.UTF-8 \
    LC_ALL=C.UTF-8 \
    DISPLAY=:0.0 \
    DISPLAY_WIDTH=1280 \
    DISPLAY_HEIGHT=1024

COPY . /app
CMD ["/app/entrypoint.sh"]
EXPOSE 8088
