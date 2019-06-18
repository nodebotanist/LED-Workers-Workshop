addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

/**
 * when a request comes in, dispense a jwt signed with an ENV
 * variable
 * @param {Request} request
 */
async function handleRequest(request) {
  // set payload for our color
  let jwt;
  let ourColor = JSON.stringify({ color: "cornflowerblue" });
  console.log(ourColor);
  // get JWT for our payload
  jwt = await fetch("https://jwt-dispenser.kas.workers.dev", {
    method: "POST",
    body: ourColor
  }).then(response => response.text().then(token => (jwt = token)));
  console.log(jwt);
  // use it to add the color to the bot!
  await fetch("https://color-queue.kas.workers.dev", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + jwt
    }
  });
  return new Response("Color added!", { status: 200 });
}
