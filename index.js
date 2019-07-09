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
  let ourColor = JSON.stringify({});
  // get JWT for our payload
  jwt = await fetch("", {});
  jwt = await jwt.text();
  console.log(jwt);
  // use it to add the color to the bot!
  await fetch("", {
    headers: {}
  });
  return new Response("Color added!", { status: 200 });
}
