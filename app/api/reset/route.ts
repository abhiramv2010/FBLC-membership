export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body ?? {};

    // pretend we sent a reset email only if that email exists as an already existing user
    return new Response(JSON.stringify({ ok: true, message: `If ${email} exists, a reset link has been sent.` }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, message: "Bad request" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }
}
