const postData = async (url, data) => {
  let result = await fetch(url, {
    method: "POST",
    body: data
  }); //end fetch
  return await result.text();
};

const getResource = async (url) => {
  let result = await fetch(url); //end fetch

  if(!result.ok) {
    throw new Error(`Could not fetch ${url}, status: ${result.status}`);
  }
  return await result.json();
};


export {postData, getResource};

