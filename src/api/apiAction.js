const baseURL='https://gorest.co.in'
const accessToken ='d4fec7c545d308ae6e29bac798dc383f7e20d9f83fe4faca597730bcab0d6b1d'

export const getUrl = async (url,param)=>{
    let result=[];

    const response = await fetch(`${baseURL}${url}`, {
      method: 'GET',
      body: JSON.stringify(param),
      headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer " + accessToken,
        "Accept" :"application/json"
      }
    });
    const json = await response.json();
    console.log("response api", response)
    result=json;

    return result;
}

export const postUrl = async (url, param)=>{
    let result=[];

    const response = await fetch(`${baseURL}${url}`, {
        method: 'POST',
        body: JSON.stringify(param),
        headers: {
          "Content-type": "application/json",
          "Authorization": "Bearer " + accessToken,
          "Accept" :"application/json"
        }
      });
    const json = await response.json();
    result=json;

    return result;
}

export const putUrl = async (url, param)=>{
    let result=[];

    const response = await fetch(`${baseURL}${url}`, {
        method: 'PUT',
        body: JSON.stringify(param),
        headers: {
          "Content-type": "application/json",
          "Authorization": "Bearer " + accessToken,
          "Accept" :"application/json"
        }
      });
    const json = await response.json();
    result=json;

    return result;
}

export const deleteUrl = async (url, param)=>{
    let result=[];

    const response = await fetch(`${baseURL}${url}`, {
        method: 'DELETE',
        body: JSON.stringify(param),
        headers: {
          "Content-type": "application/json",
          "Authorization": "Bearer " + accessToken,
          "Accept" :"application/json"
        }
      });
    const json = await response.json();
    result=json;

    return result;
}