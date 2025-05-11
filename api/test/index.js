export default async function handler() {
  return new Response("Test API is working", { status: 200 });
}

export const config = {
  runtime: "edge"
};
