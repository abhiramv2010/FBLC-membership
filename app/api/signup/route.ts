export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email } = body ?? {};

    // pretending we created the users account and sent email verification through mcp? (do we have budget for this? are we going to be validating accounts or allowing infinte sign ups?)
    return new Response(
      JSON.stringify({ ok: true, message: `Account created for ${name ?? email}. Check your email to verify.` }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, message: "Bad request" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }
}
