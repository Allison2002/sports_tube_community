export default async (request, context) => {
  return new Response("Edge function is working!", {
    headers: {
      "content-type": "text/plain",
      "cache-control": "public, max-age=31536000, immutable",
    },
  });
};

export const config = {
  path: "/hello", // adjust to any route you want this to run on
};
