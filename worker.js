export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/w/get-ip") {
      const ip = request.headers.get("CF-Connecting-IP") ?? "";

      return new Response(ip, {
        headers: {
          "Content-Type": "text/plain",
          "Cache-Control": "no-store",
        },
      });
    }
    return env.ASSETS.fetch(request);
  },
};
