export default async function handler(request) {
  if (request.method === "POST") {
    const body = await request.json();
    const { name, message } = body;

    if (!name || !message) {
      return new Response(
        JSON.stringify({ message: "Name and message are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    return new Response(
      JSON.stringify({ message: "Complaint submitted successfully" }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
          "Location": "/complaint?success=true"
        }
      }
    );
  } else if (request.method === "GET") {
    const { name } = request.query;
    if (!name) {
      return new Response(
        JSON.stringify({ message: "Name is required for GET request" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    return new Response(
      JSON.stringify({ message: `Complaint status for ${name}: Pending` }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  }

  return new Response(
    JSON.stringify({ message: "Method not allowed" }),
    {
      status: 405,
      headers: { "Content-Type": "application/json" }
    }
  );
}

export const config = {
  runtime: "edge"
};
